import { sql } from "@payloadcms/db-postgres";
import type { MigrateUpArgs, MigrateDownArgs } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      CREATE TYPE "public"."enum_istilah_category" AS ENUM('Perpajakan', 'PPh', 'PPN', 'PKP', 'SPT', 'Akuntansi', 'Kepatuhan Pajak');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_istilah_status" AS ENUM('published', 'draft');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE TABLE IF NOT EXISTS "istilah" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "short_title" varchar,
      "slug" varchar NOT NULL,
      "category" "public"."enum_istilah_category" DEFAULT 'Perpajakan' NOT NULL,
      "dasar_hukum" varchar,
      "excerpt" varchar NOT NULL,
      "content" jsonb NOT NULL,
      "status" "public"."enum_istilah_status" DEFAULT 'published' NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "istilah_id" integer;
    EXCEPTION
      WHEN duplicate_column THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_istilah_fk"
        FOREIGN KEY ("istilah_id") REFERENCES "public"."istilah"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE UNIQUE INDEX IF NOT EXISTS "istilah_slug_idx" ON "istilah" USING btree ("slug");
    CREATE INDEX IF NOT EXISTS "istilah_category_idx" ON "istilah" USING btree ("category");
    CREATE INDEX IF NOT EXISTS "istilah_status_idx" ON "istilah" USING btree ("status");
    CREATE INDEX IF NOT EXISTS "istilah_updated_at_idx" ON "istilah" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "istilah_created_at_idx" ON "istilah" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_istilah_id_idx" ON "payload_locked_documents_rels" USING btree ("istilah_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_istilah_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_istilah_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "istilah_id";
    DROP TABLE IF EXISTS "istilah" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_istilah_category";
    DROP TYPE IF EXISTS "public"."enum_istilah_status";
  `);
}

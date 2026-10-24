import { sql, type MigrateDownArgs, type MigrateUpArgs } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "artikel" ADD COLUMN "blok" jsonb;
    ALTER TABLE "_artikel_v" ADD COLUMN "version_blok" jsonb;

    WITH nodes AS (
      SELECT "_parent_id" AS parent_id, "_order", jsonb_build_object(
        'type', 'paragraph',
        'children', jsonb_build_array(jsonb_build_object(
          'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal',
          'style', '', 'text', coalesce("teks", ''), 'version', 1
        )),
        'direction', null, 'format', '', 'indent', 0,
        'textFormat', 0, 'textStyle', '', 'version', 1
      ) AS node
      FROM "artikel_blocks_paragraf"
      UNION ALL
      SELECT "_parent_id", "_order", jsonb_build_object(
        'type', 'heading',
        'children', jsonb_build_array(jsonb_build_object(
          'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal',
          'style', '', 'text', coalesce("teks", ''), 'version', 1
        )),
        'direction', null, 'format', '', 'indent', 0,
        'tag', 'h' || "level"::text, 'version', 1
      )
      FROM "artikel_blocks_judul_bagian"
      UNION ALL
      SELECT daftar."_parent_id", daftar."_order", jsonb_build_object(
        'type', 'list',
        'children', coalesce((
          SELECT jsonb_agg(jsonb_build_object(
            'type', 'listitem',
            'children', jsonb_build_array(jsonb_build_object(
              'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal',
              'style', '', 'text', coalesce(item."teks", ''), 'version', 1
            )),
            'direction', null, 'format', '', 'indent', 0,
            'value', item."_order", 'version', 1
          ) ORDER BY item."_order")
          FROM "artikel_blocks_daftar_item" item
          WHERE item."_parent_id" = daftar."id"
        ), '[]'::jsonb),
        'direction', null, 'format', '', 'indent', 0,
        'listType', CASE WHEN daftar."terurut" THEN 'number' ELSE 'bullet' END,
        'start', 1,
        'tag', CASE WHEN daftar."terurut" THEN 'ol' ELSE 'ul' END,
        'version', 1
      )
      FROM "artikel_blocks_daftar" daftar
    )
    UPDATE "artikel" artikel
    SET "blok" = jsonb_build_object(
      'root', jsonb_build_object(
        'type', 'root',
        'children', coalesce((
          SELECT jsonb_agg(nodes.node ORDER BY nodes."_order")
          FROM nodes
          WHERE nodes.parent_id = artikel."id"
        ), '[]'::jsonb),
        'direction', null, 'format', '', 'indent', 0, 'version', 1
      )
    );

    WITH nodes AS (
      SELECT "_parent_id" AS parent_id, "_order", jsonb_build_object(
        'type', 'paragraph',
        'children', jsonb_build_array(jsonb_build_object(
          'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal',
          'style', '', 'text', coalesce("teks", ''), 'version', 1
        )),
        'direction', null, 'format', '', 'indent', 0,
        'textFormat', 0, 'textStyle', '', 'version', 1
      ) AS node
      FROM "_artikel_v_blocks_paragraf"
      UNION ALL
      SELECT "_parent_id", "_order", jsonb_build_object(
        'type', 'heading',
        'children', jsonb_build_array(jsonb_build_object(
          'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal',
          'style', '', 'text', coalesce("teks", ''), 'version', 1
        )),
        'direction', null, 'format', '', 'indent', 0,
        'tag', 'h' || "level"::text, 'version', 1
      )
      FROM "_artikel_v_blocks_judul_bagian"
      UNION ALL
      SELECT daftar."_parent_id", daftar."_order", jsonb_build_object(
        'type', 'list',
        'children', coalesce((
          SELECT jsonb_agg(jsonb_build_object(
            'type', 'listitem',
            'children', jsonb_build_array(jsonb_build_object(
              'type', 'text', 'detail', 0, 'format', 0, 'mode', 'normal',
              'style', '', 'text', coalesce(item."teks", ''), 'version', 1
            )),
            'direction', null, 'format', '', 'indent', 0,
            'value', item."_order", 'version', 1
          ) ORDER BY item."_order")
          FROM "_artikel_v_blocks_daftar_item" item
          WHERE item."_parent_id" = daftar."id"
        ), '[]'::jsonb),
        'direction', null, 'format', '', 'indent', 0,
        'listType', CASE WHEN daftar."terurut" THEN 'number' ELSE 'bullet' END,
        'start', 1,
        'tag', CASE WHEN daftar."terurut" THEN 'ol' ELSE 'ul' END,
        'version', 1
      )
      FROM "_artikel_v_blocks_daftar" daftar
    )
    UPDATE "_artikel_v" versi
    SET "version_blok" = jsonb_build_object(
      'root', jsonb_build_object(
        'type', 'root',
        'children', coalesce((
          SELECT jsonb_agg(nodes.node ORDER BY nodes."_order")
          FROM nodes
          WHERE nodes.parent_id = versi."id"
        ), '[]'::jsonb),
        'direction', null, 'format', '', 'indent', 0, 'version', 1
      )
    );

    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1
        FROM "artikel" artikel
        WHERE coalesce(jsonb_array_length(artikel."blok" #> '{root,children}'), -1) <>
          (
            SELECT count(*)
            FROM (
              SELECT 1 FROM "artikel_blocks_paragraf" WHERE "_parent_id" = artikel."id"
              UNION ALL
              SELECT 1 FROM "artikel_blocks_judul_bagian" WHERE "_parent_id" = artikel."id"
              UNION ALL
              SELECT 1 FROM "artikel_blocks_daftar" WHERE "_parent_id" = artikel."id"
            ) sumber
          )
      ) THEN
        RAISE EXCEPTION 'Validasi migrasi konten artikel aktif gagal';
      END IF;

      IF EXISTS (
        SELECT 1
        FROM "_artikel_v" versi
        WHERE coalesce(jsonb_array_length(versi."version_blok" #> '{root,children}'), -1) <>
          (
            SELECT count(*)
            FROM (
              SELECT 1 FROM "_artikel_v_blocks_paragraf" WHERE "_parent_id" = versi."id"
              UNION ALL
              SELECT 1 FROM "_artikel_v_blocks_judul_bagian" WHERE "_parent_id" = versi."id"
              UNION ALL
              SELECT 1 FROM "_artikel_v_blocks_daftar" WHERE "_parent_id" = versi."id"
            ) sumber
          )
      ) THEN
        RAISE EXCEPTION 'Validasi migrasi versi artikel gagal';
      END IF;
    END $$;

    DROP TABLE "artikel_blocks_paragraf" CASCADE;
    DROP TABLE "artikel_blocks_judul_bagian" CASCADE;
    DROP TABLE "artikel_blocks_daftar_item" CASCADE;
    DROP TABLE "artikel_blocks_daftar" CASCADE;
    DROP TABLE "_artikel_v_blocks_paragraf" CASCADE;
    DROP TABLE "_artikel_v_blocks_judul_bagian" CASCADE;
    DROP TABLE "_artikel_v_blocks_daftar_item" CASCADE;
    DROP TABLE "_artikel_v_blocks_daftar" CASCADE;
    DROP TYPE "public"."enum_artikel_blocks_judul_bagian_level";
    DROP TYPE "public"."enum__artikel_v_blocks_judul_bagian_level";
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_artikel_blocks_judul_bagian_level" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__artikel_v_blocks_judul_bagian_level" AS ENUM('2', '3', '4');
  CREATE TABLE "artikel_blocks_paragraf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"teks" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "artikel_blocks_judul_bagian" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"teks" varchar,
  	"level" "enum_artikel_blocks_judul_bagian_level" DEFAULT '2',
  	"block_name" varchar
  );
  
  CREATE TABLE "artikel_blocks_daftar_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"teks" varchar
  );
  
  CREATE TABLE "artikel_blocks_daftar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"terurut" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "_artikel_v_blocks_paragraf" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"teks" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_artikel_v_blocks_judul_bagian" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"teks" varchar,
  	"level" "enum__artikel_v_blocks_judul_bagian_level" DEFAULT '2',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_artikel_v_blocks_daftar_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"teks" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_artikel_v_blocks_daftar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"terurut" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "artikel_blocks_paragraf" ADD CONSTRAINT "artikel_blocks_paragraf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artikel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artikel_blocks_judul_bagian" ADD CONSTRAINT "artikel_blocks_judul_bagian_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artikel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artikel_blocks_daftar_item" ADD CONSTRAINT "artikel_blocks_daftar_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artikel_blocks_daftar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "artikel_blocks_daftar" ADD CONSTRAINT "artikel_blocks_daftar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."artikel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_artikel_v_blocks_paragraf" ADD CONSTRAINT "_artikel_v_blocks_paragraf_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_artikel_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_artikel_v_blocks_judul_bagian" ADD CONSTRAINT "_artikel_v_blocks_judul_bagian_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_artikel_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_artikel_v_blocks_daftar_item" ADD CONSTRAINT "_artikel_v_blocks_daftar_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_artikel_v_blocks_daftar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_artikel_v_blocks_daftar" ADD CONSTRAINT "_artikel_v_blocks_daftar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_artikel_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "artikel_blocks_paragraf_order_idx" ON "artikel_blocks_paragraf" USING btree ("_order");
  CREATE INDEX "artikel_blocks_paragraf_parent_id_idx" ON "artikel_blocks_paragraf" USING btree ("_parent_id");
  CREATE INDEX "artikel_blocks_paragraf_path_idx" ON "artikel_blocks_paragraf" USING btree ("_path");
  CREATE INDEX "artikel_blocks_judul_bagian_order_idx" ON "artikel_blocks_judul_bagian" USING btree ("_order");
  CREATE INDEX "artikel_blocks_judul_bagian_parent_id_idx" ON "artikel_blocks_judul_bagian" USING btree ("_parent_id");
  CREATE INDEX "artikel_blocks_judul_bagian_path_idx" ON "artikel_blocks_judul_bagian" USING btree ("_path");
  CREATE INDEX "artikel_blocks_daftar_item_order_idx" ON "artikel_blocks_daftar_item" USING btree ("_order");
  CREATE INDEX "artikel_blocks_daftar_item_parent_id_idx" ON "artikel_blocks_daftar_item" USING btree ("_parent_id");
  CREATE INDEX "artikel_blocks_daftar_order_idx" ON "artikel_blocks_daftar" USING btree ("_order");
  CREATE INDEX "artikel_blocks_daftar_parent_id_idx" ON "artikel_blocks_daftar" USING btree ("_parent_id");
  CREATE INDEX "artikel_blocks_daftar_path_idx" ON "artikel_blocks_daftar" USING btree ("_path");
  CREATE INDEX "_artikel_v_blocks_paragraf_order_idx" ON "_artikel_v_blocks_paragraf" USING btree ("_order");
  CREATE INDEX "_artikel_v_blocks_paragraf_parent_id_idx" ON "_artikel_v_blocks_paragraf" USING btree ("_parent_id");
  CREATE INDEX "_artikel_v_blocks_paragraf_path_idx" ON "_artikel_v_blocks_paragraf" USING btree ("_path");
  CREATE INDEX "_artikel_v_blocks_judul_bagian_order_idx" ON "_artikel_v_blocks_judul_bagian" USING btree ("_order");
  CREATE INDEX "_artikel_v_blocks_judul_bagian_parent_id_idx" ON "_artikel_v_blocks_judul_bagian" USING btree ("_parent_id");
  CREATE INDEX "_artikel_v_blocks_judul_bagian_path_idx" ON "_artikel_v_blocks_judul_bagian" USING btree ("_path");
  CREATE INDEX "_artikel_v_blocks_daftar_item_order_idx" ON "_artikel_v_blocks_daftar_item" USING btree ("_order");
  CREATE INDEX "_artikel_v_blocks_daftar_item_parent_id_idx" ON "_artikel_v_blocks_daftar_item" USING btree ("_parent_id");
  CREATE INDEX "_artikel_v_blocks_daftar_order_idx" ON "_artikel_v_blocks_daftar" USING btree ("_order");
  CREATE INDEX "_artikel_v_blocks_daftar_parent_id_idx" ON "_artikel_v_blocks_daftar" USING btree ("_parent_id");
  CREATE INDEX "_artikel_v_blocks_daftar_path_idx" ON "_artikel_v_blocks_daftar" USING btree ("_path");

  DO $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM "artikel" artikel
      CROSS JOIN LATERAL jsonb_array_elements(
        coalesce(artikel."blok" #> '{root,children}', '[]'::jsonb)
      ) isi(node)
      WHERE isi.node->>'type' NOT IN ('paragraph', 'heading', 'list')
        OR (
          isi.node->>'type' = 'heading'
          AND isi.node->>'tag' NOT IN ('h2', 'h3', 'h4')
        )
        OR (
          isi.node->>'type' IN ('paragraph', 'heading')
          AND EXISTS (
            SELECT 1
            FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb)) anak
            WHERE anak->>'type' <> 'text'
          )
        )
        OR (
          isi.node->>'type' = 'list'
          AND EXISTS (
            SELECT 1
            FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb)) butir
            WHERE butir->>'type' <> 'listitem'
              OR EXISTS (
                SELECT 1
                FROM jsonb_array_elements(coalesce(butir->'children', '[]'::jsonb)) anak
                WHERE anak->>'type' <> 'text'
              )
          )
        )
    ) THEN
      RAISE EXCEPTION 'Rollback dibatalkan: konten artikel memiliki node Lexical yang tidak didukung format blok lama';
    END IF;

    IF EXISTS (
      SELECT 1
      FROM "_artikel_v" versi
      CROSS JOIN LATERAL jsonb_array_elements(
        coalesce(versi."version_blok" #> '{root,children}', '[]'::jsonb)
      ) isi(node)
      WHERE isi.node->>'type' NOT IN ('paragraph', 'heading', 'list')
        OR (
          isi.node->>'type' = 'heading'
          AND isi.node->>'tag' NOT IN ('h2', 'h3', 'h4')
        )
        OR (
          isi.node->>'type' IN ('paragraph', 'heading')
          AND EXISTS (
            SELECT 1
            FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb)) anak
            WHERE anak->>'type' <> 'text'
          )
        )
        OR (
          isi.node->>'type' = 'list'
          AND EXISTS (
            SELECT 1
            FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb)) butir
            WHERE butir->>'type' <> 'listitem'
              OR EXISTS (
                SELECT 1
                FROM jsonb_array_elements(coalesce(butir->'children', '[]'::jsonb)) anak
                WHERE anak->>'type' <> 'text'
              )
          )
        )
    ) THEN
      RAISE EXCEPTION 'Rollback dibatalkan: versi artikel memiliki node Lexical yang tidak didukung format blok lama';
    END IF;
  END $$;

  INSERT INTO "artikel_blocks_paragraf"
    ("_order", "_parent_id", "_path", "id", "teks")
  SELECT isi.posisi::integer, artikel."id", 'blok',
    'rollback-p-' || artikel."id" || '-' || isi.posisi,
    konten.teks
  FROM "artikel" artikel
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(artikel."blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  CROSS JOIN LATERAL (
    SELECT string_agg(anak->>'text', '' ORDER BY urutan) AS teks
    FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb))
      WITH ORDINALITY teks(anak, urutan)
  ) konten
  WHERE isi.node->>'type' = 'paragraph';

  INSERT INTO "artikel_blocks_judul_bagian"
    ("_order", "_parent_id", "_path", "id", "teks", "level")
  SELECT isi.posisi::integer, artikel."id", 'blok',
    'rollback-h-' || artikel."id" || '-' || isi.posisi,
    konten.teks,
    substring(isi.node->>'tag' from 2)::"enum_artikel_blocks_judul_bagian_level"
  FROM "artikel" artikel
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(artikel."blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  CROSS JOIN LATERAL (
    SELECT string_agg(anak->>'text', '' ORDER BY urutan) AS teks
    FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb))
      WITH ORDINALITY teks(anak, urutan)
  ) konten
  WHERE isi.node->>'type' = 'heading';

  INSERT INTO "artikel_blocks_daftar"
    ("_order", "_parent_id", "_path", "id", "terurut")
  SELECT isi.posisi::integer, artikel."id", 'blok',
    'rollback-l-' || artikel."id" || '-' || isi.posisi,
    isi.node->>'listType' = 'number'
  FROM "artikel" artikel
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(artikel."blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  WHERE isi.node->>'type' = 'list';

  INSERT INTO "artikel_blocks_daftar_item"
    ("_order", "_parent_id", "id", "teks")
  SELECT butir.posisi::integer, daftar."id",
    daftar."id" || '-' || butir.posisi,
    konten.teks
  FROM "artikel" artikel
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(artikel."blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  JOIN "artikel_blocks_daftar" daftar
    ON daftar."_parent_id" = artikel."id"
    AND daftar."_order" = isi.posisi
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(isi.node->'children', '[]'::jsonb)
  ) WITH ORDINALITY butir(node, posisi)
  CROSS JOIN LATERAL (
    SELECT string_agg(anak->>'text', '' ORDER BY urutan) AS teks
    FROM jsonb_array_elements(coalesce(butir.node->'children', '[]'::jsonb))
      WITH ORDINALITY teks(anak, urutan)
  ) konten
  WHERE isi.node->>'type' = 'list';

  INSERT INTO "_artikel_v_blocks_paragraf"
    ("_order", "_parent_id", "_path", "teks", "_uuid")
  SELECT isi.posisi::integer, versi."id", 'blok', konten.teks,
    'rollback-p-' || versi."id" || '-' || isi.posisi
  FROM "_artikel_v" versi
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(versi."version_blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  CROSS JOIN LATERAL (
    SELECT string_agg(anak->>'text', '' ORDER BY urutan) AS teks
    FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb))
      WITH ORDINALITY teks(anak, urutan)
  ) konten
  WHERE isi.node->>'type' = 'paragraph';

  INSERT INTO "_artikel_v_blocks_judul_bagian"
    ("_order", "_parent_id", "_path", "teks", "level", "_uuid")
  SELECT isi.posisi::integer, versi."id", 'blok', konten.teks,
    substring(isi.node->>'tag' from 2)::"enum__artikel_v_blocks_judul_bagian_level",
    'rollback-h-' || versi."id" || '-' || isi.posisi
  FROM "_artikel_v" versi
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(versi."version_blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  CROSS JOIN LATERAL (
    SELECT string_agg(anak->>'text', '' ORDER BY urutan) AS teks
    FROM jsonb_array_elements(coalesce(isi.node->'children', '[]'::jsonb))
      WITH ORDINALITY teks(anak, urutan)
  ) konten
  WHERE isi.node->>'type' = 'heading';

  INSERT INTO "_artikel_v_blocks_daftar"
    ("_order", "_parent_id", "_path", "terurut", "_uuid")
  SELECT isi.posisi::integer, versi."id", 'blok',
    isi.node->>'listType' = 'number',
    'rollback-l-' || versi."id" || '-' || isi.posisi
  FROM "_artikel_v" versi
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(versi."version_blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  WHERE isi.node->>'type' = 'list';

  INSERT INTO "_artikel_v_blocks_daftar_item"
    ("_order", "_parent_id", "teks", "_uuid")
  SELECT butir.posisi::integer, daftar."id", konten.teks,
    'rollback-i-' || versi."id" || '-' || isi.posisi || '-' || butir.posisi
  FROM "_artikel_v" versi
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(versi."version_blok" #> '{root,children}', '[]'::jsonb)
  ) WITH ORDINALITY isi(node, posisi)
  JOIN "_artikel_v_blocks_daftar" daftar
    ON daftar."_parent_id" = versi."id"
    AND daftar."_order" = isi.posisi
  CROSS JOIN LATERAL jsonb_array_elements(
    coalesce(isi.node->'children', '[]'::jsonb)
  ) WITH ORDINALITY butir(node, posisi)
  CROSS JOIN LATERAL (
    SELECT string_agg(anak->>'text', '' ORDER BY urutan) AS teks
    FROM jsonb_array_elements(coalesce(butir.node->'children', '[]'::jsonb))
      WITH ORDINALITY teks(anak, urutan)
  ) konten
  WHERE isi.node->>'type' = 'list';
  ALTER TABLE "artikel" DROP COLUMN "blok";
  ALTER TABLE "_artikel_v" DROP COLUMN "version_blok";
  `)
}

import Script from "next/script";

import { CampaignPageView } from "@/components/campaign/SptBulananCampaignClient";
import { outfit, plusJakarta } from "@/lib/fonts";

import "../globals.css";

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPH4VR4H');`;

const metaPixelScript = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1821054145096112');fbq('track','PageView');`;

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-navy-900">
        <a
          href="#konten-utama"
          className="sr-only z-50 bg-white px-4 py-3 font-bold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Lewati ke konten utama
        </a>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPH4VR4H"
            height="0"
            width="0"
            title="Google Tag Manager"
            className="hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            className="hidden"
            alt=""
            src="https://www.facebook.com/tr?id=1821054145096112&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <CampaignPageView />
        <Script id="campaign-gtm" strategy="afterInteractive">
          {gtmScript}
        </Script>
        <Script id="campaign-meta-pixel" strategy="afterInteractive">
          {metaPixelScript}
        </Script>
      </body>
    </html>
  );
}

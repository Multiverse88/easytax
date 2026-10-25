import Script from "next/script";

const containerId = "GTM-TPH4VR4H";
const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${containerId}');`;

export function GoogleTagManager() {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
          height="0"
          width="0"
          title="Google Tag Manager"
          className="hidden"
        />
      </noscript>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {script}
      </Script>
    </>
  );
}

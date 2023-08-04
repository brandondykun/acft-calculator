"use client";

import Script from "next/script";

type Props = {
  GA_TRACKING_ID: string | undefined;
};

const GoogleAnalytics = ({ GA_TRACKING_ID }: Props) => {
  // if env variable is undefined to not track in dev environment
  if (!GA_TRACKING_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_TRACKING_ID});
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;

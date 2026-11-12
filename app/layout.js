import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Shubhsaathi Foundation — Empowering Daughters, Uplifting Families',
  description:
    'Shubhsaathi Foundation is a registered Section 8 non-profit supporting underprivileged families with dignified marriages, subsidised health insurance for women, and skill development. Donations are 80G tax-exempt.',
  keywords: [
    'Shubhsaathi Foundation',
    'NGO Bihar',
    'donate marriage',
    '80G tax exemption',
    'women empowerment',
    'health insurance subsidy',
  ],
  openGraph: {
    title: 'Shubhsaathi Foundation',
    description: 'Empowering Daughters, Uplifting Families.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#f4861a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Inline pre-paint script: applies the saved theme before React
          hydrates, which prevents a flash of the wrong colour scheme.
        */}
        {/* Entity schema: the NGO and its founder (links the site to vinay.opsx.in and opsx.in). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              '@id': 'https://shubhsaathi.org/#organization',
              name: 'Shubhsaathi Foundation',
              url: 'https://shubhsaathi.org/',
              logo: 'https://shubhsaathi.org/icon.png',
              description:
                'Registered Section 8 non-profit supporting underprivileged families with dignified marriages, subsidised health insurance for women, and skill development.',
              areaServed: { '@type': 'Country', name: 'India' },
              founder: {
                '@type': 'Person',
                '@id': 'https://vinay.opsx.in/#person',
                name: 'Vinay Kumar',
                jobTitle: 'Founder & President',
                url: 'https://vinay.opsx.in',
                worksFor: { '@type': 'Organization', name: 'OpsX', url: 'https://opsx.in/' },
                sameAs: [
                  'https://www.linkedin.com/in/thisvinaykumar/',
                  'https://github.com/thisvinaykumar',
                  'https://opsx.in/vinay-kumar/',
                ],
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kf-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);var l=localStorage.getItem('kf-lang');if(l)document.documentElement.setAttribute('lang',l);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

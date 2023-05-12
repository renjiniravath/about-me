import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href="https://renjijosephsabu.vercel.app/" key="canonical" rel="canonical" />

        <link href="/renji.png" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content="https://i.ibb.co/3pZM9SS/Resume-screenshot.png" property="og:image"></meta>
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="https://renjijosephsabu.vercel.app/" property="og:url" />

        <meta content="7440bxLtB6lHg76hwOjxI4ecokUxs4jQKVJryTth7Vw" name="google-site-verification" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="https://i.ibb.co/3pZM9SS/Resume-screenshot.png" property="twitter:image"></meta>
        <meta content="summary_large_image" property="twitter:card"></meta>
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;

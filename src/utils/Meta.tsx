import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type MetaProps = {
  appConfig: {
    siteName: string;
    title: string;
    description: string;
    locale: string;
  };
};

const Meta: React.FC<MetaProps> = ({ appConfig }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.description} />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={appConfig.title}
        description={appConfig.description}
        openGraph={{
          title: appConfig.title,
          description: appConfig.description,
          locale: appConfig.locale,
          site_name: appConfig.siteName,
        }}
      />
    </>
  );
};

export { Meta };

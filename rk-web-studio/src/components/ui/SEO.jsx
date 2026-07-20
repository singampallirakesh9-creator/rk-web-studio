import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = `${title} | RK Web Studio`;
  const url = `https://rkwebstudio.com${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

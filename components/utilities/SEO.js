import Head from 'next/head';

const defaultTitle = 'Frappadingue : La référence de la course à obstacles en France';
const defaultDescription = 'L\'aventure Frappadingue, c\'est fait pour toi ! Accessible à tous sans exception. Course à obstacles hors du commun avec 1 course, 2 challenges (Format S : 5-6 km, Format L : 10-12 km). Parcours parsemé d\'embûches, échelles, ponts de singe, filets, tunnels, boue et bien plus encore.';
const defaultImage = '/images/frappadingue-logo.png';
const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.frappadingue.net';

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = '',
  type = 'website',
  noindex = false,
  structuredData = null,
}) {
  const fullTitle = title === defaultTitle ? title : `${title} | Frappadingue`;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content="French" />
      <meta name="author" content="Frappadingue" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="Le Touquet" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Frappadingue" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}


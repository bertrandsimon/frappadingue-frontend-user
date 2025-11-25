import Head from 'next/head';
import Home from '../components/Home';
import SEO from '../components/utilities/SEO';

function Index() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.frappadingue.net';
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Frappadingue',
    description: 'La référence de la course à obstacles en France. Course à obstacles hors du commun accessible à tous sans exception. Format S : 5 à 6 km, Format L : 10 à 12 km.',
    url: baseUrl,
    logo: `${baseUrl}/images/frappadingue-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-6-28-93-10-50',
      contactType: 'customer service',
      email: 'contact@frappadingue.fr',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Le Touquet',
      postalCode: '62520',
      addressCountry: 'FR',
    },
    sameAs: [],
    slogan: 'L\'aventure Frappadingue, c\'est fait pour toi ! Accessible à tous sans exception.',
  };

  return (
    <div>
      <SEO
        title="Frappadingue : La référence de la course à obstacles en France"
        description="L'aventure Frappadingue, c'est fait pour toi ! Accessible à tous sans exception. Course à obstacles hors du commun avec 1 course, 2 challenges. Format S : 5 à 6 km, Format L : 10 à 12 km. Parcours parsemé d'embûches, échelles, ponts de singe, filets, tunnels, boue et bien plus encore. Souvent copiée, jamais égalée."
        url="/"
        structuredData={structuredData}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
          integrity="sha512-csw0Ma4oXCAgd/d4nTcpoEoz4nYvvnk21a8VA2h2dzhPAvjbUIK6V3si7/g/HehwdunqqW18RwCJKpD7rL67Xg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Home />
    </div>
  );
}

export default Index;

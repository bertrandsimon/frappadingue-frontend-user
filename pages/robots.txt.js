function generateRobotsTxt(baseUrl) {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /CartPage
Disallow: /Success
Disallow: /payment/

Sitemap: ${baseUrl}/sitemap.xml
`;
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.frappadingue.net';
  const robotsTxt = generateRobotsTxt(baseUrl);

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxt;


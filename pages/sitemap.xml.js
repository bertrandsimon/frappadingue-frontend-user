function generateSiteMap(events, baseUrl) {
  const staticPages = [
    '',
    '/CoursesPage',
    '/ContactPage',
    '/FaqPage',
    '/BenevolesPage',
    '/MediasPage',
    '/PresentationPage',
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${staticPages
       .map((url) => {
         return `
       <url>
           <loc>${baseUrl}${url}</loc>
           <changefreq>weekly</changefreq>
           <priority>${url === '' ? '1.0' : '0.8'}</priority>
       </url>
     `;
       })
       .join('')}
     ${events
       .map((event) => {
         return `
       <url>
           <loc>${baseUrl}/SingleEventPage/${event._id}</loc>
           <lastmod>${event.updatedAt ? new Date(event.updatedAt).toISOString() : new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.9</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.frappadingue.net';

  // Fetch events from your API
  let events = [];
  try {
    const response = await fetch('https://frappadingue-backend.vercel.app/events/allEvents', {
      cache: 'no-store',
    });
    const data = await response.json();
    events = data.all || [];
  } catch (error) {
    console.error('Error fetching events for sitemap:', error);
  }

  // Generate the XML sitemap with the events data
  const sitemap = generateSiteMap(events, baseUrl);

  res.setHeader('Content-Type', 'text/xml');
  // Write the XML to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;


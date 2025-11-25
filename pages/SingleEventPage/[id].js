import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import SingleEvent from "../../components/event/SingleEvent";
import SEO from "../../components/utilities/SEO";

function SingleEventPage({ event }) {
  // Handle case where event doesn't exist
  if (!event) {
    return (
      <div>
        <SEO
          title="Événement non trouvé"
          description="L'événement que vous recherchez n'existe pas ou n'est plus disponible."
          noindex={true}
        />
        <main className="container mx-auto sm:px-6 lg:px-8">
          <Nav currentNavItem="Courses" />
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-white">Événement non trouvé</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://www.frappadingue.net';
  const eventTitle = event.title || 'Course à obstacles Frappadingue';
  const eventLocation = event.location || '';
  
  // Create SEO title: "Course à obstacles à [ville] - Frappadingue"
  const seoTitle = eventLocation 
    ? `Course à obstacles à ${eventLocation} - Frappadingue`
    : eventTitle;
  
  const eventDescription = event.description 
    ? `${event.description.substring(0, 120)} - Course à obstacles Frappadingue. 1 course, 2 challenges (Format S : 5-6 km, Format L : 10-12 km). Accessible à tous sans exception.`
    : `Inscrivez-vous à ${seoTitle}, une course à obstacles organisée par Frappadingue, la référence de la course à obstacles en France. 1 course, 2 challenges, 1 départ commun. Format S : 5 à 6 km, Format L : 10 à 12 km.`;
  const eventImage = event.image 
    ? `/images/events/${event.image}` 
    : '/images/frappadingue-logo.png';
  const eventDate = event.date ? new Date(event.date) : null;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: seoTitle,
    description: eventDescription,
    startDate: eventDate ? eventDate.toISOString() : undefined,
    location: eventLocation ? {
      '@type': 'Place',
      name: eventLocation,
    } : undefined,
    organizer: {
      '@type': 'Organization',
      name: 'Frappadingue',
      url: baseUrl,
    },
    image: eventImage.startsWith('http') ? eventImage : `${baseUrl}${eventImage}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
    },
  };

  return (
    <div>
      <SEO
        title={seoTitle}
        description={eventDescription}
        image={eventImage}
        url={`/SingleEventPage/${event._id}`}
        type="article"
        structuredData={structuredData}
      />
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav currentNavItem="Courses" />
      
        <SingleEvent event={event} />
        
      </main>
      <Footer />
    </div>
  );
}

// Get all event IDs at build time (optional - for pre-rendering known events)
export async function getStaticPaths() {
  try {
    const response = await fetch('https://frappadingue-backend.vercel.app/events/allEvents', {
      cache: 'force-cache',
      next: { revalidate: 3600 }
    });
    const data = await response.json();
    
    // Pre-render the most recent events, fallback for others
    const paths = (data.all || []).slice(0, 10).map((event) => ({
      params: { id: event._id },
    }));

    return {
      paths,
      fallback: 'blocking', // Generate pages on-demand for events not in paths
    };
  } catch (error) {
    console.error('Error fetching events for static paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

// Fetch event data at build time and revalidate every hour
export async function getStaticProps(context) {
  const { id } = context.params;
  
  try {
    const response = await fetch(`https://frappadingue-backend.vercel.app/events/${id}`, {
      cache: 'force-cache',
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      return {
        notFound: true,
      };
    }
    
    const data = await response.json();

    return {
      props: {
        event: data.event,
      },
      revalidate: 3600, // Revalidate page every hour (3600 seconds)
    };
  } catch (error) {
    console.error('Error fetching event:', error);
    return {
      notFound: true,
    };
  }
}

export default SingleEventPage;

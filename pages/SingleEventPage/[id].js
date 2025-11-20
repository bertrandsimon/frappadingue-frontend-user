import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import SingleEvent from "../../components/event/SingleEvent";

function SingleEventPage({ event }) {
  // Handle case where event doesn't exist
  if (!event) {
    return (
      <div>
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

  return (
    <div>
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

import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import SingleEvent from "../../components/event/SingleEvent";
import { useRouter } from "next/router";

function SingleEventPage({ event }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav currentNavItem="Courses" />
        <h1>Event ID: {id}</h1>
        <SingleEvent event={event} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`http://localhost:3000/events/${id}`);
  const data = await response.json();

  return {
    props: {
      event: data.event,
    },
  };
}

export default SingleEventPage;

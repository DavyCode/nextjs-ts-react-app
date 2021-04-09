import { getFeaturedEvents } from '../../data/dummy-data'
import EventList from '../../components/events/EventList'

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <div>
      <h1> Home Page </h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
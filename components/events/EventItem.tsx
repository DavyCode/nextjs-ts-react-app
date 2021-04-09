import Link from 'next/link'
import { Event } from '../../types'


function EventItem({ events }) {
  const { id, title, description, location, date, image, isFeatured } = events;
  
  const dateReadable = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={'/' + image} alt="title"/>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{dateReadable}</time>
          </div>

          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem;
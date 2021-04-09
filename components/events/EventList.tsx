import React from 'react';
import EventItem from './EventItem';
import { Event } from '../../types'

type Props = {
  items: Array<Event>;
}

function EventList({ items }: Props) {
  return (
    <ul>
      {
        items.map(event => <EventItem events={event} key={event.id}/>)
      }
    </ul>
  )
}

export default EventList;

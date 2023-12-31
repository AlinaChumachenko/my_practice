import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'serveses/eventsAppi';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={event.id} state={{ from: location }}>
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

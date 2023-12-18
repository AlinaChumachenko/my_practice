import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import { Homepage } from 'pages/Homepage.jsx';
import { EventsPage } from 'pages/EventsPage.jsx';
import { EventsSubPage } from 'pages/EventsSubPage.jsx';
import { SearchPage } from 'pages/SearchPage.jsx';
import { EventDetailsPage } from 'pages/EventDetailsPage.jsx';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
        <Route path="events/:id/details" element={<EventDetailsPage />} />
        <Route path="search/:id/details" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
};

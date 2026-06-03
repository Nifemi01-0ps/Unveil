import { createBrowserRouter } from "react-router";
import AppLayout from "../src/componets/Layout/AppLayout.jsx";
import LandingPage from "../src/componets/Views/LandingPage.jsx";
import Onboarding from "../src/componets/Views/onboarding.jsx";
import DiscoveryFeed from "../src/componets/Discovery/DiscoveryFeed.jsx";
import CollectorLibrary from "../src/componets/Views/CollectorLibrary.jsx";
import ChapterViewer from "../src/componets/Story/ChapterViewer.jsx";
import NotFound from "../src/componets/Views/NotFound.jsx";
export const createProjectRouter = ({ stories, ownedIds, handleRegisterPurchase }) => {
  return createBrowserRouter([
    {
      path: '/',
      element: <AppLayout ownedCount={ownedIds.length} />,
      errorElement: < NotFound />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: 'onboarding',
          element: <Onboarding />
        },
        {
          path: 'feed',
          element: <DiscoveryFeed stories={stories} />
        },
        {
          path: 'library',
          element: <CollectorLibrary ownedIds={ownedIds} stories={stories} />
        },
        {
          path: 'story/:id',
          element: <ChapterViewer stories={stories} onJourneyOwned={handleRegisterPurchase} />
        },
      ]
    }
  ]);
};


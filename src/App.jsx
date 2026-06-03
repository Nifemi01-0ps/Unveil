import { RouterProvider } from "react-router";
import { createProjectRouter } from "./routes.jsx";
import { mockStories } from "./data/mockStories.js";
import { useState } from "react";

export default function App() {
  const [ownedIds, setOwnedIds] = useState([]);
  function handleRegisterPurchase(storyId) {
    if (!ownedIds.includes(storyId)) {
      setOwnedIds(prev => [...prev, storyId]);      
    }
  };
  const router = createProjectRouter({
    stories: mockStories,
    ownedIds: ownedIds,
    handleRegisterPurchase: handleRegisterPurchase
  });

  return <RouterProvider router={router}/>
}
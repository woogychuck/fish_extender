import { Container } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import CruiseDetail from "./views/cruise_detail";
import HomeView from "./views/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: HomeView,
    },
    {
      path: "/detail",
      element: CruiseDetail,
    },
  ]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <header>
        <h1>Global Header</h1>
      </header>
      <section className="app-content">
        <RouterProvider router={router} />
      </section>
      <footer>
        <p>
          <small>Built by Ian</small>
        </p>
      </footer>
    </Container>
  );
}

export default App;

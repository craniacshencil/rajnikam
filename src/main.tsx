import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Blogs from "./routes/Blogs";
import Blog from "./components/Blog";

// Get blognames and create routes dynamically
const blogs = import.meta.glob("./blogs/*.mdx");
const blogFilenames = Object.keys(blogs).map((name) =>
  name.slice(8, name.lastIndexOf(".")),
);
const blogRoutes = blogFilenames.map((fileName) => ({
  path: `/rajnikam/blogs/${fileName}`,
  element: <Blog key={fileName} blogName={fileName} />,
}));

const staticRoutes = [
  {
    path: "/rajnikam",
    element: <App />,
  },
  {
    path: "/rajnikam/blogs",
    element: <Blogs />,
  },
];

const routes = blogRoutes.concat(staticRoutes);
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

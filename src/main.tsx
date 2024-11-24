import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage, ContactPage, AboutPage, ErrorPage, Root, BlogPage, ArchivedPostPage, BlogPostPage, BlogPostLoader } from './routes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
          {
            path: "/blog",
            children: [
              {
                index: true,
                element: <BlogPage />,
              },
              {
                path: ":blogId",
                loader: BlogPostLoader as any,
                element: <BlogPostPage />,
              },
              {
                path: "archived",
                element: <ArchivedPostPage />,
              },
            ]
          },
        ]
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

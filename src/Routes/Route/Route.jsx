import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../Layout/MainPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />
  }
])
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../Layout/MainPage";
import DashboardLayout from "../../Layout/DashboardLayout";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Admission from "../../Pages/Admission/Admission";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";

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
      },
      {
        path: 'admission',
        element: <Admission />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registration />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />
  }
])
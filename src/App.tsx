import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { PAGE_NOT_FOUND } from "./assets/constants";
import { CircularProgress } from "@mui/material";

const App = () => {
  const AddNewCarLazy = lazy(() => import("./pages/AddNewCar"));
  const UpdateCarLazy = lazy(() => import("./pages/UpdateCar"));
  const NotificationLazy = lazy(() => import("./ui/Notification"));

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addNewCar"
            element={
              <Suspense fallback={<CircularProgress />}>
                <AddNewCarLazy />
              </Suspense>
            }
          />
          <Route
            path="/updateCar"
            element={
              <Suspense fallback={<CircularProgress />}>
                <UpdateCarLazy />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense>
                <NotificationLazy message={PAGE_NOT_FOUND} />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

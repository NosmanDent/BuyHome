import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { getUserDetail } from "../app/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Transitions from "./Transitions";

const queryClient = new QueryClient();

export default function Layout() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetail());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Transitions>
        <div className="site-wrapper">
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </Transitions>
    </QueryClientProvider>
  );
}

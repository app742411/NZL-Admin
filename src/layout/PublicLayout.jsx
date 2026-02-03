// layout/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHome/MainHeader";
import Footer from "../components/MainHome/Footer";
import ScrollToTopButton from './../components/MainHome/ScrollToTopButton';

const PublicLayout = () => {
  return (
    <>
      {/* IMPORTANT: padding-top for fixed header */}
      <main className="min-h-screen bg-white">
        <MainHeader />
        <Outlet />
        <Footer />
        <ScrollToTopButton/>
      </main>
    </>
  );
};

export default PublicLayout;

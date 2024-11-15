import MobileNav from "@/components/headers/MobileNav";
import "../public/assets/scss/styles.scss";
import SiteMenu from "@/components/headers/SiteMenu";
import ScrollTop from "@/components/common/ScrollTop";
import CursorFollor from "@/components/common/CursorFollor";
import { ToastContainer } from "react-toastify";
import PopupSearch from "@/components/headers/PopupSearch";
import "@/app/global.css";
import ClientSideEffects from "@/components/otherPages/clientComponents"; // Import the new client-side component

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteMenu />
        <MobileNav />
        <PopupSearch />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ClientSideEffects /> {/* Include the client-side effects */}
        {children}
        <CursorFollor />
        <ScrollTop />
      </body>
    </html>
  );
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientSideEffects() {
  const path = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const topPos = window.scrollY || document.documentElement.scrollTop;
      const stickyWrapper = document.querySelector(".sticky-wrapper");

      if (stickyWrapper) {
        if (topPos > 500) {
          stickyWrapper.classList.add("sticky");
        } else {
          stickyWrapper.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const { WOW } = require("wowjs");
    const wow = new WOW({ mobile: false, live: false });
    wow.init();
  }, [path]);

  return null; // No UI to render
}

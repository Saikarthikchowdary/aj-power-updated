"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";
import RevealObserver from "./RevealObserver";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return <>{children}</>;
  const isHome = pathname === "/";

  return (
    <div className={isHome ? undefined : "v2-scope"}>
      <Nav />
      <RevealObserver />
      {children}
      {!isHome && <Footer />}
    </div>
  );
}

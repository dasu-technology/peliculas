import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: PropsWithChildren) => {
    const navLinks = [
        { text: 'Home', url: '/' },
        { text: 'Movie', url: '/movie' }
      ];
  return (
    <>
    
      <Navbar title="Movies" links={navLinks} />  
      <main>{children}</main>
    </>
  );
};
export default Layout;

import React from "react";
import { Navbar } from "../_components/navbar";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
      <>
        <Navbar />
          <div className="">{children}</div>
      </>
    );
}
import { LayoutProps } from "@/models/common";
import React from "react";
import { Header } from "../common";

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen m-0 w-full h-full min-h-full text-xs text-white">
      <div className="relative w-full max-w-screen-xl bg-[#444] rounded-3xl min-h-[80vh] my-[10vh] mx-auto">
        <Header />

        <div className="main-content absolute right-0 bg-black w-full h-full max-w-[900px] rounded-3xl ">
          {children}
        </div>
      </div>
    </div>
  );
}

'use client'
import MainWindow from "../components/MainWindow";
import LeftNavButton from "../components/LeftNavButton";
import RightNavButton from "../components/RightNavButton";
import BottomNavButton from "../components/BottomNavButton";
import TopNavButton from "../components/TopNavButton";

import { useState, useEffect } from "react";

import 'react'

declare module 'react' {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    commandFor?: string
    command?: string
  }
}

export default function Home() { /* Render format of page here, update state variable which selects which component to render based on button pressed */
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log("Current page: " + currentPage);
  }, [currentPage])

  return (
    <main>

      <MainWindow currentPage={currentPage}/>

      <LeftNavButton currentPage={currentPage} onClick={() => setCurrentPage(currentPage == 0 ? 1 :
                                                                              currentPage == 3 ? 0 : -1
      )}/>
      <BottomNavButton currentPage={currentPage} onClick={() => setCurrentPage(currentPage == 0 ? 2 : -1)}/>
      <RightNavButton currentPage={currentPage} onClick={() => setCurrentPage(currentPage == 0 ? 3 : 0)}/>
      <TopNavButton currentPage={currentPage} onClick={() => setCurrentPage(0)}/>
    </main>
    
  );
}

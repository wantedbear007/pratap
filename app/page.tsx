"use client"

import HeroSection from "@/components/ui/sections/hero";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("bhanu")

  const nameChange = () => {
    setTimeout(() => {
      setName("hello from bhanu")
    }, 2000)
  }


  return (
    <>
    <HeroSection />
    </>
  );
}

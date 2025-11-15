"use client";

import HeroSection from "@/components/ui/sections/hero";
import Navbar from "@/components/ui/sections/navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

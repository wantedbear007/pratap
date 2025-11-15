"use client";

import HeroSection from "@/components/ui/sections/hero";
import Navbar from "@/components/ui/sections/navbar";
import { Projects } from "@/components/ui/sections/projects";
import Image from "next/image";
import { ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  };

export function PageContainer({ children, className = "" }: Props) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      
      <PageContainer>
        <HeroSection />
        <Projects />
      </PageContainer>
    </>
  );
}

"use client";

import { useState } from "react";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
import InputField from "@/components/InputField";
import Form from "@/components/Form";
import Tickets from "@/components/Tickets";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: null,
    ticketNumber: "",
    currentStep: 1,
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-mobile bg-cover bg-bottom bg-no-repeat md:bg-tablet lg:bg-desktop">
      <div className="container py-10">
        <div className="absolute right-0 top-4 h-[40px] w-[84px] bg-squiggly-top bg-cover bg-center bg-no-repeat lg:-right-[8px] lg:h-[200px] lg:w-[400px]" />
        <div className="absolute right-0 top-4 h-[300px] w-full scale-[5.5] bg-lines bg-cover bg-center bg-no-repeat lg:-right-[8px] lg:scale-100" />
        <nav className="flex items-center justify-center py-8">
          <div className="h-[25px] w-[220px] bg-logo bg-contain bg-center bg-no-repeat" />
        </nav>

        {formData.currentStep === 1 ? (
          <Form formData={formData} setFormData={setFormData} />
        ) : (
          <Tickets formData={formData} />
        )}

        <div className="absolute bottom-4 left-0 h-[110px] w-[186px] bg-squiggly-bottom bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-[700px]" />
      </div>
    </main>
  );
};

export default Index;

"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ljhg@umich.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
  };

  return (
    <div className="flex flex-col">
      <ContactForm />
      <div className="LightSlateFont text-base py-4">
        Or if you wish to email me directly at&nbsp;
        <button
          className="underline underline-offset-4 inline HoverLink"
          onClick={() => handleCopy()}
        >
          ljhg@umich.edu
        </button>
        <div
          className="inline text-green-300 ml-1 text-sm transition-opacity duration-500"
          style={{ opacity: copied ? 1 : 0 }}
        >
          Copied!
        </div>
      </div>
    </div>
  );
}

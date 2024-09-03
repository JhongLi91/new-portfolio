"use client";

import { useState, useLayoutEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { IoRemoveOutline } from "react-icons/io5";

import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Social from "./components/Social.js";
import Contact from "./components/ContactMe.js";
import ContactMe from "./components/ContactMe.js";

export default function Home() {
  const [onSection, setOnSection] = useState([1, 0, 0, 0]);

  const handleScroll = () => {
    const scroll = window.document.documentElement.scrollTop;
    if (scroll < 265) setOnSection([1, 0, 0, 0]);
    else if (scroll < 900) setOnSection([0, 1, 0, 0]);
    else if (scroll < 1700) setOnSection([0, 0, 1, 0]);
    else setOnSection([0, 0, 0, 1]);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Navigation = () => {
    return (
      <div className="Invis">
        <div className="py-32">
          <a
            className="w-fit flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([1, 0, 0, 0])}
            style={{
              marginLeft: onSection[0] == 1 ? "28px" : "",
              color: onSection[0] == 1 ? "white" : "",
            }}
            href="#abo"
          >
            <IoRemoveOutline size={50} /> ABOUT ME
          </a>
          <a
            className="w-fit flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([0, 1, 0, 0])}
            style={{
              marginLeft: onSection[1] == 1 ? "28px" : "",
              color: onSection[1] == 1 ? "white" : "",
            }}
            href="#exp"
          >
            <IoRemoveOutline size={50} /> EXPERIENCE
          </a>
          <a
            className="w-fit flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([0, 0, 1, 0])}
            style={{
              marginLeft: onSection[2] == 1 ? "28px" : "",
              color: onSection[2] == 1 ? "white" : "",
            }}
            href="#pro"
          >
            <IoRemoveOutline size={50} /> PROJECTS
          </a>
          <a
            className="w-fit flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([0, 0, 0, 1])}
            style={{
              marginLeft: onSection[3] == 1 ? "28px" : "",
              color: onSection[3] == 1 ? "white" : "",
            }}
            href="#con"
          >
            <IoRemoveOutline size={50} /> CONTACT ME
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flexContainer">
      <div className="leftPage">
        <AnimatedCursor
          innerSize={10}
          outerSize={12}
          color="255, 219, 187"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="submit"]',
            'input[type="reset"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <div className="leftInner">
          <div className="flex flex-col p-5">
            <div className="Name font-bold py-2">Jianhong Li</div>
            <div className="Role OrangeFont font-bold pb-4">
              Software Engineer
            </div>
            <div className="Description SlateFont">
              Aspired software developer at the University of Michigan.
            </div>

            <Navigation />
            <Social />
          </div>
        </div>
      </div>

      <div className="rightPage px-5 space-y-20">
        <a name="abo" />
        <div className="flex flex-col" style={{ marginTop: "25px" }}>
          <div className="OrangeFont font-bold text-sm pb-8">ABOUT ME</div>
          <div className="LightSlateFont text-base">
            Hi, this is Jian Hong Li. I&apos;m currently pursing my computer
            science degree at the University of Michigan in Ann Arbor. I started
            coding Sophomore year of High School and continued since. I enjoy
            both learning and making interesting projects. My career interest is
            a little uncertain right now, but I find cyber-secuity and web
            development (both frontend and backend) super fun and interesting.
            I'm looking forward to taking more new classes and exploring what I
            really want to do in this amazing field of computer science!
          </div>
        </div>

        <a name="exp" />
        <Experience />
        <a name="pro" />
        <Projects />
        <a name="con" />
        <ContactMe />

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

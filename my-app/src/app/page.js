"use client";

import { useState, useLayoutEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";

import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Social from "./components/Social.js";
import Contact from "./components/ContactMe.js";
import ContactMe from "./components/ContactMe.js";

export default function Home() {
  const [onSection, setOnSection] = useState([1, 0, 0, 0]);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const scroll = window.document.documentElement.scrollTop;
    setScrollTop(scroll);
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
  }, [scrollTop]);

  const Navigation = () => {
    return (
      <div className="Invis">
        <div className="py-32">
          <a
            className="flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([1, 0, 0])}
            style={{
              marginLeft: onSection[0] == 1 ? "28px" : "",
              color: onSection[0] == 1 ? "white" : "",
            }}
            href="#abo"
          >
            <IoRemoveOutline size={50} /> ABOUT
          </a>
          <a
            className="flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([0, 1, 0])}
            style={{
              marginLeft: onSection[1] == 1 ? "28px" : "",
              color: onSection[1] == 1 ? "white" : "",
            }}
            href="#exp"
          >
            <IoRemoveOutline size={50} /> EXPERIENCE
          </a>
          <a
            className="flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([0, 0, 1])}
            style={{
              marginLeft: onSection[2] == 1 ? "28px" : "",
              color: onSection[2] == 1 ? "white" : "",
            }}
            href="#pro"
          >
            <IoRemoveOutline size={50} /> PROJECTS
          </a>
          <a
            className="flex flex-row items-center HoverNav text-sm"
            onClick={() => setOnSection([0, 0, 1])}
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
        <div className="leftInner">
          <div className="flex flex-col p-5">
            <div className="Name font-bold py-2">Jianhong Li</div>
            <div className="Role OrangeFont font-bold pb-4">
              Full-Stack Developer
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
          <div className="OrangeFont font-bold text-sm pb-8">ABOUT</div>
          <div className="SlateFont text-base">
            Hi, this is Jian Hong Li. I&apos;m currently studying computer
            science at the University of Michigan. Don&apos;t worry, I&apos;m
            not going to write big paragraphs here. I started coding Sophomore
            year of High School and continued since. I enjoy both learning and
            making interesting projects. My career interest is ML, cybersecuity,
            Web Dev and Game Dev.
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

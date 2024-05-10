"use client";

import {useEffect, useRef} from "react";
import { Content, KeyTextField, isFilled } from "@prismicio/client";
import {  SliceComponentProps } from "@prismicio/react";
import { Span } from "next/dist/trace";
import { gsap } from  "gsap";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
 const component = useRef(null);

 useEffect(()=>{
    let ctx = gsap.context(()=>{
      const tl  = gsap.timeline()

      tl.fromTo(".name-animation",{
        x: -100, opacity:0, rotate: -10
      },

      {
        x:0,
        opacity:1,
        rotate:0,
        ease: "elastic.out(1.25, .7)",
        duration: 1,
        transformOrigin: "left top",
        delay: 0.3,
        stagger:{
          each: 0.1,
          // from: "random",

        }
      }
      )

      tl.fromTo(
        ".job-title", {
          y:20,
          opacity:0,
          scale:1.2
        },{
          opacity:1,
          y:0,
          duration:1,
          scale:1,
          ease: "elastic.out(1.25,0.7)",
        }
      );


    }, component);
    return () => ctx.revert();
    },[]);
 
  const renderLetters = (name:KeyTextField, key:string)  =>{
    if (!name) return;
    return name.split("").map((letter, index) =>(
      <span key={index} className={'name-animation name-animation-${key} inline-block opacity-0'}>
        {letter}
      </span>
    ))
  }


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-strat-1">
          <h1 
            className="mb-2 text-[clamp(6rem,10vmin,10rem)] front-extrabold uppercase leading-none tracking-tighter" 
            aria-label={slice.primary.firstname + " " +slice.primary.lastname }>
            <span className="block text-slate-400">
              {renderLetters(slice.primary.firstname,  'first')}</span>
            <span className="-mt-[0.02em] block text-slate-600"> 
            {renderLetters(slice.primary.lastname,  'last')}</span>
          </h1>
            <span className="job-title block bg-gradient-to-tr from-yellow-200 via-blue-500 to-yellow-200 bg-clip-text text-2xl front-bold uppercase tracking-[1.3em] text-transparent opacity-0 md:text-2xl">
              {slice.primary.tagline}</span>
        
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;

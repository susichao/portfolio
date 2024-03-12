"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { usePrefersReducedMotion } from '@anatoliygatt/use-prefers-reduced-motion';


export default function Avatar({
  image,
  className,
}: {
  image: ImageField;
  className?: string;
}) {
  const component = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();


  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 0.5,
          rotate: 180,
          boxShadow: "0 0 10px rgba(173, 216, 230, 0.3)",
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: prefersReducedMotion ? 0 : 1.3,
          ease: "elastic.out(1, 0.5)",
          boxShadow: "0 0 20px rbgs(173,216,230,0.5)",
        },
      );
      window.onmousemove = (e) => {
              if (!component.current) return; // no component, no animation!
              const componentRect = (
                component.current as HTMLElement
              ).getBoundingClientRect();
              const componentCenterX = componentRect.left + componentRect.width / 2;
      
              let componentPercent = {
                x: (e.clientX - componentCenterX) / componentRect.width / 2,
              };
      
              let distFromCenterX = 1 - Math.abs(componentPercent.x);
      
              gsap
                .timeline({
                  defaults: { duration: 2, overwrite: "auto", ease: "power3.out" },
                })
                .to(
                  ".avatar",
                  {
                    rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
                    duration: 2,
                  },
                  0,
                )
                .to(
                  ".highlight",
                  {
                    opacity: distFromCenterX - 0.7,
                    x: -10 + 20 * componentPercent.x,
                    duration: 0.5,
                  },
                  0,
                );
            };
    }, component);
  
    return () => ctx.revert(); // cleanup!
  }, [prefersReducedMotion]);
  
  return (
    <div className=" w-60 h-60 p-2">
    <div ref={component} className={clsx("relative h-full w-full", className)}>
      <div
        className="avatar aspect-circle overflow-hidden rounded-2xl border-2 border-slate-700 opacity-100"
        style={{ perspective: "200px", perspectiveOrigin: "50% 50%" }}
      >
        <PrismicNextImage
          field={image}
          className="avatar-image object-fill"
          imgixParams={{ q: 90 }}
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-black to-transparent opacity-0 md:block"></div>
      </div>
      </div>
    </div>
  );
}

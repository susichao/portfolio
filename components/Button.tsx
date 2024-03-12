import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { GiExpand } from "react-icons/gi";
import clsx from "clsx";
import { KeyTextField, LinkField } from "@prismicio/client";

type ButtonProps = {
  linkField: LinkField;
  label: KeyTextField;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  linkField,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  return (
    <PrismicNextLink
      field={linkField}
      className= {clsx(
        "group relative flex w-fit text-slate-900 items-center justify-center overflow-hidden square-md border-10 border-blue-800 bg-blue-50  px-4 py-2 font-bold opacity-50 transition-transform ease-out  hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-200 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-5">
        {label} {showIcon && <GiExpand className="inline-block" />}
      </span>
    </PrismicNextLink>
  );
}
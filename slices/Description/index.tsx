import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./Avatar";

/**
 * Props for `Description`.
 */
export type DescriptionProps = SliceComponentProps<Content.DescriptionSlice>;

/**
 * Component for "Description" Slices.
 */
const Description = ({ slice }: DescriptionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center items-center h-full"
    >
      <div className="grid gap-x-2 gap-y-2 md:grid-rows-[10fr,5fr] w-full max-w-4xl">
        <Avatar
          image={slice.primary.avatar}
          className="self-center justify-center col-start-1 col-end-2 row-start-1 md:col-start-1 md:row-start-auto md:row-end-auto overflow-hidden"
        />

        <div className="col-start-1 md:row-start-2 md:col-start-1 md:col-end-2 mb-4">
          <Heading size="lg">
            {slice.primary.title}
          </Heading>
          <Button
            linkField={slice.primary.button_link}
            label={slice.primary.button_text}
            className="mt-4 md:mt-4 mb-4"
          />
        </div>

        <div className="prose prose-mg prose-slate prose-invert col-start-1 row-start-3 block bg-gradient-to-r from-yellow-100 to-slate-200 text-transparent bg-clip-text mt-4">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </div>
    </Bounded>
  );
};



export default Description;

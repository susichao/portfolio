import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import { createClient } from "@/prismicio";
/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice }: ContentIndexProps): Promise<JSX.Element> => {
    const client = createClient()
    const projects = await client.getAllByType("projects")
    const contentType = slice.primary.content_type


    
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size= "lg" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description)&&(
        <div className = "prose prose-lg prose-invert mb-10">
          <PrismicRichText  field={slice.primary.description} />
        </div>
      )}
      <ContentList />
    </Bounded>
  );
};

export default ContentIndex;

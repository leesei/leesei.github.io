import Datetime from "@components/Datetime";
import Tag from "@components/Tag";
import type { PostFrontmatter } from "@content/_schemas";
import { Fragment } from "react";

export interface Props {
  href?: string;
  frontmatter: PostFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, created, description, tags } = frontmatter;
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      <Datetime datetime={created} />
      <ul className="tags-container">
        {tags.map(tag => (
          <Fragment key={tag}>
            <Tag name={tag} />
          </Fragment>
        ))}
      </ul>
      <p>{description}</p>
    </li>
  );
}

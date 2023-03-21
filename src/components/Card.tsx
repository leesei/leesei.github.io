import { CreatedDatetime, UpdatedDatetime } from "@components/Datetime";
import { Fragment } from "react";
import Tag from "@components/Tag";
import type { PostFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: PostFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, created, updated, description, tags } = frontmatter;
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
      <div className="flex">
        {updated && (
          <UpdatedDatetime datetime={updated} size="lg" className="my-2 mr-8" />
        )}
        <CreatedDatetime datetime={created} size="lg" className="my-2" />
      </div>
      <p>{description}</p>
      <ul className="tags-container">
        {tags.map((tag) => (
          <Fragment key={tag}>
            <Tag name={tag} />
          </Fragment>
        ))}
      </ul>
    </li>
  );
}

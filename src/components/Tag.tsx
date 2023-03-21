import { RiHashtag } from "react-icons/ri/index";
import { slugify } from "@utils/slugify";

interface Props {
  name: string;
  size?: "sm" | "lg";
}

export default ({ name, size = "sm" }: Props) => (
  <li
    className={`tag inline-block ${
      size === "sm" ? "my-1 underline-offset-4" : "my-3 mx-1 underline-offset-8"
    }`}
  >
    <a
      href={`/tags/${slugify(name)}`}
      className={`${size === "sm" ? "text-sm" : "text-lg"} group pr-2`}
    >
      <RiHashtag className={`${size === "sm" ? " scale-75" : "scale-110"}`} />
      &nbsp; <span>{name.toLowerCase()}</span>
    </a>
  </li>
);

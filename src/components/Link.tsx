export interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  disabled?: boolean;
}

export default ({
  href,
  children,
  className = "",
  target = "_blank",
}: Props) => {
  return (
    <a
      href={href}
      className={`${className} display-inline-block whitespace-nowrap underline decoration-dashed underline-offset-4 hover:text-skin-accent`}
      target={target}
    >
      <span>{children}</span>
    </a>
  );
};

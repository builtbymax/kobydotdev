import Link from "next/link";

const AvailableBlock = ({ text, lang }) => {
  return (
    // ${lang}/contact
    <Link href={'mailto:hello@koby.dev'} className="available-block">
      <span className="point"></span>
      <span className="title">{text}</span>
    </Link>
  );
};
AvailableBlock.displayName = "AvailableBlock";

export { AvailableBlock };
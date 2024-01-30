import Link from "next/link";

const AvailableBlock = ({ text, lang }) => {
  return (
    <Link href={`${lang}/contact`} className="available-block">
      <span className="point"></span>
      <span className="title">{text}</span>
    </Link>
  );
};
AvailableBlock.displayName = "AvailableBlock";

export { AvailableBlock };
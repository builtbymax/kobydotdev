import Link from "next/link";

export default function AvailableBlock({ text, lang }) {
  return (
    <Link href={`${lang}/contact`} className="available-block">
      <span className="point"></span>
      <span className="title">{text}</span>
    </Link>
  )
};
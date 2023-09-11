import Link from "next/link";
import Logo from "./Logo";

export default function Navigation({ dict, lang }) {
  const navLinks = [
    {
      href: `/${lang}/`,
      title: dict.common.navigation['home'],
    },
    {
      href: `/${lang}/projects`,
      title: dict.common.navigation['projects'],
    },
    {
      href: `/${lang}/interview`,
      title: dict.common.navigation['interview'],
    },
    {
      href: `/${lang}/contact`,
      title: dict.common.navigation['contact'],
    },
  ];

  return (
    <nav>
      <Logo color="dark" />
      <ul>
        <li>
          {navLinks.map((link, index) => (
            <Link href={link.href} title={link.title} key={index}>
              {link.title}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  )
};
import Logo from "../common/Logo";
import LangSwitcher from "./LangSwitcher";

export default function Navigation({ dict, lang }) {
  return (
    <nav>
      <div className="content-size-sl">
        <div className="navigation-container">
          <Logo color="light" />
          <ul className="additional-menu">
            <li>
              <LangSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

/*
import Link from "next/link";
const NavigationMenu = () => {
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
    <ul className="navigation-menu">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.href} title={link.title}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
};
*/
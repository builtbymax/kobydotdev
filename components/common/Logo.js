'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const Logo = ({ color }) => {
  const pathName = usePathname();
  let activeLocale;
  const getActiveLocal = () => {
    if (!pathName) return false;
    const segments = pathName.split('/');
    activeLocale = segments[1];
  };
  getActiveLocal();
  const colorValue = color === "dark" ? "#000" : "#fff";

  return (
    <Link href={`/${activeLocale}`} className="logo">
      <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={colorValue} d="M279.872 77.6665C282.642 121.668 240.029 158.895 202.714 163.38C202.714 163.38 217.772 202.753 231.461 216.27C245.15 229.787 272.85 201.98 279.872 191.05V210.387C264.411 239.17 227.596 270.815 195.113 277.382C171.198 282.217 147.322 282.614 136.048 258.411C133.965 253.927 131.827 244.375 130.55 235.194C127.125 210.461 124.108 166.496 124.108 166.496C124.108 166.496 158.595 164.588 174.699 159.022C190.804 153.456 200.395 145.076 202.859 138.111C208.415 122.399 191.908 115.816 178.3 116.039C135.494 116.738 102.695 169.136 92.5657 204.343L74.0454 279.879H0L65.7567 0L88.1299 3.63973e-05L130.55 4.85297e-05L95.0388 150.61C121.079 101.616 183.147 43.971 224.214 39.0878C265.281 34.2045 277.987 47.6114 279.872 77.6665Z" />
      </svg>
    </Link>
  );
};
Logo.displayName = 'Logo';

export { Logo };
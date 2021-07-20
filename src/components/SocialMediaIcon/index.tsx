import * as React from "react";

import Image from "next/image";

import "./scss/index.module.scss";

interface Medium {
  ariaLabel: string;
  path: string;
  href: string;
}

export interface IconProps extends React.HTMLProps<HTMLAnchorElement> {
  medium: Medium;
  target?: string;
}

const SocialMediaIcon: React.FC<IconProps> = ({ medium, target }) => (
  <a
    href={medium.href}
    target={target || "_blank"}
    aria-label={medium.ariaLabel}
  >
    <Image src={medium.path} className="social-icon" />
  </a>
);

export default SocialMediaIcon;

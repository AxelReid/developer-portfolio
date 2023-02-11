import Link from "next/link";
import Telegram from "@components/icons/Telegram";
import StackOverflow from "@components/icons/StackOverflow";
import Github from "@components/icons/Github";
import LinkedIn from "@components/icons/LinkedIn";
import Twitter from "@components/icons/Twitter";
import { footerLinks } from "@static/links";

const Footer = () => {
  return (
    <div className="bb border-0 border-t py-16">
      <div className="container flex flex-col items-center">
        <h2 className="mb-3 text-5xl font-bold leading-normal">Asilbek</h2>
        <ul className="my-5 flex items-center space-x-3">
          {footerLinks.map((menu, i) => (
            <Link href={menu.link} key={i}>
              <li key={i} className="link text-lg font-normal">
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
        <ul className="flex items-center space-x-7">
          <Telegram className="btn-darker" unstyled />
          <StackOverflow className="btn-darker" unstyled />
          <Github className="btn-darker" />
          <LinkedIn className="btn-darker" />
          <Twitter className="btn-darker" />
        </ul>
        <p className="c-secondary mt-20 text-lg">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

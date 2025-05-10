import Telegram from "@components/icons/Telegram";
import StackOverflow from "@components/icons/StackOverflow";
import Github from "@components/icons/Github";
import LinkedIn from "@components/icons/LinkedIn";
import Twitter from "@components/icons/Twitter";
import EarthCanvas from "@components/canvas/Earth";

const Footer = () => {
  return (
    <div className="bb border-0 border-t">
      <div className="container flex flex-col items-center">
        <ul className=" flex items-center space-x-7 pt-12 ">
          <Telegram className="btn-darker" unstyled />
          <StackOverflow className="btn-darker" unstyled />
          <Github className="btn-darker" />
          <LinkedIn className="btn-darker" />
          <Twitter className="btn-darker" />
        </ul>
        <div className="aspect-square w-full max-w-xs">
          <EarthCanvas />
        </div>
        {/*<p className="c-secondary text-lg">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved
        </p>*/}
      </div>
    </div>
  );
};

export default Footer;

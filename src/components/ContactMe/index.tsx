import Title from "@components/Title";
import { email, phone, telegram_link } from "src/static/social";
import { TelegramSVG } from "@components/icons/Telegram";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import {
  EnvelopeIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { handleHoverEffect } from "@utils/hoverCardEffect";

const talkToMe = [
  {
    icon: <EnvelopeIcon className="h-[30px] w-[30px]" />,
    title: "Email",
    name: "mr.webdevsemail@gmail.com",
    link: "mailto:" + email,
  },
  {
    icon: <PhoneArrowUpRightIcon className="h-[30px] w-[30px]" />,
    title: "Call & Sms",
    name: "99 987-71-53",
    link: "tel:" + phone,
  },
  {
    icon: <TelegramSVG className="h-[33px] w-[33px]" />,
    title: "Telegram",
    name: "@rvse7en",
    link: telegram_link,
  },
];

const ContactMe = () => {
  return (
    <section id="get-in-touch" className="container max-w-5xl pb-32">
      <Title title="Contact Me" desc="Get in touch" />
      <div
        className="flex flex-wrap gap-4"
        id="hover-cards"
        onMouseMove={handleHoverEffect}
      >
        {talkToMe.map((item, i) => (
          <div id="hover-card" key={i} className="flex-1 rounded-lg">
            <span id="hover-card-overlay" />
            <div className="relative p-5">
              {item.icon}
              <h4 className="mt-2 text-lg font-medium">{item.title}</h4>
              <p className="c-secondary">{item.name}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="c-secondary mt-4 flex items-center gap-0.5 transition-[gap] hover:gap-2"
              >
                <span className="whitespace-nowrap font-medium">
                  Get in touch
                </span>
                <ArrowSmallRightIcon className="w-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;

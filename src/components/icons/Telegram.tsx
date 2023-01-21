"use client";

import { telegram_link } from "src/static/social";

const Telegram = ({
  unstyled,
  className = "",
}: {
  unstyled?: boolean;
  className?: string;
}) => {
  return (
    <a href={telegram_link} target="_blank" rel="noreferrer">
      <button
        className={`btn ${
          unstyled ? "" : "bg-cyan-300/10 text-cyan-600"
        } ${className}`}
      >
        <TelegramSVG className="h-[26px] w-[26px]" />
      </button>
    </a>
  );
};

export default Telegram;

export const TelegramSVG = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1.25"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-6 w-6 ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
  </svg>
);

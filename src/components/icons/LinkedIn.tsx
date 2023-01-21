import { linkedIn_link } from "src/static/social";

const LinkedIn = ({ className = "" }: { className?: string }) => {
  return (
    <a href={linkedIn_link} target="_blank" rel="noreferrer">
      <button className={`btn ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          strokeWidth="1.25"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <line x1="8" y1="11" x2="8" y2="16"></line>
          <line x1="8" y1="8" x2="8" y2="8.01"></line>
          <line x1="12" y1="16" x2="12" y2="11"></line>
          <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
        </svg>
      </button>
    </a>
  );
};

export default LinkedIn;

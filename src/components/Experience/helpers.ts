export type WorkType = {
  title: string;
  company: string;
  //location: string;
  desc?: string;
  site?: string;
  date: {
    start: string;
    end?: string;
  };
};

export const experience: WorkType[] = [
  {
    title: "Full-Stack Engineer",
    company: "Freelancing",
    date: {
      start: "2022 Oct",
    },
  },
  {
    title: "Full-Stack Engineer",
    company: "UNIIT Slovakia, Remote full-time",
    date: {
      start: "2023 Apr",
      end: "2025 Jan",
    },
  },
  {
    title: "Lead Frontend Engineer",
    company: "Tinfis Global",
    site: "tinfis.uz",
    date: {
      start: "2022 Feb",
      end: "2022 Oct",
    },
  },
  {
    title: "Lead Frontend Engineer",
    company: "Napa Automotive",
    site: "napaautomotive.uz",
    date: {
      start: "2021 Dec",
      end: "2022 March",
    },
  },
  {
    title: "Frontend Engineer",
    company: "Radiomer UZ",
    date: {
      start: "2021 Apr",
      end: "2021 Aug",
    },
  },
];

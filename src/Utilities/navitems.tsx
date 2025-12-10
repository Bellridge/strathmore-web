export type headerNavItemsType = {
  title: string;
  route: string | null;
  keywords?: string[];
  otherOptions: {
    isActive: boolean;
    data: { title: string; route: string; isLive: boolean }[];
  } | null;
  isVisible: boolean;
  icons?: any;
  isActive?: boolean;
  sectionId?: string;
};

export type footerNavItemsTypes = {
  title: string;
  otherOptions: {
    title: string;
    route: string;
    isPriority: boolean;
  }[];
}[];

export const headerNavItems: headerNavItemsType[] = [
  {
    title: "Home",
    route: "/",
    keywords: ["/"],
    otherOptions: null,
    isVisible: true,
    sectionId: "home",
  },

  {
    title: "What We Do",
    route: "/services",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
    sectionId: "what-we-do",
  },
  {
    title: "Contact Us",
    route: null,
    keywords: [""],
    otherOptions: null,
    isVisible: true,
    sectionId: "contact-us",
  },
];

export const footerNavItems: footerNavItemsTypes = [
  {
    title: "Company",
    otherOptions: [
      {
        title: "Home",
        route: "/",
        isPriority: false,
      },
      {
        title: "What We Do",
        route: "/services",
        isPriority: false,
      },
    ],
  },

  {
    title: "Contact Us",
    otherOptions: [
      {
        title: "info@strathmore.com",
        route: "/",
        isPriority: false,
      },

      {
        title: "Phone",
        route: "/",
        isPriority: true,
      },
    ],
  },
];

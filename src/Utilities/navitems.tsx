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
    isInternal: boolean;
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
        isInternal: true,
      },
      {
        title: "What We Do",
        route: "/services",
        isInternal: true,
      },
    ],
  },

  {
    title: "Contact Us",
    otherOptions: [
      {
        title: "info@strathmore.com",
        route: "mailto:info@strathmoreservice.com",
        isInternal: false,
      },

      {
        title: "+2347075760061",
        route: "tel:+2347075760061",
        isInternal: false,
      },
      {
        title:
          "NSE Building, 1 engineering close off idowu Taylor Victoria Island",
        route: "/",
        isInternal: true,
      },
    ],
  },
];

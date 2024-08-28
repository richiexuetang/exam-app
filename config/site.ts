export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "AWS Cloud Practitioner Exam Prep",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Notes",
      href: "/notes",
    },
    {
      title: "Exams",
      href: "/exams",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

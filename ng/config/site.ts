export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Cameron Squire",
	description: "A 24-year old networking and security enthusiast, surfing on the internet.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/cv",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Resume",
			href: "/cv",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/camsqu",
		twitter: "https://twitter.com/camsqu",
		docs: "https://camsqu.net",
		discord: "https://discord.com/users/134832327061798915",
	},
};

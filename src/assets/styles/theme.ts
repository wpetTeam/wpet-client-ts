const colors = {
	main: "#aa5b42",
	sub: "#f3c5b6",
	login: "rgba(244, 231, 227, 1)",
	dashboard: "#FFFCFB",
	icon: "#D6A291",
	step: "#D6A29180",
	gray: "#686868",
};

export const theme = {
	/* 색상 */
	grayColor: colors.gray,
	aboutBackground: colors.sub,
	aboutLogoText: colors.main,

	loginBackground: colors.login,
	dashboardBackground: colors.dashboard,
	dashboardIcon: colors.icon,

	dogInfoStepText: colors.step,
};

export type Theme = typeof theme;

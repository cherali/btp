declare module 'styled-components' {
	export interface DefaultTheme {
		colors: IColors;
		fontSize: IFontSize;
	}
}


interface IColors {
	white: string;
	black: string;
	primary: string;
	secondary: string;
	yellow: string;
	border: string;
}

interface IFontSize {
	xxSmall: string; // 3x small
	xSmall: string; // 2x small
	small: string; // small
	normal: string; // normal
	medium: string; // medium
	large: string; // 1x large
	xLarge: string; // 2x large
	xxLarge: string; // 3x large
}

interface ITheme {
	colors: IColors;
	fontSize: IFontSize;
}

const whiteColor: string = '#fff'
const blackColor: string = '#000'
const priamryColor: string = '#262626'
const secondaryColor = '#409581'
const yellowColor = '#f7a80b'
const borderColor = '#0000001f'



const fontSize: IFontSize = {
	xxSmall: '10px', // 3x small
	xSmall: '12px', // 2x small
	small: '14px', // small
	normal: '16px', // normal
	medium: '18px', // medium
	large: '20px', // 1x large
	xLarge: '24px', // 2x large
	xxLarge: '32px', // 3x large
}



export const theme: ITheme = {
	colors: {
		white: whiteColor,
		black: blackColor,
		primary: priamryColor,
		secondary: secondaryColor,
		yellow: yellowColor,
		border: borderColor,
	},
	fontSize,
}
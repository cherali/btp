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
	fontSize: IFontSize;
}

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
	fontSize,
}
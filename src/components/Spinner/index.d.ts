interface ISpinnerProps {
  size?: ISpinnerSize;
}

interface ISIZEData {
  dim: string;
  rDim: string;
  border: string;
  margin: string;
}

export interface ISIZE {
  default: ISIZEData;
  small: ISIZEData;
}

export type ISpinnerSize = keyof ISIZE

export interface IContainerSize {
  size: ISpinnerSize;
}

export interface IContainerProps {
  size: ISpinnerSize;
}
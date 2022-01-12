import styled from 'styled-components'
import { SIZE } from './Spinner.biz'
import { IContainerProps, ISpinnerSize } from './index.d';


export const Container = styled.div<IContainerProps>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${p => `calc(${SIZE[p.size].dim} + ${SIZE[p.size].border} + ${SIZE[p.size].margin})`};
  
  .lds-ring {
    display: inline-block;
    position: relative;
    width: ${p => SIZE[p.size].dim};
    height: ${p => SIZE[p.size].dim};
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${p => SIZE[p.size as ISpinnerSize].rDim};
    height: ${p => SIZE[p.size].rDim};
    margin: ${p => SIZE[p.size].margin};
    border: ${p => SIZE[p.size].border} solid ${p => p.theme.colors.yellow};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${p => p.theme.colors.yellow} transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
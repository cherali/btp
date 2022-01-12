import { FC } from 'react'
import { ISpinnerProps } from './index.d';
import { Container } from './Spinner.style';


const Spinner: FC<ISpinnerProps> = ({ size = 'default' }) => {
  return (
    <Container size={size}>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </Container>
  )
}

export default Spinner

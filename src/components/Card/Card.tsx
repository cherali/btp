import { FC } from 'react'
import { ICardProps } from './index.d'
import { CardBody, CardContainer, CardHeader, CardTitle } from './Card.style'


const Card: FC<ICardProps> = ({ children, title }) => {
  return (
    <CardContainer>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardBody>
        {children}
      </CardBody>

    </CardContainer>
  )
}

export default Card

import { FC } from 'react'
import { ICardProps } from './index.d'
import { CardBody, CardContainer, CardHeader, CardTitle } from './Card.style'


const Card: FC<ICardProps> = ({ children, title, action, footer }) => {
  return (
    <CardContainer>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {action}
      </CardHeader>

      <CardBody className='-card-body'>
        {children}
      </CardBody>

      {footer}

    </CardContainer>
  )
}

export default Card

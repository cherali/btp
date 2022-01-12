import styled from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: ${p => `rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px`};
`

export const CardHeader = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.border};
`

export const CardTitle = styled.p`
  font-size: 1.225rem;
  padding: 1rem 1.5rem;
  font-weight: bolder;
`

export const CardBody = styled.div`
  padding: 0.5rem 1rem;
`
import styled from 'styled-components'

export const CommentCardContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

export const CommentCardContent = styled.div`
  border-radius: 8px;
  box-shadow: ${() => `rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px`};
  padding: 8px 16px;
  margin-bottom: 16px;
  width: 100%;
`

export const CommentCardTitle = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.2rem;
`

export const CommentCardBody = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1rem;
  text-indent: 16px;
`

export const IndexText = styled.p`
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  font-weight: bolder;
  padding: 6px 10px;
  border-radius: 50%;
  text-align: center;
`
import styled from 'styled-components'

export const PostCardContainer = styled.button`
  border-radius: 8px;
  box-shadow: ${() => `rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px`};
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: white;
  border: none;
  text-align: start;
  cursor: pointer;
  width: 100%;
`

export const PostCardTitle = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.2rem;
`

export const PostCardBody = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1rem;
`
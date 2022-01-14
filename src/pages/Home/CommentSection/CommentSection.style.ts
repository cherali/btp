import styled from 'styled-components'

export const CommentSectionContainer = styled.div`
  flex: 1;
  .-card-body {
    height: calc(70vh - 70px);
    overflow-y: auto;
  }
`

export const AddCommentContainer = styled.form`
  display: flex;
  gap: 16px;
  padding: 1rem;
  border-top: 1px solid ${p => p.theme.colors.border};
`

export const AddCommentInput = styled.input`
  flex: 1;
  font-size: 16px;
  resize: none;
  border-radius: 8px;
  padding: 0.5rem;
  :disabled {
    background-color: ${p => p.theme.colors.border};
  }
`

export const SendButton = styled.button`
  border-radius: 8px;
  background-color: ${p => p.theme.colors.secondary};
  border: none;
  color: ${p => p.theme.colors.white};
  padding: 0 16px;
  cursor: pointer;
  :disabled {
    background-color: ${p => p.theme.colors.border};
  }
`
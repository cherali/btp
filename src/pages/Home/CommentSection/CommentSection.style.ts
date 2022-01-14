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

export const SuggestionContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  overflow: auto;
  height: 150px;
  top: calc(100% - 10px);
  background-color: ${p => p.theme.colors.white};
  z-index: 1000;
  border: 1px solid ${p =>p.theme.colors.border};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const SuggestionItem = styled.p`
  width: 100%;
  padding: 8px 10px;
`

export const NoTag = styled.p`
  padding: 8px 0;
  margin: 0 auto;
  text-align: center;
  font-weight: bolder;
`
import styled, { css } from 'styled-components'

const Input = styled.input<
  { hasError?: boolean; hasBorder?: boolean }
>`
  color: ${({ theme }) => theme.colors.inputText};
  ${({ theme, hasBorder, hasError }) => {
    // ボーダー表示
    if (hasBorder) {
      // エラーなら赤枠のボーダーに
      return css`
        border: 1px solid
          ${hasError ? theme.colors.danger : theme.colors.border};
        border-radius: 5px;
      `
    } else {
      return css`
        border: none;
      `
    }
  }}
  padding: 11px 12px 12px 9px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 38px;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearence: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

Input.defaultProps = {
  hasBorder: true,
}

export default Input
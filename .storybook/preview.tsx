import { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from '../src/themes'
import * as NextImage from 'next/image'
import React from "react"
import { action } from '@storybook/addon-actions';


export const parameters = {
  actions: { 
    handles: {
      onClick: action('onClick'),
      onChange: action('onChange'),
      // 他のアクションも同様に定義
    },
  },
  // actions: { argTypesRegex: 'on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`


// Themeの適用
// addDecorator()

export default {
  decorators: [(story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  )],

  tags: ["autodocs"]
};

// // next/imageの差し替え
// const OriginalNextImage = NextImage.default;

// NextImage.default = (props) => (
//   typeof props.src === 'string' ? (
//     <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//   ) : (
//     <OriginalNextImage {...props} unoptimized />
//   )
// )

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => typeof props.src === 'string' ? (
//     <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//   ) : (
//     <OriginalNextImage {...props} unoptimized />
//   ),
// })
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ShapeImage from './index'

export default {
  title: 'Atoms/ShapeImage',
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof ShapeImage>

const Template: ComponentStory<typeof ShapeImage> = (args) => (
  <ShapeImage {...args} />
)

// 円形
export const Circle = Template.bind({})
Circle.args = { src: '/images/sample/1.jpg', shape: 'circle', width: 320, height: 320 }

// 四角形
export const Square = Template.bind({})
Square.args = { src: '/images/sample/1.jpg', shape: 'square', width: 320, height: 320 }
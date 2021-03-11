import React from 'react'

import { Meta } from '@storybook/react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks'

import App, { ReactDeclinerProps as AppProps } from '../src'

const title = 'react-decliner'

export const ReactDecliner: React.FC<Partial<AppProps>> = (props) => {
  const { num = 0, one = '', two = '', many = '', ...other } = props

  return (
    <>
      {num} <App num={num} one={one} two={two} many={many} {...other} />
    </>
  )
}

const args: Partial<AppProps> = {
  one: 'Рубль',
  two: 'Рубля',
  many: 'Рублей',
  num: 1,
}

export default {
  title,
  component: ReactDecliner,
  argTypes: {},
  args,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>{title}</Title>
          <Subtitle></Subtitle>
          <Description></Description>
          <Primary></Primary>
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta

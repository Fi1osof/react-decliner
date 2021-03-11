import React from 'react'
import Head from 'next/head'
import App from '../../../src'

const MainPage: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Component boilerplate</title>
        <meta
          name="description"
          content="Component boilerplate for prisma-cms"
        />
      </Head>
      111 <App num={111} one="Рубль" two="Рубля" many="Рублей" {...props} />
    </>
  )
}

export default MainPage

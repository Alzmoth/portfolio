import Head from 'next/head'

import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Alzmoth's Homapage" />
        <meta name="author" content="Muhammed Ali Nayir" />
        <meta name="author" content="Alzmoth" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Alzmoth - Muhammed Ali Nayir" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Alzmoth Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt="80px">
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main

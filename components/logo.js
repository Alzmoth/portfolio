import Link from 'next/link'

import { Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Text
          color={useColorModeValue('gray.900', 'whiteAlpha.900')}
          fontFamily=" Roboto, sans-serif"
          fontSize={24}
          ml={3}
        >
          Home
        </Text>
      </a>
    </Link>
  )
}

export default Logo

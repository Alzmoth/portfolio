import {
  Flex,
  Grid,
  Heading,
  Image,
  Progress,
  ProgressLabel,
  Stack
} from '@chakra-ui/react'
import { techStacks } from '../public/data'

export const Stacks = probs => {
  return (
    <>
      <Heading m={4} pt={4} fontSize={20} as="h5">
        {probs.stack?.title}
      </Heading>

      <Flex
        direction="column"
        justifyContent="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
        padding={5}
      >
        <Grid
          w="full"
          gridGap="4"
          gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
        >
          {techStacks
            .filter(item => item.cat == probs.stack?.cat)
            .map(item => (
              <Stack
                borderRadius="25"
                border="1px solid #6D9886"
                key={item.id}
                p={3}
              >
                <Image
                  objectFit="contain"
                  marginBottom={2}
                  src={item.img}
                  alt={item.bg}
                  style={{ height: '150px' }}
                />

                <Heading
                  color="teal.600"
                  fontSize={23}
                  textTransform="capitalize"
                >
                  {item.title}
                </Heading>
                <Progress colorScheme={item.bg} size="lg" value={item.value}>
                  <ProgressLabel fontSize={11}>%{item.value}</ProgressLabel>
                </Progress>
              </Stack>
            ))}
        </Grid>
      </Flex>
    </>
  )
}

export default Stacks

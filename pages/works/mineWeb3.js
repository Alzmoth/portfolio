import { Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Web 3 Mine">
    <Container maxW="container.md">
      <Title>MineWeb3</Title>
      <P>
        This is simple game where you can mine the block and earn coins. Project
        not complited yet. You can try the game for now, and soon you will be
        able to play with real tokens
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mineweb3.vercel.app/">
            https://mineweb3.vercel.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs,Tailwind css,Web3, NodeJs,</span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkImage src="/images/web3mineg.jpg" alt="Memories" />
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkImage src="/images/mine3s.jpg" alt="Memories" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

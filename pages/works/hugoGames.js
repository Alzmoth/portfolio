import { Container, List, ListItem, SimpleGrid } from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Hugoman">
    <Container maxW="container.md">
      <Title>Hugoman</Title>
      <P>Hugoman</P>
      <P>
        I developed this game as a graduation project. It works on both mobile
        and desktop. The game is similar to subway surface, but it is not
        endless, it has 5 levels.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web - Mobil - Desktop</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, C#</span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkImage src="/images/hugo2.jpg" alt="hugo" />
        <WorkImage src="/images/hugo.jpeg" alt="hugo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

import { Container, List, ListItem, SimpleGrid } from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Forev">
    <Container maxW="container.md">
      <Title>Forev</Title>
      <P>
        I made this app in 2018-2019 for internal use for sales and counting.
        Forev has 5 stores. I visit sometimes and I&apos;m glad to see they use
        the app I made
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ionic - PHP - Mysql</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web - Android - IOS </span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkImage src="/images/for1.jpg" alt="Forev" />
        <WorkImage src="/images/for2.jpg" alt="Forev" />
        <WorkImage src="/images/for3.jpg" alt="Forev" />
        <WorkImage src="/images/for4.jpg" alt="Forev" />
        <WorkImage src="/images/for5.jpg" alt="Forev" />
        <WorkImage src="/images/for6.jpg" alt="Forev" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

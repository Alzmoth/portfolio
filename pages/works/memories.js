import { Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Memories">
    <Container maxW="container.md">
      <Title>Memories</Title>
      <P>
        A simple facebook like application where you can add and organize your
        memories. I made this project for practice
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://alzmoth-memories.netlify.app/">
            https://alzmoth-memories.netlify.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs,Material UI,Redux, NodeJs, MongoDB </span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkImage src="/images/memories.jpg" alt="Memories" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

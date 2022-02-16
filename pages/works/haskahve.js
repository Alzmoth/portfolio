import { Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Has Kahve">
    <Container maxW="container.md">
      <Title>Has Kahve</Title>
      <P>
        The website I made for a local coffee producer to sell. I made a sales
        site from start to finish with the admin panel. There are still some
        deficiencies and bugs on the site, I am improving it as I find time.
      </P>
      <P>
        We are currently closed to overseas sales, but sales to the whole world
        will begin as soon as possible.
      </P>
      <P>Has Kahve is a coffee producer brand in Konya, Turkey.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://haskahve.com">
            https://haskahve.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            ReactJs,Material UI,Redux Toolkit, NodeJs, ExpressJs, MongoDB{' '}
          </span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkImage src="/images/has.jpg" alt="HasKahve" />
        <WorkImage src="/images/has2.jpg" alt="HasKahve" />
        <WorkImage src="/images/has1.jpg" alt="HasKahve" />
        <WorkImage src="/images/has3.jpg" alt="HasKahve" />
        <WorkImage src="/images/has4.jpg" alt="HasKahve" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

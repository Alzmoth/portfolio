import { Container, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Crypto Viewer">
    <Container maxW="container.md">
      <Title>Crypto Viewer</Title>
      <P>
        Cryptocurrency market capitalization is a simple, straightforward way of
        finding out how big a digital currency is. A site similar to Coin Market
        Cap.
      </P>
      <P>
        Used coinranking as API, sometimes given Cors Errors, if the site
        doesn&apos;t open, you can open it with chrome cors extension or similar
        something.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://alzmoth-crypto-viewer.netlify.app/">
            https://alzmoth-crypto-viewer.netlify.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs,Ant Desing,Redux Toolkit </span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <WorkImage src="/images/cryptoviewer.jpg" alt="cryptoviewer" />
        <WorkImage src="/images/works/cv1.jpg" alt="cryptoviewer" />
        <WorkImage src="/images/works/cv2.jpg" alt="cryptoviewer" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

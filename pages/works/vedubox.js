import {
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Vedubox">
    <Container maxW="container.md">
      <Title>Vedubox</Title>
      <P>
        Vedubox is an LMS company. I worked remotely here for more than 2 years
        as a Full Stack Developer. The company has grown incredibly after
        Covid-19
      </P>
      <P>
        I worked here for a long time so I worked on almost every part of the
        project and helped my colleagues. The main things I do are;
      </P>
      <UnorderedList ml={10}>
        <ListItem>
          Migrate the entire project to the cloud system. We used Azure as cloud
          system.I ensured the smooth and consistent running of the project.
        </ListItem>
        <ListItem>Whole devops works</ListItem>
        <ListItem>I worked on Zoom and microsoft teams integration.</ListItem>
        <ListItem>fix performance issues</ListItem>
        <ListItem>Urgent work and bug fix</ListItem>
        <ListItem>
          I worked in the Event, Course, Reports, Exams, Public api, Mobile,
          Desktop etc. part
        </ListItem>
      </UnorderedList>
      <P>
        Shortly, I worked all over the project and for 1 week before I quit, I
        explained the details of the system to my colleagues and prepared
        documentation. I left the job well without letting the company down. I
        still talk to my former co-workers and managers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://vedubox.com.tr">
            https://vedubox.com.tr
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# - AngularJs - Angular - .Net - Azure - MsSql</span>
        </ListItem>
      </List>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <video autoPlay="autoplay" muted loop width="750" height="500">
          <source src="/images/egitim_half_compressed.mp4" type="video/mp4" />
        </video>
        <video autoPlay="autoplay" muted loop width="750" height="500">
          <source src="/images/total1_half_compressed.mp4" type="video/mp4" />
        </video>
        <WorkImage src="/images/vedu1.png" alt="vedubox" />
        <WorkImage src="/images/vedu2.jpg" alt="vedubox" />
        <WorkImage src="/images/vedu3.png" alt="vedubox" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

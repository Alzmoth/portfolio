import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'
import { TStacks } from '../public/data'
import Stacks from '../components/Stacks'
import Contact from '../components/Contact'

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <Heading as="h1" mb={4} textAlign="center">
        ABOUT ME
      </Heading>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title">
            Hello I am Ali
          </Heading>
          <Box fontSize={18} mt={5}>
            I am Full-Stack Web Developer ( Front-End / Back-End / Devops )
          </Box>
          <Box fontSize={18} mt={3}>
            <b>Alzmoth</b> is my nickname since 2012
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="185px"
            display="inline-block"
            borderRadius="full"
            src="/images/Alzmoth.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Divider />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Konya/Turkey.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from Computer Science in Selçuk Universty and Started to
          work in the private sector. Build web and mobile app with Ionic and
          Php.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>I have started at Vedubox. Vedubox is an
          integrated system which offers the most powerful and flexible tools
          for online courses, trainings, online exams as well as webinar and
          video conferencing.. Position: Full Stack Developer, Integration and
          Maintaning Zoom, Msteams. Create new feature and bug fix. Stack:
          Angularjs, C#, .Net, Mssql,
        </BioSection>
        <BioSection>
          <BioYear>2021 To Present</BioYear>I left at Vedubox in June, then I
          complated my military service. I improve myself on web technologies
          and works as a freelance.
        </BioSection>
      </Section>

      <Divider />
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Shortly Me
        </Heading>
        <Paragraph>
          Hi, my fullname Muhammed Ali Nayir, Alzmoth is my nickname. I live in
          Konya/Turkey and 27 years old for now. I have been working as a
          software developer since 2017. zubidup you can check my project
        </Paragraph>
        <Paragraph>
          I follow the latest technologies, To tell the truth, I dont like css
          very much but If I see a beautiful design, I wonder and look at how it
          was made. I like Crypto technologies and have done a few small
          projects. I would like to work on Crypto but I dont have enough
          experience . Recently i work freelance and I am developing zubidub as
          a side project. If it is mature enough now, you can review my project
          from the link :)
          <NextLink href="https://www.zubidub.com">
            <Link> Zubidub</Link>
          </NextLink>
          .
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading
          as="h3"
          fontSize={24}
          variant="section-title"
          textAlign="center"
        >
          Tech Stacks
        </Heading>
        {TStacks.map(stack => (
          <Stacks key={stack.id} stack={stack} />
        ))}

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Works
            </Button>
          </NextLink>
        </Box>
      </Section>
      <hr></hr>
      <Section delay={0.3}>
        <Heading
          as="h3"
          fontSize={24}
          variant="section-title"
          textAlign="center"
        >
          Contact
        </Heading>
        <Contact />
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List templatecolumns="repeat(5, 1fr)" gap={6}>
          <ListItem>
            <Link href="https://github.com/Alzmoth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Alzmoth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Muhammed Ali Nayir
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/alzmoth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Alzmoth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/Alzmoth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @Alzmoth
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://discord.com/channels/@me/934435377698201610"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home

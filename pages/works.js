import {
  Heading,
  SimpleGrid,
  Divider,
  Tag,
  TagLabel,
  HStack
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import cryptoviewer from '../public/images/cryptoviewer.jpg'
import memories from '../public/images/memories.jpg'
import hugo from '../public/images/hugo2.jpg'
import has from '../public/images/has.jpg'
import forev from '../public/images/forev.jpg'
import web3mine from '../public/images/web3mine.jpg'
import vedu from '../public/images/vedulogo.png'

const Works = () => (
  <Layout title="Works">
    <Heading as="h2" fontSize={32} textAlign="center" mb={6}>
      Works
    </Heading>

    <Section delay={0.1}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Professional Works
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.1}>
        <WorkGridItem
          style={{ height: '150px' }}
          id="vedubox"
          title="Vedubox"
          thumbnail={vedu}
        >
          Vedubox is virtual workplace for your learning, meeting and
          collaboration.
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>C#-.Net</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Angularjs-Angular</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Zoom-Teams</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>LMS</TagLabel>
          </Tag>
        </HStack>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem
          style={{ height: '150px' }}
          id="haskahve"
          title="Has Kahve"
          thumbnail={has}
        >
          E-Commerce site for a local Coffe Company.
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>ReactJs</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>NodeJs</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Material UI</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Coffee</TagLabel>
          </Tag>
        </HStack>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem
          style={{ height: '150px' }}
          id="forev"
          title="Forev"
          thumbnail={forev}
        >
          An app used for sales and counting products in Forev company.
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Ionic</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>PHP</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Mysql</TagLabel>
          </Tag>
        </HStack>
      </Section>
    </SimpleGrid>
    <Section delay={0.3}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Other Works
      </Heading>
    </Section>
    <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem
          id="mineWeb3"
          title="Web3 Mine Project"
          thumbnail={web3mine}
        >
          Play Mine game with Web3.js and Ethereum.
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Tailwind</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>NodeJs</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Web3</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Crypto</TagLabel>
          </Tag>
        </HStack>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          id="cryptoviewer"
          title="Crypto Viewer"
          thumbnail={cryptoviewer}
        >
          Crypto and crypto news tracking App.
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Ant Design</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Crypto</TagLabel>
          </Tag>
        </HStack>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          minHeight="350px"
          id="memories"
          title="Memories"
          thumbnail={memories}
        >
          You can add Memories, likes and commend, Basic facebook
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Material UI</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>NodeJs</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Mongo DB</TagLabel>
          </Tag>
        </HStack>
      </Section>
      <Section delay={0.3}>
        <WorkGridItem
          style={{ height: '150px' }}
          id="hugoGames"
          title="Hugoman"
          thumbnail={hugo}
        >
          I developed this game as a graduation project.
        </WorkGridItem>
        <HStack mt={4} ml={4} spacing={4}>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Unity</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>C#</TagLabel>
          </Tag>
          <Tag size="lg" borderRadius="full" variant="solid" colorScheme="blue">
            <TagLabel>Mobile Games</TagLabel>
          </Tag>
        </HStack>
      </Section>
    </SimpleGrid>
  </Layout>
)

export default Works

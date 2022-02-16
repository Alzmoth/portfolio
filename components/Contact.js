import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'

const initialState = {
  email: '',
  name: '',
  text: ''
}
const Contact = () => {
  const [messageSent, setMessageSent] = useState(null)
  const form = useRef()
  const [inputs, setInputs] = useState(initialState)
  const handleInputChange = event => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xp1n7uy',
        'template_cw87qim',
        form.current,
        'user_C1T5XxNkyS6AndwPVODgD'
      )
      .then(
        result => {
          console.log(result.text)
          setMessageSent(true)
          setInputs({ ...initialState })
        },
        error => {
          console.log(error.text)
          setMessageSent(false)
        }
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormControl pl={10} pr={10}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          onChange={handleInputChange}
          background="white"
          type="text"
          name="name"
        />
        <FormLabel htmlFor="email">Enter E-Mail</FormLabel>
        <Input
          id="email"
          onChange={handleInputChange}
          background="gray200"
          type="email"
          name="email"
        />
        <FormLabel htmlFor="message">Your Message</FormLabel>
        <Textarea
          onChange={handleInputChange}
          id="message"
          size="sm"
          background="white"
          type="text"
          name="message"
        />
        <FormHelperText>I&apos;ll never share your email.</FormHelperText>
        {messageSent == true && (
          <Alert status="success">
            <AlertIcon />
            Your message has been sent successfully.
          </Alert>
        )}
        {messageSent == false && (
          <Alert status="error">
            <AlertIcon />
            Your message could not be sent, please send an e-mail to
            &apos;malinayir@gmail.com&apos;
          </Alert>
        )}
        <Box align="center" my={4}>
          <Button type="submit" width={150} size="md" colorScheme="teal">
            Send
          </Button>
        </Box>
      </FormControl>
    </form>
  )
}

export default Contact

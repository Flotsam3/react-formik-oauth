import React from 'react';
import { Button, Card, Field, Input, Stack } from "@chakra-ui/react";

export default function FormCard({values, handleBlur, handleChange, handleGoogleAuth}) {
  return (
    <Card.Root maxW="sm" bg="yellow.200" borderColor="orange.500">
        <Card.Header>
            <Card.Title>Sign up</Card.Title>
            <Card.Description>
                Fill in the form below to create an account
            </Card.Description>
        </Card.Header>
        <Card.Body>
            <Stack gap="4" w="full">
                <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input type='text' name='name' onChange={handleChange} value={values.name} onBlur={handleBlur} borderColor="orange.500" outline="none"/>
                </Field.Root>
                <Field.Root>
                    <Field.Label>Email</Field.Label>
                    <Input type='email' name='email' onChange={handleChange} value={values.email} onBlur={handleBlur} borderColor="orange.500" outline="none"/>
                </Field.Root>
                <Field.Root>
                    <Field.Label>Password</Field.Label>
                    <Input type='password' name='password' onChange={handleChange} value={values.password} onBlur={handleBlur} borderColor="orange.500" outline="none"/>
                </Field.Root>
            </Stack>
        </Card.Body>
        <Card.Footer style={{display: "flex", flexDirection: "column"}}>
            <Button style={{width: "70%"}} variant="solid">Sign in with Email</Button>
            <p>Or sign in with:</p>
            <Button style={{width: "70%"}} variant="solid" onClick={handleGoogleAuth}>Google</Button>
            <Button style={{width: "70%"}} variant="solid">Github</Button>
        </Card.Footer>
  </Card.Root>
  )
}

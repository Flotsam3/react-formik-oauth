import React from 'react';
import { useAuth } from "../components/AuthProvider";
import {Avatar, Button, Card, HStack, Stack, Strong, Text, Flex} from "@chakra-ui/react";
import { LuCheck, LuX } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

export default function Members() {
    const navigate = useNavigate();
    const { user, logout, setUser } = useAuth();

    async function handleLogout(){
        const response = await fetch("http://localhost:3000/auth/logout", {
            method: "POST",
            credentials: "include",
        });
    
        if (response.ok) {
            setUser(null);
            navigate("/");
        } else {
            console.error("Logout failed");
        }
    }

  return (
    <Flex justify="center" m="5">
        <Card.Root width="320px">
            <Card.Body>
                <HStack mb="6" gap="3">
                    <Avatar.Root>
                        <Avatar.Image src="https://images.unsplash.com/photo-1511806754518-53bada35f930" />
                        <Avatar.Fallback name="Nate Foss" />
                    </Avatar.Root>
                    <Stack gap="0">
                        <Text fontWeight="semibold" textStyle="sm">
                        {user?.displayName}
                        </Text>
                        <Text color="fg.muted" textStyle="sm">
                        @{user?.displayName}
                        </Text>
                    </Stack>
                </HStack>
                <Card.Description>
                    <Strong color="fg">{user?.displayName} </Strong>
                    Come back soon!
                </Card.Description>
            </Card.Body>
            <Card.Footer>
                <Button variant="subtle" colorPalette="red" flex="1" onClick={handleLogout}>
                    <LuX />
                    Logout
                </Button>
            </Card.Footer>
        </Card.Root>
    </Flex>
  )
}

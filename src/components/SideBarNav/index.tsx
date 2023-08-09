import React from "react";
import { Link as ChakraLink , Stack , Text} from '@chakra-ui/react';
import { useRouter } from "next/router";

const SideBarNav = () => {
  const {asPath} = useRouter();

  return (
    <Stack spacing={'6'}>
        <Stack>
            <Text fontSize={'xs'} fontWeight={'bold'} color={'gray.400'}>
                CADASTRO
            </Text>

            <Stack >
                <ChakraLink
                _hover={{bg: 'gray.100'}}
                px={'4'}
                py={'2'}
                borderRadius={'5'}
                bg={asPath === '/' ? "gray.200" : ""}
                >

                  <a href="/">
                     <Text fontSize={'md'} fontWeight={'medium'} color={'gray.500'}>
                        PRODUTOS
                     </Text>
                  </a>

                </ChakraLink>
            </Stack>
        </Stack>

        <Stack>
            <Text fontSize={'xs'} fontWeight={'bold'} color={'gray.400'}>
                ESTOQUE
            </Text>

            <Stack >
                <ChakraLink
                _hover={{bg: 'gray.100'}}
                px={'4'}
                py={'2'}
                borderRadius={'5'}
                bg={asPath === '/' ? "gray.200" : ""}
                >

                  <a href="/balance">
                     <Text fontSize={'md'} fontWeight={'medium'} color={'gray.500'}>
                        SALDO
                     </Text>
                  </a>

                </ChakraLink>
            </Stack>

            <Stack >
                <ChakraLink
                _hover={{bg: 'gray.100'}}
                px={'4'}
                py={'2'}
                borderRadius={'5'}
                bg={asPath === '/' ? "gray.200" : ""}
                >

                  <a href="/entries">
                     <Text fontSize={'md'} fontWeight={'medium'} color={'gray.500'}>
                        ENTRADAS
                     </Text>
                  </a>

                </ChakraLink>
            </Stack>

            <Stack >
                <ChakraLink
                _hover={{bg: 'gray.100'}}
                px={'4'}
                py={'2'}
                borderRadius={'5'}
                bg={asPath === '/' ? "gray.200" : ""}
                >

                  <a href="/stockOutputs">
                     <Text fontSize={'md'} fontWeight={'medium'} color={'gray.500'}>
                        SAÍDAS
                     </Text>
                  </a>

                </ChakraLink>
            </Stack>
        </Stack>
    </Stack>
  )
};

export default SideBarNav;
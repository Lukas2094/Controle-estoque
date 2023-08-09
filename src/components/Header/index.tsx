import React from 'react';
import * as S from './styles';
import { useSidebarContext } from '@/contexts/SideBarContext.js';
import {FiMenu} from 'react-icons/fi';
import { useBreakpointValue } from '@chakra-ui/react';


const Header = () => {

    const isMobile = useBreakpointValue({
        base: true,
        lg: false,
    });

    const {onOpen} = useSidebarContext();

    return (
        <S.Container
        as={"header"}
        w={'100%'}
        maxW={1120}
        h={'20'}
        mx={'auto'}
        px={'2'}
        py={'2'}
        align={'center'}
        boxShadow={'0 1px 0 #ccc'}
        color={'gray.500'}
        fontWeight={'bold'}
        >
            {isMobile && (
                <S.IconsButton 
                    icon={<S.Icons as={FiMenu} />}
                    onClick={onOpen}
                    variant={'unstyled'}
                    fontSize={'20'}
                    mr={'2'}
                >

                </S.IconsButton>
            )}

            <S.Typography>Logo</S.Typography>

            <S.Container ml={'auto'}>
              <S.Stack>
                <S.Typography>Lucas Silva</S.Typography>
                <S.AvatarIcon size={'md'} name='Lucas Silva'/>
              </S.Stack>
            </S.Container> 
        </S.Container>
    )
}

export default Header;
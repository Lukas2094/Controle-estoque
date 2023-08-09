import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue
} from '@chakra-ui/react'
import React from 'react';
import { useSidebarContext } from '@/contexts/SideBarContext.js';
import SideBarNav from '../SideBarNav';

const SideBar = () => {

    const {isOpen , onClose} = useSidebarContext();

    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSideBar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={() => onClose()}>
              <DrawerOverlay>
                <DrawerContent p={'2'} onClick={() => onClose()}>
                    <DrawerCloseButton />
                    <DrawerHeader />

                    <DrawerBody>
                        <SideBarNav />
                    </DrawerBody>

                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as='aside' w={'64'} mr={'8'}>
            <SideBarNav />
        </Box>
    )
};

export default SideBar;
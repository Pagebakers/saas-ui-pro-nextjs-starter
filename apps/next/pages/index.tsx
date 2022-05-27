import { Heading, Text } from '@chakra-ui/react'

import { Menu, MenuItem, MenuList, MenuButton, Button } from '@saas-ui/react'

import { AppShell, Sidebar, SidebarMenu } from '@saas-ui/pro'

import type { NextPage } from 'next'

import { TenantMenu } from 'app'

const Home: NextPage = () => {
  return (
    <AppShell
      sidebar={
        <Sidebar>
          <SidebarMenu label="test">
            <MenuItem>Blaat</MenuItem>
          </SidebarMenu>
        </Sidebar>
      }
    >
      <Heading>Saas UI Pro</Heading>
      <Text>PNPM - Next.js - Starter</Text>
      <Menu>
        <MenuButton>Test</MenuButton>
        <MenuList>
          <MenuItem>Test</MenuItem>
        </MenuList>
      </Menu>
      <TenantMenu />
    </AppShell>
  )
}

export default Home

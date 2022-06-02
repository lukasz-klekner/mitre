import { useState } from 'react'
import { Box, Tab, styled } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import Category from './Category'
import Nav from './Nav'

const S = {
  Box: styled(Box)(() => ({
    borderBottom: '1px solid divider',
  })),

  TabPanel: styled(TabPanel)(() => ({
    padding: '0px',
  })),
}

const Tabs = ({ categories, navigator }) => {
  const [activeTab, setActiveTab] = useState('Pre-ATT&CK')

  const handleTabChange = (_, newValue) => setActiveTab(newValue)

  return (
    <Box>
      <TabContext value={activeTab}>
        <S.Box>
          <TabList onChange={handleTabChange}>
            {categories.map(({ name }) => (
              <Tab key={name} label={<Category name={name} />} value={name} />
            ))}
          </TabList>
        </S.Box>
        <div>
          {categories.map(({ id, name }) => (
            <S.TabPanel key={name} value={name}>
              <Nav id={id} navigator={navigator} />
            </S.TabPanel>
          ))}
        </div>
      </TabContext>
    </Box>
  )
}

export default Tabs

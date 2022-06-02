import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Nav from './Nav'

function Tabs({ categories, navigator }) {
  const [activeTab, setActiveTab] = useState('Pre-ATT&CK')

  const handleTabChange = (_, newValue) => setActiveTab(newValue)

  return (
    <Box>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange}>
            {categories.map(({ name }) => (
              <Tab key={name} label={name} value={name} />
            ))}
          </TabList>
        </Box>
        {categories.map((category) => (
          <TabPanel value={category.name}>
            <Nav id={category.id} name={category.name} navigator={navigator} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

export default Tabs

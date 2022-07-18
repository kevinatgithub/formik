import { Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TabPanel from '../../components/layout/TabPanel'
import FocusedView from './FocusedView'
import ResourceBar from './ResourceBar'
import UnitsList from './UnitsList'

function GameLayout() {
    const [tab, setTab] =useState(0)
  return (
    <>
        <ResourceBar />
        <Grid container spacing={2} pt={2} pl={2}>
            <Grid item xs={6}>
                <Tabs value={tab} onChange={(e,val) => setTab(val)}>
                    <Tab value={0} label="Units" />
                    <Tab value={1} label="Buildings" />
                </Tabs>
                <TabPanel value={tab} index={0}><UnitsList /></TabPanel>
                <TabPanel value={tab} index={1}>Buildings Panel</TabPanel>
            </Grid>
            <Grid item xs={6}>
                <FocusedView />
            </Grid>
        </Grid>
    </>
  )
}

export default GameLayout
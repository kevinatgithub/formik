import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { World } from '../Game'

function ResourceBar() {
    const world = useContext(World)
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                Food {world.food}
            </Grid>
        </Grid>
    </div>
  )
}

export default ResourceBar
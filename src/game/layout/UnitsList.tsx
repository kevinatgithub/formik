import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { FC, useContext } from 'react'
import { World } from '../Game'
import { IWorker } from '../types'
import Worker from '../units/Worker'

function UnitsList() {
    const world = useContext(World)
  return (
    <Grid container spacing={2}>
        {world.units.map((w,i) => <UnitItem key={i} unit={w} />)}
    </Grid>
  )
}

export default UnitsList

const UnitItem:FC<{unit:any}> = ({unit}) => {
    const world = useContext(World)

    return <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography>
            {unit.entity} {unit.id} : {unit.state.toUpperCase()}
          </Typography>
        </CardContent>
        <CardActions>
           <Button size='small' onClick={() => world.setFocus(unit)}>Select</Button>
        </CardActions>
      </Card>
    </Grid>
}
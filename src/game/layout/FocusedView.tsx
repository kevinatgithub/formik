import React, { useContext } from 'react'
import { World } from '../Game'
import { IWorker } from '../types'
import Worker from '../units/Worker'

function FocusedView() {
    const world = useContext(World)
    let display = <></>
    switch (world.focused?.entity){
        case 'WORKER':
            return <Worker worker={world.focused as IWorker} />
    }
  return (
    <>
        {display}
    </>
  )
}

export default FocusedView
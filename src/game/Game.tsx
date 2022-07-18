import React, { useState } from 'react'
import GameLayout from './layout/GameLayout'
import { IWorldState, makeid, useRandomId } from './types'


const defaults: IWorldState = {
    food: 0,
    units: [
        { id: makeid(10), state: 'IDLE', entity: 'WORKER', action: null, target: null },
        { id: makeid(10), state: 'IDLE', entity: 'WORKER', action: null, target: null }
    ],
    focused: null,
    setFocus: () => {}
}

export const World = React.createContext(defaults)

function Game() {
    const [focused,setFocus] = useState()
    const contextValues = {...defaults, focused, setFocus}
  return (
    <World.Provider value={contextValues}>
        <GameLayout />
    </World.Provider>
  )
}

export default Game
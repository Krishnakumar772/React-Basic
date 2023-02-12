import React from 'react'
import {userContext,channelContext} from './App'

function App3() {
  return (
    <div>
    <userContext.Consumer>
    {
        user => {
            return (
                <channelContext.Consumer>
                    {
                        channel => {
                          return <div>channel context {channel} and then userContext {user}</div>
                        }
                    }
                </channelContext.Consumer>
            )
        }
    }

    </userContext.Consumer>
    
    </div>
  )
}

export default App3

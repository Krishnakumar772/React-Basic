import React from 'react'

import { userContext,channelContext } from './App'

function ComponentC() {
  return (
    <div>
    <userContext.Consumer>
        {
            user => {
                return (
            <channelContext.Consumer>
                {
                    channel => {
                        return <div>channel context Api {channel}  and userContext Api {user}</div>
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

export default ComponentC

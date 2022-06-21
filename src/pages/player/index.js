import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight,
} from './style';

const HYPlayer = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>HyPlayerInfo</h2>
          <h2>HYSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>HYSimiPlaylist</h2>
          <h2>HYSimiSongs</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default HYPlayer
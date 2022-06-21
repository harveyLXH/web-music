import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/format-utils';

import { SongsCoverWrapper } from './style';

const HYSongsCover = memo((props) => {
  const { info } = props;

  const { copywriter, creator } = info;
  const author = copywriter ? copywriter : creator ? creator.nickname : "";

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {author}
      </div>
    </SongsCoverWrapper>
  )
})

export default HYSongsCover
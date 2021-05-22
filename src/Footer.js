import React from 'react'
import './Footer.css'
import StarIcon from '@material-ui/icons/Star';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import {IconButton} from '@material-ui/core'

export default function Footer() {
    return (
        <div className='footercontainer'>
          <div className='replay'>
            <IconButton>
                <ReplayIcon></ReplayIcon>
            </IconButton>
           </div>  
           <div className='closeIcon'>
            <IconButton>
                <CloseIcon></CloseIcon>
            </IconButton>
            </div>
            <div className='star'> 
            <IconButton>
                <StarIcon></StarIcon>
            </IconButton>
            </div>
            <div className='fav'>
           <IconButton>
               <FavoriteIcon></FavoriteIcon>
           </IconButton>
          </div>
          <div className='offline'>
           <IconButton>
               <OfflineBoltIcon></OfflineBoltIcon>
           </IconButton>
           </div>

        </div>
    )
}

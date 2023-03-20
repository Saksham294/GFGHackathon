import React from 'react'
import './Music.css'
import ReactAudioPlayer from 'react-audio-player';

const Music = ({img,audioUrl}) => {


    return (
        <div>
        <ReactAudioPlayer
        src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        autoPlay
        controls
        /> 
        </div>
    )
}

export default Music

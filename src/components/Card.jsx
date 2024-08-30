import React from 'react'
import { PhotoName } from './PhotoName'
import { SocialButtonsSection } from './SocialButtonsSection'
import { DownloadButton } from './DownloadButton'
import './../styles/cardStyle.css'

export function Card(){
    return (
        <div className="card flex-item">
                <PhotoName/>
                <SocialButtonsSection/>
                <DownloadButton/>
        </div> 
    )
}
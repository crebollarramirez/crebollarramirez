import React from 'react'
import { PhotoName } from './PhotoName'
import { SocialButtonsSection } from './SocialButtonsSection'
import { DownloadButton } from './DownloadButton'

export function Card({className}){
    return (
        <div className="card flex-item">
                <PhotoName/>
                <SocialButtonsSection/>
                <DownloadButton/>
        </div> 
    )
}
import React from 'react'
import { PhotoName } from './PhotoName'
import { SocialButtonsSection } from './SocialButtonsSection'
import { DownloadButton } from './DownloadButton'
import './../../styles/cardStyle.css'
import { NavigationSection } from './NavigationSection'

export function Card(){
    return (
        <div className="card flex-item">
                <NavigationSection />
                <PhotoName/>
                <SocialButtonsSection/>
                <DownloadButton/>
        </div> 
    )
}
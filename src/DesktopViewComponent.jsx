import React from "react";
import { Card } from "./components/CardComponents/Card";
import "./styles/App.css";
import { ScrollableContent } from "./components/ScrollableContent/ScrollableContent";
import { NavigationSection } from "./components/CardComponents/NavigationSection";
import { PhotoName } from "./components/CardComponents/PhotoName";
import { SocialButtonsSection } from "./components/CardComponents/SocialButtonsSection"
import { DownloadButton } from "./components/CardComponents/DownloadButton";

export function DesktopViewComponent() {
  return (
    <div id="appContainer">
      <main>
        <PhotoName />
        <SocialButtonsSection />
        <DownloadButton />
        <ScrollableContent />
      </main>
      <NavigationSection />
    </div>
  );
}

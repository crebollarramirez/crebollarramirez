import React from "react";
import { Card } from "./components/CardComponents/Card";
import "./styles/App.css";
import { ScrollableContent } from "./components/ScrollableContent/ScrollableContent";
import { NavigationSection } from "./components/CardComponents/NavigationSection";


export function DesktopViewComponent() {
  return (
    <div id="appContainer">
      <main>
        <Card />
        <ScrollableContent />
      </main>
      <NavigationSection />
    </div>
  );
}

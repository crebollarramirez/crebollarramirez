import "./styles/App.css";
import { ScrollableContent } from "./components/ScrollableContent/ScrollableContent";
import { NavigationSection } from "./components/CardComponents/NavigationSection";
import { useEffect, useState } from "react";
import { PhotoName } from "./components/CardComponents/PhotoName";
import { SocialButtonsSection } from "./components/CardComponents/SocialButtonsSection"
import { DownloadButton } from "./components/CardComponents/DownloadButton";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

export default App;

import { Card } from "./components/CardComponents/Card";
import "./styles/App.css";
import { ScrollableContent } from "./components/ScrollableContent/ScrollableContent";
import { NavigationSection } from "./components/CardComponents/NavigationSection";
import { useEffect, useState } from "react";
import { DesktopViewComponent } from "./DesktopViewComponent";
import { MobileViewComponent } from "./MobileViewComponent";

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

    <div>
      {isMobile ? (
        <MobileViewComponent />
      ) : (
        <DesktopViewComponent />
      )}
    </div>
  );
}

export default App;

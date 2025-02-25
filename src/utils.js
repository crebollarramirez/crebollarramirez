const scrollTo = (section) => {
    const sectionToScroll = document.getElementById(section);
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

export default scrollTo;
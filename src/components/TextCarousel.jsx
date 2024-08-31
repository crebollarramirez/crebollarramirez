import React, { useEffect } from 'react';
import './../styles/textCarouselStyle.css'; // Assuming you have a CSS file for the styles

export function TextCarousel({ items, speed = "normal", direction = "left" }) {
    
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If the user hasn't opted in for reduced motion, add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation(scrollers);
        }

        function addAnimation(scrollers) {
            scrollers.forEach((scroller) => {
                // Add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", true);

                // Make an array from the elements within `.scroller-inner`
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                // For each item in the array, clone it, add aria-hidden to it, and append it to `.scroller-inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }

    }, []);

    return (
        <div className={`scroller`} data-speed={speed} data-direction={direction}>
            <ul className="scroller__inner">
                {items.map((item, index) => (
                    <li className="carouselItem" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

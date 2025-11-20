# react-udemytutorial-project-1
This project serves as the starting point for the demo project we will work on throughout this section.
Tutorial link: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39648990#lecture-article

# Topics
... TODO
## UseState

import React from 'react';

export default function App() {
    const [displayedPrice, updateDisplayedPrice] = React.useState(100);
    function handleClick(price) {
        updateDisplayedPrice(price);
    }
    return (
        <div>
            <p data-testid="price">${displayedPrice}</p>
            <button onClick={() => handleClick(75)}>Apply Discount</button>
        </div>
    );
}



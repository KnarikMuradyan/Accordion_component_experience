import "./index.css";
import React, { useState } from "react";

const faqs = [
    {
        title: "What is Front-End Development?",
        text:
            " Front-end development focuses on building the visual and interactive aspects of a website or web app. It involves using languages like HTML, CSS, and JavaScript to create user-friendly interfaces."
    },
    {
        title: "What Technologies Do Front-End Developers Use?",
        text:
            `Front-end developers work with technologies such as:

          🦖 HTML (for structure),
          🦖 CSS (for styling),
          🦖 JavaScript (for interactivity),
          🦖Frameworks like React, Vue.js, and Angular,
          🦖 CSS preprocessors like SASS,
           🦖Version control tools like Git . `
    },
    {
        title: "How Do I Become a Front-End Developer?",
        text:
            "Start by learning HTML, CSS, and JavaScript. Then, explore frameworks, responsive design, and best practices. Build projects, contribute to open-source, and create a portfolio to showcase your work."
    }
];

export default function App() {
    return (
        <div>
            <Accordion data={faqs} />
        </div>
    );
}

function Accordion({ data }) {
    return <div className="accordion">
        {data.map((el, i) => <AccordionItem title={el.title} text={el.text} num={i} key={i} />)}

    </div>;
}

function AccordionItem({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false)

    function handleToggle() {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? " - " : "+"}</p>

            {isOpen && <div className="content-box">{text}</div>}

        </div>
    )
}
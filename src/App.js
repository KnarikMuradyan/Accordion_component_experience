import "./index.css";
import React, { useState } from "react";

const faqs = [
    {
        title: "What is Front-End Development?",
        text:
            " Front-end development focuses on building the visual and interactive aspects of a website or web app. It involves using languages like HTML, CSS, and JavaScript to create user-friendly interfaces."
    },
    {
        title: "How Do I Become a Front-End Developer?",
        text:
            "Start by learning HTML, CSS, and JavaScript. Then, explore frameworks, responsive design, and best practices. Build projects, contribute to open-source, and create a portfolio to showcase your work."
    },
    {
        title: "What’s the Difference Between Front-End and Back-End Development?",
        text:
            `Front-end development focuses on the user interface and experience,
             while back-end development handles server-side logic, databases, and APIs.
              Together, they form a full-stack development process. `
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

    const [curOpen, setCurOpen] = useState(null);

    return <div className="accordion">
        {data.map((el, i) =>
            <AccordionItem
                curOpen={curOpen}
                onOpen={setCurOpen}
                title={el.title}
                num={i}
                key={i}
            >
                {el.text}
            </AccordionItem>
        )}

        <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title="What Technologies Do Front-End Developers Use?"
            num={3}
            key="test"
        >
            <p>
                <ul>
                    <li>🦖 HTML (for structure)</li>
                    <li>🦖 CSS (for styling)</li>
                    <li>🦖 JavaScript (for interactivity)</li>
                    <li>🦖 Frameworks like React, Vue.js, and Angular</li>
                    <li>🦖 CSS preprocessors like SASS</li>
                    <li>🦖 Version control tools like Git</li>
                </ul>

            </p>
        </AccordionItem>




    </div>;
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {

    const isOpen = num === curOpen;
    function handleToggle() {
        onOpen(isOpen ? null :num);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? " - " : "+"}</p>

            {isOpen && <div className="content-box">{children}</div>}

        </div>
    )
}
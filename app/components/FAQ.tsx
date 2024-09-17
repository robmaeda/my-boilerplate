"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const FAQ = () => {
    return (
        <section id="faq">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-24 md:flex-row">
                <div className="flex basis-1/2 flex-col text-left">
                    <p className="mb-4 inline-block font-semibold">FAQ</p>
                    <p className="text-3xl font-extrabold text-base-content sm:text-4xl">
                        Frequently Asked Questions
                    </p>
                </div>
                <ul className="basis-1/2 text-left">
                    {questionList.map((question, index) => (
                        <QuestionItem
                            question={question.question}
                            answer={question.answer}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};

interface QuestionItemProps {
    question: string;
    answer: string;
}

const QuestionItem = ({ question, answer }: QuestionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen((prevState) => !prevState);

    return (
        <li>
            <button
                className="relative flex w-full items-center gap-2 border-t border-base-content/10 py-5 text-left text-base font-semibold md:text-lg"
                onClick={handleToggle}
            >
                <span className="flex-1">{question}</span>
                <span
                    className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    <ChevronDownIcon className="size-7" />
                </span>
            </button>
            <div
                className={`overflow-hidden opacity-80 transition-all duration-500 ease-in-out`}
                style={
                    isOpen
                        ? { opacity: 1, maxHeight: "180px" }
                        : { opacity: 0, maxHeight: "0px" }
                }
            >
                <div className="py-4">{answer}</div>
            </div>
        </li>
    );
};

const questionList = [
    {
        question: "Add more questions here",
        answer: "Add more answers here",
    },
    {
        question: "Add more questions here",
        answer: "Add more answers here",
    },
    {
        question: "Add more questions here",
        answer: "Add more answers here",
    },
    {
        question: "Add more questions here",
        answer: "Add more answers here",
    },
];

export default FAQ;

import React from "react";
import SectionTitle from "../components/SectionTitle"
const App = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqsData = [
        {
            question: "What is Cvify?",
            answer: "Cvify is an Ai-powered resume builder that helps you create professional resumes & CVs quickly"
        },
        {
            question: "How do i get started?",
            answer: "Signup, fill in your details and choose a template."
        },
        {
            question: "Can i change template?",
            answer: "Yes , switch templates anytime."
        },
        {
            question: "Are they templates for different industry?",
            answer: "Yes we offer industry-specific templates"
        },
        {
            question: "Do i need a design skills",
            answer: "No our builder handles the design."
        },
        
          
        
    ];

    return (
                 <>             <SectionTitle text1="FAQs" text2="Common Q&A s" text3="Everything you need to know about our resume platform"/>
                              
        <div className="min-w-screen bg-linear-to-b from-purple-900 to-purple-950 py-20 px-4">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                .faq-font { font-family: 'Poppins', sans-serif; }

                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 25px rgba(168,85,247,0.35); }
                    50% { box-shadow: 0 0 45px rgba(168,85,247,0.6); }
                }

              
            `}</style>

<div className="w-full mt-14 flex flex-col gap-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500
                                ${
                                    isOpen
                                        ? "bg-white/10 border-purple-500/50 glow-active"
                                        : "bg-white/5 border-white/10 hover:border-purple-500/40 "
                                }`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <span
                                        className={`text-base font-semibold transition-colors
                                        ${
                                            isOpen
                                                ? "text-purple-300"
                                                : "text-white/80 group-hover:text-purple-300"
                                        }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <div
                                        className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300
                                        ${
                                            isOpen
                                                ? "bg-purple-600 text-white rotate-180"
                                                : "bg-purple-500/20 text-purple-300"
                                        }`}
                                    >
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 3.5L5 7.5L9 3.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-500 ease-in-out
                                    ${
                                        isOpen
                                            ? "max-h-60 opacity-100 pb-6"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <div className="px-6 pt-4 border-t border-white/10 text-sm leading-relaxed text-purple-200/80">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
        </div>
        </>
    );
};

export default App;
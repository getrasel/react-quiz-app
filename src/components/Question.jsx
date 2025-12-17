import React, { use, useState } from "react";

const Question = () => {
  const questionsdata = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Hemingway", "Tolkien", "Dickens"],
      answer: "Shakespeare",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ans, setAns] = useState(0);
  const singledata = questionsdata[currentIndex];
  const [showresult, setShowresult] = useState(true);
  const [disable, setDisable] = useState();

  const handleNext = () => {
    // if (!disable) return;
    if (currentIndex < questionsdata.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setDisable();
    } else {
      setShowresult(false);
    }
    if (disable === singledata.answer) {
      setAns(ans + 1);
    }
  };
  const handleReset = () => {
    setAns(0);
    setCurrentIndex(0);
    setShowresult(true);
  };

  return (
    <>
      <div className="w-180 mx-auto mt-20">
        {showresult ? (
          <div>
            <h2 className="text-4xl font-medium mb-8">{singledata.question}</h2>
            <ul className="flex flex-col gap-5">
              {singledata.options.map((option, idx) => {
                return (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setDisable(option);
                      }}
                      className={`!p-0 w-full flex justify-start items-center overflow-hidden ${
                        disable === option ? "bgcolor text-white" : ""
                      }
                  `}
                    >
                      <p
                        className={`inline-block py-2 px-4 w-12 text-center ${
                          disable === option
                            ? "bg-white text-black"
                            : "bgcolor text-white"
                        } `}
                      >
                        {String.fromCharCode(65 + idx)}
                      </p>
                      <span className="px-10 inline-block">{option}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={handleNext}
              disabled={!disable}
              className={`py-3 px-8 !rounded-lg mt-5 ${
                disable ? "bgcolor" : "bg-gray-300 !border-transparent"
              }  text-white`}
            >
              Submit Answer
            </button>
          </div>
        ) : (
          <div>
            <p className="text-2xl font-medium">Currect answer: {ans}</p>
            <button
              onClick={handleReset}
              className="py-3 px-8 !rounded-lg mt-2 bgcolor text-white"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Question;

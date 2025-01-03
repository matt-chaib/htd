import { DailyQuestion } from "../components/DailyQuestion";
import { Separator } from "../components/Separator";
import questions from "../questions.json"
import { useState } from "react";
type Question = {
    question: string;
    date: Date;
  };

  const QuestionsShown = ({questions, showPastQuestions, setShowPastQuestions}) => {
    if (showPastQuestions) {
        return ( <>
         {questions.map((question) => {
            return (
                <div className="question">
                  <DailyQuestion question={question}/>
                  <Separator />
                </div>
        )
        })}
        </>)
    } else {
        return (
            <div className="question">
            <DailyQuestion question={questions[0]}/>
            <Separator />
            <button onClick={() => setShowPastQuestions(!showPastQuestions)}>Show Past Questions</button>
          </div>
        )
    }
}

export const MainPage = () => {
    const show_limit: number = 50;
    const [showPastQuestions, setShowPastQuestions]= useState(false);

    return (
        <div className="questions-block">
           <QuestionsShown questions={questions} showPastQuestions={showPastQuestions} setShowPastQuestions={setShowPastQuestions}/>
        </div>
    )
}
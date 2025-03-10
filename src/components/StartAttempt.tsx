import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quizActive, setQuizActive] = useState<boolean>(false);
    const [quizAttempts, setQuizAttempts] = useState<number>(4);

    return (
        <span>
            <Button
                onClick={() => {
                    setQuizActive(true);
                    setQuizAttempts(quizAttempts - 1);
                }}
                disabled={quizActive || quizAttempts < 1}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setQuizActive(false);
                }}
                disabled={!quizActive}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setQuizAttempts(1 + quizAttempts);
                }}
                disabled={quizActive}
            >
                Mulligan
            </Button>
            Attempts : {quizAttempts}
        </span>
    );
}

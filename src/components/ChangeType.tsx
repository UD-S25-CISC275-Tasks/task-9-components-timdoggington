import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            <Button
                onClick={() => {
                    setQType(
                        qType === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    );
                }}
            >
                Change Type{" "}
            </Button>
            {qType === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </span>
    );
}

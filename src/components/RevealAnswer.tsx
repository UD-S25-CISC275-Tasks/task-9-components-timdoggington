import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    setVisibility(!visibility);
                }}
            >
                Reveal Answer
            </Button>
            {visibility ? "42" : ""}
        </span>
    );
}

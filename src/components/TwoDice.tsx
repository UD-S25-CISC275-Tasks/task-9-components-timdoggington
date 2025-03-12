import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftdice, setleftdice] = useState<number>(2);
    const [rightdice, setrightdice] = useState<number>(3);
    return (
        <span>
            <Button
                onClick={() => {
                    setrightdice(d6());
                }}
            >
                Roll Right
            </Button>
            <Button
                onClick={() => {
                    setleftdice(d6());
                }}
            >
                Roll Left
            </Button>
            <div>
                <span data-testid="left-die">{leftdice}</span>
            </div>
            <div>
                <span data-testid="right-die">{rightdice}</span>
            </div>

            <div>
                {leftdice !== 0 && leftdice !== 1 && leftdice === rightdice ?
                    "You Win, type YES to affirm!"
                :   ""}
                {leftdice === 1 && leftdice === rightdice ?
                    "You Lose, -20000000 social credit"
                :   ""}
            </div>
        </span>
    );
}

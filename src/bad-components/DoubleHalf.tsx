import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhvalue, setdhvalue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhvalue}</span>
            </div>
            <Button
                onClick={() => {
                    setdhvalue(2 * dhvalue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setdhvalue(0.5 * dhvalue);
                }}
            >
                Halve
            </Button>
        </div>
    );
}

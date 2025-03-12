import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function findnextholidayyear(event: string) {
    if (event === "🎇") {
        return "🎃";
    } else if (event === "🎃") {
        return "🎂";
    } else if (event === "🎂") {
        return "🎅";
    } else if (event === "🎅") {
        return "🍀";
    } else {
        return "🎇";
    }
}

export function findnextholidayalpha(event: string) {
    if (event === "🎇") {
        return "🎃";
    } else if (event === "🎃") {
        return "🍀";
    } else if (event === "🍀") {
        return "🎂";
    } else if (event === "🎂") {
        return "🎅";
    } else {
        return "🎇";
    }
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");

    return (
        <span>
            <Button
                onClick={() => {
                    setHoliday(findnextholidayyear(holiday));
                }}
            >
                Advance by Year
            </Button>
            <Button
                onClick={() => {
                    setHoliday(findnextholidayalpha(holiday));
                }}
            >
                Advance by Alphabet
            </Button>
            Holiday: {holiday}
        </span>
    );
}

import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

export function ChooseTeam(): React.JSX.Element {
    const PEOPLE = [
        "Alan Turing",
        "Grace Hopper",
        "Ada Lovelace",
        "Charles Babbage",
        "Barbara Liskov",
        "Margaret Hamilton",
    ];
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(option: string) {
        if (!team.includes(option)) {
            setTeam([...team, option]);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}

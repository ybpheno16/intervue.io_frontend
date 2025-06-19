import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Chip, CircularProgress } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import TeacherDashboard from "./TeacherDashboard";
import PollCreator from "./PollCreator";
import PollResults from "./PollResults";

const Teacher = ({ socket }) => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [timer, setTimer] = useState(60);
    const [pollActive, setPollActive] = useState(false);
    const [students, setStudents] = useState([]);
    const [pollResults, setPollResults] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        socket.on("update-student-list", (studentList) => {
            setStudents(studentList);
        });

        socket.on("vote-status", (studentList) => {
            setStudents(studentList);
        });

        socket.on("poll-results", (results) => {
            setPollResults(results);
            setPollActive(false);
        });

        return () => {
            socket.off("update-student-list");
            socket.off("vote-status");
            socket.off("poll-results");
        };
    }, [socket]);

    const validateQuestion = () => {
        if (!question.trim()) {
            setError("Question cannot be empty");
            return false;
        }

        const validOptions = options.filter(opt => opt.trim() !== "");
        if (validOptions.length < 2) {
            setError("At least two options are required");
            return false;
        }

        setError("");
        return true;
    };

    const launchPoll = () => {
        if (!validateQuestion()) return;

        const validOptions = options.filter(opt => opt.trim() !== "");
        socket.emit("launch-poll", {
            question,
            options: validOptions,
            timer,
            correctAnswer
        });

        setPollActive(true);
        setPollResults(null);
    };

    const resetPoll = () => {
        setQuestion("");
        setOptions(["", ""]);
        setCorrectAnswer("");
        setTimer(60);
        setPollActive(false);
        setPollResults(null);
        setError("");
    };

    return (
        <Box>
            <TeacherDashboard students={students} />

            {!pollActive && !pollResults ? (
                <PollCreator
                    question={question}
                    setQuestion={setQuestion}
                    options={options}
                    setOptions={setOptions}
                    correctAnswer={correctAnswer}
                    setCorrectAnswer={setCorrectAnswer}
                    timer={timer}
                    setTimer={setTimer}
                    error={error}
                    onLaunchPoll={launchPoll}
                />
            ) : pollActive ? (
                <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                    <CircularProgress size={60} sx={{ mb: 2 }} />
                    <Typography variant="h5" gutterBottom>
                        Poll is Active
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Students are voting... Results will appear when all students vote or time expires.
                    </Typography>
                </Paper>
            ) : (
                <PollResults results={pollResults} onNewPoll={resetPoll} />
            )}
        </Box>
    );
};

export default Teacher;

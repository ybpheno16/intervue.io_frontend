import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Chip, CircularProgress } from "@mui/material";
import { Poll as PollIcon } from "@mui/icons-material";
import StudentRegistration from "./StudentRegistration";
import PollInterface from "./PollInterface";
import PollResults from "./PollResults";

const Student = ({ socket }) => {
    const [name, setName] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [currentPoll, setCurrentPoll] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [hasVoted, setHasVoted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [pollResults, setPollResults] = useState(null);

    useEffect(() => {
        const savedName = localStorage.getItem("studentName");
        if (savedName) {
            setName(savedName);
            setIsRegistered(true);
            socket.emit("register-student", { name: savedName });
        }

        socket.on("poll-started", (pollData) => {
            setCurrentPoll(pollData);
            setSelectedOption("");
            setHasVoted(false);
            setPollResults(null);
            setTimeRemaining(pollData.duration);

            const timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        });

        socket.on("vote-feedback", (results) => {
            setPollResults(results);
        });

        socket.on("poll-results", (results) => {
            setPollResults(results);
        });

        return () => {
            socket.off("poll-started");
            socket.off("vote-feedback");
            socket.off("poll-results");
        };
    }, [socket]);

    const registerStudent = () => {
        if (name.trim()) {
            localStorage.setItem("studentName", name);
            socket.emit("register-student", { name });
            setIsRegistered(true);
        }
    };

    const submitVote = () => {
        if (selectedOption && !hasVoted) {
            socket.emit("submit-vote", { option: selectedOption });
            setHasVoted(true);
        }
    };

    if (!isRegistered) {
        return (
            <StudentRegistration
                name={name}
                setName={setName}
                onRegister={registerStudent}
            />
        );
    }

    return (
        <Box >
            <Box sx={{ p: 3, mb: 3, textAlign: 'center', color: 'text.primary' }}>

                <Chip label="Student Dashboard" color="primary" />
            </Box>

            {currentPoll && !pollResults ? (
                <PollInterface
                    poll={currentPoll}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    hasVoted={hasVoted}
                    timeRemaining={timeRemaining}
                    onSubmitVote={submitVote}
                />
            ) : pollResults ? (
                <PollResults results={pollResults} />
            ) : (
                <Box display="flex" flexDirection="column" alignItems="center">
                    <CircularProgress size={60} sx={{ mb: 3 }} />
                    <Typography variant="h3" gutterBottom color="text.primary">
                        Wait for the teacher to ask questions..
                    </Typography>

                </Box>
            )}
        </Box>
    );
};

export default Student;

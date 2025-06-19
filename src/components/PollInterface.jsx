import React from "react";
import {
    Box,
    Paper,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Avatar
} from "@mui/material";
import { Timer as TimerIcon } from "@mui/icons-material";

const PollInterface = ({
    poll,
    selectedOption,
    setSelectedOption,
    hasVoted,
    timeRemaining,
    onSubmitVote
}) => {
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <Paper elevation={2} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight="bold">
                    Question {poll.id || 1}
                </Typography>
                <Chip
                    label={formatTime(timeRemaining)}
                    color={timeRemaining <= 10 ? "error" : "primary"}
                    icon={<TimerIcon />}
                />
            </Box>

            <Paper elevation={1} sx={{ p: 3, mb: 3, bgcolor: 'grey.800', color: 'white' }}>
                <Typography variant="h6">
                    {poll.question}
                </Typography>
            </Paper>

            <Box sx={{ mb: 3 }}>
                {poll.options.map((option, index) => (
                    <Card
                        key={index}
                        sx={{
                            mb: 2,
                            cursor: 'pointer',
                            border: selectedOption === option ? 2 : 1,
                            borderColor: selectedOption === option ? 'primary.main' : 'grey.300',
                            '&:hover': { borderColor: 'primary.main' }
                        }}
                        onClick={() => !hasVoted && setSelectedOption(option)}
                    >
                        <CardContent sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                            <Avatar
                                sx={{
                                    bgcolor: selectedOption === option ? 'primary.main' : 'grey.400',
                                    mr: 2,
                                    width: 32,
                                    height: 32,
                                    fontSize: '0.875rem'
                                }}
                            >
                                {String.fromCharCode(65 + index)}
                            </Avatar>
                            <Typography variant="body1">
                                {option}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            <Box textAlign="center">
                <Button
                    variant="contained"
                    size="large"
                    onClick={onSubmitVote}
                    disabled={!selectedOption || hasVoted}
                    sx={{ px: 4, py: 1.5, borderRadius: 3 }}
                >
                    {hasVoted ? "Vote Submitted" : "Submit Vote"}
                </Button>
            </Box>
        </Paper>
    );
};

export default PollInterface;

import React from "react";
import {
    Box,
    Paper,
    Typography,
    Chip,
    LinearProgress,
    Button,
    Avatar
} from "@mui/material";
import {
    Poll as PollIcon,
    CheckCircle as CheckCircleIcon,
    Add as AddIcon
} from "@mui/icons-material";

const PollResults = ({ results, onNewPoll }) => {
    if (!results) return null;

    const totalVotes = Object.values(results.optionCounts || {}).reduce((a, b) => a + b, 0);

    return (
        <Paper elevation={2} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" justify="space-between" mb={3} gap={2}>
                <Typography variant="h5" fontWeight="bold">
                    Poll Results
                </Typography>
                <Chip label="Live Results" color="success" icon={<PollIcon />} />
            </Box>

            <Paper elevation={1} sx={{ p: 2, mb: 3, bgcolor: 'grey.100' }}>
                <Typography variant="h6">
                    {results.question}
                </Typography>
            </Paper>

            <Box sx={{ mb: 3 }}>
                {Object.entries(results.optionCounts || {}).map(([option, count], index) => {
                    const percentage = totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(1) : 0;
                    const isCorrect = results.correctAnswer === option;

                    return (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Box display="flex" alignItems="center">
                                    <Avatar sx={{ bgcolor: isCorrect ? 'success.main' : 'primary.main', mr: 1, width: 24, height: 24, fontSize: '0.75rem' }}>
                                        {index + 1}
                                    </Avatar>
                                    <Typography variant="body1" sx={{ mr: 1 }}>
                                        {option}
                                    </Typography>
                                    {isCorrect && <CheckCircleIcon color="success" fontSize="small" />}
                                </Box>
                                <Typography variant="body2" fontWeight="bold">
                                    {percentage}% ({count})
                                </Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={parseFloat(percentage)}
                                sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    '& .MuiLinearProgress-bar': {
                                        bgcolor: isCorrect ? 'success.main' : 'primary.main'
                                    }
                                }}
                            />
                        </Box>
                    );
                })}
            </Box>

            {onNewPoll && (
                <Box textAlign="center">
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={onNewPoll}
                        sx={{ px: 4, py: 1.5, borderRadius: 3 }}
                    >
                        Create New Poll
                    </Button>
                </Box>
            )}
        </Paper>
    );
};

export default PollResults;

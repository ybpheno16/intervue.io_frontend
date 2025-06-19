import React from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Alert,
    Chip,
    Avatar,
    Radio,
    FormControlLabel,
    IconButton
} from "@mui/material";
import {
    Timer as TimerIcon,
    Poll as PollIcon,
    Add as AddIcon,
    Delete as DeleteIcon
} from "@mui/icons-material";

const PollCreator = ({
    question,
    setQuestion,
    options,
    setOptions,
    correctAnswer,
    setCorrectAnswer,
    timer,
    setTimer,
    error,
    onLaunchPoll
}) => {
    const addOption = () => {
        if (options.length < 6) {
            setOptions([...options, ""]);
        }
    };

    const removeOption = (index) => {
        if (options.length > 2) {
            const newOptions = options.filter((_, i) => i !== index);
            setOptions(newOptions);
            if (correctAnswer === options[index]) {
                setCorrectAnswer("");
            }
        }
    };

    const updateOption = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    return (
        <Paper elevation={2} sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" justify="space-between" mb={3} gap={2}>
                <Chip label="INTERVUE POLL" color="primary" icon={<PollIcon />} />
                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Timer</InputLabel>
                    <Select
                        value={timer}
                        label="Timer"
                        onChange={(e) => setTimer(e.target.value)}
                        startAdornment={<TimerIcon sx={{ mr: 1, color: 'text.secondary' }} />}
                    >
                        <MenuItem value={30}>30 seconds</MenuItem>
                        <MenuItem value={45}>45 seconds</MenuItem>
                        <MenuItem value={60}>60 seconds</MenuItem>
                        <MenuItem value={90}>90 seconds</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Create New Poll
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Create and manage polls, ask questions, and monitor student responses in real-time.
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                </Alert>
            )}

            <TextField
                fullWidth
                multiline
                rows={3}
                label="Enter your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="What is your question?"
                sx={{ mb: 3 }}
                helperText={`${question.length}/200 characters`}
            />

            <Typography variant="h6" gutterBottom>
                Answer Options
            </Typography>

            {options.map((option, index) => (
                <Box key={index} display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32, fontSize: '0.875rem' }}>
                        {index + 1}
                    </Avatar>
                    <TextField
                        fullWidth
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        variant="outlined"
                        size="small"
                    />
                    <FormControlLabel
                        control={
                            <Radio
                                checked={correctAnswer === option && option.trim() !== ""}
                                onChange={() => setCorrectAnswer(option)}
                                value={option}
                                disabled={option.trim() === ""}  // Disable radio for empty options
                            />
                        }
                        label="Correct"
                    />
                    {options.length > 2 && (
                        <IconButton onClick={() => removeOption(index)} color="error">
                            <DeleteIcon />
                        </IconButton>
                    )}
                </Box>
            ))}

            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 3 }}>
                {options.length < 6 && (
                    <Button
                        startIcon={<AddIcon />}
                        onClick={addOption}
                        variant="outlined"
                    >
                        Add Option
                    </Button>
                )}
                <Button
                    variant="contained"
                    size="large"
                    onClick={onLaunchPoll}
                    sx={{ ml: 'auto', px: 4 }}
                >
                    Launch Poll
                </Button>
            </Box>
        </Paper>
    );
};

export default PollCreator;

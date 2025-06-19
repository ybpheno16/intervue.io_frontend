import React from "react";
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Chip
} from "@mui/material";
import { Poll as PollIcon } from "@mui/icons-material";

const StudentRegistration = ({ name, setName, onRegister }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
            <Box sx={{ width: '100%', maxWidth: 600, p: 3, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Box textAlign="center" mb={3}>
                    <Chip label="Intervue Poll" color="primary" icon={<PollIcon />} sx={{ mb: 2 }} />
                    <Typography variant="h4" color="text.primary" fontWeight="bold" gutterBottom>
                        Let's Get Started
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ width: '90%', maxWidth: 1050, }}>
                        If you’re a student, you’ll be able to submit your answers, participate in live polls, and see how your responses compare with your classmates.
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', maxWidth: 400, p: 3, }}>

                    <TextField
                        fullWidth
                        label="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        sx={{ mb: 3 }}
                        onKeyPress={(e) => e.key === 'Enter' && onRegister()}
                    />
                    <Box display="flex" justifyContent="center">

                        <Button

                            variant="contained"
                            size="large"
                            onClick={onRegister}
                            disabled={!name.trim()}
                            sx={{
                                px: 4, py: 1.5, borderRadius: 3,
                                background: 'linear-gradient(99.18deg, #8F64E1 -46.89%, #1D68BD 223.45%)'
                            }}
                        >
                            Continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default StudentRegistration;

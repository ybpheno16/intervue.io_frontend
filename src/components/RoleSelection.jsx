import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Chip,
    Grid,
    Paper
} from "@mui/material";
import {
    Person as PersonIcon,
    School as SchoolIcon,
    Poll as PollIcon
} from "@mui/icons-material";

const RoleSelection = ({ onRoleSelect }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">

            <Box display="flex" justifyContent="center" mb={2}>
                <Chip
                    label="Intervue Poll"
                    color="primary"
                    icon={<PollIcon />}
                    sx={{ fontWeight: 'bold' }}
                />
            </Box>

            <Typography variant="h3" color="#000000" align="center" fontWeight="bold" gutterBottom>
                Welcome to Live Polling System
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 4, width: '70%', maxWidth: 750 }}>
                Please select the role that best describes you to begin using the live polling system            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{

                            border: '2px solid transparent',
                            transition: 'all 0.3s'
                        }}
                        onClick={() => onRoleSelect("student")}
                    >
                        <CardContent sx={{ textAlign: 'center', py: 3 }}>
                            <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                I'm a Student
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Submit answers to questions asked by the teacher and view live poll results instantly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                borderColor: 'primary.main',
                                boxShadow: 3
                            },
                            border: '2px solid transparent',
                            transition: 'all 0.3s'
                        }}
                        onClick={() => onRoleSelect("teacher")}
                    >
                        <CardContent sx={{ textAlign: 'center', py: 3 }}>
                            <SchoolIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                I'm a Teacher
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Create live poll questions, collect student responses, and monitor results in real-time.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box display="flex" justifyContent="center">
                <Button
                    variant="contained"

                    size="large"
                    onClick={() => onRoleSelect("student")}
                    sx={{
                        px: 4, py: 1.5, borderRadius: 3,
                        background: 'linear-gradient(99.18deg, #8F64E1 -46.89%, #1D68BD 223.45%)'
                    }}
                >
                    Continue
                </Button>
            </Box>

        </Box>
    );
};

export default RoleSelection;

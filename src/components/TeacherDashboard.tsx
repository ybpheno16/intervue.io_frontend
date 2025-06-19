import React from "react";
import { Box, Paper, Typography, Chip } from "@mui/material";
import {
  Person as PersonIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
} from "@mui/icons-material";

const TeacherDashboard = ({ students }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h4" fontWeight="bold">
          Teacher Dashboard
        </Typography>
        <Chip
          label={`${students.length} Students Connected`}
          color="primary"
          icon={<PersonIcon />}
        />
      </Box>

      {students.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Connected Students:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {students.map((student, index) => (
              <Chip
                key={index}
                label={student.name}
                size="small"
                color={student.hasVoted ? "success" : "default"}
                icon={
                  student.hasVoted ? (
                    <CheckCircleIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )
                }
              />
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default TeacherDashboard;

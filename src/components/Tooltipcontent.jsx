import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Stack,
  ButtonGroup,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Buttons from './Buttons'; // Your custom Buttons component
import { styled } from '@mui/material/styles';

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: theme.spacing(2),
}));

function Tooltipcontent({ Setopen, profile }) {
  return (
    <Box display="flex" flexDirection="column" p={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={3}
      >
        <Typography variant="h6" color="gray">
          CREATE POST
        </Typography>
        <IconButton onClick={() => Setopen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <UserBox>
        <Avatar src={profile} />
        <Typography>MOHANA PRIYAN K</Typography>
      </UserBox>

      <TextField
        multiline
        fullWidth
        rows={3}
        placeholder="What's on your mind?"
        sx={{ margin: 1 }}
      />

      <Stack
        direction="row"
        gap={1}
        marginTop={6}
        marginLeft={1}
        marginBottom={2}
      >
        <EmojiEmotions color="warning" />
        <PersonIcon color="primary" />
        <VideoCameraBackIcon color="error" />
      </Stack>

      <ButtonGroup fullWidth>
        <Buttons buttonname="POST" width={250} />
        <Buttons starticon={<CalendarMonthIcon />} />
      </ButtonGroup>
    </Box>
  );
}

export default Tooltipcontent;

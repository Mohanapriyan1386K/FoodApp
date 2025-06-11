import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon, EmojiEmotions } from "@mui/icons-material";
import profile from "../assets/img/profile.jpg";
import Input from "./Input";
import PersonIcon from "@mui/icons-material/Person";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import Buttons from "./Buttons";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
function Add() {
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 10,
  });
  const [open, Setopen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => Setopen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: "calc(3%)" },
        }}
      >
        <Fab color="info" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => Setopen(true)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={3}
          >
            <Typography variant="h6" color="gray">
              CREATE POST
            </Typography>
            <IconButton  onClick={e=>{Setopen(false)}}>
              <CloseIcon />
            </IconButton>
          </Box>

          <UserBox>
            <Avatar src={profile} />
            <Typography>MOHANA PRIYAN K</Typography>
          </UserBox>

          <Input
            multiline={true}
            width="100%"
            margin={1}
            height="50px"
            placeholder="whats your mind"
            row={3}
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
          <ButtonGroup marginTop={10} fullWidth>
            <Buttons buttonname="POST" width={250} />
            <Buttons starticon={<CalendarMonthIcon />} />
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
}

export default Add;

import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch
} from "@mui/material";
import {
  AirplaneTicket,
  AppBlockingTwoTone,
  DarkMode,
  Flight,
  Help,
  Home,
  ListAlt,
  Logout,
  Menu,
  Navigation,
  Person,
  Place,
  PostAdd,
  ExpandLess,
  ExpandMore
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Routers/AuthContext";

export default function RightDrawer() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mode, setmode] = React.useState("light");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      color="black"
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/home")}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/blog")}>
            <ListItemIcon><AppBlockingTwoTone /></ListItemIcon>
            <ListItemText primary="BLOG" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/post")}>
            <ListItemIcon><PostAdd /></ListItemIcon>
            <ListItemText primary="POST" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            logout();
            navigate("/");
          }}>
            <ListItemIcon><Logout /></ListItemIcon>
            <ListItemText primary="LOGOUT" />
          </ListItemButton>
        </ListItem>

        {/* Toggleable Menu Section */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(!menuOpen)}>
            <ListItemText primary="MENU" />
            {menuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        {menuOpen && (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><Flight /></ListItemIcon>
                <ListItemText primary="Plan your Trip" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><ListAlt /></ListItemIcon>
                <ListItemText primary="EMAIL" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><Navigation /></ListItemIcon>
                <ListItemText primary="EXPLORE" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><Person /></ListItemIcon>
                <ListItemText primary="FACTS" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><Place /></ListItemIcon>
                <ListItemText primary="PLACE" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><AirplaneTicket /></ListItemIcon>
                <ListItemText primary="TICKET" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><Help /></ListItemIcon>
                <ListItemText primary="HELP" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><DarkMode /></ListItemIcon>
                <Switch onChange={() => setmode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} startIcon={<Menu sx={{ fontSize: "60px",color:"white" }} />} />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

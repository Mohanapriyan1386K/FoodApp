import React from 'react'
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  AirplaneTicket,
  DarkMode,
  Flight,
  Help,
  ListAlt,
  Navigation,
  Person,
  Place,
} from "@mui/icons-material";
 import { Switch } from "@mui/material";

function MenuBar({theme,mode,setmode}) {
  return (
    <Box
      flex={1}
      sx={{
        display: {xs:"none",md:"block"  },
        maxWidth: 300,
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Flight />
              </ListItemIcon>
              <ListItemText primary="Plan your Trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAlt />
              </ListItemIcon>
              <ListItemText primary="EMAIL" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Navigation />
              </ListItemIcon>
              <ListItemText primary="EXPLORE" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="FACTS" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Place />
              </ListItemIcon>
              <ListItemText primary="PLACE" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplaneTicket />
              </ListItemIcon>
              <ListItemText primary="TICKET" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary="HELP" />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
            <Switch onChange={e=>setmode(mode==="light"?"dark":"light")}  ></Switch>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
    
  )
}

export default MenuBar
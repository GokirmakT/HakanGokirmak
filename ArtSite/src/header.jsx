import { useState } from 'react'
import {Button, Stack, Typography, Box, Grid, ImageList, ImageListItem, ImageListItemBar, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton} from '@mui/material'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const menuItems = [
        { text: "ABOUT", link: "/about" },
        { text: "GALLERY", link: "/Gallery" },
        { text: "CONTACT", link: "/ContactForm" }
    ];

    return(
        
        <Stack 
            height={'9vh'} 
            direction={'row'}
            justifyContent={'space-between'} 
            alignItems={'center'} // Bu önemli - dikey hizalama için
                       
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.05)', // Hafif arka plan
                backdropFilter: 'blur(10px)', // Modern cam efekti
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                pl: {xs: 7, sm: 4, md: 4}, // Yatay padding
                pr: {xs: 1, sm: 4, md: 4},
            }}
            >          
            <Stack width={'15%'} justifyContent={'center'} alignItems={'center'}>           
                <Typography 
                variant="h5"
                onClick={() => navigate("/")} // buraya gitmek istediğin route
                sx={{
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    color: 'rgba(77, 73, 73, 1)',
                    fontFamily: '"Playfair Display", serif', // Sanat için uygun font
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    cursor: "pointer"
                }}
                >
                HAKAN GÖKIRMAK
                </Typography>         
            </Stack>                    

    <Stack direction="row" alignItems="center" spacing={3}>
      {/* XS ekranlarda sadece hamburger menü */}
      <Stack sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* MD ve üzeri ekranlarda butonlar */}
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {menuItems.map((item) => (
          <Button
            key={item.text}
            component={Link}
            to={item.link}
            sx={{
              color: "rgba(77, 73, 73, 1)",
              fontSize: "16px",
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: "25px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "translateY(-2px)",
                textShadow: "0 2px 8px rgba(255,255,255,0.3)"
              }
            }}
          >
            {item.text}
          </Button>
        ))}
      </Stack>

      {/* Drawer Menüsü */}
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Stack>       
  </Stack> )}

  export default Header 

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import MailIcon from '@mui/icons-material/Mail';
//import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 import { BiMenu } from "react-icons/bi";
 import { AiOutlineClose } from "react-icons/ai";
 import {useNavigate} from 'react-router-dom'


const drawerWidth = 210;

function ResponsiveDrawer(props) {
    const navigate=useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{  display: { md: 'none' } }}
          >
            <AiOutlineClose />
            <Typography variant="h6" noWrap component="div">
            Close
          </Typography>
          </IconButton>
        </Toolbar>
        {/* added in lines 38-50 for close button */}

      <Divider />

      <List>
 
          <ListItem button key="Home" >
            <ListItemIcon>
           
            </ListItemIcon>
            <ListItemText onClick={()=>{navigate('/')}} primary="Home"/>
          </ListItem>

          <ListItem button key="All Chores" >
            <ListItemIcon>
           
            </ListItemIcon>
            <ListItemText onClick={()=>{navigate('/all')}} primary="All Chores"/>
          </ListItem>

          <ListItem button key="New Chore" >
            <ListItemIcon>
           
            </ListItemIcon>
            <ListItemText onClick={()=>{navigate('/new')}} primary="New Chore"/>
          </ListItem>

          <ListItem button key="About" >
            <ListItemIcon>
           
            </ListItemIcon>
            <ListItemText onClick={()=>{navigate('/about')}} primary="About"/>
          </ListItem>
          

       
      </List>
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: '#99388C'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <BiMenu />
            <Typography variant="h6" noWrap component="div">
            Menu
          </Typography>
          </IconButton>
   
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }, }}
        aria-label="chore menu" 
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
     <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           
          }}
        >
          {drawer}
     </Drawer>
     <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block'  }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
     
          }}
          open
        >
          {drawer}
     </Drawer>
      </Box>
  
    </Box>
  );
}

ResponsiveDrawer.propTypes = {

  window: PropTypes.func,
};

export default ResponsiveDrawer;





/////////////////////////////////////////////////////
////////////////////////////////////////////////////////





///////////////////////////////////////
//////////////////////////////////////////

// import React from 'react'
// import {useNavigate} from 'react-router-dom'

// import './menu'

// const Menu=()=>{
// const navigate =useNavigate()


//     return(
//         <aside id="sDrawer">
//             <nav>
//         <ul>
//             <li>
//                 <a onClick={()=>navigate("/Household_Organizer")}> home</a>
                
//             </li>
//             <li>
//                 <a onClick={()=>navigate("/all")}> View All</a>
                
//             </li>
//         </ul>
//             </nav>

//         </aside>
//     )
// }
// export default Menu
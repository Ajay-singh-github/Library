import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './ListItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { Route, Routes } from 'react-router-dom';
import HorizontalLinearStepper from './Steeper';
import { useNavigate } from 'react-router-dom';
import SeatAllocation from './SeatAllocation';
import AddStudent from './AddStudent';
import DisplayFirstPageDashboard from './DisplayFirstPageDashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import ChairIcon from '@mui/icons-material/Chair';
import Book from './Book';
import Stuffadd from './StuffAdd';
import AddRoom from './AddRoom';
import AddChair from './AddChair';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  var Navigate=useNavigate()
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (<div>
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              
                <img width={'25%'} style={{borderRadius:20}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgR1x_IvtenD009tOKumYUDYvPA67d5Dp9_Tjqy3-uQ&s"/>
             
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" >
          <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" onClick={()=>Navigate("/dashboard/displayfirstpage")}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Student" onClick={()=>Navigate("/dashboard/steeper")} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Display Student" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon/>
      </ListItemIcon>
      <ListItemText primary="Books" onClick={()=>Navigate("/dashboard/book")}/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Display Books" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
      <PersonAddIcon/>
      </ListItemIcon>
      <ListItemText primary="Stuff Add" onClick={()=>Navigate("/dashboard/stuffadd")}/>
    </ListItemButton> <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Display Stuff" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
       <MeetingRoomIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Room" onClick={()=>Navigate("/dashboard/addroom")}/>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Display Room" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ChairIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Chair In Room" onClick={()=>Navigate("/dashboard/addchair")}/>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Display Chairs In Room" />
    </ListItemButton>
            <Divider sx={{ my: 1 }} />
            {/* {secondaryListItems} */}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
        

          <Grid container spacing={2}>
          <Grid item xs={12} style={{padding:25,background: "#dfe4ea"}}>
      
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard/Summary" replace={true} />}/>
     
      <Route  element={<HorizontalLinearStepper/>}  path='/steeper'/>
      <Route element={ <AddStudent/>} path="/addstudent"/>
            
      <Route element={ <SeatAllocation/>} path="/seatallocation"/>  
      <Route element={ <DisplayFirstPageDashboard/>} path="/displayfirstpage"/>  
      <Route element={ <Book/>} path="/book"/>
      <Route element={ <Stuffadd/>} path="/stuffadd"/>
      <Route element={ <AddRoom/>} path="/addroom"/>
      <Route element={ <AddChair/>} path="/addchair"/>
         
       </Routes>  
      </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
    </div>);
}
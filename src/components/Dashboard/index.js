import * as React from 'react';

import {
    Table,
    TableCell,
    TableBody,
    TableRow,
    TableHead
} from "@mui/material";
import CropSquareSharpIcon from '@mui/icons-material/CropSquareSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AiOutlineDashboard } from "react-icons/ai";
import usePagination from '@mui/material/usePagination';



import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoMdShare } from "react-icons/io";
import { SiShopify } from "react-icons/si";
import './index.css'


const PageList = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    marginTop:20
});


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const { items } = usePagination({
        count: 10,

    })

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ backgroundColor: 'rgb(248, 244, 244)' }}>
                <Toolbar style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon style={{ color: 'black' }} />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" style={{ color: 'black' }}>
                        Overview Dashboard
                    </Typography>
                    <Typography>
                        <IconButton><CiDark /></IconButton>
                        <IconButton style={{ color: 'red' }}><FaRegBell /></IconButton>
                        <IconButton style={{ color: 'green' }}><MdGTranslate /></IconButton>
                        <IconButton style={{ color: 'blue' }}><RxAvatar /></IconButton>
                    </Typography>

                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                style={{ color: 'black' }}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'black' }} /> : <ChevronRightIcon style={{ color: 'black' }} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>

                    <ListItem disablePadding>
                        <ListItemButton className='list-item' >
                            <ListItemIcon><AiOutlineDashboard /></ListItemIcon>
                            <ListItemText >Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>
                            <ListItemIcon><IoPricetagsOutline /></ListItemIcon>
                            <ListItemText>Inventory</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>
                            <ListItemIcon><FaRegListAlt /></ListItemIcon>
                            <ListItemText>Orders</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>
                            <ListItemIcon><FaShippingFast /></ListItemIcon>
                            <ListItemText>Shipping</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>
                            <ListItemIcon><IoMdShare /></ListItemIcon>
                            <ListItemText>Channel</ListItemText>
                        </ListItemButton>
                    </ListItem>


                </List>
                <Divider />

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <List style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(248, 244, 244)', fontWeight: 'bold', justifyContent: "center", marginTop: '20px', marginBottom: '20px' }}>

                    <ListItem focusVisibleClassName >
                        <ListItemButton className='list-item'>

                            <ListItemText >Pending</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>

                            <ListItemText>Accepted</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>

                            <ListItemText>AWB Created</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>

                            <ListItemText>Ready to Shipped</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>

                            <ListItemText>Shipped</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>

                            <ListItemText>Completed</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton className='list-item'>

                            <ListItemText>Cancelled</ListItemText>
                        </ListItemButton>
                    </ListItem>


                </List>
                <div className="App">

                    <Table>
                        <TableHead style={{ textAlign: 'right', backgroundColor: 'lightcyan' }}>
                            <TableRow >
                                <TableCell>

                                </TableCell>
                                <TableCell>

                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Channel</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Order No</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Order Date</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>City</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Customer Name</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Order Value</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Status</p>
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold' }}>
                                    <p>Operation</p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell><AddSharpIcon /></TableCell>
                                <TableCell align="right"><CropSquareSharpIcon /></TableCell>
                                <TableCell align="center" style={{ color: 'green', fontSize: '25px' }}><SiShopify /></TableCell>
                                <TableCell align="right" style={{color:'blue'}}><a target='_blank'>#TKN20203553</a></TableCell>
                                <TableCell align="right">2022-05-23</TableCell>
                                <TableCell align="right">Lucknow</TableCell>
                                <TableCell align="right">Abhishek Dixit</TableCell>
                                <TableCell align="center">0.00</TableCell>
                                <TableCell align="center"><button style={{ color: 'green' }}>Pending</button></TableCell>
                                <TableCell align="right" color='green'><button style={{display:'flex',flexDirection:'row',alignItems:'center'}}><span>Actions </span><KeyboardArrowDownSharpIcon /></button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><AddSharpIcon /></TableCell>
                                <TableCell align="right"><CropSquareSharpIcon /></TableCell>
                                <TableCell align="center" style={{ color: 'green', fontSize: '25px' }}><SiShopify /></TableCell>
                                <TableCell align="right" style={{color:'blue'}}><a target='_blank'>#TKN20203553</a></TableCell>
                                <TableCell align="right">2022-05-23</TableCell>
                                <TableCell align="right">Lucknow</TableCell>
                                <TableCell align="right">Abhishek Dixit</TableCell>
                                <TableCell align="center">0.00</TableCell>
                                <TableCell align="center"><button style={{ color: 'green' }}>Pending</button></TableCell>
                                <TableCell align="right" color='green'><button style={{display:'flex',flexDirection:'row',alignItems:'center'}}><span>Actions </span><KeyboardArrowDownSharpIcon /></button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><AddSharpIcon /></TableCell>
                                <TableCell align="right"><CropSquareSharpIcon /></TableCell>
                                <TableCell align="center" style={{ color: 'green', fontSize: '25px' }}><SiShopify /></TableCell>
                                <TableCell align="right" style={{color:'blue'}}><a target='_blank'>#TKN20203553</a></TableCell>
                                <TableCell align="right">2022-05-23</TableCell>
                                <TableCell align="right">Lucknow</TableCell>
                                <TableCell align="right">Abhishek Dixit</TableCell>
                                <TableCell align="center">0.00</TableCell>
                                <TableCell align="center" style={{ color: 'green', margin: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><button>Pending</button></TableCell>
                                <TableCell align="right" color='green'><button style={{display:'flex',flexDirection:'row',alignItems:'center'}}><span>Actions </span><KeyboardArrowDownSharpIcon /></button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><AddSharpIcon /></TableCell>
                                <TableCell align="right"><CropSquareSharpIcon /></TableCell>
                                <TableCell align="center" style={{ color: 'green', fontSize: '25px' }}><SiShopify /></TableCell>
                                <TableCell align="right" style={{color:'blue'}}><a target='_blank'>#TKN20203553</a></TableCell>
                                <TableCell align="right">2022-05-23</TableCell>
                                <TableCell align="right">Lucknow</TableCell>
                                <TableCell align="right">Abhishek Dixit</TableCell>
                                <TableCell align="center">0.00</TableCell>
                                <TableCell align="center"><button style={{ color: 'green' }}>Pending</button></TableCell>
                                <TableCell align="right" color='green'><button style={{display:'flex',flexDirection:'row',alignItems:'center'}}><span>Actions </span><KeyboardArrowDownSharpIcon /></button></TableCell>
                            </TableRow>


                        </TableBody>


                    </Table>
                </div>
                <nav style={{display:'flex',flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>
                    <PageList>
                        {items.map(({ page, type, selected, ...item }, index) => {
                            let children = null;

                            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                                children = '…';
                            } else if (type === 'page') {
                                children = (
                                    <button
                                        type="button"
                                        style={{
                                            fontWeight: selected ? 'bold' : undefined,
                                        }}
                                        {...item}
                                    >
                                        {page}
                                    </button>
                                );
                            } else {
                                children = (
                                    <button type="button" {...item}>
                                        {type}
                                    </button>
                                );
                            }

                            return <li key={index}>{children}</li>;
                        })}
                    </PageList>
                </nav>




            </Main>
        </Box>
    );
}










"use client"
import { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from "@emotion/react";
import Dropdown from "./Dropdown";
import "./Navbar.css";

const pages = ['Products', 'Usecases', 'About'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const toolbarStyle = {
    // border: '2px solid red',
    display: 'flex',
    justifyContent: "space-around",
    width: '100%',
    padding: '1rem 0',
    // margin: 'auto',
    background: 'var(--bgColor)',
}

const logoStyle = {
    mr: 2,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
}

function Navbar() {
    const theme = useTheme()
    const [anchorElNav, setAnchorElNav] = useState(null);
    const open = Boolean(anchorElNav);
    // const [anchorElUser, setAnchorElUser] = useState(null);
    const [isHover, setIsHover] = useState(false);
    const [navBtnClick, setNavBtnClick] = useState('')

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleScroll = () => {
        document.addEventListener('scroll', () => {
            setNavBtnClick('')
        })
    }
    handleScroll();


    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="static" className="navbar">
            {/* <Container maxWidth="xl"> */}
            <Toolbar
                disableGutters
                sx={toolbarStyle}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{ display: { xs: 'none', md: 'flex' }, ...logoStyle }}
                >
                    <img src="/logo.png" alt="" style={{
                        height: '4rem',
                        margin: '10px 3rem',
                    }} />
                </Typography>

                <Box sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' }
                }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" color={theme.palette.secondary.main}>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{ display: { xs: 'flex', md: 'none' }, ...logoStyle }}
                >
                    <img src="/logo.png" alt="" style={{
                        height: '4rem',
                        margin: '10px 3rem',
                    }} />
                </Typography>
                <Box sx={{
                    // border: '2px solid red',
                    width: '50%',
                    // margin: 'auto',
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    gap: '3rem'
                }}>
                    {pages.map((page) => (
                        <Button
                            variant="text"
                            endIcon={<KeyboardArrowDownIcon />}
                            className="navBtn"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            key={page}
                            onClick={(event) => {
                                if (page === 'Usecases') {
                                    setNavBtnClick('Usecases');
                                    handleOpenNavMenu(event);
                                } else if (page === 'About') {
                                    setNavBtnClick('About');
                                    handleOpenNavMenu(event);
                                } else if (page === 'Products') {
                                    console.log("mouse enter");
                                    setNavBtnClick('Products');
                                    setIsHover((prev) => !isHover);
                                }
                            }}
                            // onMouseEnter={() => {
                            //     if (page === 'Products') {
                            //         console.log("mouse enter");
                            //         setIsHover(true);
                            //     }
                            // }}
                            sx={{ my: 2, color: theme.palette.primary.light, display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                {/* 
                    <Box sx={{ flexGrow: 0 }}>
                         <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
            </Toolbar>
            {navBtnClick !== '' &&
                <Dropdown
                    navBtnClick={navBtnClick}
                    anchorElNav={anchorElNav}
                    handleOpenNavMenu={handleOpenNavMenu}
                    handleCloseNavMenu={handleCloseNavMenu}
                    open={open}
                />}
            {/* </Container> */}
        </AppBar >
    );
}
export default Navbar;

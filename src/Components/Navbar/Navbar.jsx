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
import { useTheme } from "@emotion/react";
import Dropdown from "./Dropdown";

const pages = ['Products', 'Usecases', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    width: '65%',
    position: 'absolute',
    top: '2rem',
    transform: 'translate(25%)',
    margin: 'auto',
    background: 'white',
    borderRadius: '1rem',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
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
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isHover, setIsHover] = useState(false)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Toolbar disableGutters sx={toolbarStyle}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{ display: { xs: 'none', md: 'flex' }, ...logoStyle }}
                    >
                        LOGO
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
                        LOGO
                    </Typography>
                    <Box sx={{
                        // border: '2px solid red',
                        width: '40%',
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'space-around'
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    if (page === 'Products') {
                                        console.log("mouse enter");
                                        setIsHover((prev) => !isHover);
                                    }
                                }}
                                // onMouseEnter={() => {
                                //     if (page === 'Products') {
                                //         console.log("mouse enter");
                                //         setIsHover(true);
                                //     }
                                // }}
                                // onMouseLeave={() => {
                                //     console.log("mouse leave")
                                //     setIsHover(false);
                                // }}
                                sx={{ my: 2, color: theme.palette.primary.dark, display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

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
                    </Box>
                </Toolbar>
                {isHover && <Dropdown />}
            </Container>
        </AppBar >
    );
}
export default Navbar;

import { useState } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AbcIcon from '@mui/icons-material/Abc';
import AodIcon from '@mui/icons-material/Aod';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { useTheme } from "@emotion/react";

const productsList = [
    {
        name: 'Bitmemoir',
        desc: 'Issue.Store.Verify.Retrieve'
    },
    {
        name: 'BitWallet',
        desc: 'Your Secure Digital Wallet'
    },
    {
        name: 'BitBhoomi',
        desc: 'Where Technology Meets Sustainability'
    },
    {
        name: 'BITDPP',
        desc: 'The New-Age Digital Product Passport'
    },
]

const productDetails = [
    {
        title: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        title: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        title: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        title: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        title: 'Lorem ipsum dolor',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
]

const Dropdown = ({
    navBtnClick,
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    open
}) => {
    const theme = useTheme();
    const [hoveredProduct, setHoveredProduct] = useState(0);

    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorElNav);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <>
            {
                navBtnClick === 'Products' &&
                <Grid container spacing={2} sx={{
                    // border: '2px solid red',
                    height: '75vh',
                    background: 'var(--lightGrey)',
                    pt: 4,
                    width: '55%',
                    padding: '1rem',
                    position: 'absolute',
                    top: '6rem',
                    transform: 'translate(40%)',
                    borderRadius: '1rem',
                    zIndex: 100,
                }}>
                    <Grid item xs={4} sx={{
                        // border: '2px solid blue',
                    }}>
                        <List sx={{
                            width: '100%',
                            maxWidth: 360,
                            paddingLeft: 0,
                        }}>
                            {
                                productsList.map((product, index) => (
                                    <ListItem
                                        alignItems="flex-start"
                                        sx={{
                                            "& .MuiListItemText-secondary": { marginTop: '4px' },
                                            background: index === 0 && !hoveredProduct
                                                && 'var(--purpleGreenGradient)',
                                            color: index === 0 && !hoveredProduct &&
                                            {
                                                color: 'white',
                                                "& .MuiListItemText-secondary": {
                                                    color: 'white',
                                                },
                                            },
                                            borderRadius: '4px',
                                            "&:hover": {
                                                background: 'var(--purpleGreenGradient)',
                                                color: 'white',
                                                "& .MuiListItemText-secondary": {
                                                    color: 'white',
                                                },
                                            },
                                        }}
                                        onMouseEnter={() => setHoveredProduct(index)}
                                        onMouseLeave={() => setHoveredProduct(0)}
                                    >
                                        <ListItemText
                                            primary={product.name}
                                            secondary={product.desc}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={8} sx={{
                        // border: '2px solid blue',
                        // backgroundColor: 'white'
                    }}>
                        <List sx={{
                            width: '100%',
                            padding: '1rem',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                        }}>
                            {
                                productDetails.map((detail, index) => (
                                    <ListItem alignItems="flex-start" key={index}>
                                        <ListItemAvatar>
                                            {hoveredProduct == 0 && <AbcIcon />}
                                            {hoveredProduct == 1 && <AodIcon />}
                                            {hoveredProduct == 2 && <AppShortcutIcon />}
                                            {hoveredProduct == 3 && <AppShortcutIcon />}
                                            {hoveredProduct == 4 && <AppShortcutIcon />}
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={detail.title}
                                            secondary={detail.desc}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                </Grid >
            }
            {
                navBtnClick === 'Usecases' &&
                <Menu
                    id="basic-menu"
                    anchorEl={anchorElNav}
                    open={open}
                    onClose={handleCloseNavMenu}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#bitmemoir">Bitmemoir</a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#bitbhoomi">BitBhoomi</a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#bitdpp">BitDPP</a>
                    </MenuItem>
                </Menu>
            }
            {
                navBtnClick === 'About' &&
                <Menu
                    id="basic-menu"
                    anchorEl={anchorElNav}
                    open={open}
                    onClose={handleCloseNavMenu}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#team">Team</a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#roadmap">Roadmap</a>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <a href="#contact">Contact</a>
                    </MenuItem>
                </Menu>
            }
        </>
    )
}

export default Dropdown;
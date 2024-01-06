import { useState } from 'react';
import {
    Grid,
    Box,
    Typography,
    Button
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
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        name: 'NFTree',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        name: 'BITDPP',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        name: 'BitWallet',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
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

const Dropdown = () => {
    const theme = useTheme();
    const [hoveredProduct, setHoveredProduct] = useState(0);

    return (
        <Grid container spacing={2} sx={{
            // border: '2px solid red',
            height: '75vh',
            background: 'var(--darkGrey)',
            pt: 4,
            width: '55%',
            padding: '1rem',
            position: 'absolute',
            top: '9rem',
            transform: 'translate(40%)',
            borderRadius: '1rem',
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
                                    backgroundImage: index === 0 && !hoveredProduct
                                        && 'linear-gradient(to right, var(--softGreen), var(--lightSteelBlue))',
                                    color: index === 0 && !hoveredProduct &&
                                    {
                                        color: 'white',
                                        "& .MuiListItemText-secondary": {
                                            color: 'white',
                                        },
                                    },
                                    borderRadius: '4px',
                                    "&:hover": {
                                        backgroundImage: index % 2
                                            ? 'linear-gradient(to right, var(--pinkish-purple), var(--lightSteelBlue))'
                                            : 'linear-gradient(to right, var(--softGreen), var(--lightSteelBlue))',
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
    )
}

export default Dropdown;
'use client'
import {
    Grid,
    Box,
    Typography,
    Button
} from '@mui/material';
import Vision from '../Vision/Vision';
import ActionAreaCard from './Stability';
import Layer from './Layer';
import Difference from './Difference';
import Video from './VideoYT';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import ContentSlider from '../Portfolio/ContentSlider';
import Client from '../Client/Client';

const contentBox = {
    height: '100%',
    width: '85%',
    marginLeft: 'auto',
    padding: '0 5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '1rem',
}

const imgContainer = {
    height: '100vh',
    display: 'flex',
    alignItems: "center",
}

const HomePage = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ pt: 4 }}>
                <Grid item xs={7} sx={{ height: '100vh' }}>
                    <Box sx={contentBox}>
                        <Typography variant="h3" gutterBottom>
                            Sustainable Growth
                            with Blockchain
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            We ideate, develop, deploy and maintain blockchain technology solutions for start-ups, enterprises, and government.
                        </Typography>
                        <Button variant='contained' sx={{ mt: 2 }}>Learn more</Button>
                    </Box>
                </Grid>
                <Grid item xs={5} sx={imgContainer}>
                    <Box sx={{ height: '60%', width: '65%' }}>
                        <img
                            src="/assets/home/img3.gif"
                            alt="Your GIF description"
                            width="100%"
                            height="100%"
                        />
                    </Box>
                </Grid>
            </Grid >
            <Vision />
            <ContentSlider />
            <ActionAreaCard />
            <Layer />
            <Difference />
            <Video />
            <Client/>
            <Team />
            <Contact />
        </>
    )
}

export default HomePage
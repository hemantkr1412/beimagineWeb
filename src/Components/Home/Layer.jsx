'use client'
import { Typography, Button, Box } from "@mui/material";
const colortheme = ('#2e2e2e')

const totalBox = {
    width: '100%',
    height: '48vh',
    backgroundColor: colortheme,
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-width: 874px)': {
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        padding: '0px'
    }
}

const box1 = {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
}

const imgStyle = {
    width: '80%',
    height: '50%',
    '@media(max-width:874px)': {
        width: '100%',
        height: '80%'
    }
}

const box2 = {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    padding: '2em 4em'
}

const title = {
    fontSize: '1.5em',
    marginBottom: '15px'
}

const para = {
    fontSize: '1em'
}

const buttonbox = {
    display: 'flex',
    marginTop: '25px',
    gap: '50px'
}

const bitbutton = {
    color: 'white',
    border: '1px solid #fff',
    "&:hover": {
        color: 'black',
        backgroundColor: 'white'
    }
}

const readbutton = {
    color: 'white'
}

const Layer = () => {
    return (

        <Box sx={totalBox}>
            <Box sx={box1}>
                <img
                    component="img"
                    height="20"
                    src="/assets/layer/layer.svg"
                    style={imgStyle}
                />
            </Box>
            <Box sx={box2}>
                <Typography sx={title}>Lorem ipsum </Typography>
                <Typography sx={para}> consectetur adipiscing elit, sed do eiusmod tempor  </Typography>
                <Typography sx={para}>incididunt ut labore et dolore magna aliqua</Typography>
                <Typography sx={para}>Excepteur sint occaecat</Typography>

                <Box sx={buttonbox}>
                    <Button sx={bitbutton}>Beimagine</Button>
                    <Button sx={readbutton}>Read more</Button>
                </Box>
            </Box>
        </Box>

    )
}

export default Layer;
import { Typography, Box } from "@mui/material";
import { TripOriginRounded } from '@mui/icons-material';
import YouTube from 'react-youtube';

const title = {
    fontSize: '3rem',
    fontWeight: 'bold'
}

const titlebox = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    marginBottom: '5%'
}

const videoAndcontent = {
    display: 'flex',
    gap: '3%'
}

const contentbox = {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
}

const contenticon = {
    display: 'flex',
    marginTop: '25px'
}

const icon = { width: '10%' }

const content = { fontSize: '1.1rem' }

const data = [
    { content: 'Duis aute irure dolor' },
    { content: 'upidatat non proident,' },
    { content: 'unt in culpa qui officia' },
    { content: 'consectetur adipiscing elit sed do' },
    { content: 'upidatat non proident' },
    { content: 'unt in culpa qui officia dfdfdfd' },
    { content: 'mollit anim id est laborum' }
]

const Video = () => {
    const youtubeVideoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const videoId = youtubeVideoUrl.split('v=')[1];

    return (
        <>
            <Box sx={titlebox}>
                <Typography>Lorem ipsum dolor sit amet</Typography>
                <Box>
                    <Typography sx={title}> Ut enim ad minim veniam quis nostrud </Typography>
                    <Typography sx={title}>Commitment to our Community</Typography>
                </Box>
            </Box>
            <Box sx={videoAndcontent}>
                <Box sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end' }}>
                    <YouTube videoId={videoId} />
                </Box>
                <Box sx={contentbox}>
                    {data.map((item, index) => (
                        <Box key={index} sx={contenticon}>
                            <TripOriginRounded sx={icon} className="iconcolor" />
                            <Typography sx={content}>{item.content}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default Video;

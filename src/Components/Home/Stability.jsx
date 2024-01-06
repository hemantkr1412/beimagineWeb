'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Box } from '@mui/material';
import { AdjustTwoTone, AlbumTwoTone, AddCircleOutlineTwoTone, AdsClickTwoTone, CatchingPokemonTwoTone, CameraTwoTone } from '@mui/icons-material';
import '../../app/globals.css'

const title = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '3.5rem',
  fontWeight: 'bold'
}
const subTitle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '1rem',
  wordSpacing: '1px',
  color: 'grey',
  marginBottom: '4%'
}
const allcards = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '15px',
  marginLeft: '10%',
  marginRight: '10%'
}
const cardStyle = {
  color: 'white',
  Width: '60px',
  height:'45vh',
  display: 'flex',
  borderRadius: '10px',
  justifyItems: 'center',
  border: "none",
  marginTop: '5%'
}
const imgStyle = {
  width: '180px',
  height: '80px',
  display: 'flex',
  marginLeft: '26%'
}
const cardTitle = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold'
}
const cardcontent = {
  color: 'white',
  fontSize: '1.1rem',
  wordSpacing: '1px',
  textAlign: 'center'
}
const buttonbox = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '5%',
  marginBottom: '5%'
}
const explorebutton = {
  color: 'black',
  backgroundColor: 'white',
  "&:hover": {
    color: 'white',
    backgroundColor: 'black'
  }
}

const cardData = [
  {
    imageSrc: <AdjustTwoTone sx={imgStyle} />,
    title: 'Lorem ipsum dolor',
    content: 'sit amet, consectetur adipiscing tempor incididunt ut labore et dolore magna soalsf elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imageSrc: <AlbumTwoTone sx={imgStyle} />,
    title: 'Sed ut perspiciatis',
    content: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
  },
  {
    imageSrc: <AddCircleOutlineTwoTone sx={imgStyle} />,
    title: 'beatae vitae dicta',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    imageSrc: <AdsClickTwoTone sx={imgStyle} />,
    title: 'perspiciatis unde',
    content: 'unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto ',
  },
  {
    imageSrc: <CatchingPokemonTwoTone sx={imgStyle} />,
    title: ' vel illum qui ',
    content: ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam',
  },
  {
    imageSrc: <CameraTwoTone sx={imgStyle} />,
    title: 'consectetur adipiscing elit',
    content: 'sed do eiusmod tempor incididunt ut labore incididunt ut labore et dolore magna  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
  },
];

const ActionAreaCard = () => {
  return (

    <Box>
      <Typography sx={title}>
        eiusmod tempor incididunt
      </Typography>
      <Box sx={subTitle}>
        <Typography >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore,
        </Typography>
        <Typography> Excepteur sint occaecat cupidatat non proident</Typography>
      </Box>

      <Box sx={allcards}>
        {cardData.map((card, index) => (
          <Card key={index} sx={cardStyle} className='colortheme-stability'>
            <CardActionArea >
              {card.imageSrc}
              <CardContent>
                <Typography sx={cardTitle} gutterBottom variant="h5" component="Box">
                  {card.title}
                </Typography>
                <Typography sx={cardcontent} variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Box sx={buttonbox}>
        <Button sx={explorebutton}>Explore</Button>
      </Box>
    </Box>

  );
}

export default ActionAreaCard;

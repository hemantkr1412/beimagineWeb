'use client'
import { Typography, Box, Card, CardActions, CardContent, Button } from "@mui/material";
import { DataUsage, Deblur, AllInclusive, Animation } from "@mui/icons-material";

const totalBox = {
    marginLeft: '9%',
    marginRight: '5%',
    marginTop: '5%'
};
const box1 = {
    marginBottom: '8%'
};
const box2 = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))'
};
const title = {
    display: 'flex',
    fontSize: '3.5rem',
    fontWeight: 'bold'
};
const subTitle = {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.1rem'
};
const layer2 = {
    width: '100%',
    height: '20vh',
    marginBottom: '5%'
};

const cardStyles = {
    card: {
        width: '80%',
        marginBottom: '80px',
        border: 'none',
        backgroundColor: 'black',
        color: 'white'
    },
    cardgif: {
        width: '12%',
        background: 'black'
    },
    amountType: {
        fontSize: 18,
        marginBottom: '1.5rem'
    },
    cardAmount: {
        fontSize: '3.2rem',
        fontWeight: 'bold'
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    cardContent: {
        fontSize: '1.05rem'
    },
    button: {
        color: 'white'
    }
};

const cardData = [
    {
        cardgif: <DataUsage />,
        amount: '15,200',
        amountType: 'lorum porum/rormum',
        title: 'Lorem ipsum do',
        content: 'sit amet, consectetur adipiscing elit, sed do eiusmod voluptatem ab illo tempor incididunt.',
    },
    {
        cardgif: <Deblur />,
        amount: '$0.001',
        amountType: 'lorum porum/rormum',
        title: 'Sed ut perspic',
        content: 'unde omnis iste natus error sit voluptatem ab illo inventore veritatis et quasi voluptatem architecto',
    },
    {
        cardgif: <AllInclusive />,
        amount: '0.8',
        amountType: 'lorum porum/rormum',
        title: 'beatae vitae dicta',
        content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernat eos qui ratione voluptatem sequi nesciunt.',
    },
    {
        cardgif: <Animation />,
        amount: '92%',
        amountType: 'lorum porum/rormum',
        title: 'perspiciatis unde',
        content: 'unde omnis iste natus error sit voluptatem accu eaque ipsa quae ab veritatis et quasi architecto ',
    },
];

const Difference = () => {
    return (
        <>
            <Box sx={totalBox}>
                <Box sx={box1}>
                    <Typography sx={title}>id est laborum</Typography>
                    <Typography sx={subTitle}>onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Typography>
                    <Typography sx={subTitle}>onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et and</Typography>
                    <Typography sx={subTitle}>onsectetur adipiscing elit, sed do eiusmod tempor </Typography>
                </Box>

                <Box sx={box2}>
                    {cardData.map((card, index) => (
                        <Card key={index} sx={cardStyles.card} className="colortheme-difference">
                            <CardContent>
                                {card.cardgif}
                                <Typography sx={cardStyles.cardAmount} >
                                    {card.amount}
                                </Typography>
                                <Typography sx={cardStyles.amountType} >
                                    {card.amountType}
                                </Typography>
                                <Typography sx={cardStyles.cardTitle} >
                                    {card.title}
                                </Typography>
                                <Typography sx={cardStyles.cardContent} >
                                    {card.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={cardStyles.button}>Learn More</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>

            <Box sx={layer2} className='layer2'>
            </Box>
        </>
    );
}

export default Difference;

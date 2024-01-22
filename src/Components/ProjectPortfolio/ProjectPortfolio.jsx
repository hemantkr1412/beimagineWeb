"use client"
import Grid from '@mui/material/Grid';
import { productPortfolioData } from './productPortfolioData.js';
import {
    Typography,
    Card,
    CardContent,
    Box
} from '@mui/material';
import { useRouter } from 'next/navigation';
import './ProjectPortfolio.css';

const cardTitle = {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold'
}

const cardcontent = {
    color: 'white',
    wordSpacing: '1px',
    textAlign: 'center'
}

const iconStyle = {
    height: '2.5rem',
    width: '2.5rem',
    filter: 'invert(100%)',
}

const ProjectPortfolio = () => {
    const router = useRouter();

    return (
        <>
            <section>
                <Typography
                    variant="h3"
                    sx={{
                        margin: '4rem 0',
                        textAlign: "center",
                        fontWeight: 'bold'
                    }}
                >
                    Product Portfolio
                </Typography>

                {
                    productPortfolioData.map((product, index) => (
                        <section style={{ marginBottom: '4rem' }} id={`${product.title.toLowerCase()}`} className="productSection">
                            <Box sx={{
                                background:'var(--purpleGreenGradient)',
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                py: 2, mb: 5
                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{product.title}</Typography>
                                <Typography variant="body1" sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    mt: 2
                                }}>{product.tagline}</Typography>
                            </Box>
                            <Grid container columns={16}>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6} sx={{
                                            // border: '2px solid red',
                                        }}>
                                            <Box sx={{
                                                // border: '2px solid red',
                                                height: '20rem',
                                                width: '75%',
                                                p: 4,
                                                margin: 'auto'
                                            }}>
                                                <img src={product.image} alt="" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sx={{
                                            // border: '2px solid red',
                                        }}>
                                            <Box sx={{
                                                // border: '2px solid red',
                                                height: '100%',
                                                p: 4,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                gap: '12px'
                                            }}>
                                                {
                                                    product.desc.map((desc, ind) => (
                                                        <Typography variant="body1">•&nbsp;  {`${desc}`}</Typography>
                                                    ))
                                                }
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>

                            <Typography variant="h4" className="useCasesHeading" sx={{my: 5}}>Use cases</Typography>
                            <Grid container columns={16}>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2} sx={{
                                        padding: '1rem',
                                    }}>
                                        {
                                            product.useCases.map((useCase, index) => (
                                                <Grid
                                                    item
                                                    xs={4}
                                                    key={index}
                                                >
                                                    <Card
                                                        sx={{
                                                            py: 4,
                                                            height: '100%',
                                                            textAlign: 'center',
                                                            background: '#222223'
                                                        }}
                                                    // className='colortheme-stability'
                                                    >
                                                        <img src={useCase.imageSrc} alt="" style={iconStyle} />
                                                        <CardContent>
                                                            <Typography sx={cardTitle} gutterBottom variant="h6" component="Box">
                                                                {useCase.title}
                                                            </Typography>
                                                            <Typography sx={cardcontent} variant="body1" color="text.secondary">
                                                                {useCase.content}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </section>
                    ))
                }



            </section >
            <br /><br /><br /><br />
        </>
    );
};

export default ProjectPortfolio;
"use client"
import Grid from '@mui/material/Grid';
import { useCasesData } from '../UseCases/useCasesData';
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
    filter: 'invert(100%)'
}

const ProjectPortfolio = () => {
    const router = useRouter();

    return (
        <>
            <section>
                <Typography
                    variant="h3"
                    sx={{
                        marginBottom: '6rem',
                        textAlign: "center",
                        fontWeight: 'bold'
                    }}
                >
                    Project Portfolio
                </Typography>

                <Grid container>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={5}>
                        <Box>
                            <Box sx={{
                                background: 'linear-gradient(216deg, #77C9FD, #181c1f 98.5%)',
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                py: 5
                            }}>
                                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Bitmemoir</Typography>
                                <Typography variant="body1" sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    mt: 2
                                }}>Issue.Store.Verify.Retrieve</Typography>
                            </Box>
                            <Box sx={{ height: '25rem', width: '100%', p: 4 }}>
                                <img src="https://img.freepik.com/free-vector/isometric-concept-people-working-with-technology_52683-17637.jpg?w=740&t=st=1705490595~exp=1705491195~hmac=05f887ba1f782892079610b7037390f98f043363a358a5d362d4a0496c002686" alt="" />
                            </Box>
                            <Box sx={{
                                mt: 2,
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <Typography variant="body1">NFT utility platform leveraging blockchain technology.</Typography>
                                <Typography variant="body1">Creates a decentralized and tamper-proof infrastructure.</Typography>
                                <Typography variant="body1">Empowers individuals and organizations to issue verifiable digital credentials and documents.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={7} sx={{
                        background: "var(--footerBg)",
                        pb: 4
                    }}>
                        <Typography variant="h4" sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#70BDEE',
                            my: 5
                        }}>Use cases</Typography>
                        <Grid container spacing={2} sx={{
                            padding: '1rem',
                        }}>
                            {
                                useCasesData.map((useCase, index) => (
                                    <Grid
                                        item
                                        xs={4}
                                        key={index}
                                    >
                                        <Card
                                            sx={{
                                                py: 4,
                                                height: '100%',
                                                textAlign: 'center'
                                            }}
                                            className='colortheme-stability'
                                        >
                                            <img src={useCase.imageSrc} alt="" style={iconStyle} />
                                            <CardContent>
                                                <Typography sx={cardTitle} gutterBottom variant="body1" component="Box">
                                                    {useCase.title}
                                                </Typography>
                                                <Typography sx={cardcontent} variant="body2" color="text.secondary">
                                                    {useCase.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={5}>
                        <Box>
                            <Box sx={{
                                background: 'linear-gradient(216deg, #77C9FD, #181c1f 98.5%)',
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                py: 5
                            }}>
                                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>BitBhoomi</Typography>
                                <Typography variant="body1" sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    mt: 2
                                }}>Where Technology Meets Sustainability</Typography>
                            </Box>
                            <Box sx={{ height: '25rem', width: '100%', p: 4 }}>
                                <img src="https://img.freepik.com/free-vector/technological-ecology-concept-with-plant_23-2148441822.jpg?w=740&t=st=1705495851~exp=1705496451~hmac=39837def9e7c6041dc51ed54c413a80ee745da641b6100c7bf6eedc28a8a1ca0" alt="" />
                            </Box>
                            <Box sx={{
                                mt: 2,
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <Typography variant="body1">Revolutionary platform that harnesses the power of blockchain to bring transparency to tree plantation activities.</Typography>
                                <Typography variant="body1">Connects passionate individuals and organizations with impactful tree-planting initiatives.</Typography>
                                <Typography variant="body1">Enables witnessing the growth and impact of planted trees through the Digital Monitoring, Reporting, and Verification (DMRV) services.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={7} sx={{
                        background: "var(--footerBg)",
                        pb: 4
                    }}>
                        <Typography variant="h4" sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#70BDEE',
                            my: 5
                        }}>Use cases</Typography>
                        <Grid container spacing={2} sx={{
                            padding: '1rem',
                        }}>
                            {
                                useCasesData.map((useCase, index) => (
                                    <Grid
                                        item
                                        xs={4}
                                        key={index}
                                    >
                                        <Card
                                            sx={{
                                                py: 4,
                                                height: '100%',
                                                textAlign: 'center'
                                            }}
                                            className='colortheme-stability'
                                        >
                                            <img src={useCase.imageSrc} alt="" style={iconStyle} />
                                            <CardContent>
                                                <Typography sx={cardTitle} gutterBottom variant="body1" component="Box">
                                                    {useCase.title}
                                                </Typography>
                                                <Typography sx={cardcontent} variant="body2" color="text.secondary">
                                                    {useCase.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={5}>
                        <Box>
                            <Box sx={{
                                background: 'linear-gradient(216deg, #77C9FD, #181c1f 98.5%)',
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                py: 5
                            }}>
                                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>BitDPP</Typography>
                                <Typography variant="body1" sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    mt: 2
                                }}>The New-Age Digital Product Passport</Typography>
                            </Box>
                            <Box sx={{ height: '25rem', width: '100%', p: 4 }}>
                                <img src="https://img.freepik.com/free-vector/isometric-concept-people-working-with-technology_52683-17637.jpg?w=740&t=st=1705490595~exp=1705491195~hmac=05f887ba1f782892079610b7037390f98f043363a358a5d362d4a0496c002686" alt="" />
                            </Box>
                            <Box sx={{
                                mt: 2,
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <Typography variant="body1">Visionary concept that aims to revolutionize the perspective towards daily-use products.</Typography>
                                <Typography variant="body1">Places spotlight on sustainability and the intricate journey of products from source to consumer's hands.</Typography>
                                <Typography variant="body1">Revolutionizes how companies manage and authenticate products and provide transparent and traceable information.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={7} sx={{
                        background: "var(--footerBg)",
                        pb: 4
                    }}>
                        <Typography variant="h4" sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#70BDEE',
                            my: 5
                        }}>Use cases</Typography>
                        <Grid container spacing={2} sx={{
                            padding: '1rem',
                        }}>
                            {
                                useCasesData.map((useCase, index) => (
                                    <Grid
                                        item
                                        xs={4}
                                        key={index}
                                    >
                                        <Card
                                            sx={{
                                                py: 4,
                                                height: '100%',
                                                textAlign: 'center'
                                            }}
                                            className='colortheme-stability'
                                        >
                                            <img src={useCase.imageSrc} alt="" style={iconStyle} />
                                            <CardContent>
                                                <Typography sx={cardTitle} gutterBottom variant="body1" component="Box">
                                                    {useCase.title}
                                                </Typography>
                                                <Typography sx={cardcontent} variant="body2" color="text.secondary">
                                                    {useCase.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </section >
            <br /><br /><br /><br />
        </>
    );
};

export default ProjectPortfolio;
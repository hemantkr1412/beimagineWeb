import {
    Grid,
    Typography,
    Button,
    TextField
} from '@mui/material';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <Typography variant='h3' id="contact" sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '5%'
            }}>Feel free to reach out to us</Typography>
            <Grid container>
                <Grid xs={4}></Grid>
                <Grid xs={4}>
                    <form>
                        <Typography variant="h4" className='heading'>Contact us</Typography>
                        <TextField
                            id="outlined-basic"
                            placeholder="Name"
                            variant="outlined"
                            className='textField'
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            placeholder="Email"
                            variant="outlined"
                            className='textField'
                            fullWidth
                        />
                        <TextField
                            id="outlined-basic"
                            placeholder="Your message"
                            variant="outlined"
                            className='textField'
                            fullWidth
                            multiline
                            rows={3}
                        />
                        <Button variant='contained' className="submitBtn">Submit</Button>
                    </form>
                </Grid>
                <Grid xs={4}></Grid>
            </Grid>
        </>
    )
}

export default Contact
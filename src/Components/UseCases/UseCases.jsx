'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Box } from '@mui/material';
import { useCasesData } from './useCasesData';

const allcards = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '15px',
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: '4rem'
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

const iconStyle = {
  height: '2.5rem',
  width: '2.5rem',
  filter: 'invert(100%)'
}

const UseCases = () => {
  return (
    <>
      <div id="usecases" style={{ height: '3rem' }}></div>
      <Box>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>Use cases</Typography>
        <Typography
          variant="body1"
          sx={{
            width: '40%',
            margin: 'auto',
            textAlign: 'center',
            mt: 3, mb: 5
          }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, labore iure consectetur soluta quibusdam consequatur veniam dolorum atque</Typography>

        <Box sx={allcards}>
          {useCasesData.map((useCase, index) => (
            <Card
              key={index}
              sx={{ py: 4, textAlign: 'center' }}
              className='colortheme-stability'
            >
              <img src={useCase.imageSrc} alt="" style={iconStyle} />
              <CardContent>
                <Typography sx={cardTitle} gutterBottom variant="h5" component="Box">
                  {useCase.title}
                </Typography>
                <Typography sx={cardcontent} variant="body2" color="text.secondary">
                  {useCase.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default UseCases;

import {
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent
} from "@mui/material";

const sectionStyle={
    margin:'6rem 0'
}

const Team = () => {
    return (
        <section style={sectionStyle}>
            <Typography variant='h2' sx={{
                textAlign:'center',
                my:4
            }}>Our Team</Typography>
            <Grid container spacing={5} sx={{ p: 5 }}>
                {
                    [1, 2, 3, 4, 5, 6].map((member, index) =>
                        <Grid item xs={2} key={index}>
                            <Card sx={{ maxWidth: 450 }} key={index}>
                                <CardMedia
                                    sx={{ height: 180 }}
                                    image={`${index % 2 ? '/assets/team/member-1.png' : '/assets/team/member-2.jpg'}`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" className="personName">
                                        Peter Parker
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="personCourse">
                                        lorem ipsum
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </section>
    )
}

export default Team;
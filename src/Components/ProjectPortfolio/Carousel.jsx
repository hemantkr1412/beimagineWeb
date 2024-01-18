import {
    Typography,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from './projectsData';

const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const arrowStyle = {
    display: "block",
    position: 'absolute',
    top: '11.5rem',
    zIndex: 100,
    transform: 'scale(2)'
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arrowStyle,
                left: '4rem',
            }}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                ...arrowStyle,
                right: '4rem',
            }}
            onClick={onClick}
        />
    );
}

const Carousel = () => {
    return (
        <Slider {...settings} sx={{
            width: '90%',
            margin: 'auto',
        }}>
            {
                data.map((course, index) =>
                    <div>
                        <Card
                            sx={{
                                maxWidth: 400,
                                margin: 'auto',
                                transition: '0.2s ease-in-out',
                            }} key={index}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }}>
                                    {course.title}
                                </Typography>
                                <Typography variant="body1">
                                    {course.tagline}
                                </Typography>
                            </CardContent>
                            <Link href={course.url} target='_blank' rel="noopener noreferrer">
                                <CardMedia
                                    sx={{ height: 150 }}
                                    image={course.image}
                                    title="green iguana"
                                />
                            </Link>
                            <CardContent>
                                <ul className='projectDesc'>
                                    {
                                        course.desc.map((item, index) => (
                                            <li> {item}</li>
                                        ))
                                    }
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                )
            }
        </Slider>
    )
}

export default Carousel
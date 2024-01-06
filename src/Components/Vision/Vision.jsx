import {
	Grid,
	Typography,
	Box,
	Card,
	CardMedia
} from "@mui/material";
import "./Vision.css";

const Vision = () => {
	return (
		<>
			<div id="vision"></div>
			<Grid
				container
				spacing={8}
				justifyContent="center"
				sx={{ marginBottom:'6rem' }}>
				<Grid item xs={12} sm={2} md={1} lg={2}
					sx={{ display: { xs: "none", md: "block" } }}>
				</Grid>
				<Grid item xs={12} sm={6} md={5} lg={4}
					className="imgContainer"
					sx={{
						display: {
							xs: "block !important",
							sm: "none !important",
						},
					}}>
					<Typography
						variant="h3"
						gutterBottom
						sx={{
							fontWeight: "bold",
							mb: 4,
							display: { xs: "block", sm: "none" },
							textAlign: "center",
						}}
						className="visionHead">
						Vision
					</Typography>
					<Card
						className="visionImgContainer">
						<CardMedia
							component="img"
							sx={{ objectFit: "contain" }}
							image="/assets/mission/mission.jpg"
							alt="Image Alt Text"
							className="aboutImg"

						/>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={5} lg={4}>
					<Box sx={{ textAlign: "start" }} className="visionBox">
						<Typography
							variant="h3"
							gutterBottom
							sx={{
								fontWeight: "bold",
								mb: 4,
								display: { xs: "none", sm: "block" },
								textAlign: "start",
							}}
							className="visionHead">
							Vision
						</Typography>
						<Typography
							sx={{
								typography: "body1",
								lineHeight: 1.8,
								textAlign: "justify",
								marginRight: "0",
							}}
							gutterBottom
							id="aboutInfo">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dignissimos ea alias itaque officiis sequi nesciunt ipsam facere quasi rem libero et voluptate odio, architecto suscipit perspiciatis veritatis, repudiandae fugiat quam. Libero placeat laudantium iste eius accusantium commodi quam sit. Libero placeat laudantium iste eius accusantium commodi quam sit.
						</Typography>
					</Box>
				</Grid>

				<Grid item xs={12} sm={6} md={5} lg={4}
					className="imgContainer"
					sx={{
						display: { xs: "none", sm: "block" }
					}}>
					<Card
						sx={{ boxShadow: "none" }}
						className="visionImgContainer">
						<CardMedia
							component="img"
							image="/assets/mission/mission.jpg"
							alt="Image Alt Text"
						/>
					</Card>
				</Grid>

				<Grid item xs={12} sm={2} md={1} lg={2}
					sx={{ display: { xs: "none", md: "block" } }}>
				</Grid>
			</Grid>
		</>
	);
};

export default Vision;

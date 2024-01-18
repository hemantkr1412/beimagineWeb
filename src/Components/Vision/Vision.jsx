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
			<div id="about"></div>
			<Grid
				container
				spacing={8}
				justifyContent="center"
				sx={{ marginBottom:'12rem' }}>
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
							Our vision is to pioneer the next frontier of technological evolution by designing revolutionary blockchain-based products. We are committed to crafting solutions that transcend imagination, addressing real-world challenges with innovation, transparency, and a commitment to creating lasting positive impact.
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

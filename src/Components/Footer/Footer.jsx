import { Grid, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<Grid container spacing={2} className="footerDiv">
				<Grid item xs={1}></Grid>
				<Grid item xs={12} sm={5} md={6} lg={6} id="footerLogo">
					<Box sx={{ width: '20%' }}>
						<img
							src='/logo.png'
							alt=""
							style={{ marginTop: ".5rem", }}
							id="footerImg"
						/>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={5}
					md={4}
					lg={3}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
					id="footerIcons">
					<Box>
						<InstagramIcon
							sx={{
								transform: "scale(1.4)",
								cursor: "pointer",
								color: 'white'
							}}
						/>
						<TwitterIcon className="footerIcons" />
						<LinkedInIcon className="footerIcons" />
						<TelegramIcon className="footerIcons" />
					</Box>
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<p className="copyrightText">© 2023 Beyond Imagination Technologies Pvt. Ltd.</p>
		</>
	);
};

export default Footer;

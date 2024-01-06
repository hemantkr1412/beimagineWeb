"use client"
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "@/Components/Navbar/Navbar"
import HomePage from "@/Components/Home/Home";
import Footer from '@/Components/Footer/Footer';
import theme from './theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HomePage />
      <Footer />
    </ThemeProvider >
  )
}

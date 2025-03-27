import { useState } from "react";
import { Box } from "@mui/material";
import PrimaryBtn from "../../components/primary-btn";
import Slider from "../../components/slider";
import { slidesData } from "../../constants/init";
import { useNavigate } from "react-router-dom";

const InitContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLastSlide = currentSlide === slidesData.length - 1;
  const navigate = useNavigate();
  return (
    <>
      <Box flex={1} display="flex" alignItems="center">
        <Slider slides={slidesData} onSlideChange={setCurrentSlide} />
      </Box>
      <Box p={2} pb={5}>
        <PrimaryBtn disabled={!isLastSlide} onClick={()=>navigate('/register')}>Continuar</PrimaryBtn>
      </Box>
    </>
  );
};

export default InitContent;

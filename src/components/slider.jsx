import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";

const Slider = ({ slides, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;
      if (difference > 50 && currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (difference < -50 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Stack textAlign="center" color="white" p={2} spacing={4} alignItems={"center"}>
        <Box color={theme.palette.warning.main}>{slides[currentIndex].icon}</Box>
        <Typography variant="h4" fontWeight={700} mb={2}>
          {slides[currentIndex].title}
        </Typography>
        <Typography variant="h6" fontWeight={600} mb={1} color="warning.main">
          {slides[currentIndex].subtitle}
        </Typography>
        <Typography variant="body1" color="grey.300" width={"60%"}>
          {slides[currentIndex].description}
        </Typography>
      </Stack>

      <Box display="flex" mt={4} gap={1}>
        {slides.map((_, index) => (
          <Stack
            key={index}
            bgcolor={index === currentIndex ? "grey.500" : "grey.300"}
            height={10}
            width={index === currentIndex ? 30 : 10}
            borderRadius={10}
            onClick={() => setCurrentIndex(index)}
            sx={{
              transition: "width 0.3s",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Slider;

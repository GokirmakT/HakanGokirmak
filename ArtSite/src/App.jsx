import { Stack, ImageList, ImageListItem, Typography, Button } from "@mui/material";
import images from "./Images";
import { Link } from 'react-router-dom';

function App() {
  // images dizisini 3 kez tekrar eden yeni array oluşturuyoruz
  const repeatedImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <Stack
      width="100%"
      height="90.9vh"
      direction="column"
      sx={{
        overflow: 'hidden',
        position: "relative"
      }}
    >
      <Stack
        sx={(theme) => ({
          animation: "scrollUp 150s linear infinite",
          [theme.breakpoints.down("sm")]: {
            animation: "scrollUp 40s linear infinite", // küçük ekranlarda daha hızlı
          },
          [theme.breakpoints.up("md")]: {
            animation: "scrollUp 80s linear infinite", // orta ekranlarda
          },
          [theme.breakpoints.up("lg")]: {
            animation: "scrollUp 180s linear infinite", // büyük ekranlarda daha yavaş
          },
          "@keyframes scrollUp": {
            "0%": { transform: "translateY(0)" },
            "100%": { transform: "translateY(-33.33%)" }
          }
        })}>
        <ImageList variant="masonry" cols={4} gap={12} sx={{ width: "100%" }}>
          {repeatedImages.map((item, idx) => (
            <ImageListItem key={idx}>
              <img
                src={item.src}
                alt={item.title}
                style={{ width: "100%", display: "block" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>

      {/* Overlay Stack */}
      <Stack
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: 1, sm: 2, md: 3 }, // ekran boyutuna göre boşluk
      }}
    >
      <Typography
        variant="h3"
        color="white"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, // responsive font
          fontWeight: 700
        }}
      >
        Buraya Yazı Gelecek
      </Typography>

      <Typography
        variant="body1"
        color="white"
        sx={{
          maxWidth: { xs: 280, sm: 500, md: 600 },
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Button
        component={Link}
        to="/Gallery"
        variant="contained"
        color="primary"
        sx={{
          pointerEvents: "auto",
          width: { xs: "120px", sm: "160px", md: "200px" },
          backgroundColor: "rgba(77, 73, 73, 1)",
          color: "#fff",
          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          '&:hover': {
            backgroundColor: 'rgba(102, 99, 99, 1)'
          }
        }}
      >
        Galeriyi Keşfet
      </Button>
    </Stack>


    </Stack>
  );
}

export default App;

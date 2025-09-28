import { useParams } from "react-router-dom";
import images from "./Images";
import HeightIcon from '@mui/icons-material/Height';
import { Stack, ImageList, ImageListItem, Typography, Button } from "@mui/material";

export default function ImageDetailPage() {
  const { id } = useParams(); 

  const selectedImage = images.find((img) => img.id === id);

  const imgs = [selectedImage.src, selectedImage.src2, selectedImage.src3];

  if (!selectedImage) {
    return <Typography align="center">Resim bulunamadı.</Typography>;
  }

  return (
    <Stack height={'90.9dvh'} width={'100%'} direction={{xs:'column', md:'row'}} justifyContent={{xs:'none', sm:'none', md:'center'}} mt={{xs:2, sm:2, md:0}} alignItems={'center'} spacing={5}>
      <Stack
          width={{ xs: '85%', sm:'%85', md: '35%' }}
          height={{ xs: 'auto', sm:'auto', md: 'auto' }}
          p={3}
          spacing={2}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 2,
            backdropFilter: "blur(6px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: '"Playfair Display", serif',
          color: "black",
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem"}
        }}
      >
        {selectedImage.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(0, 0, 0, 0.85)",
          lineHeight: 1.6,
        }}
      >
        {selectedImage.description}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        {/* Genişlik */}
        <Stack direction="row" alignItems="center">
            <Typography
          variant="body2" sx={{color: "rgba(0, 0, 0, 0.6)",}}>
          Boyut: 
        </Typography>
          <HeightIcon
            sx={{
              fontSize: 20,
              color: "rgba(0, 0, 0, 0.6)",
            }}
          />
          <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
            {selectedImage.size.split("x")[0]} cm
          </Typography>
        </Stack>

        {/* Yükseklik */}
        <Stack direction="row" alignItems="center">
          <HeightIcon sx={{transform: "rotate(90deg)", fontSize: 20, color: "rgba(0, 0, 0, 0.6)" }} />
          <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
            {selectedImage.size.split("x")[1]} cm
          </Typography>
        </Stack>
      </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Tarih: {selectedImage.date}
        </Typography>
      </Stack>

      <Stack width={{xs:'90%', md:'55%'}} height={{xs:'70%', sm:'70%', md: '90%'}} direction={"row"} spacing={3} alignItems={'center'} justifyContent={'center'}>

        <Stack width={{xs:'100%', sm:'70%', md: '65%'}} height={'100%'}>
                <img
                  src={imgs[0]}
                  style={{ width: "100%", height: "100%", objectFit: 'fill' }}
                />
        </Stack>      
    </Stack>
  </Stack>
  );
}

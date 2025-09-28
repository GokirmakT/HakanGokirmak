import { useState, useEffect } from 'react';
import { Button, Stack, Typography, Grid } from '@mui/material';
import images from './Images';
import { Link, useSearchParams } from 'react-router-dom';

function GALLERY() {
  const itemsPerPage = 6;

  // Query parametreyi oku
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  // State artık URL’den başlatılıyor
  const [page, setPage] = useState(pageFromUrl);

  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  // Sayfa değiştiğinde URL güncelleniyor
  useEffect(() => {
    setSearchParams({ page });
  }, [page, setSearchParams]);

  // Sayfa değişince scroll başa
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Stack width={'100%'} height={'auto'} direction={'column'}>
      <Stack height={'auto'} alignItems={'center'} justifyContent={'center'} mt={5} mb={5}>
        <Stack height={'90%'} width={'95%'} flexWrap={'wrap'} direction={'row'}>
          <Grid container spacing={{ xs: 2, sm: 7, md: 7 }} columns={{ xs: 1, sm: 2, md: 3 }} rowSpacing={4}>
            {currentImages.map((item) => (
              <Grid
                key={item.id}
                bgcolor={'rgba(77, 73, 73, 1)'}
                size={{ xs: 1, sm: 1, md: 1}}
                sx={{ cursor: 'pointer' }}
                component={Link}
                to={`/Gallery/${item.id}`}
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{ objectFit: 'fill', height: '540px', width: '100%' }}
                />

                <Stack justifyContent={'center'} alignItems={'center'}>
                  <Typography
                    variant='h5'
                    sx={{
                      color: 'white',
                      width: '95%',
                      textAlign: 'center',
                      fontFamily: '"Playfair Display", serif',
                      fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.4rem' },
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: 'white',
                      fontFamily: '"Playfair Display", serif',
                      fontSize: { xs: '1rem', sm: '1rem', md: '1.15rem' }
                    }}
                  >
                    {item.date}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Pagination controls */}
        <Stack direction="row" spacing={2} mt={5} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            onClick={handlePrev}
            disabled={page === 1}
            sx={{
              backgroundColor: 'rgba(77, 73, 73, 1)',
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(102, 99, 99, 1)' }
            }}
          >
            Önceki
          </Button>

          <Typography>
            Sayfa {page} / {totalPages}
          </Typography>

          <Button
            variant="contained"
            onClick={handleNext}
            disabled={page === totalPages}
            sx={{
              backgroundColor: 'rgba(77, 73, 73, 1)',
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(102, 99, 99, 1)' }
            }}
          >
            Sonraki
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default GALLERY;

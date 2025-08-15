import { useState, useEffect } from 'react'
import {Button, Stack, Typography, Grid} from '@mui/material'
import images from './Images';
import { Link } from 'react-router-dom';

function GALLERY() {

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (

  <Stack width={'100%'} height={'auto'} direction={'column'}>        
    <Stack height={'auto'} alignItems={'center'} justifyContent={'center'} mt={5} mb={5}>
        <Stack height={'90%'} width={'95%'} flexWrap={'wrap'} direction={'row'}>
              <Grid container spacing={{ xs: 2, sm: 7, md: 7}} columns={{ xs: 1, sm: 8, md: 12 }} rowSpacing={4}>
                {currentImages.map((item) => (
                    <Grid key={item} bgcolor={'rgba(77, 73, 73, 1)'} size={{ xs: 2, sm: 4, md: 4}}
                    sx={{cursor: 'pointer'}}
                    component={Link}
                    to={`/gallery/${item.id}`} 
                    style={{ textDecoration: 'none' }}>
                    <img
                                    src={item.src}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ objectFit: 'fill', height: '540px', width: '100%' }}/>

                      <Stack justifyContent={'center'} alignItems={'center'}>
                        <Typography variant='h5' sx={{color: 'white', fontFamily: '"Playfair Display", serif', fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.5rem' } }}>
                          {item.title}
                        </Typography>

                        <Typography sx={{color: 'white', fontFamily: '"Playfair Display", serif', fontSize: { xs: '1rem', sm: '1rem', md: '1.25rem' } }}>{item.date}</Typography>


                      </Stack>
                    
                    
                    </Grid>
                ))}
                </Grid>

          </Stack>

          {/* Pagination controls at the bottom */}
      <Stack direction="row" spacing={2} mt={5} justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          onClick={handlePrev}
          disabled={page === 1}
           sx={{
              backgroundColor: 'rgba(77, 73, 73, 1)',
              color: '#fff',
              '&:hover': {
                backgroundColor: { lg: 'rgba(102, 99, 99, 1)' }
              }
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
            '&:hover': {
              backgroundColor: { lg: 'rgba(102, 99, 99, 1)' }
            }
          }}
        >
          Sonraki
        </Button>
      </Stack>

          
    </Stack>
  </Stack>
  )
}

export default GALLERY

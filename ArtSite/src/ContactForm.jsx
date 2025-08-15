import { Box, TextField, Button, Typography, InputAdornment, Paper } from '@mui/material';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = ({ contactRef }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_bu8u0zl',
        'template_6lni3ys',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        'ijGaU15eKrfdJOeRl'
      )
      .then(
        () => {
          alert('Mesaj başarıyla gönderildi!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        },
        () => {
          alert('Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.');
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: '87vh', // Tam ekran yüksekliği
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff', // Arka plan rengi
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 700,
          width: '100%',
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          backgroundColor: '#f0f0f0',
        }}
      >
        <Box component="form" ref={contactRef} onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            textAlign="center"
            mb={4}
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' } }}
          > 
            Mesaj Gönderin
          </Typography>

          <TextField
            placeholder="İsim"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{bgcolor: '#ffffff'}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="Soyisim"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
             sx={{bgcolor: '#ffffff'}}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="E-posta"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
             sx={{bgcolor: '#ffffff'}}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="Mesajınız"
            name="message"
            value={formData.message}
            onChange={handleChange}
             sx={{bgcolor: '#ffffff'}}
            multiline
            rows={5}
            fullWidth
            required
            margin="normal"
          />

          <Box textAlign="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                backgroundColor: '#4d4949',
                '&:hover': {
                  backgroundColor: '#666363',
                },
              }}
            >
              Gönder
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;

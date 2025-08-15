import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import GALLERY from './Gallery';
import Header from './header'; // Header bileşenini ekle
import ImageDetail from './ImageDetail';
import ContactForm from './ContactForm';

export default function Routing() {
  return (
    <Router>
      <Header /> {/* Her sayfada görünsün diye buraya ekle */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gallery" element={<GALLERY />} />
        <Route path="/Gallery/:id" element={<ImageDetail />} /> {/* id'ye göre */}
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

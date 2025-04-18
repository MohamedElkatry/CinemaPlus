import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import MyTicketsPage from './pages/MyTicketsPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />} />
            <Route path="/movies/:id/seats" element={<SeatSelectionPage />} />
            <Route path="/my-tickets" element={<MyTicketsPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="*" element={<div className="text-center text-2xl">404 Not Found</div>} />
            
          </Routes>
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App
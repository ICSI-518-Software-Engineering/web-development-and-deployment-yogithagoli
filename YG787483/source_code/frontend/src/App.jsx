import { Routes, Route } from 'react-router-dom'
import MainApp from './components/MainApp';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route index element={<Profile />} />
            <Route path="/calculator" element={<MainApp />} />
        </Routes>
        </>
    )
}

export default App;
import Header from "./components/Header";


import './App.css';

function App() {
  return (
    <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/" element={<Header/>}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>
  
 
    
  );
}

export default App;

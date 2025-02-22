import { BrowserRouter, Route, Routes } from 'react-router-dom';


import ToDo from './Pages/ToDo';


// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='' element={<ToDo/>}/>
      
       
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

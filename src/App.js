
import './App.css';
import StarWarsProvider from './Context/Provider';
import MyRouter from './Router';


function App() {
  return (
    <StarWarsProvider>
      <MyRouter></MyRouter>
    </StarWarsProvider>
    
  );
}

export default App;

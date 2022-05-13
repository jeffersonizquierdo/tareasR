import logo from './logo.svg';
import { Navigation } from './components/Ui/NavigationUi/Navigation';
import { Nombre } from './components/Ui/nombre/Nombre';

function App() {
  return (
    <div className="App">

        <img src={logo} className="logo" alt="logo" />
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Navigation/>
        <Nombre/>

  
    </div>
  );
}


export default App;

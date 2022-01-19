import './css/app.css';
import {SpacePictureProvider} from './SpaceContent'
import Pictures from './components/Pictures'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <SpacePictureProvider>
        <Pictures/>
        <Footer/>
      </SpacePictureProvider>
    </div>
  );
}

export default App;

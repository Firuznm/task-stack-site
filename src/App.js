import './App.css';
import CiftImage from './Components/CiftImage';
import CiftSlider from './Components/CiftSlider/CiftSlider';
import JoinFamily from './Components/JoinFamily/JoinFamily';
import Menu from './Components/TheMenu/TheMenu';
import Unlesh from './Components/Unleash';
import FormGroup from './Components/formGroup/FormGroup';
import MainVideo from './Components/mainVideo';
import StackHeader from './Components/stackHeader';
import StackMenu from './Components/stackMenu/StackMenu';




function App() {
  return (
   <>
    <StackHeader/>
    <MainVideo/>
    <CiftImage/>
    <Unlesh/>
    <Menu/>
    <CiftSlider/>
    <StackMenu/>
    <JoinFamily/>
    <FormGroup/>
   </>
  );
}

export default App;

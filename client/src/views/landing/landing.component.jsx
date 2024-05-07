import { useHistory } from "react-router-dom";

//import './detail.styles.css';


function Landing() {

  const history=useHistory();
  const landingImage="https://images.ecestaticos.com/0Sh_3Z7k2h5CEZRTWUUNicnasWI=/0x0:1725x608/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbf9%2Fbde%2F642%2Fbf9bde642155c2f0a6f3c9c69b10794e.jpg"

  function handleStart(e){
    e.preventDefault();
    history.push('/home')
  }

  return (
    <div >
      <h1>Bienvenido a la app de Razas de perros</h1>
      <button onClick={handleStart}>Ingresar</button>
      <img src={landingImage} alt=''/>
      
    </div>
  );
}

export default Landing;
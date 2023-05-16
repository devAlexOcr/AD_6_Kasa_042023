import Banniere from '../components/Home/Banniere'
import Carte from '../components/Home/Carte_logement'
import '../components/Home/Banniere.css'
import '../components/Home/box.css'
import SrcBg from '../assets/images/background_img.png'
import { Logements } from "../data/Logements.js"


function Home() {
  return (
    <>
    <Banniere  title="Chez vous, partout et ailleurs" SrcBg={SrcBg}/>
    <div id="box">
      {
        Logements.map(log => (
          <Carte key={log.id} title={log.title} cover={log.cover} id={log.id} />
        ))
      }
    </div>
    </>
  )
}

export default Home;

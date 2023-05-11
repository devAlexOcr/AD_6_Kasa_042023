import Banniere from '../components/Home/Banniere'
import Carte from '../components/Home/Carte_logement'
import '../components/Home/Banniere.css'
import '../components/Home/box.css'
import Footer from '../components/Footer'

import { Logements } from "../data/Appartements.js"
console.log(Logements)

function Home() {
  return (
    <>
    <Banniere  title="Chez vous, partout et ailleurs" SrcBg="/background_img.png" />
    <div id="box">
      {
        Logements.map(log => (
          <Carte key={log.id} title={log.title} cover={log.cover} id={log.id} />
        ))
      }
    </div>
    <Footer />
    </>
  )
}

export default Home;

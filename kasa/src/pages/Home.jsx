import Banniere from '../components/Home/Banniere'
import Carte from '../components/Home/Carte_logement'
import '../components/Home/Banniere.css'
import '../components/Home/box.css'

function Home() {
  return (
    <>
    <Banniere  title="Chez vous, partout et ailleurs" ScrBg="../assets/images/background_img.png"/>
    <div id="box">
      <Carte />
      <Carte />
      <Carte />
      <Carte />
      <Carte />
      <Carte />
      <Carte />
    </div>
    </>
  )
}

export default Home;

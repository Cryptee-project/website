
// #region Import Styles
import './home.css';
// #endregion
// #region Import logo
import Marque from '../../assets/CRYPTEE_BRAND_WHITE_TRANSP.png'
import Logo from '../../assets/CRYPTEE_ICON_WHITE_TRANSP.png'
// #endregion

function Home() {

    return (
        <div id="Emplacement_Principal">
            <div id="Emplacement_Logo">
                <img id='IMG_Logo' alt='Logo' src={Logo} />
                <img id='IMG_Marque' alt='Cryptee' src={Marque} />
            </div>
            <p id='Text_Slogan'>Le site de Cryptee en en cours de création</p>
        </div>
    )
}
export default Home
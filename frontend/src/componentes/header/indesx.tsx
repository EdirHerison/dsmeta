import icon from "../../assets/img/ImgHeader.svg"
import "./styles.css"

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={icon} alt="DSMeta" />
            <h1>Metas de Veda</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/devsuperior.ig"> Edir Herison </a>
            </p>
        </div>
    </header>
    )
}

export default Header
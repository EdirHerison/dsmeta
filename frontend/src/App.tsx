import Header from "./componentes/header/indesx";
import NotificationButton from "./componentes/NotificationButton";
import SalesCard from "./componentes/SalesCard";
import "./index.css";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>

  )
}

export default App

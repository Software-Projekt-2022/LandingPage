import './App.css';
import logo from './logo.png';
import Tile from './components/Tile';
import News from './components/News';
import Header from './components/Header';

import services from './data/services';

function App() {
  return (
    <div>
      <Header logo={logo}/>
      <main className="h-full md:h-screen w-full grid grid-cols-1 md:grid-cols-5">
        <section className="container mx-auto px-0 md:px-4 py-4 md:col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
            {services.map((element, index) => (
              <Tile
                key={index}
                title={element.name}
                link={element.link}
                text={element.text}
              />
            ))}
          </div>
        </section>
        <section className="container mx-auto px-0 md:px-4 py-4">
          <h1 className="font-bold text-3xl text-center">Neuigkeiten</h1>
          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <News title="Sommerfest" link="#" text="Das große Sommerfest steht an"/>
            <News title="Wetter" link="#" text="Die Sonne begrüßt das Wochenende"/>
            <News title="Baustelle B42" link="#" text=""/>
            <News title="Stellenmarkt" link="#" text="Viele freie Stellen warten auf Sie!"/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

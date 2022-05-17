import './App.css';
import logo from './logo.png';
import Tile from './components/Tile';

import services from './data/services';

function App() {
  return (
    <div>
      <header className="flex items-center justify-center">
        <h1 className="font-bold text-5xl p-10">Herzlich Willkommen in</h1>
        <img src={logo} className="mr-auto w-1/6 mt-2.5" alt="logo" />
      </header>
      <main className="h-full md:h-screen w-full">
        <section className="container mx-auto px-0 md:px-4 py-4">
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
      </main>
    </div>
  );
}

export default App;

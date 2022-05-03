import './App.css';
import Tile from './components/Tile';

import services from './data/services';

function App() {
  return (
    <main className="bg-gray-100 h-full md:h-screen w-full">
      <section className="container mx-auto px-0 md:px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
          {services.map((element, index) => (
            <Tile 
              key={index}
              title={element.name}
              link={element.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

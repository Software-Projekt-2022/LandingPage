import './App.css';
import logo from './logo.png';
import Tile from './components/Tile';
import NewsFeed from './components/NewsFeed';
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
          <NewsFeed/>
        </section>
      </main>
    </div>
  );
}

export default App;

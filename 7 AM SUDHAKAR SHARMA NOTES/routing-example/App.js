import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FakestoreHome } from './fakestore/fakestore-home';
import { FakestoreProducts } from './fakestore/fakestore-products';
import { FakestoreDetails } from './fakestore/fakestore-details';
import { SearchDemo } from './fakestore/search-demo';
import { SearchResults } from './fakestore/search-results';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <header className='text-center p-2 border border-2 mt-2'>
            <h3>Fakestore</h3>
            <SearchDemo />
          </header>
          <section className='mt-4'>
              <Routes>
                   <Route path="/" element={<FakestoreHome />} />
                   <Route path='products/:category' element={<FakestoreProducts />}>
                        <Route path='details/:id' element={<FakestoreDetails />} />
                   </Route>
                   <Route path='search' element={<SearchDemo />} />
                   <Route path='results' element={<SearchResults />} />
              </Routes>
          </section>
        
        </BrowserRouter>
    </div>
  );
}

export default App;

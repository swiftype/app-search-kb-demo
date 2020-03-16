import React from 'react';

import './assets/stylesheets/App.scss';

import { Footer, Header } from '../Layout';
import { ContactCallout } from '../Contact';
import { SearchContainer } from '../Search';

const App = () => {
  return <div className="app">
    <Header />
    <div className="app__content">
      <SearchContainer />
      <ContactCallout />
      <Footer />
    </div>
  </div>
}

export default App;

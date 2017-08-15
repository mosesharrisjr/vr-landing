import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Home from  '../Home';

import styles from './styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.content}>
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

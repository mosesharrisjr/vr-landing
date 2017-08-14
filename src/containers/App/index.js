import React from 'react';
import NavBar from '../../components/NavBar';
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
      </div>
    );
  }
}

export default App;

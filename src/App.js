import { Component } from 'react';
import Calculator from './components/Calculator';

// APP
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;

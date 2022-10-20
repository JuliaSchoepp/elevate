'use strict';

const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Hello World!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Click me!'
    );
  }
}

const domContainer = document.querySelector('#hello_world_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorld));
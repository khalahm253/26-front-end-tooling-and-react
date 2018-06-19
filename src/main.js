import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
   return (
    <header>
      <h1>Generate Cowsay Lorem</h1>
    </header>
   );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: cowsay.say({ text: faker.random.word(), e : '*O', T : 'U' }),
    };
    this.handleRandomText = this.handleRandomText.bind(this);
  }

  handleRandomText() {
    this.setState((previousState) => {
      return {
        content: cowsay.say({ text: faker.random.word(), e : '*O', T : 'U' }),
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre>{ this.state.content }</pre>
        <button onClick={ this.handleRandomText }>Click Me!</button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
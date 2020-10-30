import React, { Component } from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import { RatingsProvider } from '../context/rating.context';

export default class App extends Component {
  state = {
    title: 'React Movie Cards',
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <RatingsProvider>
            <Movies />
          </RatingsProvider>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  // lifecycle method
  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({ seenIndexes: seenIndexes.data });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/values', {
      index: this.state.index,
    });
    // resets index state
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    // data stored in PG, returns as an array
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    //data stored in redis, returns as object
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter an index</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Index I've seen</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;

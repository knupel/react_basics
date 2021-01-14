import React, { Component } from 'react';
import axios from 'axios';

/**
 *  WARNING DON'T WORK
 */
// other techer https://github.com/StanLepunK/gatsby_react_lab/blob/main/src/pages/api/api_public.js
class DataFetcher extends Component {
  state = {
    loading: false,
    data: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(this.props.url).then((res) => {
      const data = res.json();
      this.setState({ data: data, loading: false });
    });
    // fetch(this.props.url)
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ data: data, loading: false }));
  }

  render() {
    return this.props.children(this.state.data, this.state.loading);
  }
}

// https://api.tvmaze.com/search/shows
// https://swapi.co/api/people/1
function Props2() {
  return (
    <DataFetcher url="https://api.tvmaze.com/search/shows">
      {(data, loading) =>
        loading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>
      }
    </DataFetcher>
  );
}

export default Props2;

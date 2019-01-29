import React, { Component, Fragment } from 'react';
import Container from './Components/Container';
import List from './Components/List';
import Text from './Components/Text';
import { Apikey } from './Components/Apikey'
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Oulu',
      data: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getWwather = this.getWwather.bind(this);
  }

  getWwather(value) {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=${Apikey}`)
      .then( (response) => {
        this.setState({
          data: response.data
        })
        console.log(response);
      })
      .catch(function (error){
        console.log(error);
      })
      .then(function(){
      });

  }

  handleSubmit(event, value) {
    event.preventDefault();
    this.getWwather(value);

    console.log();
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Text handleSubmit={this.handleSubmit} />
          <p>{JSON.stringify(this.state.data)}</p>
        </Container>
      </Fragment>
    );
  }
}
export default App;

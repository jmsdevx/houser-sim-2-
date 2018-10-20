import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class HouseEdit extends Component {
  constructor() {
    super();
    this.state = {
      datname: "",
      dataddress: "",
      datcity: "",
      datstate: "",
      datzip: "",
      mortgageamt: "",
      house_image: "",
      rent: "",
      redirect: false
    };
    this.getHouse = this.getHouse.bind(this);
  }

  componentdidMount() {
    this.getHouse();
  }

  getHouse = () => {
    axios
      .get(`http://localhost:3005/api/houses/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        const {
          datname,
          dataddress,
          datcity,
          datstate,
          datzip,
          mortgageamt,
          house_image,
          rent
        } = response.data[0];
        this.setState({
          datname: datname,
          dataddress: dataddress,
          datcity: datcity,
          datstate: datstate,
          datzip: datzip,
          mortgageamt: mortgageamt,
          house_image: house_image,
          rent: rent
        });
      })
      .catch(e => console.log(e));
  };

  namehandler(input) {
    this.setState({ datname: input });
  }

  addhandler(input) {
    this.setState({ dataddress: input });
  }

  cityhandler(input) {
    this.setState({ datcity: input });
  }

  statehandler(input) {
    this.setState({ datstate: input });
  }

  ziphandler(input) {
    this.setState({ datzip: input });
  }

  imagehandler(input) {
    this.setState({ image: input });
  }

  renthandler(input) {
    this.setState({ rent: input });
  }
  mortgagehandler(input) {
    this.setState({ mortgageamt: input });
  }

  handleSubmit() {
    const {
      datname,
      dataddress,
      datcity,
      datstate,
      datzip,
      mortgageamt,
      house_image,
      rent
    } = this.state;
    axios
      .put(`http://localhost:3005/api/houses/${this.props.match.params.id}`, {
        datname: datname,
        dataddress: dataddress,
        datcity: datcity,
        datstate: datstate,
        datzip: datzip,
        mortgageamt: mortgageamt,
        house_image: house_image,
        rent: rent
      })
      .then(response => {
        console.log(response);

        this.setState({
          redirect: !this.state.redirect
        });
      });
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state);
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Edit Listing</h1>
        <button onClick={this.getHouse}>Get</button>

        <input
          type="text"
          value={this.state.datname}
          placeholder="Property Name"
          onChange={e => this.namehandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.dataddress}
          placeholder="Address"
          onChange={e => this.addhandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.datcity}
          placeholder="City"
          onChange={e => this.cityhandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.datstate}
          placeholder="State"
          onChange={e => this.statehandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.datzip}
          placeholder="Zip Code"
          onChange={e => this.ziphandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.image}
          placeholder="Insert Image URL"
          onChange={e => this.imagehandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.mortgageamt}
          placeholder="Mortgage Amount"
          onChange={e => this.mortgagehandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.rent}
          placeholder="Expected Rent"
          onChange={e => this.renthandler(e.target.value)}
        />
        <button onClick={() => this.handleSubmit()}>Submit Changes</button>
      </div>
    );
  }
}

export default HouseEdit;

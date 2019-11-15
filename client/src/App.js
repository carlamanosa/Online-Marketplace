import React, { Component } from "react";
import ProductCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import FilterBar from "./components/FilterBar";
import products from "./products.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    products
  };

  removeProduct = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const products = this.state.products.filter(product => product.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ products });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div class="app">
      <Jumbotron/>
      <FilterBar/>
      <Wrapper>

        {this.state.products.map(product => (
          <ProductCard
            removeProduct={this.removeProduct}
            key={product.id}
            image={product.image_link}
            brand={product.brand}
            name={product.name}
            price={product.price}
            productLink={product.product_link}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

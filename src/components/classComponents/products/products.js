import { Component } from "react";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          rating: {
            rate: 4.7,
            count: 500,
          },
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          rating: {
            rate: 2.1,
            count: 430,
          },
        },
        {
          id: 5,
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 4.6,
            count: 400,
          },
        },
        {
          id: 6,
          title: "Solid Gold Petite Micropave ",
          price: 168,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 3.9,
            count: 70,
          },
        },
      ],
       dummy:[
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          rating: {
            rate: 4.7,
            count: 500,
          },
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          rating: {
            rate: 2.1,
            count: 430,
          },
        },
        {
          id: 5,
          title:
            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 4.6,
            count: 400,
          },
        },
        {
          id: 6,
          title: "Solid Gold Petite Micropave ",
          price: 168,
          description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "jewelery",
          image:
            "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          rating: {
            rate: 3.9,
            count: 70,
          },
        },
      ],
    };
  }
  sortFunction = () => {
    let result = this.state.products.sort((a, b) => a["price"] - b["price"]);
    console.log(result);
    this.setState({
      products: result,
    });
  };
  childToParent = () => {
    alert("child to parent");
  };
  increment = (data) => {
    console.log(data, this.state.products);

    let result = this.state.products.map((eachObject) => {
      if (eachObject.id === data.id) {
        let newObject = {
          ...eachObject,
          rating: {
            ...eachObject.rating,
            count: eachObject.rating.count + 1,
          },
        };
        return newObject;
      } else {
        return eachObject;
      }
    });
    console.log(result, "result logged");
    this.setState({
      products: result,
    });
  };

  decrement = (data) => {
    // console.log(data)
    let result2 = this.state.products.map((eachObject) => {
      if (eachObject.id === data.id) {
        let newObj = {
          ...eachObject,
          rating: {
            ...eachObject.rating,
            count: eachObject.rating.count - 1,
          },
        };
        return newObj;
      } else {
        return eachObject;
      }
    });
    this.setState({
      products: result2,
    });
  };

  reset = (data) => {
      this.setState({products:this.state.dummy});
    }

  delete = (data)=>{
    const del = this.state.products.filter(eachObject=>eachObject.id !== data.id);

    this.setState({
      products:del
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.sortFunction}>sort by price</button>
        <button onClick={this.reset}>reset</button>

        {this.state.products.map((eachObject) => {
          return (
            <div key={eachObject.id}>
              <ProductListing
                data={eachObject}
                communication={this.childToParent}
                increment={this.increment}
                decrement={this.decrement}
                reset={this.reset}
                delete = {this.delete}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Products;


class ProductListing extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.title}</h3>
        <h3>{this.props.data.price}</h3>
        <h3>Count-----{this.props.data.rating.count}</h3>
        {/*   */}
        <button onClick={() => this.props.increment(this.props.data)}>+</button>
        <button onClick={() => this.props.decrement(this.props.data)}>-</button>
        {/* <button onClick={() => this.props.reset(this.props.data)}>reset</button> */}
        <button onClick={() => this.props.delete(this.props.data)}>delete</button>

      </div>
    );
  }
}

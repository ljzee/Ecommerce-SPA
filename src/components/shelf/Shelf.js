import React, {Component} from 'react';
import ProductCard from './ProductCard';

class Shelf extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='shelf'>
        {this.props.products.map((product, index) => {
          return <ProductCard key={index} product={product} addCart={this.props.addCart}/>
        })}
      </div>
    );
  }
}

export default Shelf;

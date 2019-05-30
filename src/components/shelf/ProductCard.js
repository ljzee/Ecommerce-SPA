import React, {Component} from 'react';

class ProductCard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='productcard'>
        <h3>{this.props.product.title}</h3>
        <img
          height={200}
          src={`products/images/${this.props.product.sku}_1.jpg`}
        />
        <button className='addtocartbtn' onClick={() => this.props.addCart(this.props.product)}>Add to cart</button>
      </div>
    );
  }
}

export default ProductCard;

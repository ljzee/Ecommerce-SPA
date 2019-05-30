import React, {Component} from 'react';
import {connect} from 'react-redux';
import Shelf from './Shelf';
import {addCart} from '../../actions/index';
import data from '../../products/Products.json';

function mapDispatchToProps(dispatch){
  return{
    addCart: product => dispatch(addCart(product))
  };
}


class Container extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <span className='shelfproductcount'>16 Product(s) found.</span>
        <Shelf products={data.products} addCart={this.props.addCart}/>
      </div>
    );
  }
}

const ShelfContainer = connect(null, mapDispatchToProps)(Container);

export default ShelfContainer;

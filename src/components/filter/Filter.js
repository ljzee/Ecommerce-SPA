import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleFilter} from '../../actions/index';
const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

function mapDispatchToProps(dispatch){
  return{
    toggleFilter: filter => dispatch(toggleFilter(filter))
  };
}

class ProductFilter extends Component{
  constructor(props){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.props.toggleFilter(event.target.value);
  }

  render(){
    return(
      <div className='filter'>
        {sizes.map((size, index) =>
          <label key={index}>
            <input type="checkbox" onChange={this.handleInputChange} value={size}/>
            <span className="checkmark">{size}</span>
          </label>)
        }
      </div>
    );
  }
}

const Filter = connect(null, mapDispatchToProps)(ProductFilter);

export default Filter;

import React, { Component } from 'react';
import { connect } from "react-redux"
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {postCart} from "../../../publics/redux/actions/cart.js"

class Footers extends Component{

  PostCart(detail, qty){
    this.props.dispatch(postCart(detail, qty))
    
    alert(`Added ${detail.title}`)
  }

  render() {
    const {detail} = this.props;

    return (
      <Footer>
          <FooterTab>
            <Button 
              light 
              style={{backgroundColor:"#fff", borderTopWidth:2, borderColor:"#eee"}}
              onPress = {() => this.PostCart(detail[0], 1)}
            >
              <Icon name="cart" style={{color:'#ff0066'}}/>
              <Text style={{color:'#ff0066'}}>Add To Cart</Text>
            </Button>
          </FooterTab>
      </Footer>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}

export default connect(mapStateToProps)(Footers)
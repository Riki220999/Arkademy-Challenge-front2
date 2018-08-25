import React, { Component } from 'react';
import { connect } from "react-redux"
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {postCart} from "../../../publics/redux/actions/cart.js"

export default class Footers extends Component{
render() {
    const {price} = this.props;
    return (
      <Footer>
          <FooterTab>
            <Button 
              light 
              style={{backgroundColor:"#ff0066", borderTopWidth:2, borderColor:"#eee"}}
            >
              <Text style={{color:'#fff', fontSize : 15}}>Checkout Rp.{price}</Text>
            </Button>
          </FooterTab>
      </Footer>
    )
  }
}

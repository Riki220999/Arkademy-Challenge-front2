import React, {Component} from 'react';
import { connect } from "react-redux"
import {  StatusBar, FlatList } from "react-native"
import { 
  Text, 
  Button, 
  Icon,
  Container,
  Content,
  Spinner,
  List
} from "native-base"

import ListCart from "./component/list-cart.js"
import Footers from "./component/footers.js"

class Cart extends Component{
  static navigationOptions = {
    title: "Cart",
    headerTitleStyle: {
        fontWeight: 'bold',
        color : "#fff",
        left : 145
      },
  };

  render() {
    const {cardList, loading} = this.props.cart
    console.log(cardList)
    let ListProducts = null;
    if(loading){
      return ListProducts = <Spinner color="#ff0066"/>
    }

    if(cardList.length < 1) {
      return ListProducts = <Text style={{alignSelf:"center", marginTop:30}}>Tambah Product</Text>
    }
    
    let priceTotal = null;
    cardList.map((item) => {
      let subTotal = item.data.price * item.data.qty
      return priceTotal += subTotal
    })
    
    return (
      <Container>
        <Content>
          {ListProducts}
      
          <List>
            <FlatList
              data={cardList}
              renderItem={({item}) => <ListCart data={item.data}/>}
              keyExtractor={(item, index) => item.data._id}
            />
          </List>
          
        </Content>
        <Footers price={priceTotal}/>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
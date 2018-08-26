import React, { Component } from 'react';
import {View, Alert} from "react-native";
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {updateQtyPlus, updateQtyMin, deleteCart} from "../../../publics/redux/actions/cart.js"
import { connect } from "react-redux"

class ListCart extends Component {
  minQty(id, qty){
    return this.props.dispatch(updateQtyMin(id, qty))
  }

  plusQty(id, qty){
    return this.props.dispatch(updateQtyPlus(id, qty))
  }

  render(){
    const {data, navigation} = this.props
    let buttMin = (
      <Button 
        small
        danger 
        style={{backgroundColor:"#4286f4"}}
        onPress={() => this.minQty(data._id, data.qty)}
      >
          <Text>-</Text>
      </Button>
    )

    if(data.qty <= 1) {
      buttMin = (
          <Button 
          small
          danger 
          disabled
        >
            <Text>-</Text>
        </Button>
      )
    }
    return(
    <View>
      <ListItem 
        style={{backgroundColor:"#fff", marginRight:20}} 
        thumbnail
      >
        <Left>
          <Thumbnail square source={{ uri: data.image }} />
        </Left>
        <Body>
          <Text>{data.title}</Text>
          <Text style={{color:"red", marginBottom:10, fontStyle: 'italic'}} note>Rp.{data.price}</Text>
          <Text note numberOfLines={1}>{data.description}</Text>
        </Body>
        <Right>
          <View style={{flexDirection:"row"}}>
            {buttMin}

            <Text style={{marginLeft:10, marginRight:10}}>{data.qty}</Text>

            <Button 
              small 
              danger 
              style={{backgroundColor:"#4286f4"}}
              onPress={() => this.plusQty(data._id, data.qty)}
            >
                <Text>+</Text>
            </Button>
          </View>
        </Right>
      </ListItem>
      <Button  
        danger 
        block
        style={{backgroundColor:"#4286f4", marginRight:20, marginLeft:20, marginBottom:20}}
        onPress = {() => Alert.alert(
          'Are you sure',
          'removing this List ?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => this.props.dispatch(deleteCart(data._id))},
          ]
        )}
      >
          <Text>Hapus</Text>
      </Button>
    </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(ListCart)
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

export default class Transaction extends Component {
  static navigationOptions = {
    title: "Transaction",
    headerTitleStyle: {
        fontWeight: 'bold',
        color : "#fff",
        left : 110
      },
  };

  render() {
    return (
      <Container>
        <Text style={{textAlign:"center", marginTop:20}}>Belum pernah order</Text>
      </Container>
    );
  }
}

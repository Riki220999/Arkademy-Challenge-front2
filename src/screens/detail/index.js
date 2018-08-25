import React, {Component} from 'react';
import { connect } from "react-redux"
import {  StatusBar, FlatList } from "react-native"
import { 
  Text, 
  Button, 
  Icon,
  Container,
  Content,
} from "native-base"

import ItemDetail from "./component/item-detail.js"
import Footers from "./component/footers.js"


class Detail extends Component{
  render() {
    const {productList, loading} = this.props.product
    const {id} = this.props.navigation.state.params

    const detail = productList.filter(obj => {
      return obj._id === id
    })

    return (
      <Container>
        <Content>
          <ItemDetail detail={detail} />
        </Content>
        <Footers detail={detail} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  }
}

export default connect(mapStateToProps)(Detail)
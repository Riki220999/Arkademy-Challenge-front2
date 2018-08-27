import React, {Component} from 'react';
import { connect } from "react-redux"
import { View, ScrollView, StatusBar, FlatList } from "react-native"
import { 
  Text, 
  Button, 
  Icon,
  Container,
  Content,
  Spinner,
  List
} from "native-base"

import {
  HeaderTitle
} from "./component/header-title.js"

import ListProduct from "./component/list-product.js"

import {getList} from "../../publics/redux/actions/product.js"

class Home extends Component{
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      headerTitle: <HeaderTitle style={{height:300}}/> ,
    };
  };

  getFeed = () => {
    this.props.dispatch(getList())
  }

  componentDidMount(){
    this.getFeed()
  }

  render() {
  	const {productList, loading} = this.props.product
  	
    let ListProducts = null;
    if(loading){
      return ListProducts = <Spinner color="#ff0066"/>
    }

    return (
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#ff0066"
        />

        <Content>
          {ListProducts}
          <List style={{marginRight:25}}>
            <FlatList
              data={productList}
              renderItem={({item}) => <ListProduct data={item} navigation={this.props.navigation}/>}
              keyExtractor={(item, index) => item._id}
            />
          </List>
    
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(Home)
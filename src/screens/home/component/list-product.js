import React, { Component } from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


const ListProduct = ({data, navigation}) => (
    <ListItem 
      style={{backgroundColor:"#fff"}} 
      thumbnail onPress={() => navigation.navigate("Detail", {id : data._id})}
    >
      <Left>
        <Thumbnail square source={{ uri: data.image }} />
      </Left>
      <Body>
        <Text>{data.title}</Text>
        <Text style={{color:"red", marginBottom:10, fontStyle: 'italic'}} note>Rp.{data.price}</Text>
        <Text note numberOfLines={1}>{data.description}</Text>
      </Body>
    </ListItem>
)

export default ListProduct
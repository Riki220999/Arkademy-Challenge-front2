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
        <Text style={{fontFamily: 'sans-serif-medium'}}>{data.title}</Text>
        <Text style={{color:"#4286f4", marginBottom:10, fontFamily: 'monospace'}} note>Rp.{data.price}</Text>
        <Text note numberOfLines={1}>{data.descriptions}</Text>
      </Body>
    </ListItem>
)

export default ListProduct
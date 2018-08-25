import React, {Component} from 'react';
import { View, Image } from "react-native"
import { 
  Text, 
  Button, 
  Icon,
  Container,
  Content,
  Spinner,
  List,
  ListItem,
  Card,
  Body,
  Right,
  CardItem
} from "native-base"


const ItemDetail = ({detail}) => (
  <View>
    <Card>
      <CardItem cardBody>
        <Image 
          source={{uri: detail[0].image}} 
          style={{height: 250, width: null, flex: 1}}
        />
      </CardItem>
    </Card>

    <List>
      <ListItem thumbnail style={{marginRight:30}}>
        <Body>
          <Text style={{fontSize:20}}>{detail[0].title}</Text>

          <Text 
            style={{
              fontSize:20, 
              color:"red", 
              fontStyle:"italic", 
              marginBottom:20
            }}
          >
            Rp.{detail[0].price}
          </Text>

          <Text note>{detail[0].description}</Text>
        </Body>
      </ListItem>
    </List>
  </View>
)

export default ItemDetail
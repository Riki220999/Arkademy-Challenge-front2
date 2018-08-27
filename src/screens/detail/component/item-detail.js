import React, { Component } from 'react';
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

const ItemDetail = ({ detail }) => (
  <View>
    <Card>
      <CardItem cardBody>
        <Image
          source={{ uri: detail[0].image }}
          style={{ height: 250, width: null, flex: 1 }}
        />
      </CardItem>
    </Card>

    <List>
      <ListItem thumbnail style={{ marginRight: 30 }}>
        <Body>
          <Text style={{ fontSize: 20 }}>{detail[0].title}</Text>
          <Text
            style={{
              fontSize: 20,
              color: "#4286f4",
              fontFamily: 'monospace',
              marginBottom: 20
            }}
          >
            Rp.{detail[0].price}
          </Text>
        </Body>
      </ListItem>
    </List>
    <Content padder>
      <Card style={{ marginBottom: 15 }}>
        <CardItem>
          <Body>
            <Text style={{
              fontSize: 17,
              fontFamily: 'sans-serif-thin',
            }}
            >{detail[0].descriptions}</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </View>
)

export default ItemDetail
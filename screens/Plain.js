import React, { Component } from 'react'


import {
  StyleSheet,
} from 'react-native'

import { Toast, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Plain extends Component {
  
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
             onPress={() => { this.props.navigation.openDrawer(); }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Plain Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      )
  }
}

export default Plain

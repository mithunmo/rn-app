import React, { Component } from 'react'

import { Toast, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import {
  StyleSheet
} from 'react-native'

class TabA extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tab A',
  })

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
            <Title>Tab Header</Title>
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

export default TabA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 150,
    height: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  }
})

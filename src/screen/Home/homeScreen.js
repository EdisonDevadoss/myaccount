/* @flow */

import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  View,
  Button
} from 'native-base';
import styles from './homeScreenStyleSheet';
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.header}>
            <Text style={styles.headerText}>My Pitty Cash</Text>
          </View>
          <View style={styles.buttonsStyle}>
            <Button style={styles.button1}>
              <Text>View Expences</Text>
            </Button>
            <Button>
              <Text>Add Expences</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

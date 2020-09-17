import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import Articles from '../constants/articles';
const { width } = Dimensions.get('screen');

class Dashboard extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.Articles}>
        <Block flex>
          <Card item={Articles[4]} full />
          <Block flex row>
            <Card item={Articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={Articles[2]} />
          </Block>
          <Card item={Articles[3]} horizontal />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.Dashboard}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  Dashboard: {
    width: width,    
  },
  Articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Dashboard;

import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { argonTheme, tabs } from "../constants";
import { Button, Header} from "../components";

const { width } = Dimensions.get("screen");

class Tracker extends React.Component {
  
  renderButtons = () => {
    return (
      <Block flex>
        <Text bold size={16} style={styles.title}>
          Select Your Mood, Suraj!
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
         
          <Block center>
            <Button style={styles.button}>Great</Button>
          </Block>
          <Block center>
            <Button color="info" style={styles.button}>
              Okay
            </Button>
          </Block>
          <Block center>
            <Button color="success" style={styles.button}>
              Anxious
            </Button>
          </Block>
          <Block center>
            <Button color="warning" style={styles.button}>
              Stressed
            </Button>
          </Block>
          <Block center>
            <Button color="error" style={styles.button}>
              Sad
            </Button>
          </Block>
        </Block>
      </Block>
    );
  };

  renderNavigation = () => {
    return (
      <Block>
        <Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header white back title="Back" navigation={this.props.navigation} bgColor={argonTheme.COLORS.ACTIVE} titleColor="white" iconColor="white" />
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} >
          {this.renderNavigation()}
          {this.renderButtons()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
});

export default Tracker;
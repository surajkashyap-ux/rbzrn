import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Dashboard from "../screens/Dashboard";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Therapists from "../screens/Therapists";
import Tracker from "../screens/Tracker";
import Meditation from "../screens/Meditation";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TrackerStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Tracker"
        component={Tracker}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Tracker" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function MediatationStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Meditation"
        component={Meditation}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Meditation" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
            <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function DashboardStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Dashboard"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Therapists" component={Therapists} />
      <Drawer.Screen name="Tracker" component={TrackerStack} />
      <Drawer.Screen name="Meditation" component={MediatationStack} />
    </Drawer.Navigator>
  );
}


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Icon} from '../components';
import CartScreen from '../screens/Cart';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {rootTheme} from '../themes';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: rootTheme.colors.sub,
          tabBarInactiveTintColor: rootTheme.colors.main,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="map-pin" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

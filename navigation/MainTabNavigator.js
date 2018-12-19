import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator,createTabNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';


//import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'

// StackNavigator screens
import ItemList from '../screens/ItemList'
import Item from '../screens/Item'

// TabNavigator screens
import TabA from '../screens/TabA'
import TabB from '../screens/TabB'
import TabC from '../screens/TabC'

// Plain old component
import Plain from '../screens/Plain'

const Stack = createStackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
})

const Tabs = createBottomTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Stack },
}, {
  order: ['TabA', 'TabB', 'TabC']
});

const TabStack = createStackNavigator({ //... Adding the Stack here
  Tabs: {screen: Tabs}
}, {
  headerMode: 'none'
})


export default createDrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: TabStack },
  Plain: { screen: Plain },
})

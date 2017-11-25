import React from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen'
import { colors } from './utils/constants'

const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTitle: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome size={20} color={tintColor} name="home" />    
      )
    })
  } 
}, {
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {    
    showIcon: true,
    showLabel: false,
    activeTintColor: colors.PRIMARY,
    inactiveTintColor: colors.LIGHT_GRAY,
    style: {
      backgroundColor: colors.WHITE,
      height: 50,
      paddingVertical: 5
    }
  }
})

const AppMainNav = StackNavigator({
  Home:{
    screen: Tabs 
  }
}, {
  cardStyle: {
    backgroundColor:'#f1f6fa'
  },
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: colors.WHITE
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colors.SECONDARY
    }
  })
});

class AppNavigator extends React.Component{
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })

    return <AppMainNav navigation={nav} />;
  }
}

export default connect(state => ({
  nav: state.nav,
}))(AppNavigator);

export const router = AppMainNav.router;
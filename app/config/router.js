import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Auth from '../screens/Auth';
import Welcome from '../screens/Welcome';
import Map from '../screens/Map';
import RestaurantList from '../screens/RestaurantList';
import RestaurantDetail from '../screens/RestaurantDetail';
import RestaurantAdd from '../screens/RestaurantAdd';
// import Settings from '../screens/Settings';

export const MainNavigator = TabNavigator({
  Welcome: {
    screen: Welcome
  },
  Auth: {
    screen: Auth
  },
  Main: {
    screen: TabNavigator({
      map: {
        screen: Map
      },
      deck: {
        screen: RestaurantList
      },
      restaurant: {
        screen: StackNavigator({
          details: {
            screen: TabNavigator({
              detail: {
                screen: RestaurantDetail
              }
            })
          }
        })
      },
      add: {
        screen: RestaurantAdd
      }
    })
  }
}, {
  navigationOptions: {
    // tabBarVisible: false
  },
  lazy: true
});

export const RestaurantsStack = StackNavigator({
  RestaurantList: {
    screen: RestaurantList,
    navigationOptions: {
      title: 'Restaurants'
    }
  },
  RestaurantDetail: {
    screen: RestaurantDetail,
    navigationOptions: {
      title: 'Details'
    }
  }
});

export const Tabs = TabNavigator({
  RestaurantList: {
    screen: RestaurantsStack,
    navigationOptions: {
      tabBarLabel: 'Restaurants',
      // tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map',
      // tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    }
  }
});

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings'
//     }
//   }
// });


export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  // Settings: {
  //   Screen: SettingsStack
  // }
}, {
  mode: 'modal',
  headerMode: 'none'
});

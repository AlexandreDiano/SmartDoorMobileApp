import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '.';
import Accesses from '../screens/accesses';
import Dashboard from '../screens/dashboard';
import Doors from '../screens/doors';
import Keys from '../screens/keys';
import User from '../screens/users';

type Props = StackScreenProps<RootStackParamList, 'DrawerNavigator'>;

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }: Props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Users"
        component={User}
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Keys"
        component={Keys}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="key" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Doors"
        component={Doors}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="door" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Accesses"
        component={Accesses}
        options={{
          drawerIcon: ({ size, color }) => (
            <FontAwesome6 name="person-walking-dashed-line-arrow-right" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exit"
        component={User}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="exit-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

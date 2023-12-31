import {
  Entypo,
  SimpleLineIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#fc2cbde4' },
        tabBarActiveTintColor: '#fc2cbde4',
        headerTintColor: '#FFF',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Promoções',
          unmountOnBlur: true,
          freezeOnBlur: true,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="feed" color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="createPost"
        options={{
          title: 'Criar',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="plus" color={color} size={22} />
          ),
        }}
      />
    </Tabs>
  );
}

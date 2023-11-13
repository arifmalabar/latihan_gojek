import React from "react"
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home2, Message, Money } from "iconsax-react-native"
import Home from "../screen/home/Home"
import Chat from "../screen/chat/Chat"
import Promo from "../screen/promo/Promo"
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp()
{
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveBackgroundColor: "white",
                tabBarInactiveBackgroundColor: "white",
                tabBarStyle: {
                    paddingBottom: 10,
                    paddngTop: 10,
                    height: 50
                },
                tabBarStyle: {
                    marginTop: 5,
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({focused, color}) => (
                        <Home2
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false
            }}/>
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({focused, color}) => (
                        <Message
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false
            }}/>
            <Tab.Screen
                name="Promo"
                component={Promo}
                options={{
                    tabBarLabel: 'Promo',
                    tabBarIcon: ({focused, color}) => (
                        <Money
                            color={color}
                            variant={focused ? 'Bold' : 'Linear'}
                            size={24}
                        />
                    ),
                    headerShown: false
            }}/>
        </Tab.Navigator>
    );
}
const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
export default Router;
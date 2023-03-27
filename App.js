import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {QueryClient, QueryClientProvider} from "react-query";
import {StatusBar} from "react-native";
import {Fragment} from "react";
import RestaurantScreen from "./screens/RestaurantScreen";
import Provider from "react-redux";
import {store} from "./store";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
    return (
        <Fragment>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Provider store={ store }>
                    <QueryClientProvider client={queryClient}>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
                            <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{headerShown: false}} />
                        </Stack.Navigator>
                    </QueryClientProvider>
                </Provider>
            </NavigationContainer>
        </Fragment>
    );
}
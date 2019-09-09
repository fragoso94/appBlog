import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/Screens/indexScreen";
import { Provider } from "./src/Context/BlogContext";
import ShowScreen from "./src/Screens/ShowScreen";
import CreateScreen from "./src/Screens/CreateScreen";
import EditScreen from "./src/Screens/EditScreen";

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen
    },
    {
        initialRouteName: 'Index',
        defaultNavigationOptions:{
            title: 'Blogs CRUD'
        }
    }
);

const App = createAppContainer(navigator);

export default () =>
{
    return <Provider>
            <App/>
        </Provider>
};


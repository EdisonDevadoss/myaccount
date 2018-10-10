import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screen/Home";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
export default AppNavigator;

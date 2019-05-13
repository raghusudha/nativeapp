import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginComponent from '../logincomponent';
import Codescanning from "../qrcodescanningcomponent";



const Route = createStackNavigator(
    {
        LoginPage :{
        screen:LoginComponent,
            navigationOptions:{
            header:null,
        } 
   },
   ScannerPage:Codescanning,
     },
    {

        initialRouteName: "LoginPage"
    }
);

const RouteConfig = createAppContainer(Route);

export default RouteConfig;
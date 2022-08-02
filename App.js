import MainScreen from "./screens/MainScreen";
import { StatusBar } from "react-native";
//import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#991317" />
      <MainScreen />
    </>
  );
}

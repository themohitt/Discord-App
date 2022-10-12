import AppNavigator from "../Discord App/src/navigators/AppNavigator";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-bold": require("./src/fonts/Poppins-Bold.ttf"),
    "Poppins-regular": require("./src/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <AppNavigator />
    </>
  );
}

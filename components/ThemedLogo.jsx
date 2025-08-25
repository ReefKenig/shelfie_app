import { Image, useColorScheme } from "react-native";

import LightLogo from "../assets/img/Crow-light.jpg";
import DarkLogo from "../assets/img/Crow-dark.jpg";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;

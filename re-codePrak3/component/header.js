import React from "react";
import { Pressable, Image, Box } from "native-base";

const Header = (props) => {
  return (
    <Box
      backgroundColor="#AA0002"
      flexDirection={"row"}
      justifyContent={"space-between"}
      p={"15px"}
    >
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Image
          source={require("../assets/menu.png")}
          width={"18px"}
          h={"18px"}
        />
      </Pressable>
      <Box>
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Image
            source={require("../assets/facebook.png")}
            w={"36px"}
            h={"18px"}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/youtube.png")}
            w={"36px"}
            h={"18px"}
            resizeMode={"contain"}
          />
          <Image
            source={require("../assets/twitter.png")}
            w={"36px"}
            h={"18px"}
            resizeMode={"contain"}
          />
          <Image
            source={require("../assets/search.png")}
            w={"36px"}
            h={"18px"}
            resizeMode={"contain"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

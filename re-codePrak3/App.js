import React, { createRef, useState } from "react";
import { DrawerLayoutAndroid } from "react-native";
import { Box, StatusBar } from "native-base";
import Header from "./component/header";
import Button from "./component/button";
import Separator from "./component/separator";
import List from "./screens/list";
import Article from "./screens/article";
import Constants from "expo-constants";
import { NativeBaseProvider } from "native-base";

const App = () => {
  const [page, setPage] = useState("list");
  const drawer = createRef();
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };

  const NavigationView = (props) => (
    <Box padding={"30px"} backgroundColor="#222222" flex="1">
      <Button text="List" onPress={() => changePage(props.drawer, "list")} />
      <Separator height={30} />
      <Button
        text="Article"
        onPress={() => changePage(props.drawer, "article")}
      />
      <Separator height={30} />
      <Button text="Close" onPress={() => props.drawer.current.closeDrawer()} />
    </Box>
  );

  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <NavigationView drawer={drawer} />}
      >
        <Box paddingTop={Constants.StatusBarHeight}>
          <StatusBar style="auto" backgroundColor="#AA0002" />
          <Header drawer={drawer} />
          {page == "list" && <List />}
          {page == "article" && <Article />}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};

export default App;

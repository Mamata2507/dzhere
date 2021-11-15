import React from 'react';
import { Drawer, firstScreenStack, secondScreenStack, thirdScreenStack, fourthScreenStack } from './components/common/SideBar';
import { NavigationContainer } from '@react-navigation/native';
import CustomSidebarMenu from './components/common/CustomSidebarMenu';

const App = () => {
    return (
      <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="CheckPage"
          options={{ drawerLabel: '오늘의 출석' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="LisPage"
          options={{ drawerLabel: '지난 출석 보기' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ExternalPage"
          options={{ drawerLabel: '외부 장소' }}
          component={thirdScreenStack}
        />
        <Drawer.Screen
          name="MyPage"
          options={{ drawerLabel: '내 정보' }}
          component={fourthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>

    );
  };
  
  export default App;
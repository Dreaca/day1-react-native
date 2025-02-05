import {View} from "react-native";
import React from "react";
import {Tabs} from "expo-router";

function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen name='index'/>
            <Tabs.Screen name='customer'/>
        </Tabs>
    )
}
export default TabLayout;
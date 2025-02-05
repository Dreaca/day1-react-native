import {View,Text} from "react-native";
import React from "react";
import {Link} from "expo-router";

function Customer(){
    return(
        <View>
            <Text>Customer</Text>
            <Link href='/'>Goto Dashboard</Link>
        </View>
    )
}
export default Customer
import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

export default function Home({navigation, route}){
    return(
        <View style={styles.container}>
            {/* <Text>Home</Text> */}
            <Button title="TodoList" onPress={()=>{
                navigation.navigate("Setting");
            }}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
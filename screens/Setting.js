import React,{useState} from "react";
import {View, Text,TextInput,StyleSheet,Button} from "react-native";

export default function Setting(){
    const [text,setText] = useState("");
    const [list,setList] = useState([]);
    return (
        <View style={styles.container}>
                {list.map((val,index)=>(
                    <Text key={index}>{index+1}.{val}</Text>
                ))}
          
            
            <TextInput value={text} style={styles.textInput} onChangeText={(text)=>setText(text)}></TextInput>
            <View style={styles.button}>
                <Button title="Add" onPress={()=>{
                    if(text == ''){
                        return;
                    }
                    setList([...list,text]);
                    setText("");
                }} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 1,
        width: "70%",
        borderRadius: 10,
        paddingLeft: 10,
    },
    button: {
        width: "70%",
        backgroundColor: "green",
        borderRadius: 10,
        marginTop: 10,
    },
    text:{
        flex: 1,
        alignItems: 'flex-start',
    }
});
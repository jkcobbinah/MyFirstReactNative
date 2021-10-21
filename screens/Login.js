import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Login({ navigation }) {
    return (
        < View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 20,
                    marginBottom: 50,
                    transform: [{ rotate:"-45deg" }]
                }}
                source={{
                    uri: "https://image.shutterstock.com/image-photo/cyclist-red-riding-bike-on-600w-790973764.jpg"
                }}
                /*source={require("../assets/icon.png)}, for import local images*/
            />
            <Text style={{ color: "black", fontSize: 24, fontweight: 600 }}> Welcome to </Text>
            <Text style={{ color: "black", fontSize: 30, fontWeight:"bold" }}> Power Bike Shop </Text>

            {/* Gmail button on login page */}
            <TouchableOpacity style={{ flexDirection:"row", backgroundColor: "lightgray", padding: 10, paddingHorizontal: 50, marginTop: 20, borderRadius: 10 }}>
                <AntDesign name="google" size={24} color="red"/>
                <Text style={{ fontSize: 20, marginLeft:10, fontWeight: 600 }}>Login with Gmail</Text>
            </TouchableOpacity>

            {/* Apple button on login page */}
            <TouchableOpacity style={{ flexDirection: "row", backgroundColor: "black", padding: 10, paddingHorizontal: 50, marginTop: 20, borderRadius:10 }}>
                <AntDesign name="apple1" size={24} color= "white" />
                <Text style={{ marginLeft: 10, fontSize: 20, fontweight: 600, color: "white", }}>Login with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ marginTop: 10, fontweight: '500', color: 'gray' }}> Not a member?{" "}
                <Text style={{ color: "orange", fontWeight: "bold", }}>SignUp</Text>
            </Text>
            </TouchableOpacity>
            <View style={{paddingTop: 20}}>
                {/* Button to navigate to Homepage */}
            <Pressable>
                <Button
                    andriod_ripple
                    onPress={() => {
                        navigation.navigate("Home")}}
                   title="Go to Homepage"/>
                </Pressable>
                </View>
    </View >
        );
}
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
    return (
        <View style={{
            backgroundColor: "white", flex: 1, alignItems: 'center', }}>
            <View style={{ paddingHorizontal:10, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                <Ionicons name="menu" size={24} color="black" /> {/* 3 dashes menu icon */}
                <MaterialIcons name="pedal-bike" size={24} color="black" />   {/* Bike icon in top center of the homepage */}
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="search-sharp" size={20} color="black" />
                    <Ionicons name="notifications" size={20} color="black" /> 
                </View>
            </View>

            <Text style={{ paddingHorizontal:10, fontWeight: '500', marginTop: 10, color: 'lihtgray', marginRight: 2 }}>The World's <Text style={{ fontSize: 16, fontWeight: "bold", color: "orange" }}>Best Bikes</Text>
            </Text>
            <Text style={{ alignContent: 'left', paddingHorizontal: 10, marginTop: 10, fontWeight: "bold", color: "black" }}>Categories</Text>
            
            <View style={{ paddingTop: 20, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-evenly' }}>

                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', borderRadius: 5, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                    <Text style={{ color: 'orange' }}> All </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 5, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                    <Text style={{ color: 'gray' }}> Roadbike </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 5, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                    <Text style={{ color: 'gray'}}> Mountain </Text>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', paddingTop:20}}>

                <TouchableOpacity style={{ flexDirection: 'column', borderRadius: 10, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                  <AntDesign name="hearto" size={24} color="orange" />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 20,
                        marginHorizontal:10,
                        
                    }}
                    source={{
                        uri: "https://images.squarespace-cdn.com/content/v1/5c93c0f77eb88c3880697b8b/1568628374867-SAKWT5LNXNNDUQHX2LOB/image-asset.jpeg?format=1000w"
                    }} />
                    <Text>Pinarello Bike</Text>
                    <Text>$ 1,700.00</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'column', borderRadius: 5, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                <AntDesign name="hearto" size={24} color="black" />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 20,
                        marginHorizontal: 10,
                    }}
                    source={{
                        uri:"https://quinncycles.co.uk/wp-content/uploads/GHOST-FULL-SUS.jpg"
                    }} />

                    <Text>Brompton Bike</Text>
                    <Text>$ 1,500.00</Text>
                </TouchableOpacity>



            </View>

            <View style={{ flexDirection: 'row', paddingTop:20}}>
                <TouchableOpacity style={{ flexDirection: 'column', borderRadius: 5, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                <AntDesign name="hearto" size={24} color="black" />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 20,
                        marginHorizontal: 10,
                    }}
                    source={{
                        uri:"https://www.bikebargains.co.uk/wp-content/uploads/2018/01/Norco-Sight-C7-2-Carbon-XT-Full-Suspension-Mountain-Bike-2017-13-47kg-27-5-inch-Green-597x452.jpg"
                    }} />

                    <Text>Schwinn Bike</Text>
                    <Text>$ 1,200.00</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'column', borderRadius: 5, backgroundColor: 'lightgray', padding: 5, marginRight: 15  }}>
                <AntDesign name="hearto" size={24} color="black" />
                    <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 20,
                        marginHorizontal: 10,
                    }}
                    source={{
                        uri:"https://www.pedegoelectricbikes.com/wp-content/uploads/2020/09/pedego-element-red-300x247.jpg"
                    }} />
                    <Text>Norco Bike</Text>
                    <Text>$ 980.00</Text>
                </TouchableOpacity>
 
            </View>
            <View style={{paddingTop:20, paddingHorizontal: 10, flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between'}}>
                <Foundation name="home" size={24} color="black" />
                <View style={{ backgroundColor:'white'}}>
                    <MaterialCommunityIcons name="microphone" size={24} color="black" />
                    </View>
                <MaterialIcons name="shopping-bag" size={24} color="black" />
            </View>

        </View>
        );
}
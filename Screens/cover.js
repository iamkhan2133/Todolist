import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const cover = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#2B1887', flex: 1 }}>
            <Image style={{ height: 40, width: 40, alignSelf: 'flex-start', marginTop: 90, marginLeft: 30, marginBottom: 20 }} source={require("../assets/images/to-do-list.png")} />
            <View style={{ marginLeft: 30 }}>
                <Text style={{ fontSize: 30, fontWeight: 400, color: '#fff', alignSelf: 'flex-start' }}>To-Do-List</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 30, marginTop: 20 }}>
                <Image style={{ height: 30, width: 30, alignSelf: 'center', tintColor: '#fff' }} source={require("../assets/images/check-circle.png")} /><Text style={{ color: '#fff', alignSelf: 'center' }}>   Figma Variants</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 30, marginTop: 20 }}>
                <Image style={{ height: 30, width: 30, alignSelf: 'center', tintColor: '#fff' }} source={require("../assets/images/check-circle.png")} /><Text style={{ color: '#fff', alignSelf: 'center' }}>    Auto Layout</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: 50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Task')}><Text style={{ fontSize: 18, fontWeight: 40, color: '#fff' }} >check Tasks</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default cover;

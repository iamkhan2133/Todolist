import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
const Task = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: '#2B1887', flex: 1 }}>

            <TouchableOpacity onPress={() => navigation.navigate('cover')}><Image style={{ tintColor: '#fff', height: 20, width: 20, marginTop: 20, marginLeft: 9 }} source={require("../assets/images/back.png")} /></TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 30, marginTop: 150 }}>
                <Image style={{ height: 30, width: 30, alignSelf: 'center', tintColor: '#fff' }} source={require("../assets/images/clipboard.png")} /><Text style={{ color: '#fff', alignSelf: 'center' }}>   Task You Have To Do</Text><TouchableOpacity onPress={() => navigation.navigate('todotask')}><Image style={{ height: 20, width: 20, tintColor: '#fff', alignSelf: 'center', marginLeft: 20, marginTop: 5 }} source={require("../assets/images/back-button.png")} /></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingHorizontal: 30, marginTop: 30 }}>
                <Image style={{ height: 30, width: 30, alignSelf: 'center', tintColor: '#fff' }} source={require("../assets/images/clipboard.png")} /><Text style={{ color: '#fff', alignSelf: 'center' }}>     Completed Task</Text><TouchableOpacity onPress={() => navigation.navigate('completedtask')}><Image style={{ height: 20, width: 20, tintColor: '#fff', alignSelf: 'center', marginLeft: 20, marginTop: 5 }} source={require("../assets/images/back-button.png")} /></TouchableOpacity>
            </View>

        </ScrollView>
    )
}
export default Task;
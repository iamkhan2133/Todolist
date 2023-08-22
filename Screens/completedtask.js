import React from "react";
import { View, Text, TouchableOpacity, Image, } from "react-native";



// { TouchableOpacity, Image, FlatList,}

const completedtask = ({ navigation, props }) => {
    const { clientname, task, day } = props.route.params
    return (
        <View style={{ backgroundColor: '#2B1887', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Task')}><Image style={{ tintColor: '#fff', height: 20, width: 20, marginTop: 20, marginLeft: 9 }} source={require("../assets/images/back.png")} /></TouchableOpacity>
            <Text>clientname:{clientname}</Text>
            <Text>day:{day}</Text>
            <Text>task:{task}</Text>
        </View>
    )
}
export default completedtask;
// const completedtask = ({ navigation }) => {

//     const DATA = [
//         {
//             task: 'Wire up the new user flow',
//             day: 'monday',
//             clientname: 'PG'
//         },
//         {
//             task: 'Wire up the new user flow',
//             day: 'tuesday',
//             clientname: 'PG'
//         },
//         {
//             task: 'Create buttons states',
//             day: 'tuesday',
//             clientname: 'Digi'
//         },
//         {
//             task: 'Create to do list',
//             day: 'wednesday',
//             clientname: 'Confetti'
//         },
//         {
//             task: 'Add T&Cs to CPG DocSign',
//             day: 'thrusday',
//             clientname: 'DocSign'
//         },
//         {
//             task: 'New Figma comments Mon DocSign',
//             day: 'friday',
//             clientname: 'DocSign'
//         },
//         {
//             task: 'Organize design system Carrier',
//             day: 'tuesday',
//             clientname: 'Carrier'
//         },
//         {
//             task: 'Wire up the flow for Project Green Mon PG',
//             day: 'saturday',
//             clientname: 'Jump'
//         },
//         {
//             task: 'Create grid view of NFTs Digi',
//             day: 'monday',
//             clientname: 'PG'
//         }
//     ]

//     return (
//         <View style={{ backgroundColor: '#2B1887', flex: 1 }}>
//             <TouchableOpacity onPress={() => navigation.navigate('Task')}><Image style={{ tintColor: '#fff', height: 20, width: 20, marginTop: 20, marginLeft: 9 }} source={require("../assets/images/back.png")} /></TouchableOpacity>
//             <FlatList
//                 data={DATA}
//                 renderItem={({ item }) =>
//                     <View style={{ backgroundColor: '#D5CCFF', height: 110, padding: 20, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
//                         <View style={{ backgroundColor: '#fff', height: 70, width: 340 }}>
//                             <Text style={{ color: '#000', marginTop: 5, paddingHorizontal: 4 }}>{item.task}</Text>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Text style={{ backgroundColor: '#ECB800', color: '#fff', marginTop: 5, paddingHorizontal: 4, marginLeft: 2, width: 60, height: 20, marginRight: 8 }}>{item.day}</Text>
//                                 <Text style={{ backgroundColor: '#ECB800', color: '#ECB800', marginTop: 8, paddingHorizontal: 4, width: 15, height: 10, marginRight: 8 }}>test</Text>
//                                 <Text style={{ backgroundColor: '#ECB800', color: '#ECB800', marginTop: 8, paddingHorizontal: 4, width: 15, height: 10, marginRight: 8 }}>tet</Text>
//                             </View>
//                             <Text style={{ color: '#2B1887', marginTop: 5, marginRight: 10, height: 20, alignSelf: 'flex-end' }}>
//                                 {item.clientname}
//                             </Text>
//                         </View>
//                     </View>
//                 }
//             />
//         </View>
//     )
// }
// export default completedtask;
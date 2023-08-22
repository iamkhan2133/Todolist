import React, { useEffect, useState } from "react";
import { Alert, Text, View, TextInput, Button, FlatList, TouchableOpacity, Image } from "react-native";
import firestore from '@react-native-firebase/firestore';
const todotask = ({ navigation }) => {
  useEffect(() => {
    getData()
  }, [])

  const [clientname, setclientname] = useState('')
  const [task, settask] = useState('')
  const [day, setday] = useState('')
  const [dataList, setDataList] = useState([])

  const networkCall = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => console.log('====== Api Data =====>', json))
  }

  const addProduct = () => {
    try {
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test'
        }
        )
      })
        .then(res => res.json())
        .then(json => console.log('++++++++>', json))
    } catch (error) {
      console.log('======= Error', error)
    }

  }
  const Data = async (id) => {
    await firestore()
      .collection('Tasks')
      .doc(id)
      .delete()
      .then(() => {
        props.navigation.navigate('completedtask', { clientname, task, day })
        console.log('==== Item Deleted ====>')
        getData()
      })
  }
  const setData = async () => {
    if (clientname == '' || task == '' || day == '') {
      Alert.alert('Please Fill all fields')
    } else {
      const data = firestore().collection('Tasks')
      const val = await data.add({ clientname: clientname, task: task, day: day })
      console.log('====== Set Data ===>', val)
      getData();
    }
  }
  const getData = async () => {
    const list = []
    await firestore()
      .collection('Tasks')
      .get()
      .then(querysnapshot => {
        console.log('========== querysnapshot ID', querysnapshot.data)
        querysnapshot.forEach(documentSnapshot => {
          console.log('======= documentSnapshot', documentSnapshot.id)
          const id = documentSnapshot.id
          const { clientname, task, day } = documentSnapshot.data()
          list.push({ clientname, task, day, id })
        })
      })
    setDataList(list)
    console.log('=========> List ====>', list)
  }


  const handleButtonPress = () => {
    setData();
  };

  return (
    <View style={{ backgroundColor: '#2B1887', flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Task')}><Image style={{ tintColor: '#fff', height: 20, width: 20, marginTop: 20, marginLeft: 9 }} source={require("../assets/images/back.png")} /></TouchableOpacity>
      <FlatList
        data={dataList}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={{ backgroundColor: '#D5CCFF', height: 110, padding: 20, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
            <View style={{ backgroundColor: '#fff', height: 70, width: 340 }}>
              <Text style={{ color: '#000', marginTop: 5, paddingHorizontal: 4 }}>{item.task}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ backgroundColor: '#ECB800', color: '#fff', marginTop: 5, paddingHorizontal: 4, marginLeft: 2, width: 60, height: 20, marginRight: 8 }}>{item.day}</Text>
                <Text style={{ backgroundColor: '#ECB800', color: '#ECB800', marginTop: 8, paddingHorizontal: 4, width: 15, height: 10, marginRight: 8 }}>test</Text>
                <Text style={{ backgroundColor: '#ECB800', color: '#ECB800', marginTop: 8, paddingHorizontal: 4, width: 15, height: 10, marginRight: 8 }}>tet</Text>
              </View>
              <Text style={{ color: '#2B1887', marginTop: 5, marginRight: 10, height: 20, alignSelf: 'flex-end' }}>
                {item.clientname}
              </Text>
              <TouchableOpacity onPress={() => Data(item.id)}><Text style={{ color: '#2B1887' }}>Done</Text></TouchableOpacity>
            </View>
          </View>
        }
      />
      <View style={{ height: 125, width: 200 }}>

        <TextInput style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, height: 35, width: 345, marginTop: 5 }}
          placeholder='task'
          value={task}
          onChangeText={settask}
        />
        <TextInput style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, height: 35, width: 345 }}
          placeholder='clientname'
          value={clientname}
          onChangeText={setclientname}
        />

        <TextInput style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, height: 35, width: 340 }}
          placeholder='Day'
          value={day}
          onChangeText={setday}
        />
      </View>

      <Button title='Add Task' onPress={handleButtonPress} />
      <Button title='Get Api Data' onPress={networkCall} />
      <Button title='Add Product' onPress={addProduct} />

    </View>
  )
}
export default todotask;
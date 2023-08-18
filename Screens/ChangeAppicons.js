import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {changeIcon, getIcon} from 'react-native-change-icon';

export default function ChangeAppicons() {
  const [currentIconName, setCurrentIconName] = useState('');

  useEffect(() => {
    getIcon().then(name => setCurrentIconName(name));
  }, []);

  return (
    <View>
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          changeIcon('zimoblack')
            .then(setCurrentIconName)
            .catch(e => console.log("dd",e.message))
        }>
         <Image
    source={require("../Images/zimoblack.png")}
    style={{height:150,width:150}}
   
  />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          changeIcon('zimogreen')
            .then(setCurrentIconName)
            .catch(e => console.log(e.message))
        }>
         <Image
    source={require("../Images/zimogreen.png")}
    style={{height:150,width:150}}
   
  />
      </TouchableOpacity>
     
    </View>
     <Text style={styles.text}>{'Icon name: ' + currentIconName}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
flexDirection:"row",
alignSelf:"center",borderRadius:19,margin:20,
    justifyContent: 'space-evenly',
    alignItems: 'center',width:'100%',
    backgroundColor: 'orange',padding:20
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green',
  },
});
import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text, Image ,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Task5 = ({ navigation }) => {

    const contactsData = [
        { name: 'Abbey Longton', number: '+44 7867 123987', saved: true },
        { name: 'Abbot Jones', number: '+44 7867 489411', saved: false },
        { name: 'Abdulla Suleman', number: '+44 7861 498474', saved: true },
        { name: 'Abbey Longton', number: '+44 7867 123987', saved: true },
        { name: 'Abbot Jones', number: '+44 7867 489411', saved: false },
        { name: 'Abdulla Suleman', number: '+44 7861 498474', saved: true },
        { name: 'Abbey Longton', number: '+44 7867 123987', saved: true },
        { name: 'Abbot Jones', number: '+44 7867 489411', saved: false },
        { name: 'Abdulla Suleman', number: '+44 7861 498474', saved: true },
        { name: 'Abbey Longton', number: '+44 7867 123987', saved: true },
        { name: 'Abbot Jones', number: '+44 7867 489411', saved: false },
        { name: 'Abdulla Suleman', number: '+44 7861 498474', saved: true },
        { name: 'Abbey Longton', number: '+44 7867 123987', saved: true },
        { name: 'Abbot Jones', number: '+44 7867 489411', saved: false },
        { name: 'Abdulla Suleman', number: '+44 7861 498474', saved: true },
        
      ];

      const renderContact = ({ item }) => (
        // <View style={{}}>
        <TouchableOpacity style={styles.contactItem}>

          <Text style={styles.contactName}>{item.name}</Text>
          <Text style={styles.contactNumber}>{item.number}</Text>
          <Text style={styles.contactCategory}>
            {item.saved ? 'Zimo' : 'Invite'}
          </Text>
        </TouchableOpacity>
        // </View>
      );
    
  return (
    <View style={{}}>
     <View style={{flexDirection:'row' , justifyContent:"space-between", margin:20}}> 
     <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Image
                source={ require('../Images/arrow.png')}
            
              />
              </TouchableOpacity>
     <Image
                source={ require('../Images/logo.png')}
            
              />
     <Image
                source={ require('../Images/card.png')}
            
              />
     </View>

<View style={{height:1, width:'100%', backgroundColor:'orange', }}>
    <Text></Text>
</View>
<View style={{flexDirection:'row' , justifyContent:"space-between", marginHorizontal:15,marginVertical:20}}> 
<Image 
                source={ require('../Images/786.png')}
            
              />
  <Image style={{alignSelf:'center', marginRight:42}}
                source={ require('../Images/CONTACTS.png')}
            
              />
   <Image
                source={ require('../Images/users.png')}
            
              />
     </View>



     <View style={{flexDirection:'row' , justifyContent:"space-between", marginHorizontal:15,marginVertical:20, alignItems:'center'}}> 
     <View style={{flexDirection:'row', alignItems:'center',}}>
<Image 
                source={ require('../Images/avatar1.png')}
            
              />
  <Image style={{marginLeft:17}}
                source={ require('../Images/Edin.png')}
            
              />
              </View>
   <Image
                source={ require('../Images/plus.png')}
            
              />
     </View>

     <View style={{height:1, width:'95%', backgroundColor:'orange',alignSelf:'center' , marginBottom:20}}>
    <Text></Text>
</View>
<View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:12, marginBottom:10}}>
<Image
                source={ require('../Images/A.png')}
            
              />
               <Image
                source={ require('../Images/A.png')}
            
              />
</View>
<FlatList
  style={{ height: 460 }}
        data={contactsData}
        renderItem={renderContact}
        keyExtractor={(item) => item.number}
      />
<ScrollView><Text></Text></ScrollView>
<View style={{flexDirection:"row", height:20, width:'93%', justifyContent:"space-between", alignSelf:"center"}}>
<TouchableOpacity>
 <Image
                source={ require('../Images/1.png')}
            
              />
</TouchableOpacity>
<TouchableOpacity>
<Image
                source={ require('../Images/2.png')}
            
              />
</TouchableOpacity>
<TouchableOpacity>
<Image
                source={ require('../Images/3.png')}
            
              />
              </TouchableOpacity>
<TouchableOpacity>
<Image
                source={ require('../Images/4.png')}
            
              />
              </TouchableOpacity>
</View>


    </View>
  );
};

const styles = StyleSheet.create({
    A:{
        color:"orange"
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      contactItem: {
       paddingHorizontal:12,
       paddingVertical:4,
       borderBottomWidth:2,borderBottomColor:'lightgray',
        flexDirection:'row',justifyContent:'space-between',
      
      },
      contactName: {
        fontSize: 15,
        marginBottom: 6,
        color:"black"
      },
      contactNumber: {
        fontSize: 12,
        color: 'lightgray',
        marginBottom: 4,
      },
      contactCategory: {
        fontSize: 14,
        color: 'orange',
      },
});

export default Task5;

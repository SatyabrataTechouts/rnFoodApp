import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/dist/AntDesign';


const Product = ({item, navigation}) => {
  let x = item.product;
  const handlePress = (data, navigation) => {
    navigation.navigate('plp', {data: data, navigation: navigation});
  };
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF',
          // alignItems: 'center',
          marginTop: 30,
          // elevation:1,
          borderRadius: 30,
              
        }}>
        <Pressable onPress={() => handlePress(item.product, navigation)} style={{   height: 170, width: 350,elevation:4}}>
          <Image
            style={{
              height: 170,
              width: 350,
              alignItems: 'center',
              borderRadius: 30,
              
            }}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>

        <View style={Styled.name}>
          <Text style={{color: 'black'}}>{item.time}</Text>
        </View>
      </View>
      <View>
        <Text style={{color: '#05061F', fontSize: 19, padding: 4}}>
          {item.name}
        </Text>
      </View>
      <View style={{flexDirection:'row', padding: 4,alignItems:'center' }}>
   
         <View ><AntDesign name="star" color="#FC6E3C" /></View> 
          <View>
            <Text style={{color: 'black',marginLeft:4}}>{item.ratting}</Text>
          </View>
          <View>
          <Text style={{color: 'black',marginLeft:4}}>-{item.catagories}</Text>
          </View>
       
      </View>
    </View>
  );
};
const Styled = StyleSheet.create({
  name: {
    color: 'red',
    position: 'absolute',
    backgroundColor: '#FDFDFD',
    width: 80,
    height: 46,
    justifyContent: 'center',
    left: 0,
    top: 130,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  rate: {
    position: 'absolute',
    left: -150,
    top: 2,
  },
});
export default Product;

import {View} from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View style={{marginLeft:20}}>
      <View
        style={{
          marginTop:20,
          width: 20,
          height: 50,
          backgroundColor: 'yellow',
        }}
      />
      <View
        style={{
          margin: 10,
          width: 100,
          height: 100,
          backgroundColor: 'black',
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export default FixedDimensionsBasics;
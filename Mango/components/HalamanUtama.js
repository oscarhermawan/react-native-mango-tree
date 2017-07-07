import React from 'react';
import { Text, View, Button, TextInput } from 'react-native'

class HalamanUtama extends React.Component {
  constructor(){
    super()
    this.state ={
      name:'',
      treeName:''
    }
  }

  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <View >
        <Text>
          Welcome to Mango Tree {'\n\n\n'}
        </Text>
        <Text>
          Your Name :
        </Text>
        <TextInput
          style={{height: 35, width:200}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text>
          Give ur Tree Name :{'\n'}
        </Text>
        <TextInput
          style={{height: 35, width:200}}
          onChangeText={(treeName) => this.setState({treeName})}
          value={this.state.treeName}
        />
        <Button
          title="Start"
          onPress={() =>
            navigate('Tree')
          } />
      </View>
    );
  }
}

export default HalamanUtama

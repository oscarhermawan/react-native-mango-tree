import React from 'react';
import { Text, View, Button, TextInput } from 'react-native'
import { addTree } from '../actions'
import { connect } from 'react-redux'

class HalamanUtama extends React.Component {
  constructor(){
    super()
    this.state ={
      name:'',
      umur_awal:0,
      treeName:'',
      umur_akhir:5
    }
  }

  addPohon(){
    const navigate = this.props.navigation.navigate;
    this.props.add_Tree(this.state)
    alert('Data Berhasil Diinput')
    navigate('Tree')
  }

  render() {
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
          title="Save Pohon"
          onPress={() =>
            this.addPohon()
          } />

          <Text>
            {'\n\n'}
          </Text>
          
        <Button
          title="Start"
          onPress={() =>
            navigate('Tree')
          } />


      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    add_Tree:(obj)=>dispatch(addTree(obj))
  }
}

export default connect(null, mapDispatchToProps) (HalamanUtama)

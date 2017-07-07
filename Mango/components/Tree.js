import React from 'react';
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { loadData } from '../actions'


class Tree extends React.Component {

  emulatePohon(){

  }

  render() {
    console.log('tets print = ',this.props.pohon);
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text>This is {this.props.pohon.treeName}, {'\n'} he is year's old</Text>
        <Button
          title="Save Pohon"
          onPress={() =>
            this.emulatePohon()
          } />
      </View>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    pohon:state.tree
  }
}

export default connect(mapStateToProps, null) (Tree)

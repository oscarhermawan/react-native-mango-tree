import React from 'react';
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { loadData, emulateTree } from '../actions'


class Tree extends React.Component {

  emulatePohon(){
    this.props.emulate_Tree()
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>

      { this.props.pohon.is_alive == true ? (
        <View>
          <Text>This is {this.props.pohon.treeName}, {'\n'} he is {this.props.pohon.umur_awal} year's old</Text>
          <Text>{'\n\n\n'} </Text>
          <Button
            title="Emulate"
            onPress={() =>
              this.emulatePohon()
            } />
        </View>
      ) : (<Text>Death</Text>)
      }
      </View>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    pohon:state.tree
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    emulate_Tree:()=>dispatch(emulateTree())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Tree)

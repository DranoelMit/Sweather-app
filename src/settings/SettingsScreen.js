import React from 'react';
import {StyleSheet, View, Button, FlatList, Text, Modal, TextInput} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
class SettingsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      first:"",
      last:"",
      number:"",
      email:"",
      modalVisible: false,
      radioButtons:[
        {
          label: 'Phone Number'
        },
        {
          label: 'Email'
        }
      ],
    }
  }
  handleChangeText = (typedText) => {
    this.setState({first: typedText});
  }
  HandleFirst(){
    this.setState({first:event.target.value})
  }
  ModalVisible(){
    if(this.state.modalVisible == true){
      this.setState({modalVisible:false});         
    }else{
      this.setState({modalVisible:true});
    }
  }
  AddToArray() {
    let selectedButton = this.state.radioButtons.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radioButtons[0].label;
    this.ModalVisible.bind(this);
    let newdata = [...this.state.data];
    if(selectedButton == 'Phone Number'){
      newdata.push({first: this.state.first, last: this.state.last,number: "+1"+this.state.number});
    }else{
      newdata.push({first: this.state.first, last: this.state.last, email: this.state.email});
    }
    this.setState({modalVisible:false});
    this.setState({data:newdata,first:"",last:"",number:"",email:""});
  }

  RenderContact(item){
    if(typeof item.email === 'undefined'){
      return (<Text style={styles.item}>{`${item.first} ${item.last} ${item.number}`}</Text>);
    }else{
      return (<Text style={styles.item}>{`${item.first} ${item.last} ${item.email}`}</Text>);
    }
  }
  onPress = radioButtons => this.setState({radioButtons});

  render() {
    let selectedButton = this.state.radioButtons.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.radioButtons[0].label;
    if(selectedButton == 'Phone Number'){
    return (
      <View style ={styles.content}>
        <Modal transparent ={false} visible={this.state.modalVisible}>
          <View>
            <RadioGroup radioButtons={this.state.radioButtons} onPress={this.onPress}/>
            <Text>First Name:</Text>
            <TextInput style={styles.textInput} placeholder="First Name" 
                     onChangeText={(typedText) => {this.setState({first: typedText})}}
                     value={this.state.first}
                     />

            <Text>Last Name:</Text>
            <TextInput style={styles.textInput} placeholder="Last Name" 
                     onChangeText={(typedText) => {this.setState({last: typedText})}}
                     value={this.state.last}/>
            <Text>Phone Number:</Text>
            <TextInput style={styles.textInput} placeholder="Phone Number" 
                     onChangeText={(typedText) => {
                      let newText = typedText.replace(/[^0-9]/g, "");
                      this.setState({number: newText})}}
                     value={this.state.number}
                     maxLength={10}
                     keyboardType = 'numeric'
                     />
              
             <Button title = "Add Person" onPress ={this.AddToArray.bind(this)} style = {styles.button} />
          </View>
        </Modal>

        <FlatList
          data = {this.state.data}
          renderItem={({item}) => this.RenderContact(item)}
          extraData = {this.state.data}
          style={styles.list}
        />
        <Button title = "Add Person" onPress ={this.ModalVisible.bind(this)} style = {styles.button} />
      </View>
      );
    }else{
      return (
        <View style ={styles.content}>
          <Modal transparent ={false} visible={this.state.modalVisible}>
            <View>
              <RadioGroup radioButtons={this.state.radioButtons} onPress={this.onPress}/>
              <Text>First Name:</Text>
              <TextInput style={styles.textInput} placeholder="First Name" 
                       onChangeText={(typedText) => {this.setState({first: typedText})}}
                       value={this.state.first}
                       />
  
              <Text>Last Name:</Text>
              <TextInput style={styles.textInput} placeholder="Last Name" 
                       onChangeText={(typedText) => {this.setState({last: typedText})}}
                       value={this.state.last}/>
              <Text>Email:</Text>
              <TextInput style={styles.textInput} placeholder="Email" 
                       onChangeText={(typedText) => {this.setState({email: typedText})}}
                       value={this.state.email}
                       />
                
               <Button title = "Add Person" onPress ={this.AddToArray.bind(this)} style = {styles.button} />
            </View>
          </Modal>
  
          <FlatList
            data = {this.state.data}
            renderItem={({item}) => this.RenderContact(item)}
            extraData = {this.state.data}
            style={styles.list}
          />
          <Button title = "Add Person" onPress ={this.ModalVisible.bind(this)} style = {styles.button} />
        </View>
        );
    }
  }
}
const styles = StyleSheet.create({
  content:{
    height:"100%",
    width:"100%"
  },
  list:{
    alignContent:"flex-start",
    width:"100%"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 5,
    marginVertical: 5,
    borderColor: '#000000',
    borderWidth: 1
  },
  button:{
    position:"relative",
    bottom:0,
    width:"100%"
  },
  modal:{
    height: "100%",
    width: "100%",

  },
  textInput:{
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    width:"50%"
  }
  
});
export default SettingsScreen;
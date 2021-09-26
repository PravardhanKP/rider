import React, { Component } from "react";
import { View, Text, StyleSheet,Button,TouchableOpacity} from "react-native";
import * as Permissions from "expo-permissions";
import {BarcodeScanner} from "expo-barcode-scanner"
export default class TransactionScreen extends Component {
  constructor(){
    super();
    this.state={
      domState:'normal',
      hasChameraPermition:null,
      scanned:false,
      scannedData:'',

    }
  }
  getCameraPermation=async (domState) =>{
const{status}=await Permissions.askAsync(Permissions.CAMERA);
this.setState({hasChameraPermition:status==="granted"});
  }
  render() {
    const{domState,hasChameraPermition,scannedData,scanned}=this.state
    return (
      <View style={styles.container}>
      <TouchableOpacity style = {styles.button}
      onPress={()=>this.getCameraPermation("scanner")}>
      <Text style={styles.text}>Scan QR Code</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
      {hasChameraPermition? scannedData :'request for camera Permissions'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 15
  },
button:{ width:"60%", 
height:65,
 justifyContent:"center",
  alignItems:"center", 
  backgroundColor:"orange", 
  borderRadius:15 }
});

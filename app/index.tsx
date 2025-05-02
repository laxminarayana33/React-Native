import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Image, KeyboardAvoidingView, Platform } from "react-native";


export default function Index() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  type FormErrors = {
    username?: string;
    password?: string;
  };

  const validateForm = ()=>{
    let errors: FormErrors = {};
    if(!username) errors.username = "username is required";
    if(!password) errors.password = "password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = ()=>{
    if(validateForm()){
      alert('form submitted  ' + username + "  " + password);
      setUsername('');
      setPassword('');
      setErrors({})
    }
  }
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0} style={style.container}>
      <View style ={style.form}>
        <Image source={require('../assets/images/adaptive-icon.png')} style={style.image}/>
        <Text style={style.label}>User Name</Text>
        <TextInput style={style.input} placeholder="Enter your username" value={username} onChangeText={setUsername}/>
        {errors.username ? <Text style={style.errorText}>{errors.username}</Text> : null}
        <Text style={style.label}>Password</Text>
        <TextInput style={style.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword}/>
        {errors.password ? <Text style={style.errorText}>{errors.password}</Text> : null}
        <Button title="Login" onPress={()=>{handleSubmit()}}/>
      </View>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor:"lightgray"
  },
  form:{
    backgroundColor: "white",
    padding: 20,
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  label:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10, 
    borderRadius: 10,
  },
  image: {
    width:200,
    height: 400,
    marginBottom: 50,
    alignSelf: "center",
  },
  errorText:{
    color: "red",
    marginBottom : 15,
  }
})
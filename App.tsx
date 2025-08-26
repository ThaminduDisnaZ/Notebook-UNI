import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  return (

    <ScrollView style={styles.container} contentContainerStyle={styles.scrollcontent}>

      <View style={styles.header}>
        <Text style={styles.pageTitle}>Create Account</Text>
        <Text style={styles.subTitle}>Fill in the information below to create an account.</Text>
      </View>
      <View>
        <Pressable onPress={pickImage} style={styles.imagePicker}>
          {image ? (

            <Image source={{ uri: image }} style={styles.imageView} />


          ) : (
            <View style={styles.imagePlaceholder}>
              <Text>+</Text>
              <Text>Pick an image</Text>
            </View>
          )}

        </Pressable>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput placeholder='Enter your full name' style={styles.input} />
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput placeholder='Enter your username' style={styles.input} />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput placeholder='Enter your email' style={styles.input} keyboardType='email-address' />
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput placeholder='Enter your password' style={styles.input} secureTextEntry />
          <Text style={styles.inputLabel}>Confirm Password</Text>
          <TextInput placeholder='Confirm your password' style={styles.input} secureTextEntry />
          <Text style={styles.inputLabel}>City</Text>
          <TextInput placeholder='Enter your city' style={styles.input} />
          <Button title='Create Account' onPress={() => Alert.alert('Account created!')} />

        </View>
      </View>

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3ababff'
  },
  scrollcontent: {

    padding: 20,
    justifyContent: 'space-between'
  },
  header: {
    marginBottom: 20,
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subTitle: {
    fontSize: 16,
    color: '#555'
  },
  imagePicker: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderStyle: 'dashed',
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'hidden'
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    color: '#555',
    fontWeight: 'bold'
  },
  imageView: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  form: {
    marginTop: 30
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20
  }
});
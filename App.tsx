import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, ScrollView, Text, View } from 'react-native';
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
      <ScrollView>
        <View>
          <Text>Create Account</Text>
          <Text>Fill in the information below to create an account.</Text>
        </View>
        <View>
          <Pressable onPress={pickImage}>
            if (image != null) {
              
            }
            
          </Pressable>
        </View>
      </ScrollView>
    );
  
}




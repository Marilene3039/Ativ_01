import { useState } from 'react';
import {
  FormControl,
  Box,
  TextArea,
  Button,
  VStack,
  Input,
  AspectRatio,
  Image,
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import environment from '../../constants/environment';
import * as Application from 'expo-application';
import { router } from 'expo-router';
import { ScrollView } from 'react-native';

export default function CreatePost() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [newItem, setNewItem] = useState({
    shop: '',
    price: '',
    description: '',
    image: '',
  });

  function handleNewItem(key, val) {
    setNewItem(prev => ({ ...prev, [key]: val }));
  }

  async function uploadImage() {
    try {
      const localUri = selectedImage.assets[0].uri;
      const base64 = await FileSystem.readAsStringAsync(localUri, {
        encoding: 'base64',
      });

      const formData = new FormData();
      formData.append('image', base64);

      const url = `https://api.imgbb.com/1/upload?expiration=600&key=${environment.apiKey}`;

      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Resposta:', response.data.data.display_url);
      return response.data.data.display_url;
    } catch (error) {
      console.error('Erro ao escolher a imagem:', error);
    }
  }

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('É necessário permissão para acessar a câmera');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (pickerResult.canceled === true) {
      return;
    }
    handleNewItem('image', pickerResult.assets[0].uri);

    setSelectedImage(pickerResult);
  };

  async function save() {
    const deviceId = Application.androidId;
    const imgUrl = await uploadImage();
    console.log(environment.endpoint);

    const res = await axios.post(`${environment.endpoint}/posts/inserir`, {
      deviceAutor: deviceId,
      price: newItem.price,
      description: newItem.description,
      shop: newItem.shop,
      image: imgUrl,
    });

    setNewItem({
      shop: '',
      price: '',
      description: '',
      image: '',
    });

    router.back();
  }

  return (
    <ScrollView>
      <VStack p={8} space={6}>
        <FormControl>
          <FormControl.Label>Loja</FormControl.Label>
          <Input
            placeholder="Loja"
            value={newItem.shop}
            onChangeText={val => {
              handleNewItem('shop', val);
            }}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Preço</FormControl.Label>
          <Input
            inputMode="numeric"
            placeholder="Preço"
            value={newItem.price}
            onChangeText={val => {
              handleNewItem('price', val);
            }}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Descrição</FormControl.Label>
          <TextArea
            placeholder="Descrição do produto"
            value={newItem.description}
            onChangeText={val => {
              handleNewItem('description', val);
            }}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label>Carregar Imagem</FormControl.Label>
          <Button variant={'outline'} onPress={openImagePickerAsync}>
            {newItem.image && (
              <Box>
                <AspectRatio w="100%" ratio={1}>
                  <Image
                    source={{
                      uri: newItem.image,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
            )}
            {!newItem.image && <Entypo name="image" size={24} color="gray" />}
          </Button>
        </FormControl>

        <Button backgroundColor="#fc2cbde4" onPress={save}>
          Salvar
        </Button>
      </VStack>
    </ScrollView>
  );
}

import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Button,
  Text,
  Heading,
  Stack,
  AspectRatio,
  Image,
} from 'native-base';
import {
  Entypo,
  SimpleLineIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Card({
  price,
  shop,
  description,
  image,
  onPressEdit,
  onPressExclude,
  showBtns = false,
}) {
  return (
    <TouchableOpacity disabled={!Boolean(onPressEdit)} onPress={onPressEdit}>
      <Box alignItems="center" on>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          shadow={1}
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: '#FFF',
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={1}>
              <Image
                source={{
                  uri: image,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                R$ {Number(price).toFixed(2)}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: 'violet.500',
                }}
                _dark={{
                  color: 'violet.400',
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {shop}
              </Text>
            </Stack>
            <Text fontWeight="400">{description}</Text>
            {showBtns && (
              <HStack
                alignItems="flex-end"
                space={4}
                justifyContent="space-between"
              >
                <Button width="40%" colorScheme="red" onPress={onPressExclude}>
                  Excluir
                </Button>
                <Button w="40%" colorScheme={'lightBlue'} onPress={onPressEdit}>
                  Editar
                </Button>
              </HStack>
            )}
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

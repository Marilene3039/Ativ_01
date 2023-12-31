import { useCallback, useEffect, useState } from 'react';
import { Box, Divider } from 'native-base';
import Card from '../../components/Card';
import { StyleSheet, VirtualizedList } from 'react-native';
import { router } from 'expo-router';
import environment from '../../constants/environment';
import axios from 'axios';
import * as Application from 'expo-application';

import { useFocusEffect } from '@react-navigation/native';

export default function Posts() {
  const deviceId = Application.androidId;

  const [posts, setPosts] = useState([]);

  async function getPosts() {
    console.log('getting');
    const res = await axios.get(`${environment.endpoint}/posts`);
    setPosts(res.data);
  }

  async function deletePost(postId) {
    const res = await axios.delete(`${environment.endpoint}/posts/deletar`, {
      data: { postId: Number(postId) },
    });
    getPosts();
  }

  useEffect(() => {
    getPosts();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getPosts();
    }, []),
  );

  return (
    <Box flex={1} alignSelf="center" justifyContent="center">
      <VirtualizedList
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={
          <Divider mt="10" thickness="0" orientation="horizontal" />
        }
        data={posts}
        getItemCount={data => data.length}
        getItem={(data, idx) => data[idx]}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item, index }) => (
          <Card
            key={`Card-${index}`}
            description={item.description}
            image={item.image}
            price={item.price}
            shop={item.shop}
            showBtns={item.deviceAutor === deviceId}
            onPressExclude={() => {
              deletePost(item.id);
            }}
            onPressEdit={
              item.deviceAutor === deviceId
                ? () => {
                    router.push(`editPost/${item.id}`);
                  }
                : undefined
            }
          />
        )}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 10,
    marginTop: 10,
    gap: 20,
  },
});

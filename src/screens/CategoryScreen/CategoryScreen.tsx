import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useProducts} from '../../hooks/useProducts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {capitalizarTexto} from '../../utils/functions';
import { useProductsStore } from '../../store/products-store';

type homeScreenProp = StackNavigationProp<RootStackParamList>;

type CategoryScreenRouteProp = {
  route: {
    params: {
      category: string;
    };
  };
};

export const CategoryScreen = ({route}: CategoryScreenRouteProp) => {
  const navigation = useNavigation<homeScreenProp>();
  const {products} = useProducts();
  const {products: storeProducts} = useProductsStore();
  const newProducts = [...products, ...storeProducts];
  const {category} = route.params;

  const filteredProducts = newProducts.filter(
    product => product.category === category,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Productos de: {capitalizarTexto(category)}
      </Text>

      <FlatList
        data={filteredProducts}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                product: item,
              })
            }>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.image}}
                style={styles.productImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription} numberOfLines={2}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    width: 120,
    height: 120,
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    flex: 1,
    padding: 12,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  ratingCount: {
    marginLeft: 8,
    fontSize: 12,
    color: '#999',
  },
});

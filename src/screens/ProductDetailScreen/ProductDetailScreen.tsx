import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {StarRating} from '../../components/StarRating';
import {Products} from '../../interfaces/types';
import {Colors} from '../../constants/colors';

type ProductDetailScreenProps = {
  route: {
    params: {
      product: Products;
    };
  };
};

export const ProductDetailScreen = ({route}: ProductDetailScreenProps) => {
  const {product} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: product.image}}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>

        <StarRating rating={product.rating} />

        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.wishlistButton}>
          <Icon name="heart-outline" size={20} color={Colors.primaryPink} />
          <Text style={styles.wishlistText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Comprar ahora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryWhite,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 10,
  },
  productImage: {
    width: width,
    height: width * 0.8,
    marginTop: 20,
  },
  productInfo: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.gris1,
  },

  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.moneyGreen,
    marginBottom: 15,
  },
  category: {
    fontSize: 16,
    color: Colors.gris2,
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.gris1,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.gris2,
    lineHeight: 24,
    marginBottom: 30,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'android' ? 80 : 40,
  },
  wishlistButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.primaryPink,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '30%',
  },
  wishlistText: {
    marginLeft: 8,
    color: Colors.primaryPink,
    fontWeight: '600',
  },
  buyButton: {
    backgroundColor: Colors.primaryPink,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '65%',
    alignItems: 'center',
  },
  buyText: {
    color: Colors.primaryWhite,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useProducts} from '../../hooks/useProducts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {FloatingActionButton} from '../../components/FloatingActionButton';
import {Colors} from '../../constants/colors';
import {AddProductModal} from '../../components/AddProductModal';
import {useProductsStore} from '../../store/products-store';
import {Loader} from '../../components/Loader';

type homeScreenProp = StackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
  const {products: apiProducts, loading} = useProducts();
  const {products: storeProducts} = useProductsStore();

  const navigation = useNavigation<homeScreenProp>();
  const [showModal, setShowModal] = useState(false);
  const allProducts = [...apiProducts, ...storeProducts];

  const categories = [...new Set(allProducts.map(p => p.category))];

  const navigateToCategory = (category: string) => {
    navigation.navigate('Category', {category});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => navigateToCategory(item)}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={<Loader loading={loading} text={'Loading...'} />}
      />
      <FloatingActionButton onPress={() => setShowModal(true)} />
      <AddProductModal visible={showModal} setVisible={setShowModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.primaryWhite,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: Colors.primaryBlack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

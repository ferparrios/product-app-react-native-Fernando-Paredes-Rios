import React, {useState} from 'react';
import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../constants/colors';
import {CreateProducts, Products} from '../interfaces/types';
import {useProducts} from '../hooks/useProducts';
import {useProductsStore} from '../store/products-store';
import {generateRandomId} from '../utils/functions';

interface AddProductModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const AddProductModal = ({
  visible,
  setVisible,
}: AddProductModalProps) => {
  const {addProduct} = useProductsStore();
  const {createProducts} = useProducts();
  const [createdProduct, setCreatedProduct] = useState<CreateProducts>({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });

  const handleCreateProduct = async () => {
    try {
      await createProducts(createdProduct);

      const completeProduct: Products = {
        id: generateRandomId(),
        ...createdProduct,
        rating: {
          rate: 0,
          count: 0,
        },
      };
      addProduct(completeProduct);
      setVisible(false);
      setCreatedProduct({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <Pressable
          style={styles.centeredView}
          onPress={() => setVisible(false)}>
          <View style={styles.modalView}>
            <View style={styles.listContainer}>
              <Text style={styles.titleText}>Add New Product</Text>
              <Text style={styles.subtitleText}>Product Name:</Text>
              <TextInput
                style={styles.input}
                value={createdProduct.title}
                onChangeText={text =>
                  setCreatedProduct({...createdProduct, title: text})
                }
              />
              <Text style={styles.subtitleText}>Price:</Text>
              <TextInput
                style={styles.input}
                value={createdProduct.price.toString()}
                onChangeText={text =>
                  setCreatedProduct({...createdProduct, price: Number(text)})
                }
                keyboardType="numeric"
              />
              <Text style={styles.subtitleText}>Description:</Text>
              <TextInput
                style={styles.input}
                value={createdProduct.description}
                onChangeText={text =>
                  setCreatedProduct({...createdProduct, description: text})
                }
              />
              <Text style={styles.subtitleText}>Category:</Text>
              <TextInput
                style={styles.input}
                value={createdProduct.category}
                onChangeText={text =>
                  setCreatedProduct({...createdProduct, category: text})
                }
              />
              <Text style={styles.subtitleText}>Image:</Text>
              <TextInput
                style={styles.input}
                value={createdProduct.image}
                onChangeText={text =>
                  setCreatedProduct({...createdProduct, image: text})
                }
              />
              <View style={styles.buttonContainer}>
                <Pressable onPress={handleCreateProduct} style={styles.button}>
                  <Text style={styles.buttonsText}>Add Product</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Dimensions.get('window').width - 60,
    height: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
  },
  titleText: {
    color: Colors.primaryBlack,
    fontSize: 24,
    fontWeight: '600',
  },
  subtitleText: {
    color: Colors.primaryBlack,
    fontSize: 18,
  },
  listContainer: {
    padding: 20,
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.primaryBlack,
    padding: 10,
    borderRadius: 10,
  },
  buttonsText: {
    color: Colors.primaryBlack,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gris1,
    borderRadius: 10,
    padding: Platform.OS == 'android' ? 10 : 15,
  },
});

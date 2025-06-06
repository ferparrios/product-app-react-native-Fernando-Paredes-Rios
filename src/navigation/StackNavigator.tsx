import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {CategoryScreen} from '../screens/CategoryScreen/CategoryScreen';
import {ProductDetailScreen} from '../screens/ProductDetailScreen/ProductDetailScreen';
import {capitalizarTexto} from '../utils/functions';
import {Products} from '../interfaces/types';

export type RootStackParamList = {
  Home: undefined;
  Category: {category: string};
  ProductDetail: {product: Products};
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({route}) => ({
          title: capitalizarTexto(route.params.category),
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({route}) => ({
          title: capitalizarTexto(route.params.product.title),
          headerTintColor: 'black',
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

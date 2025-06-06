import Icon from '@react-native-vector-icons/ionicons';
import {StyleSheet, Text, View} from 'react-native';
import {StarRatingProps} from '../interfaces/types';
import {Colors} from '../constants/colors';

export const StarRating = ({rating}: StarRatingProps) => {
  const fullStars = Math.floor(rating.rate);
  const hasHalfStar = rating.rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <View style={styles.ratingContainer}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="star" size={20} color={Colors.stars} />
      ))}
      {hasHalfStar && <Icon name="star-half" size={20} color={Colors.stars} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          name="star-outline"
          size={20}
          color={Colors.stars}
        />
      ))}
      <Text style={styles.ratingText}>({rating.rate.toFixed(1)})</Text>
      <Text style={styles.ratingCount}>{rating.count} valoraciones</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#666',
  },
  ratingCount: {
    marginLeft: 8,
    fontSize: 14,
    color: '#999',
  },
});

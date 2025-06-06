import Icon from '@react-native-vector-icons/ionicons';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/colors';

interface FloatingActionButtonProps {
  onPress: () => void;
}

export const FloatingActionButton = ({onPress}: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="add-circle-outline" size={50} color={Colors.primaryPink} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
});

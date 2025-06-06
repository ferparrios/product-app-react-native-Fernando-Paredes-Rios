import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';

interface LoaderProps {
  loading: boolean;
  text: string;
}

export const Loader = ({loading, text}: LoaderProps) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primaryPink} />
      ) : (
        <Text>{text}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

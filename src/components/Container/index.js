import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Container = ({children}) => <SafeAreaView style={styles.default}>{children}</SafeAreaView>;

export default Container;

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//arrow function
const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My To-Do App</Text>
    </View>
);

const styles = StyleSheet.create ({
    headerContainer: {
        backgroundColor: '#E0BBE4',
        marginTop: 70,
        marginBottom: 40
    },
    headerText: {
        fontSize: 26,
        fontWeight: '600',
        color: '#3f4e66'
    }
})

export default Header;
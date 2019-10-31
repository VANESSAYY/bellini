import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//arrow function
const SubTitle = ({title}) => (
    <View>
        <Text style={styles.subTitleText}>{title}</Text>
    </View>
);

styles = StyleSheet.create ({
    subTitleText: {
        textDecorationLine: "underline",
        color: "#000",
        fontSize: 18,
        fontWeight: "600",
    }
})

export default SubTitle;
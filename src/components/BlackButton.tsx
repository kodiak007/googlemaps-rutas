import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
    style?: StyleProp<ViewStyle>
}

export const BlackButton = ({ title, onPress, style = {}}: Props) => {
    return (
        <TouchableOpacity
            onPress={ onPress }
            activeOpacity={0.9}
            style={{
                ...style as any,
                ...styles.blackButton
            }}
        >
            <Text style={ styles.textButton } > {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    blackButton:{
        height: 50,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    textButton:{
        color: 'white',
        fontSize: 18
    }
});
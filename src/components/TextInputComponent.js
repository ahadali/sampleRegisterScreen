import React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';

const TextInputComponent = (props) => (
    <View style={{ backgroundColor: '#E8E8E8', marginVertical: 20, borderRadius: 10, height: 74, padding: 10, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
            <Image source={props.source} />
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={() => { }}
                value={""}
            />
        </View>
    </View>
);
const styles = StyleSheet.create({
    input: {
        paddingLeft: 10
    },
});

export default TextInputComponent;

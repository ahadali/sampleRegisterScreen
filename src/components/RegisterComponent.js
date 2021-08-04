import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import { style } from '../styles/registerScreenStyle';
import TextInputComponent from './TextInputComponent';
import { primaryColor } from '../constants/theme';

// According to Container-View Pattern here all UI logics will take place
const RegisterComponent = () => (
    <View style={style.container}>
        <Image source={require('../assets/Group_9.png')} style={{ position: 'absolute', right: 0, top: 50 }} />
        <Image source={require('../assets/Frame_7.png')} style={{ marginTop: 80, marginBottom: 20 }} />
        <Text style={{ fontStyle: 'normal', fontSize: 28, fontWeight: 'bold', lineHeight: 32 }}>Create An Account</Text>
        <TextInputComponent source={require('../assets/user.png')} placeholder="Please enter name" />
        <TextInputComponent source={require('../assets/mail.png')} placeholder="Please enter email" />
        <TextInputComponent source={require('../assets/lock.png')} placeholder="Please enter password" />
        <Text style={{ color: '#3C3C43' }}>By Creating an account you accept the Terms & Condition of the Company</Text>
        <Button style={{ backgroundColor: primaryColor, height: 64, width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 20, borderRadius: 6 }} isDisabled onPress={() => console.log("hello world")}>
            <Text style={{ color: 'white', fontWeight: '800', fontSize: 17 }}>Register</Text>
        </Button>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#253274', height: 1, flex: 1, alignSelf: 'center' }} />
            <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontSize: 12, color: '#3C3C43' }}>Or Register Using</Text>
            <View style={{ backgroundColor: '#253274', height: 1, flex: 1, alignSelf: 'center' }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button style={{ backgroundColor: "#039BE5", height: 64, width: '50%', justifyContent: 'center', alignItems: 'center', marginVertical: 20, borderRadius: 6, marginRight: 10 }} isDisabled onPress={() => console.log("hello world")}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 20, width: 20, marginRight: 5, resizeMode: 'contain' }} source={require('../assets/Vector.png')} />
                    <Text style={{ color: 'white', fontWeight: 'normal', fontSize: 17, fontStyle: 'normal', marginLeft: 5 }}>Facebook</Text>
                </View>
            </Button>
            <Button style={{ backgroundColor: 'white', height: 64, width: '50%', justifyContent: 'center', alignItems: 'center', marginVertical: 20, borderRadius: 6, borderWidth: 0.5, borderColor: 'black', marginLeft: 10 }} isDisabled onPress={() => console.log("hello world")}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 20, width: 20, backgroundColor: 'white', marginRight: 5 }} source={require('../assets/google_icon.png')} />
                    <Text style={{ color: '#3C3C43', fontWeight: 'normal', fontSize: 17, fontStyle: 'normal', marginLeft: 5 }}>Google</Text>
                </View>
            </Button>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', paddingBottom: 50 }}>
            <Text style={{ color: '#3C3C43', fontWeight: 'normal', fontSize: 17, fontStyle: 'normal', marginLeft: 5 }}>Already a member?</Text>
            <Text style={{ color: primaryColor, fontWeight: 'bold', fontSize: 17, fontStyle: 'normal', marginLeft: 5 }}>Log In</Text>
        </View>
    </View>
);

export default RegisterComponent;

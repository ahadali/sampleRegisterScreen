import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import RegisterComponent from '../components/RegisterComponent';

// According to Container-View Pattern here all the api, side-effects handling will be done
const RegisterContainer = () => {

    const [form, setForm] = useState({})

    const callApi = (form) => {
        fetch("https://reqres.in/api/register", {
            method: 'POST',
            body: JSON.stringify({})
        });
    }

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <RegisterComponent callApi={(form) => callApi(form)} />
            </View>
        </ScrollView>
    )
};

export default RegisterContainer;

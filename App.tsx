import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    class Customer {
        name!: string;
        email!: string;
        phone!: string;

        constructor(name: string, email: string, phone: string) {
            this.name = name;
            this.email = email;
            this.phone = phone;
        }
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [customers, setCustomers] = useState<Customer[]>([])


    function handleSubmit() {
        console.log("clicked")
        const newCustomer: Customer = new Customer(name, email, phone)
        setCustomers(
            (customers: Customer[]) => [...customers, newCustomer]
        )
        setName('')
        setEmail('')
        setPhone('')

    }

    const CustomerItem = ({customer}: { customer: Customer }) => (
        <View style={styles.item}>
            <Text>Name: {customer.name} | Email : {customer.email} | Phone : {customer.phone}</Text>
        </View>
    );
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name"/>
                <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email"/>
                <TextInput style={styles.input} onChangeText={setPhone} value={phone} placeholder="Phone"/>
                <Button onPress={() => handleSubmit()} title="Submit"/>
                <FlatList
                    data={customers}
                    renderItem={({item}) => <CustomerItem customer={item}/>}
                    keyExtractor={(customer) => customer.name}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#94e2ca',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10
    },

});

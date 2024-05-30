import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data1 from '../data/colores1';
import data2 from '../data/colores2';
import data3 from '../data/colores3';
import Boton from '../components/Boton';


const Pantalla1 = ({ navigation }) => {
    const informacion1 = data1;
    const informacion2 = data2;
    const informacion3 = data3;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <ScrollView
            contentContainerStyle={{ paddingHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>

                <View style={styles.containerTitle}>
                    <Text style={styles.titulo}>Colores Aquosos</Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacion1}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </View>

                <View style={styles.containerTitle}>
                    <Text style={styles.titulo}>Nature Colors</Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacion2}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </View>

                <View style={styles.containerTitle}>
                    <Text style={styles.titulo}>Others Colors</Text>
                </View>

                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacion3}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </View>

                
                <Text style={styles.texto}>Mostrando Informacion horizontal, utilizando el componente FlatList y la propiedad horizontal con valor true</Text>

                <Boton
                    textoBoton='Ir a creditos'
                    accionBoton={irPantalla2}
                />
            </View>
        </ScrollView>
    );
};

export default Pantalla1;

const styles = StyleSheet.create({
    containerTitle: {
        width: '100%',
        backgroundColor: '#808080',
        padding: 10,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 400,
        marginHorizontal: 5,
        marginVertical: 10
    },
    cardContainer: {
        height: 125,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    texto: {
        marginHorizontal: 15
    }
});

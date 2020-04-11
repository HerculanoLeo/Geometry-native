import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { drawCircle, drawLine, drawTriangle, drawRectangle, drawSquare } from '../DrawFunctions'

const SelectorDrawFunction = ({ width, height, drawFunction, setDrawFunction }) => {

    const [buttonSelected, setButtonSelected] = useState(0);


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.selectorButton, buttonSelected === 1 ? styles.buttonGreen : '']}
                onPress={() => {
                    setButtonSelected(1);
                    setDrawFunction(() => drawLine);
                }}>
                <Text style={styles.textSelector}>Reta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.selectorButton, buttonSelected === 2 ? styles.buttonGreen : '']}
                onPress={() => {
                    setButtonSelected(2);
                    setDrawFunction(() => drawCircle);
                }}>
                <Text style={styles.textSelector}>Circulo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.selectorButton, buttonSelected === 3 ? styles.buttonGreen : '']}
                onPress={() => {
                    setButtonSelected(3);
                    setDrawFunction(() => drawTriangle);
                }}>
                <Text style={styles.textSelector}>Triangulo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.selectorButton, buttonSelected === 4 ? styles.buttonGreen : '']}
                onPress={() => {
                    setButtonSelected(4);
                    setDrawFunction(() => drawRectangle);
                }}>
                <Text style={styles.textSelector}>Retangulo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.selectorButton, buttonSelected === 5 ? styles.buttonGreen : '']}
                onPress={() => {
                    setButtonSelected(5);
                    setDrawFunction(() => drawSquare);
                }}>
                <Text style={styles.textSelector}>Quadrado</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectorDrawFunction;

const styles = StyleSheet.create({
    container: {
        height: 50,
        margin: 5,
        flexDirection: "row",
    },
    selectorButton: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
        margin: 5,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        elevation: 10
    },
    buttonGreen: {
        backgroundColor: "lightgreen",
        elevation: 5,
    },
    textSelector: {
        fontSize: 12
    }
})
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, StyleSheet, PanResponder, Button, Text, Modal, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';
import stylesDeafault from './styles'

const ModalMessage = ({openModal = false, setOpenModal, textMessage = "Modal foi Aberto"}) => {

    return (
        <Modal visible={openModal} transparent={true} animationType='fade' onRequestClose = {() => setOpenModal(false)}>
            <View style={stylesDeafault.modalView}>
                <View style={stylesDeafault.header}>
                    <TouchableOpacity style={stylesDeafault.firstButton} onPress={() => setOpenModal(false)}>
                        <AntDesign name="closecircle" size={40} color="red" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>{textMessage}</Text>
                </View>
            </View>
        </Modal>
    );
};

export default ModalMessage;
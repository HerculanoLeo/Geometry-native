import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 20
  },
  header: {
    display: "flex",
    flexDirection: 'row',
    marginBottom: 10,
  },
  firstButton: {
    flex: 1,
    marginHorizontal: 5, 
    alignItems: "center",
    backgroundColor: '#ffffff',
  },
});

export default styles;
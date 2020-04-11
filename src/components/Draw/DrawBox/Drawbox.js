import React, { useState } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { drawPointsToScreen } from '../DrawFunctions/DrawFunctions'

const DrawBox = ({ width, height, currentPoints, setCurrentPoints, currentMax, setCurrentMax, pointsOnScreen = [], setPoinstsOnScreen, componentsResult = [] }) => {

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gs) => true,
    onMoveShouldSetPanResponder: (evt, gs) => true,
    onPanResponderGrant: (evt, gs) => onResponderGrant(evt, gs),
    onPanResponderRelease: (evt, gs) => onResponderRelease(evt, gs)
  });

  const onTouch = (evt) => {
    if (componentsResult.length == 0) {
      const [x, y] = [evt.nativeEvent.pageX, evt.nativeEvent.pageY];
      const newCurrentPoints = currentPoints;
      newCurrentPoints.push({ x, y });

      setCurrentPoints(newCurrentPoints);
    }
  };

  const onResponderGrant = (evt, gs) => {
    onTouch(evt);
  };

  const onResponderRelease = (evt) => {
    if (componentsResult.length == 0) {
      const result = drawPointsToScreen(currentMax, currentPoints, pointsOnScreen);
      setPoinstsOnScreen(result.componentResult);
      setCurrentMax(currentMax + 1);
    }
  }

  return (
    <View style={[styles.drawContainer]}>
      <View {...panResponder.panHandlers}>
        <Svg
          style={styles.drawSurface}
          width={width}
          height={height}
        >
          <G>{pointsOnScreen}</G>
          <G>
            {componentsResult}
          </G>
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },

  drawSurface: {
    backgroundColor: 'lightgray',
  },
});


export default DrawBox;

import React, { useState, useRef } from 'react';
import { View, Dimensions, Button } from 'react-native';
import { DrawBox } from '../DrawBox'
import { SelectorDrawFunction } from '../SelectorDrawFunction';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles'
import ModalMessage from '../ModalMessages/ModalMessage';

const DrawScreen = ({ setDrawResult }) => {
    const width = Dimensions.get('window').width;

    const [currentMax, setCurrentMax] = useState(0);
    const [currentPoints, setCurrentPoints] = useState([]);

    const [pointsOnScreen, setPoinstsOnScreen] = useState([]);

    const [keyComponentResult, setKeyComponentResult] = useState(0);
    const [componentsResult, setComponentsResult] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [textModal, setTextModal] = useState("");

    const [drawFunction, setDrawFunction] = useState(() => () => {
        return ({
            valid: false,
            componentResult: "Selecione uma das formas geometricas abaixo."
        })
    });

    const calculate = () => {
        const result = drawFunction(keyComponentResult, currentPoints, componentsResult);
        setKeyComponentResult(keyComponentResult + 1);
        if (result.valid) {
            setComponentsResult(result.componentResult);
            setDrawResult(result);
            cleanPoints();
        } else {
            setTextModal(result.componentResult)
            setOpenModal(true);
            cleanPoints();
        }
    }

    const cleanPoints = () => {
        setPoinstsOnScreen([]);
        setCurrentPoints([]);
        setCurrentMax(0);
    }

    const cleanAll = () => {
        setComponentsResult([]);
        setKeyComponentResult(0);
        cleanPoints();
    }

    const removePoint = () => {
        if (pointsOnScreen.length > 0) {
            const newCurrentPoints = currentPoints.slice(0, -1);
            const newCurrentMax = currentMax - 1;
            const newPointsOnScreen = pointsOnScreen.slice(0, -1);

            setCurrentPoints(newCurrentPoints);
            setCurrentMax(newCurrentMax);
            setPoinstsOnScreen(newPointsOnScreen);
        }
    }

    return (
        <View>
            <DrawBox
                width={width}
                height={width}
                currentMax={currentMax}
                setCurrentMax={setCurrentMax}
                currentPoints={currentPoints}
                setCurrentPoints={setCurrentPoints}
                pointsOnScreen={pointsOnScreen}
                setPoinstsOnScreen={setPoinstsOnScreen}
                componentsResult={componentsResult}
            />
            <View style={styles.footerConstainer}>
                <TouchableOpacity style={[styles.footerButton, { width: width * 0.3 }, styles.buttonRed]} onPress={() => cleanAll()}>
                    <AntDesign name="close" size={32} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.footerButton, { width: width * 0.3 }, styles.yellowButton]} onPress={() => removePoint()}>
                    <AntDesign name="reload1" size={32} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.footerButton, { width: width * 0.3 }, styles.greenButton]}
                    onPress={() => calculate()}
                    disabled={componentsResult.length > 0}
                >
                    <AntDesign name="check" size={32} color="black" />
                </TouchableOpacity>
            </View>
            <SelectorDrawFunction
                width={width}
                height={50}
                drawFunction={drawFunction}
                setDrawFunction={setDrawFunction}
            />
            <ModalMessage openModal={openModal} setOpenModal={setOpenModal} textMessage={textModal} />
        </View>
    )
};

export default DrawScreen;

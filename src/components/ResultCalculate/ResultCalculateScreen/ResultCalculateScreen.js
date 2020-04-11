import React from 'react';
import { View, Text } from 'react-native';

const ResultCalculateScreen = ({ drawResult }) => {

    const type = () => {
        if (drawResult.type == 'Line') {

            return `Tipo: ${drawResult.type}`;
        } else if (drawResult.type == 'Circle') {

            return `Tipo: ${drawResult.type}`;
        } else if (drawResult.type == 'Triangle') {

            return `Tipo: ${drawResult.type}`;
        } else if (drawResult.type == 'Rectangle') {

            return `Tipo: ${drawResult.type}`;
        } else if (drawResult.type == 'Square') {

            return `Tipo: ${drawResult.type}`;
        } else {

            return ``;
        }
    }

    const perimeter = () => {
        const points = drawResult.points;
        const offsetX = drawResult.offSet.x;
        const offsetY = drawResult.offSet.y;
        if (drawResult.type == 'Line') {

            const perimeter = Math.sqrt(Math.pow((points[0].x - points[1].x), 2) + Math.pow((points[0].y - points[1].y), 2));

            return `Tamanho da reta é ${perimeter.toFixed(2)} Pixels`;
        } else if (drawResult.type == 'Circle') {
            const radius = Math.sqrt(Math.pow((points[0].x - points[1].x), 2) + Math.pow((points[0].y - points[1].y), 2));

            const perimeter = (2 * (3.14 * radius));

            return `Perimetro do Circulo é ${perimeter.toFixed(2)} Pixels`;
        } else if (drawResult.type == 'Triangle') {
            const lado1 = Math.sqrt(Math.pow((points[0].x - points[1].x), 2) + Math.pow((points[0].y - points[1].y), 2));
            const lado2 = Math.sqrt(Math.pow((points[1].x - points[2].x), 2) + Math.pow((points[1].y - points[2].y), 2));
            const lado3 = Math.sqrt(Math.pow((points[2].x - points[0].x), 2) + Math.pow((points[2].y - points[0].y), 2));

            const perimeter = (lado1 + lado2 + lado3);
            return `Perimetro do Triangulo é ${perimeter.toFixed(2)} Pixels`;
        } else if (drawResult.type == 'Rectangle') {
            const lado1 = ((points[1].x - points[2].x) - offsetX);
            const lado2 = (points[0].y - offsetY) - (points[2].y - offsetY);

            const resultado = (lado1 * 2) + (lado2 * 2);

            const perimeter = resultado > 0 ? resultado : (resultado * (-1));

            return `Perimetro do Retangulo é ${perimeter.toFixed(2)} Pixels`;
        } else if (drawResult.type == 'Square') {
            const lados = (points[1].x - points[0].x);

            const perimeter = (lados * 4);

            return `Perimetro do Quadrado é ${perimeter.toFixed(2)} Pixels`;
        } else {

            return '';
        }
    }

    const area = () => {
        const points = drawResult.points;
        const offsetX = drawResult.offSet.x;
        const offsetY = drawResult.offSet.y;
        if (drawResult.type == 'Line') {
            return ``;
        } else if (drawResult.type == 'Circle') {
            const radius = Math.sqrt(Math.pow((points[0].x - points[1].x), 2) + Math.pow((points[0].y - points[1].y), 2));

            const area = ((3.14 * Math.pow(radius, 2)));

            return `Área do Circulo é ${area.toFixed(2)} Pixels`;
        } else if (drawResult.type == 'Triangle') {
            return ``;
        } else if (drawResult.type == 'Rectangle') {
            const lado1 = ((points[1].x - points[2].x) - offsetX);
            const lado2 = (points[0].y - offsetY) - (points[2].y - offsetY);

            const area = (lado1 * lado2);

            return `Área do Retangulo é ${area.toFixed(2)} Pixels`;
        } else if (drawResult.type == 'Square') {
            const lados = (points[1].x - points[0].x);

            const area = (lados * lados);

            return `Área do quadrado é ${area.toFixed(2)} Pixels`;
        } else {
            return ``;
        }
    }

    const calculateAreaTriangle = (points) => {
        const lado1 = Math.sqrt(Math.pow((points[0].x - points[1].x), 2) + Math.pow((points[0].y - points[1].y), 2));
        const lado2 = Math.sqrt(Math.pow((points[1].x - points[2].x), 2) + Math.pow((points[1].y - points[2].y), 2));
        const lado3 = Math.sqrt(Math.pow((points[2].x - points[0].x), 2) + Math.pow((points[2].y - points[0].y), 2));

        if(lado1 !== lado2 !== lado3 !== lado1){
            
        }




    }


    return (
        <View>
            <Text>{type()}</Text>
            <Text>{perimeter()}</Text>
            <Text>{area()}</Text>
        </View>
    )
}

export default ResultCalculateScreen;
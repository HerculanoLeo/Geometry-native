import React from 'react';
import { Line, Circle, Polygon, Rect } from 'react-native-svg';

const drawPointsToScreen = (key = 0, points = [], componentResult = [], offsetX = 0, offsetY = 80, stroke = "#000000", strokeWidth = 5, colorFill = "#000000") => {
    if (points.length > 0) {
        componentResult.push(
            <Circle
                key={key}
                cx={points[key].x - offsetX}
                cy={points[key].y - offsetY}
                r={strokeWidth}
                stroke={stroke}
                fill={colorFill}
            />
        );
        return _resultValidation(points, componentResult, type = "Point", true);
    }
}

const drawLine = (key = 0, points = [], componentResult = [], offsetX = 0, offsetY = 80, stroke = "#000000", strokeWidth = 5, colorFill = "#ffffff") => {
    if (points.length == 2) {
        componentResult.push(
            <Line
                key={key}
                x1={points[0].x - offsetX}
                y1={points[0].y - offsetY}
                x2={points[1].x - offsetX}
                y2={points[1].y - offsetY}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        )
        return _resultValidation(points, componentResult, type = "Line", true);
    } else {
        componentResult = `Para desenhar um Reta coloque 2 pontos na tela.`
        return _resultValidation(points, componentResult, type = "error", false)
    }

}

const drawCircle = (key = 0, points = [], componentResult = [], offsetX = 0, offsetY = 80, stroke = "#000000", strokeWidth = 5, colorFill = "#ffffff") => {
    if (points.length == 2) {
        componentResult.push(
            <Circle
                key={key}
                cx={points[0].x - offsetX}
                cy={points[0].y - offsetY}
                r={_drawRadiusCircle(points[0], points[1])}
                fill={colorFill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        );
        return _resultValidation(points, componentResult, type = "Circle", true);
    } else {
        componentResult = `Para desenhar um Circulo coloque 2 pontos na tela.`
        return _resultValidation(points, componentResult, type = "Error", false)
    }
}

const _drawRadiusCircle = (border, center) => {
    return Math.sqrt(Math.pow((border.x - center.x), 2) + Math.pow((border.y - center.y), 2));
}

const drawTriangle = (key = 0, points = [], componentResult = [], offsetX = 0, offsetY = 80, stroke = "#000000", strokeWidth = 5, colorFill = "#ffffff") => {
    if (points.length == 3) {
        const pointsStr = points.map(point => `${point.x - offsetX},${point.y - offsetY}`);
        componentResult.push(
            <Polygon
                key={key}
                points={pointsStr}
                fill={colorFill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        )
        return _resultValidation(points, componentResult, type = "Triangle", true);
    } else {
        componentResult = `Para desenhar um Triangulo coloque 3 pontos na tela.`
        return _resultValidation(points, componentResult, type = "Error",false)
    }
}

const drawRectangle = (key = 0, points = [], componentResult = [], offsetX = 0, offsetY = 80, stroke = "#000000", strokeWidth = 5, colorFill = "#ffffff") => {
    if (points.length == 3) {
        componentResult.push(
            <Rect
                key={key}
                x={points[2].x - offsetX}
                y={points[2].y - offsetY}
                width={(points[1].x - points[2].x) - offsetX}
                height={(points[0].y - offsetY) - (points[2].y - offsetY)}
                fill={colorFill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        )
        return _resultValidation(points, componentResult, type = "Rectangle", true);
    } else {
        componentResult = `Para desenhar um Retangulo coloque 3 pontos na tela.`
        return _resultValidation(points, componentResult, type = "Error", false)
    }
}

const drawSquare = (key = 0, points = [], componentResult = [], offsetX = 0, offsetY = 80, stroke = "#000000", strokeWidth = 5, colorFill = "#ffffff") => {
    if (points.length == 2) {
        componentResult.push(
            <Rect
                key={key}
                x={points[1].x - offsetX}
                y={points[1].y - offsetY}
                width={points[0].x - points[1].x}
                height={points[0].x - points[1].x}
                fill={colorFill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        )
        return _resultValidation(points, componentResult, type = "Square", true);
    } else {
        componentResult = `Para desenhar um quadrado coloque 2 pontos na tela.`
        return _resultValidation(points, componentResult, type = "Error", false)
    }

}

const _resultValidation = (points, componentResult, type = "Point", valid = true, offsetX = 0, offsetY = 80) => {
    return ({
        valid,
        points,
        componentResult,
        type,
        offSet: {
            x: offsetX,
            y: offsetY
        }
    })
}

export { drawPointsToScreen, drawCircle, drawLine, drawTriangle, drawRectangle, drawSquare };
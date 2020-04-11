import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawScreen } from '../../components/Draw/DrawScreen';

const Home = ({ navigator }) => {

    const [drawResult, setDrawResult] = useState({
        valid: '',
        points: [],
        componentResult: [],
        type: '',
        offSet: {
            x: '',
            y: ''
        }
    });

    console.log(drawResult);
    
    return (
        <ScrollView>
            <DrawScreen setDrawResult={setDrawResult} />
        </ScrollView>

    )
}

export default Home;
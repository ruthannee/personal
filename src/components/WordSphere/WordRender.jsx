import React, { useRef, useEffect } from 'react';
import wordSphere from './WordSphere';

const words = [
    'MVC', 'JavaScript', 'SQL', 'ETL', 
    'SSIS', 'Azure', 'PostgreSQL', 'Java',
    'CSS', 'HTML5', 'C#', 'Git', 'R Lang',
    'EDA', 'CRISP-DM', 'Clustering', 
    'ReactJS', 'PowerCenter', 'KDD', 
    'Python', 'Data Cleaning', 'Feature Selection'
    //22
];

//words distribution
const counts = [1, 4, 6, 6, 4, 1];

const options = {
    tilt: Math.PI / 9,
    initialVelocityX: 0.29,
    initialVelocityY: 0.29,
    initialRotationX: Math.PI * 0.14,
    initialRotationZ: 0
};

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        wordSphere(canvas, words, counts, options);
    }, [])

    return <canvas id="canvas" ref={canvasRef} {...props} />
}

export default Canvas;
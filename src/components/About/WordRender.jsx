import React, { useRef, useEffect } from 'react';
import wordSphere from './WordSphere';

const words = [
    'HTML5', 'JavaScript', 'Java', 'C#',
    'CSS', 'MVC', 'Maven', 'PostgreSQL', 'SQL', 'CRISP-DM',
    'Bootstrap', 'EDA', 'Git', 'Clustering', 'Feature Selection',
    'ReactJS', 'Linguagem R', 'Data Cleaning', 'KDD'
];

//words distribution
const counts = [1, 6, 2, 6, 3, 1];

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
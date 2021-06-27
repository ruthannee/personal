import React, { useRef, useEffect } from 'react';
import wordSphere from './WordSphere';

const words = [
    'MVC', 'JavaScript', 'Java', 'PostgreSQL', 
    'CSS', 'HTML5', 'C#', 'CRISP-DM',
    'Bootstrap', 'EDA', 'Git', 'Clustering', 
    'ReactJS', 'Linguagem R', 'SQL', 'KDD', 
    'Python', 'Maven', 'Data Cleaning', 'Feature Selection'
    //20
];

//words distribution
const counts = [1, 2, 7, 7, 2, 1];

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
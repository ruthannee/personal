import React, { useRef, useEffect } from 'react';
import wordSphere from './WordSphere';

const words = [
    'HTML5', 'JavaScript', 'Java', 'C#', //4
    'CSS', 'MVC', 'PostgreSQL', 'CRISP-DM', 'SQL', //5
    'Bootstrap', 'EDA', 'Git', 'Clustering', //4
    'ReactJS', 'Linguagem R', 'Data Cleaning', 'KDD', //4
    'Python', 'Maven', 'Feature Selection' //3
    //20
];

//words distribution
const counts = [1, 3, 6, 2, 6, 1, 1];

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
/**
 * WordSphere
 * Written by Hyojun Kim in 2017. Licensed in MIT.
 * Edited by Ruth Anne in 2021.
 */
export default function WordSphere(canvas, words, counts, options) {

  const π = Math.PI; // happy math!
  const {
    width = 560,
    height = 430,
    radius = 180,
    fontSize = 22,
    tilt = 0,
    initialVelocityX = 0,
    initialVelocityY = 0,
    initialRotationX = 0,
    initialRotationZ = 0,
  } = options;

  let vx = initialVelocityX,
    vy = initialVelocityY;
  let rx = initialRotationX,
    rz = initialRotationZ;

  // canvas setup
  let ctx = canvas.getContext('2d');
  ctx.textAlign = 'center';

  // Hi-DPI support
  canvas.width = width * 2;
  canvas.height = height * 2;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(2, 2);

  if (window.matchMedia("(max-width:700px)").matches) {
    document.getElementById("canvas").style.maxwidth = '560px';
    document.getElementById("canvas").style.width = '100%';
  }

  // scrolling
  let clicked = false,
    lastX, lastY;
  canvas.addEventListener('mousedown', event => {
    clicked = true;
    lastX = event.screenX;
    lastY = event.screenY;
  });
  canvas.addEventListener('mousemove', event => {
    var dx;
    var dy;
    if (!clicked) return;
    [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
    [lastX, lastY] = [event.screenX, event.screenY];

    // rotation update
    rz += -dy * 0.01;
    rx += dx * 0.01;

    // velocity update
    vx = dx * 0.1;
    vy = dy * 0.1;

    if (!looping) startLoop();
  });
  canvas.addEventListener('mouseup', e => clicked = false);
  canvas.addEventListener('mouseleave', e => clicked = false);

  function rot(y, x, t) {
    return [x * Math.cos(t) - y * Math.sin(t), y * Math.cos(t) + x * Math.sin(t)];
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ix = 0,
      iz = 0;
    for (const text of words) {
      const degZ = (π / (counts.length - 1)) * iz;
      const degX = (2 * π / counts[iz]) * ix;

      let x = radius * Math.sin(degZ) * Math.cos(degX);
      let y = radius * Math.sin(degZ) * Math.sin(degX);
      let z = radius * Math.cos(degZ) + 8 * (ix % 2) /* randomness */;

      // camera transform
      [y, z] = rot(y, z, tilt);
      [x, z] = rot(x, z, rz);
      [x, y] = rot(x, y, rx);

      // convert to cartesian and then draw.
      const alpha = 0.6 + 0.4 * (x / radius);
      const size = fontSize + 2 + 5 * (x / radius);
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.font = `${size}px "Helvetica Neue", sans-serif`;
      ctx.fillText(text, y + width / 2.4, -z + height / 2);

      ix--;
      if (ix < 0) {
        iz++;
        ix = counts[iz] - 1;
      }
    }
  }

  // renderer
  let looping = false;

  function rendererLoop() {
    if (looping) window.requestAnimationFrame(rendererLoop);
    render();

    // deacceleration - dirty code xD
    if (vx > 0) vx = vx - 0.01;
    if (vy > 0) vy = vy - 0.01;
    if (vx < 0) vx = vx + 0.01;
    if (vy > 0) vy = vy + 0.01;
    if (vx === 0 && vy === 0) stopLoop();

    rz += vy * 0.01;
    rx += vx * 0.01;
  }

  function startLoop() {
    looping = true;
    window.requestAnimationFrame(rendererLoop);
  }

  function stopLoop() {
    looping = false;
  }
  
  startLoop();
};
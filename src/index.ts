import { fabric } from 'fabric';

const canvasEl = document.createElement('canvas');

canvasEl.id = 'c';
canvasEl.style.border = '2px solid black';

document.body.append(canvasEl);

const canvas = new fabric.Canvas(canvasEl, {
  width: 800,
  height: 500,
});

const rect = new fabric.Rect({
  left: 50,
  top: 50,
  fill: 'red',
  width: 80,
  height: 80,
});

canvas.add(rect);

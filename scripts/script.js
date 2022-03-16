// Objetos do jogo
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

Width = canvas.width = 700; // 700
Height = canvas.height = 550; // 550

let margem = (window.innerHeight - Height) / 2;
canvas.style.marginTop = `${margem}px`;

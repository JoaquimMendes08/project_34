
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var solo;
var link, corda;
var cenario;
var bolaIMG;
var cestaIMG;
var cesta;
var botao;
var estrelaIMG;
var bola


function preload() {
  cenario = loadImage("planodefundo.png");
  cestaIMG = loadImage("cesta.png");
  bolaIMG = loadImage("bola.png");
  estrelaIMG = loadImage("estrela.png");
}

function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world;
  
  solo = new Ground(200, 680, 600, 60);

  cesta = Bodies.rectangle(40, 400, 400, 600);

  bola = Bodies.circle(250, 100, 10);

  corda = new Rope(5, {x: 190, y: 90});
  Composite.add(corda.body, bola);
  ligacao = new Link(corda, bola);

  corda2 = new Rope(5, {x: 340, y: 100});
  Composite.add(corda2.body, bola);
  ligacao2 = new Link(corda2, bola);
  
  botao = createImg("botaodecortar.png");
  botao.position(190, 90);
  botao.size(50, 50);
  botao.mouseClicked(soltar)

  botao2 = createImg("botaodecortar.png");
  botao2.position(340, 100);
  botao2.size(50, 50);
  botao2.mouseClicked(soltar2);

  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
    background(cenario);

    corda.show();
    solo.show();
    corda2.show();

    Engine.update(engine);

    image(cestaIMG, cesta.position.x, cesta.position.y, 200, 290);
    image(bolaIMG, bola.position.x, bola.position.y,35, 35);

    fill("brown");
    textSize(40);
    text("Acerte a cesta, e se", 15, 50);
    fill("brown");
    textSize(40);
    text("divirta jogando basquete", 15, 90)

}

function soltar() {
  corda.break();
  ligacao.detach();
  ligacao = null;
}

function soltar2() {
  corda2.break();
  ligacao2.detach();
  ligacao2 = null;
}


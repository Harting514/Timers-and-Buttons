/***********************************************************************************
  Rooms of My Dream House
  by Yik Hung
------------------------------------------------------------------------------------
  This is Yik's house that people can visit by clicking arrow buttons to interactive among 6 rooms. 
  This project was inspired by a flash game that was very popular in China during my childhood. 
  I made this project based on the operation methods of this game (such as clicking on items to view). 
  This project is dedicated to the memory of my childhood.
------------------------------------------------------------------------------------
  I uses the functions such as preload(), setup(), draw(), image() and anothers to illustrate
  adobe XD's work to p5.js
***********************************************************************************/
var images = [];
var midX;
var midY;
var CatButton;
var CowButton;
var DogButton;
var DuckButton;
var simpleTimer;
var elapsedSeconds = 0;
var counter;
var ButtonWidth = 200;
var ButtonHeight = 100;
var CatSound;
var DogSound;
var CowSound;
var DuckSound;
var ButtonInvisible = false;




function preload() {
  Dog = loadImage('assets/dog.png');
  Cat = loadImage('assets/Sushicat.png');
  Cow = loadImage('assets/cow.png');
  Duck = loadImage('assets/Yellowduck.png');
  Background = loadImage('assets/Background.png');
  Night = loadImage('assets/Night.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  CatSound = loadSound('assets/Cat-meowing-sound.mp3')
  DogSound = loadSound('assets/Dog.mp3')
  CowSound = loadSound('assets/Cow.mp3')
  DuckSound = loadSound('assets/Duck.mp3')

  simpleTimer = new Timer(30000);
  simpleTimer.start();
  makeButtons();
}

function draw() {
  background(0);

  // give instructures
  image(Background, 0, 0, windowWidth, windowHeight);
  textSize(80);
  fill(255,0,0)
  text("Welcome to My Farmers!", windowWidth/2, windowHeight*3/4);
  text("Click Buttons to play with our animal friends!", windowWidth/2, windowHeight*3/4+100);


  updateTimer();
  if(ButtonInvisible == false){
    CowButton.draw();
    CatButton.draw();
    DogButton.draw();
    DuckButton.draw();
  }


}

function makeButtons(){
  // Creat Buttons
  CowButton = new Clickable();
  CatButton = new Clickable();
  DuckButton = new Clickable();
  DogButton = new Clickable();

  // Button Image
  CatButton.image = Cat;
  CowButton.image = Cow;
  DogButton.image = Dog;
  DuckButton.image = Duck;


  // no button texts
  CowButton.text = "";
  CatButton.text = "";
  DuckButton.text = "";
  DogButton.text = "";

  // Make button backgrounds transpancy
  CowButton.color = "#FFFFFF";
  CatButton.color = "#FFFFFF";
  DuckButton.color = "#FFFFFF";
  DogButton.color = "#FFFFFF";

  // Button size
  CowButton.width = ButtonWidth;
  CowButton.height = ButtonHeight
  CatButton.width = ButtonWidth;
  CatButton.height = ButtonHeight
  DuckButton.width = ButtonWidth;
  DuckButton.height = ButtonHeight
  DogButton.width = ButtonWidth;
  DogButton.height = ButtonHeight

  //make button borders invisible
  CowButton.strokeWeight = 0;
  CatButton.strokeWeight = 0;
  DuckButton.strokeWeight = 0;
  DogButton.strokeWeight = 0;

  // make button location the same as it on the image
  CowButton.locate(windowWidth*1/5 , windowHeight/2 );
  CatButton.locate(windowWidth*2/5 , windowHeight/2);
  DogButton.locate(windowWidth*3/5 , windowHeight/2);
  DuckButton.locate(windowWidth*4/5 , windowHeight/2);

  // when buttons are pressed
  CowButton.onPress = CowButtonPressed;
  CatButton.onPress = CatButtonPressed;
  DogButton.onPress = DogButtonPressed;
  DuckButton.onPress = DuckButtonPressed;
}


// when Christmas hat is pressed
CatButtonPressed = function () {
  CatSound.play();
}

DogButtonPressed = function () {
  DogSound.play();
}

CowButtonPressed = function () {
  CowSound.play();
}

DuckButtonPressed = function () {
  DuckSound.play();
}
 


function updateTimer(){
  if( simpleTimer.expired() ){
    ButtonInvisible = true;
    image(Night, 0, 0, windowWidth, windowHeight);
    fill(255,0,0);
    textSize(200);
    text( "Bed Time! (๑ᵕ⌓ᵕ̤) ", windowWidth/2, windowHeight/2 );
    frameRate(2);
  }
  else {
    fill(255,0,0);
    text( "Time left before bedtime: " + Math.round(simpleTimer.getRemainingTime()/1000), width/2, 200 );
  }
}



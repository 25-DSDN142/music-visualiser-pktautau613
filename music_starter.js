
// vocal, drum, bass, and other are volumes ranging from 0 to 100
 let firstRun = true;
 let myImage;
// :) 
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(153,136,180);
  
  
  if(firstRun){
    myImage = loadImage('my_art.png')
    firstRun = false;
  }
  
  image(myImage, 0, 0);
  filter(BLUR, 5)

  // Map the values to relevant ranges
  let elD = map(drum, 0, 100, 200, 450);
  let elV = map(vocal, 0, 100, 30, 450);
  let elB = map(bass, 0, 100, 40, 450);
  


  // Parameters for the wavy line
  let lineY = 350;
  let lineU = 450;
  let lineE = 550;
  let lineI = 650;            
  let amplitude = elV / 10;      // Wave amplitude scales with vocals
  let frequency = 0.15 + elD / 10000; // Wave frequency scales with drums
  let bassInfluence = elB / 100; // Adds some extra morphing from bass

// string one
  stroke(0);
  strokeWeight(10);
  noFill();

  beginShape();
  for (let x = 10; x < canvasWidth - 10; x += 1) {
    let y = lineY + 
            amplitude * sin((x * frequency) + (counter / 3)) +
            bassInfluence * cos((x * frequency * 2) + (counter / 2));
    vertex(x, y);
  }
  endShape();

  //string two
  stroke(0);
  strokeWeight(10);
  noFill();

    beginShape();
  for (let x = 5; x < canvasWidth - 5; x += 1) {
    let y = lineU + 
            amplitude * sin((x * frequency) + (counter / 4)) +
            bassInfluence * cos((x * frequency * 6) + (counter / 2));
    vertex(x, y);
  }
  endShape();  

    // string three
  stroke(0);
  strokeWeight(10);
  noFill();

    beginShape();
  for (let x = 5; x < canvasWidth - 5; x += 1) {
    let y = lineE + 
            amplitude * sin((x * frequency) + (counter / 8)) +
            bassInfluence * cos((x * frequency * 1) + (counter / 2));
    vertex(x, y);
  }
  endShape();  

      // string four
  stroke(0);
  strokeWeight(10);
  noFill();

    beginShape();
  for (let x = 5; x < canvasWidth - 5; x += 1) {
    let y = lineI + 
            amplitude * sin((x * frequency) + (counter / 1)) +
            bassInfluence * cos((x * frequency * 7) + (counter / 2));
    vertex(x, y);
  }
  endShape();  

push()

  stroke(54,28,17)
  noFill()
  strokeWeight(300)
  ellipse(245,500,900,900)

  stroke(113,57,35)
  noFill()
  strokeWeight(100)
  ellipse(245,500,600,600)

pop()

  rectMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  fill(213,233,12);
  stroke(0);
  strokeWeight(5)

  textFont('Times New Roman');
  text(words, 250, 800);

  textFont('Brush Script M7')

}








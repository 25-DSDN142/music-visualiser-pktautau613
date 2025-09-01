
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(217, 197, 128);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  fill(255,255,255);
  noStroke();
  text(words, 250, 250);
  textFont('Times New Roman');
  
  
  // fill(54, 191, 191);
  // square(250,850,700);
  
  // Setup
  angleMode(DEGREES);
  let midX = canvasWidth / 2;
  let midY = canvasHeight / 2;

  // Map the values to relevant ranges
  let elD = map(drum, 0, 100, 200, 450);
  let elV = map(vocal, 0, 100, 30, 450);
  let elB = map(bass, 0, 100, 40, 450);


  // Parameters for the wavy line
  let lineY = 800;             // The vertical position of the main line
  let amplitude = elV / 8;      // Wave amplitude scales with vocals
  let frequency = 0.55 + elV / 10000; // Wave frequency scales with drums
  let bassInfluence = elB / 60; // Adds some extra morphing from bass

// Back one (thicker white stroke)
  stroke(255);
  strokeWeight(500);
  noFill();

  beginShape();
  for (let x = 10; x < canvasWidth - 10; x += 1) {
    // Animate the wave: counter to shift phase over time
    let y = lineY + 
            amplitude * sin((x * frequency) + (counter / 3)) +
            bassInfluence * cos((x * frequency * 2) + (counter / 2));
    vertex(x, y);
  }
  endShape();

  
  // second stroke
  stroke(54, 191, 191);
  strokeWeight(400);
  noFill();

    beginShape();
  for (let x = 30; x < canvasWidth - 30; x += 2) {
    // Animate the wave: counter to shift phase over time
    let y = lineY + 
            amplitude * sin((x * frequency) + (counter / 3)) +
            bassInfluence * cos((x * frequency * 2) + (counter / 2));
    vertex(x, y);
  }
  endShape();

}








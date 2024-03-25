function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(176, 224, 230);
  

  // Fietsframe
  fill(100);
  rect(100, 150, 200, 10); // Framebalk
  rect(100, 150, 10, 100); // Frame verticaal
  rect(290, 150, 10, 100); // Frame verticaal

  // Bak
  fill(150);
  rect(110, 120, 180, 30); // Bakbodem
  rect(110, 90, 180, 30); // Bakrand
  rect(110, 60, 10, 30); // Bak linkerzijde
  rect(280, 60, 10, 30); // Bak rechterzijde

  // Wielen
  fill(50);
  ellipse(130, 200, 50); // Linkerwiel
  ellipse(260, 200, 50); // Rechterwiel

  // Stuur
  stroke(100);
  strokeWeight(10);
  line(110, 100, 90, 120); // Linkerhandvat
  line(280, 100, 300, 120); // Rechterhandvat
}

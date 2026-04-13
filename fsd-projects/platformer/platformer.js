$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform (200,650,100,20, "red")
createPlatform (300,600,100,20, "red")
createPlatform (400,500,100,10, "red")
createPlatform (500,400,300,10, "red")
createPlatform (800,400,100,10,"red")
createPlatform (1000,400,100,10,"red") 
createPlatform (800,240,100,10,"red")
createPlatform (1080,350,20,35,"red")
createPlatform (800,200,20,20,"red")
createPlatform (850,100,300,10,"red")
createPlatform (1150,100,10,500,"red")
createPlatform (1150,600,100,10,"red")
createPlatform (1300,10,10,500,"red")
createPlatform (500,240,300,10,"red")
createPlatform (400,240,100,10,"red")
createPlatform (400,240,10,160,"red")
createPlatform (500,400,10,110,"red")
createPlatform (100,500,1,1,"red")
createPlatform (50,400,1,1,"red")
createPlatform (150,300,1,1,"red")
createPlatform (400,90,10,160,"red")
createPlatform (1000,400,10,170,"red")
createPlatform (1000,570,100,10,"red")
createPlatform (500,670,630,1,"lightblue")
createPlatform (200,200,20,10,"red")
createPlatform (1150,300,50,10,"red")
createPlatform (1300,600,100,10,"red")
createPlatform (10,670,100,10,"red")
createPlatform (400,135,50,10,"red")



createBadPlatform(650, 200, 150, 0.2, 'lightblue')
createBadPlatform(900, 668, 25, 1,"lightblue")


    // TODO 3 - Create Collectables
    createCollectable ("minecraftdiamond",450,400)
    createCollectable ("minecraftdiamond",100,100)
    createCollectable ("minecraftdiamond",400,200)
    createCollectable ("minecraftdiamond",1050,500)
    createCollectable ("minecraftdiamond",1000,50)
    createCollectable ("minecraftdiamond",1350,500)
    
    



    
    // TODO 4 - Create Cannons
createCannon ("top",300,1800);;
createCannon ("top", 600,2000);
createCannon ("right",770,0.1);
createCannon ("top",700,1800);
createCannon ("top",1000,1500);
createCannon ("top",800,1800);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

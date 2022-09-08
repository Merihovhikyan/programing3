function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount,bombCount){
          let matrix = [];

            for(let i = 0; i < matrixSize;i++){
                    matrix[i] = []
                for(let j = 0; j < matrixSize; j++){
                        matrix[i][j] = 0;
                }
            }

            for(let i = 0 ; i < grassCount; i++ ){
                  
                 let x  = Math.floor(Math.random() * matrixSize)
                 let y  = Math.floor(Math.random() * matrixSize)

                       if(matrix[y][x] == 0){
                           matrix[y][x] = 1;
                       }

            }

            for(let i = 0 ; i < grEatCount; i++ ){
                  
               let x  = Math.floor(Math.random() * matrixSize)
               let y  = Math.floor(Math.random() * matrixSize)

                     if(matrix[y][x] == 0){
                         matrix[y][x] = 2;
                     }

          }
          for(let i = 0 ; i < predatorCount; i++ ){
                  
               let x  = Math.floor(Math.random() * matrixSize)
               let y  = Math.floor(Math.random() * matrixSize)

                     if(matrix[y][x] == 0){
                         matrix[y][x] = 3;
                     }

          }
          for(let i = 0 ; i < bombCount; i++ ){
                  
            let x  = Math.floor(Math.random() * matrixSize)
            let y  = Math.floor(Math.random() * matrixSize)

                  if(matrix[y][x] == 0){
                      matrix[y][x] = 4;
                  }

       }


       return matrix ;     
}



let matrix = matrixGenerator(20,15,20,25,18);
console.log(matrix);

var side = 35;
var size = 20;

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var bombArr =[]


function setup(){
    frameRate(5)
     createCanvas(matrix[0].length * side, matrix.length * side);

       for(var y = 0 ; y < matrix.length ;y++){
            for(var x = 0; x < matrix[y].length;x++){
                           if(matrix[y][x] == 1){
                                var gr = new Grass(x,y)

                                grassArr.push(gr)
                           }else  if(matrix[y][x] == 2){
                              var grEat = new GrassEater(x,y)

                              grassEaterArr.push(grEat)
                         }else  if(matrix[y][x] == 3){
                              var pre = new Predator(x,y)

                              predatorArr.push(pre)
                         }else  if(matrix[y][x] == 4){
                            var boom = new Bomb(x,y)

                            bombArr.push(boom)
                       }
            }
       }
}


function AddCheese() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(size));
        let y = Math.floor(random(size));
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }

        }
    }
}
function AddMouse() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(size));
        let y = Math.floor(random(size));
        matrix[y][x] = 2;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }

        }
    }
}
function AddCat() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(size));
        let y = Math.floor(random(size));
        matrix[y][x] = 3;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                let utox = new Predator(x, y);
                predatorArr.push(utox);
            }

        }
    }
}

function AddDog() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(size));
        let y = Math.floor(random(size));
        matrix[y][x] = 4;

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                let bomb = new Bomb(x, y);
                bombArr.push(bomb);
            }

        }
    }
}



function draw(){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                var toBot = side - side * 0.2

                     if(matrix[y][x] == 1){
                        fill("white")
                        rect(x  * side ,y * side , side , side)
                        text('🧀', x * side, y * side + toBot);

                     }else if(matrix[y][x] == 2){
                         fill("yellow")
                     rect(x  * side ,y * side , side , side)
                     text('🐭', x * side, y * side + toBot);

                  }else if(matrix[y][x] == 3){
                    fill("red")
                    rect(x  * side ,y * side , side , side)
                    text('🐱', x * side, y * side + toBot);

             }else if(matrix[y][x] == 4){
                fill("blue")
                rect(x * side, y * side, side, side);
                text('🐶', x * side, y * side + toBot);
         }
             else {
                          fill("gray")
                        rect(x  * side ,y * side , side , side)

                     }
            }
       }

       for(var i in grassArr){
             grassArr[i].mul()
       }

       for (let j in grassEaterArr) {
          grassEaterArr[j].mul()
          grassEaterArr[j].eat()
      }

      for (let j in predatorArr) {
          predatorArr[j].mul()
          predatorArr[j].eat()
      }

      for (let j in bombArr) {
        bombArr[j].mul()
        bombArr[j].eat()
    }

}
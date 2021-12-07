export default function calculateMoveRobot( inputText, CardinalPoints, squaresIndex ){
    const squaresPosition = {
        0:{
            x: 0,
            y: 4
        },
        1:{
            x: 1,
            y: 4
        },
        2:{
            x: 2,
            y: 4
        },
        3:{
            x: 3,
            y: 4
        },
        4:{
            x: 4,
            y: 4
        },
        5:{
            x: 0,
            y: 3
        },
        6:{
            x: 1,
            y: 3
        },
        7:{
            x: 2,
            y: 3
        },
        8:{
            x: 3,
            y: 3
        },
        9:{
            x: 4,
            y: 3
        },
        10:{
            x: 0,
            y: 2
        },
        11:{
            x: 1,
            y: 2
        },
        12:{
            x: 2,
            y: 2
        },
        13:{
            x: 3,
            y: 2
        },
        14:{
            x: 4,
            y: 2
        },
        15:{
            x: 0,
            y: 1
        },
        16:{
            x: 1,
            y: 1
        },
        17:{
            x: 2,
            y: 1
        },
        18:{
            x: 3,
            y: 1
        },
        19:{
            x: 4,
            y: 1
        },
        20:{
            x: 0,
            y: 0
        },
        21:{
            x: 1,
            y: 0
        },
        22:{
            x: 2,
            y: 0
        },
        23:{
            x: 3,
            y: 0
        },
        24:{
            x: 4,
            y: 0
        },
    };
    let result;
    let calculateCardinalPoints = CardinalPoints;
    let axleX = squaresPosition[squaresIndex].x;
    let axleY = squaresPosition[squaresIndex].y;
    for (let i = 0; i < inputText.length; i++){
        if ((inputText[i] === 'm')){
            if (calculateCardinalPoints === 0){
                axleY += 1;
            }else
            if (calculateCardinalPoints === 1){
                axleX += 1;
            }else
            if (calculateCardinalPoints === 2){
                axleY -= 1;
            }else
            if (calculateCardinalPoints === 3){
                axleX -= 1;
            }
        }else
        if ((inputText[i] === 'l')){
            calculateCardinalPoints -= 1;
            if (calculateCardinalPoints < 0){
                calculateCardinalPoints = 3;
            }
        }else
        if ((inputText[i] === 'r')){
            calculateCardinalPoints += 1;
            if (calculateCardinalPoints > 3){
                calculateCardinalPoints = 0;
            }
        }else{
            result = null;
        }
    }
    if ((axleX < 0) || (axleX > 4) || (axleY < 0) ||(axleY > 4)){
        result = null;
    }else{
        Object.keys(squaresPosition).forEach((key) => {
            if ((squaresPosition[key].x === axleX) && (squaresPosition[key].y === axleY)){
                result = {key,calculateCardinalPoints};
            }
        });
    }
    return result;
}
import squaresPosition from './squaresPosition.json'
export default function calculateMoveRobot( inputText, CardinalPoints, squaresIndex ){
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
            result = false;
        }
    }
    if ((axleX < 0) || (axleX > 4) || (axleY < 0) ||(axleY > 4)){
        result = false;
    }else{
        Object.keys(squaresPosition).forEach((key) => {
            if ((squaresPosition[key].x === axleX) && (squaresPosition[key].y === axleY)){
                result = {key,calculateCardinalPoints};
            }
        });
    }
    return result;
}
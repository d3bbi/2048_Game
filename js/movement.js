export function moveRight(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (i % 4 === 0) {
            let first = squares[i].innerHTML;
            let second = squares[i + 1].innerHTML;
            let third = squares[i + 2].innerHTML;
            let fourth = squares[i + 3].innerHTML;

            let row = [
                parseInt(first),
                parseInt(second),
                parseInt(third),
                parseInt(fourth),
            ];

            // filrter squares with numbers and create an array
            let filteredRow = row.filter((num) => num);
            let countZeros = 4 - filteredRow.length; //check how many zeros are left in a row
            let zeros = Array(countZeros).fill(0);
            let newRow = zeros.concat(filteredRow); //concat the numbers

            squares[i].innerHTML = newRow[0];
            squares[i + 1].innerHTML = newRow[1];
            squares[i + 2].innerHTML = newRow[2];
            squares[i + 3].innerHTML = newRow[3];
        }
    }
}
export function moveLeft(squares) {
      for (let i = 0; i < squares.length; i++) {
        if (i % 4 === 0) {
          let first = squares[i].innerHTML;
          let second = squares[i + 1].innerHTML;
          let third = squares[i + 2].innerHTML;
          let fourth = squares[i + 3].innerHTML;
  
          let row = [
            parseInt(first),
            parseInt(second),
            parseInt(third),
            parseInt(fourth),
          ];
  
  
          // filrter squares with numbers and create an array
          let filteredRow = row.filter((num) => num);
          // console.log(filteredRow);
  
          let countZeros = 4 - filteredRow.length; //check how many zeros are left in a row
          let zeros = Array(countZeros).fill(0);
  
          let newRow = filteredRow.concat(zeros); //concat the numbers;
  
          squares[i].innerHTML = newRow[0];
          squares[i + 1].innerHTML = newRow[1];
          squares[i + 2].innerHTML = newRow[2];
          squares[i + 3].innerHTML = newRow[3];
        }
      }
    }

//MOVE DOWN
export  function moveDown(squares) {
    for (let i = 0; i < 4; i++) {
        let first = squares[i].innerHTML;
        let second = squares[i + 4].innerHTML;
        let third = squares[i + 8].innerHTML;
        let fourth = squares[i + 12].innerHTML;

        let row = [
          parseInt(first),
          parseInt(second),
          parseInt(third),
          parseInt(fourth),
        ];

        // filrter squares with numbers and create an array
        let filteredRow = row.filter((num) => num);

        let countZeros = 4 - filteredRow.length; //check how many zeros are left in a row
        let zeros = Array(countZeros).fill(0);

        let newRow = zeros.concat(filteredRow); //concat the numbers

        squares[i].innerHTML = newRow[0];
        squares[i + 4].innerHTML = newRow[1];
        squares[i + 8].innerHTML = newRow[2];
        squares[i + 12].innerHTML = newRow[3];
      
    }
  }

//MOVE UP
 export function moveUp(squares) {
        for (let i = 0; i < 4; i++) {
            let first = squares[i].innerHTML;
            let second = squares[i + 4].innerHTML;
            let third = squares[i + 8].innerHTML;
            let fourth = squares[i + 12].innerHTML;
    
            let row = [
              parseInt(first),
              parseInt(second),
              parseInt(third),
              parseInt(fourth),
            ];
    
    
            // filrter squares with numbers and create an array
            let filteredRow = row.filter((num) => num);
    
            let countZeros = 4 - filteredRow.length; //check how many zeros are left in a row
            let zeros = Array(countZeros).fill(0);
    
            let newRow = filteredRow.concat(zeros); //concat the numbers
    
            squares[i].innerHTML = newRow[0];
            squares[i + 4].innerHTML = newRow[1];
            squares[i + 8].innerHTML = newRow[2];
            squares[i + 12].innerHTML = newRow[3];
          
        }
      }

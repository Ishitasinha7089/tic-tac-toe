const lines = [
    [0, 1, 2],  //row1
    [3, 4, 5],  //row2
    [6, 7, 8],  //row3
    [0, 3, 6],  //column1
    [1, 4, 7],  //column2
    [2, 5, 8],  //column3
    [0, 4, 8],  //diagonal l->r
    [2, 4, 6]   //diagonal r->l
];

export function getWinner(squares) {

    for (let index = 0; index < lines.length; index++) {
        const [sq1, sq2, sq3] = lines[index]
        if (squares[sq1] && squares[sq1] === squares[sq2] && squares[sq1] === squares[sq3]){
            return squares[sq1];
        }
        
    }
    return null;
}
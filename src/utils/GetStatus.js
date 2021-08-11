export function getStatus(winner, token1, player1Name, player2Name, data, xIsNext){
    let status;
    let statusSpan;
    let winnerStyle = {
        color:"black"
    }
    
    if(winner){
        status = 'Winner is ';
        if(winner===token1){

            statusSpan = player1Name;
            const color = data.style1.borderColor;
            winnerStyle = {
                color: color.substring(0,color.length-1)+"Dark"+ color.substring(color.length-1, color.length)
            }
            return [status, statusSpan, winnerStyle]
             
            
        }
            statusSpan = player2Name;
            const color = data.style2.borderColor;
            winnerStyle = {
                color: color.substring(0,color.length-1)+"Dark"+ color.substring(color.length-1, color.length)
            }
             return [status, statusSpan, winnerStyle]
             
        
    }
    status =  'Next player is: ';
    statusSpan = (xIsNext ? player1Name : player2Name);

    return [status, statusSpan, null]

     
}
function calculatePassingScore(player){
    const yards = player.stats.passing.yards / 25
    const touchdown = player.stats.passing.touchdowns * 6
    const interception = player.stats.passing.interceptions * -3
    return yards + touchdown + interception



}

function calculateYardsRushing(player){
    const yards = player.stats.rushing.yards / 10
    const touchdown = player.stats.rushing.touchdowns * 6
    const fumble = player.stats.rushing.fumbles * -3
    return yards + touchdown + fumble

}
    

function calculateReturns(player){
    const returnTouchdown = player.stats.return.kickreturn.touchdowns * 6
    const returnYards = player.stats.return.kickreturn.yards / 15
    const returnFumble = player.stats.return.kickreturn.fumbles * -3
    const puntTouchdown = player.stats.return.puntreturn.touchdowns * 6
    const puntYards = player.stats.return.puntreturn.yards / 15
    const puntFumble = player.stats.return.puntreturn.fumbles * -3
    return returnYards + returnTouchdown + returnFumble + puntTouchdown + puntYards + puntFumble
}


function calculateReceiving(player){
    const receivingReception = player.stats.receiving.receptions 
    const receivingYards = player.stats.receiving.yards / 10
    const touchdown = player.stats.receiving.touchdowns * 6
    const fumble = player.stats.receiving.fumbles * -3
    return receivingReception + receivingYards + touchdown + fumble

}


        
            
        

    
function calculateScore(player) {
    switch (player.position){

        case "QB": 
    return calculatePassingScore(player)+
     calculateYardsRushing(player)

        case "RB":
        return calculateReturns(player)+
     calculateReceiving(player)+
    calculateYardsRushing(player)

        case "WR":
    return calculateReturns(player)+
     calculateReceiving(player)+
     calculateYardsRushing(player)

        case "TE":
    return calculateReceiving (player)
    
    default: 
    return 0
}
}

module.exports = calculateScore
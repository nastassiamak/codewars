// Finish the uefaEuro2016() function so it return string just like in the examples below:
//
//     uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


function uefaEuro2016(teams, scores){
    const team1 = teams[0];
    const team2 = teams[1];
    const score1 = scores[0];
    const score2 = scores[1];

    // Проверяем, кто выиграл или была ли ничья
    if (score1 > score2) {
        return `At match ${team1} - ${team2}, ${team1} won!`;
    } else if (score1 < score2) {
        return `At match ${team1} - ${team2}, ${team2} won!`;
    } else {
        return `At match ${team1} - ${team2}, teams played draw.`;
    }
}


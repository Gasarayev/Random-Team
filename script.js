document.getElementById('teamForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const team1Name = document.getElementById('team1Name').value.trim();
    const team2Name = document.getElementById('team2Name').value.trim();
    const playersInput = document.getElementById('players').value.trim();
    const players = playersInput.split(',').map(player => player.trim());

    if (players.length < 2) {
        alert('En az iki oyuncu yazmalisiz');
        return;
    }

   
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    
    shuffle(players);


    const teamSize = Math.floor(players.length / 2);
    const team1 = players.slice(0, teamSize);
    const team2 = players.slice(teamSize);


    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>${team1Name}</h2>
        <ul>${team1.map(player => `<li>${player}</li>`).join('')}</ul>
        <h2>${team2Name}</h2>
        <ul>${team2.map(player => `<li>${player}</li>`).join('')}</ul>
    `;
});
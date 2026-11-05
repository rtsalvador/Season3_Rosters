fetch('./rosters.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('rosters-container');
    data.teams.forEach(team => {
      const teamSection = document.createElement('div');
      teamSection.innerHTML = `
        <h2>${team.name}</h2>
        <ul>
          ${team.players.map(p => `<li>#${p.number} - ${p.name} (${p.position}, ${p.height})</li>`).join('')}
        </ul>
      `;
      container.appendChild(teamSection);
    });
  });
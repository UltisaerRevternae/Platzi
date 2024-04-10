const POINTS_PER_WIN = 3;

function calculatePoints(competitions, results) {
  const points = {};

  for (let i = 0; i < results.length; i++) {
    const winner = competitions[i][results[i] === 0 ? 1 : 0];
    points[winner] = (points[winner] || 0) + POINTS_PER_WIN;
  
  }
  return points;

}

function printResults(points) {
  const sortedWinners = Object.entries(points).sort((a, b) => b[1] - a[1]);

  sortedWinners.forEach(([team, score], index) => {
    const position = index + 1;
    const message = position === 1 
      ? `The winner is ${team} with ${score} Points`
      : `The participant ${position} place: ${team} with ${score} Points`;

    console.log(message);
  });
}

function winnerRoundRobin(competitions, results) {
  if (competitions.length !== results.length) {
    console.log("Error: The number of competitions and results do not match.");
    return;
  }

  const points = calculatePoints(competitions, results);
  printResults(points);
}

const competitions = [
  ["JavaScript", "C#"],
  ["C#", "Python"],
  ["Python", "JavaScript"],
];
const results = [0, 0, 1];

winnerRoundRobin(competitions, results);

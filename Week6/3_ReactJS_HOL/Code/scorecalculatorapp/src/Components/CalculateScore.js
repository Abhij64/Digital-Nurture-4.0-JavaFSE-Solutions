import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const percentage = (total / goal) * 100;

  return (
    <div className="score-container">
      <h2 className="title">Student Details:</h2>
      <p><strong className="label name-label">Name:</strong> <span className="value name">{name}</span></p>
      <p><strong className="label school-label">School:</strong> <span className="value school">{school}</span></p>
      <p><strong className="label total-label">Total:</strong> <span className="value total">{total}Marks</span></p>
      <p><strong className="label score-label">Score:</strong> <span className="value score">{percentage.toFixed(2)}%</span></p>
    </div>
  );
}

export default CalculateScore;

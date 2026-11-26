-- =============================================
-- Training Journal - Physical Data Model (PostgreSQL)
-- =============================================

DROP TABLE IF EXISTS workout_exercises;
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS exercises;

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  muscle_group VARCHAR(50)
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  workout_date DATE NOT NULL DEFAULT CURRENT_DATE,
  notes TEXT
);

CREATE TABLE workout_exercises (
  workout_id INT NOT NULL REFERENCES workouts(id) ON DELETE CASCADE,
  exercise_id INT NOT NULL REFERENCES exercises(id) ON DELETE CASCADE,
  sets INT NOT NULL CHECK (sets > 0),
  reps INT NOT NULL CHECK (reps > 0),
  weight NUMERIC(5,2) CHECK (weight >= 0),
  PRIMARY KEY (workout_id, exercise_id)
);

-- Seed data
INSERT INTO exercises (name, muscle_group) VALUES
  ('Bench press', 'Chest'),
  ('Squat', 'Legs'),
  ('Curl', 'Arms'),
  ('Pull-up', 'Back');

INSERT INTO workouts (workout_date, notes) VALUES
  ('2026-11-23', 'First session');

INSERT INTO workout_exercises (workout_id, exercise_id, sets, reps, weight) VALUES
  (1, 1, 4, 8, 60.00),
  (1, 2, 4, 10, 80.00);

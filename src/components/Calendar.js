import React, { useState } from "react";

import TaskBlock from "./TaskBlock";

import "./Calendar.css";

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const HOURS = fillHours();
const sampleTask = {
  wake: 390,
  sleep: 1320,
  mealDuration: 30,
  mealBuffer: 15,
  exerciseDuration: 60,
  exerciseBuffer: 15,
  possibleSchedule: [
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
    [
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [390, 690, 1035],
        exercise: [495],
      },
      {
        busy: [590, 660, 740, 1020, 1100, 1220],
        meals: [435, 690, 1035],
        exercise: [1235],
      },
    ],
  ],
};

const formatTask = sampleTask.possibleSchedule.map(day => [
  {
    meals: day[0].meals.map(meal => ({ start: meal, end: meal + 15 })),
    exercise: day[0].exercise.map(exercise => ({
      start: exercise,
      end: exercise + 30,
    })),
    busy: day[0].busy
      .map((element, index) =>
        index % 2 === 0 ? { start: element, end: day[0].busy[index + 1] } : 0
      )
      .filter(time => time !== 0),
  },
]);

console.log(formatTask);

export default function Calendar() {
  const [weekDays, setWeekDays] = useState(getWeekDays());
  const [events, setEvents] = useState(formatTask);

  const handleChange = ({ target }) => {
    const { value } = target;

    switch (Number(value)) {
      case 1:
        setWeekDays(getDay());
        setEvents(sampleTask.possibleSchedule[new Date().getDay]);
        break;
      case 3:
        setWeekDays(getThreeDay());
        break;
      case 7:
        setWeekDays(getWeekDays());
        break;
      default:
        break;
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__nav__header">
        <select onChange={handleChange} defaultValue={7}>
          <option value={1}>Day</option>
          <option value={3}>3 Day</option>
          <option value={7}>Week</option>
        </select>
      </div>
      <div className="calendar__day__header">
        <div className="calendar__day__gap" />
        {weekDays.map(renderDays, weekDays.length)}
      </div>
      <div className="calendar__time__container">
        <div className="calendar__time__column">{HOURS.map(renderHours)}</div>
        {weekDays.map((x, index) => (
          // columns based of the number of days being shown
          <div
            key={index}
            className="calendar__time__column"
            style={{ flex: `0 0 calc((100% - 3rem) / ${weekDays.length})` }}
          >
            {HOURS.map((x, index) => (
              <div key={index} className="calendar__time__row">
                <span />
              </div>
            ))}

            {events[index][0].meals.map((block, index) => (
              <TaskBlock key={index} type="Food" start={block.start} end={block.end} />
            ))}
            {events[index][0].exercise.map((block, index) => (
              <TaskBlock
                key={index}
                type="Exercise"
                start={block.start}
                end={block.end}
              />
            ))}
            {events[index][0].busy.map((block, index) => (
              <TaskBlock key={index} type="Work" start={block.start} end={block.end} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function renderDays({ day, date, isToday }, index) {
  const nColumn = Number(this);
  return (
    <div
      key={index}
      className={`calendar__day__column ${isToday ? "calendar__day__column--today" : ""}`}
      style={{ flex: `0 0 calc((100% - 3rem) / ${nColumn})` }}
    >
      <span>{date}</span>
      <span>{day}</span>
    </div>
  );
}

function renderHours({ timeString }, index) {
  return (
    <div key={index} className="calendar__time__row">
      <div className="calendar__time__gap">{timeString}</div>
    </div>
  );
}

/**
 * The following functions will return an array
 * of day objects defined below
 *
 * {
 *   day: number,
 *   isToday: boolean
 * }
 */

function getDay() {
  const d = new Date();

  return [
    {
      day: DAYS[d.getDay()],
      date: d.getDate(),
      isToday: true,
    },
  ];
}

function getThreeDay() {
  const d = new Date();
  const days = [];

  for (let i = 0; i < 3; i++) {
    days.push({
      day: DAYS[d.getDay()],
      date: d.getDate(),
      isToday: i === 0,
    });
    d.setDate(d.getDate() + 1);
  }

  return days;
}

function getWeekDays() {
  const d = new Date();
  const today = d.getDay();
  const days = [];

  // set the date to the beginning of the week i.e Sunday
  d.setDate(d.getDate() - d.getDay());

  for (let i = 0; i < 7; i++) {
    days.push({
      day: DAYS[d.getDay()],
      date: d.getDate(),
      isToday: i === today,
    });
    d.setDate(d.getDate() + 1);
  }

  return days;
}

/**
 * Aux Functions
 */

function fillHours() {
  const hours = [{ time: 12, timeString: "12a" }];
  for (let j = 0; j < 2; j++) {
    for (let i = 1; i <= 12 - j; i++)
      hours.push({ time: i, timeString: `${i}${j === 0 ? "a" : "p"}` });
  }
  return hours;
}

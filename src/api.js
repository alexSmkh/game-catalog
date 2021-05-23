/* eslint-disable no-unused-vars */
const apiKey = process.env.REACT_APP_API_KEY;
const keyParam = `key=${apiKey}&`;
const baseURL = 'https://api.rawg.io/api/';

const normilizeNumber = (num) => {
  if (num < 10) return `0${num}`;
  return num;
};

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return normilizeNumber(month);
};

const getCurrentDay = () => {
  const currentDay = new Date().getDate();
  return normilizeNumber(currentDay);
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// eslint-disable-next-line import/prefer-default-export
export const popularGamesURL = () => `${baseURL}games?${keyParam}dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`;

export const upcomingGamesURL = () => `${baseURL}games?${keyParam}dates=${currentDate},${nextYear}&ordering=-added`;

export const newGamesURL = () => `${baseURL}games?${keyParam}dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const gameDetailsURL = (gameID) => `${baseURL}games/${gameID}?${keyParam}`;

export const gameScreenshotsURL = (gameID) => `${baseURL}games/${gameID}/screenshots?${keyParam}`;

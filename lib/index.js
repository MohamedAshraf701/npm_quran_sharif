// index.js
const { data } = require("./quran_sharif_arabic");

function getAllSurah() {
  // Parse the Quran data from JSON using the Arabic data model
  return data.surahs;
}

function getAllParahs(){
  return data.parahs;
}

function getSurahById(id) {
  // Parse the Quran data from JSON using the Arabic data model
  for (let i = 0; i < data.surahs.length; i++) {
    // Check if the current surah matches the provided ID
    if (data.surahs[i].number === id) {
      return data.surahs[i];
    }
  }
  return null; // Return null if the surah is not found
}

function getSurahName() {
  // Parse the Quran data from JSON using the Arabic data model
  const names = [];
  for (let i = 0; i < data.surahs.length; i++) {
    // Add the name of each surah to the list
    names.push(data.surahs[i].name);
  }
  return names;
}

function getSurahByRevelationType(isMakki) {
  // Parse the Quran data from JSON using the Arabic data model
  // Filter the surahs based on the provided revelation type (Makki or Madani)
  return data.surahs.filter(element => element.revelationType === (isMakki ? "Meccan" : "Medinan"));
}

function getJuz(id) {
  // Parse the Quran data from JSON using the Arabic data model
  const ayahs = [];
  for (let i = 0; i < data.surahs.length; i++) {
    for (let j = 0; j < data.surahs[i].ayahs.length; j++) {
      // Check if the current ayah belongs to the provided Juz ID
      if (data.surahs[i].ayahs[j].juz === id) {
        // Add the ayah to the list
        ayahs.push(data.surahs[i].ayahs[j]);
      }
    }
  }
  return ayahs;
}

module.exports = {
  getAllSurah,
  getAllParahs,
  getSurahById,
  getSurahName,
  getSurahByRevelationType,
  getJuz
};

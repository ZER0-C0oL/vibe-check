/* ===================================
   Party Games Hub – Utility Functions
   =================================== */

/**
 * Shuffle an array in place (Fisher-Yates).
 * @param {Array} array
 * @returns {Array}
 */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get a random item from an array.
 * @param {Array} array
 * @returns {*}
 */
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Save a value to localStorage (JSON-serialized).
 * @param {string} key
 * @param {*} value
 */
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Read a value from localStorage (JSON-parsed).
 * @param {string} key
 * @returns {*}
 */
function readFromStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

/**
 * Navigate to a given path.
 * @param {string} path
 */
function navigateTo(path) {
  window.location.href = path;
}

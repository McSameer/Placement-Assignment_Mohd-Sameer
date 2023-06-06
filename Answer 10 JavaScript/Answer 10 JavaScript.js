// Function to simulate searching based on user input
const search = (query) => {
  // Perform search operation here
  console.log(`Searching for: ${query}`);
  // ...
};

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// Debounced version of the search function
const debouncedSearch = debounce(search, 300);

// Event listener for input changes
const input = document.getElementById('search-input');
input.addEventListener('input', (event) => {
  const query = event.target.value;
  debouncedSearch(query);
});

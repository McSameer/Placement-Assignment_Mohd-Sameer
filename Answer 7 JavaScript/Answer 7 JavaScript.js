function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Sample data';
      if (data) {
        resolve(data); // Fulfilled state
      } else {
        reject('Error occurred'); // Rejected state
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Data:', data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

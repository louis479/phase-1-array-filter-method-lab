// Code your solution here
const drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
  ];
  
// Function 1: findMatching
function findMatching(drivers, name) {
    // Filter drivers whose names match the input name (case-insensitive)
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, letters) {
    // Filter drivers whose names start with the given letters
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function 3: matchName
  function matchName(drivers, name) {
    // Filter driver objects where the "name" property matches the input name
    return drivers.filter(driver => driver.name === name);
  }

  // Test findMatching
  console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette'], 'bobby'));
  // Output: ['Bobby']
  
  // Test fuzzyMatch
  console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette'], 'Sa'));
  // Output: ['Sammy', 'Sally']
  
  // Test matchName
  console.log(matchName(drivers, 'Bobby'));
  // Output: [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
  

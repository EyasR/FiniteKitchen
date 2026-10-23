let currentBowl = [];
let discoveredIngredients = []; 

// We upgraded recipes to have both an 'emoji' and a 'name'
const recipes = {
  // Add your recipes here! Example:
  // "🍞+🧀+🍅": { emoji: "🍕", name: "Pizza" }
};

function addIngredient(emoji) {
  // TODO: Check if the bowl has less than 3 items
  // TODO: If so, add the emoji to the currentBowl array
  // TODO: Call updateUI() to refresh the screen
}

function updateUI() {
  // TODO: Update the text of 'slot1', 'slot2', and 'slot3' in the HTML
  // If an item exists in the currentBowl at that index, show it. Otherwise, show a "❓"
}

function mix() {
  // TODO: Check if currentBowl has exactly 3 ingredients. If not, show a warning and stop.
  
  // TODO: Sort the items in currentBowl alphabetically and join them into a single string
  // TODO: Loop through the recipes object to find a match for the sorted string
  
  // TODO: If a match is found:
  //   1. Show a success message with the new emoji and name
  //   2. Check if it's a new discovery (not in discoveredIngredients)
  //   3. If new, add it to discoveredIngredients, reveal the crafted section, and create a new button
  //   4. Clear the bowl so they can keep playing
  
  // TODO: If no match is found, show a "Gross! Garbage" message
}

function clearBowl(resetText = true) {
  // TODO: Empty the currentBowl array
  // TODO: Call updateUI() to refresh the slots
  // TODO: If resetText is true, reset the result text back to "Waiting for ingredients..."
}
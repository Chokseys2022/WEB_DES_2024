const gameState = {
    currentRoom: "start",
    inventory: [],
    gameActive: true,
  };
  
  const gameMap = {
    start: {
      description: "You are in a dark, cold room with two doors. One leads to the north and another to the east.",
      directions: { north: "library", east: "kitchen" },
    },
    library: {
      description: "You find yourself surrounded by shelves of ancient books. There is a door to the south.",
      directions: { south: "start" },
      item: "ancient book",
    },
    kitchen: {
      description: "A seemingly abandoned kitchen. There’s a door to the west and a strange, glowing portal that seems to lead nowhere.",
      directions: { west: "start", portal: "secretRoom" },
      item: "rusty key",
    },
    secretRoom: {
      description: "You step through the portal and enter a secret room filled with treasure.",
      directions: { portal: "kitchen" },
    },
  };
  
  function showLocation() {
    const location = gameMap[gameState.currentRoom];
    return `${location.description}${location.item ? ` You see a ${location.item} here.` : ""}`;
  }
  
  function handleCommand(input) {
    const location = gameMap[gameState.currentRoom];
    const commands = input.trim().toLowerCase();
  
    if (commands === "quit") {
      gameState.gameActive = false;
      return "Thanks for playing! Refresh the page to restart the game.";
    }
  
    if (commands in location.directions) {
      gameState.currentRoom = location.directions[commands];
      return showLocation();
    }
  
    if (commands === "take" && location.item) {
      gameState.inventory.push(location.item);
      const itemTaken = location.item;
      delete location.item;
      return `You took the ${itemTaken}.`;
    }
  
    if (commands === "inventory") {
      return `You have the following items: ${gameState.inventory.length > 0 ? gameState.inventory.join(", ") : "nothing"}`;
    }
  
    if (commands === "help") {
      return "Available commands: north, south, east, west, portal, take, inventory, help, quit.";
    }
  
    return "Invalid command.";
  }
  
  function updateOutput(message) {
    const outputDiv = document.getElementById("game-output");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    outputDiv.appendChild(newMessage);
    outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll to the latest message
  }
  
  // Attach event listener for user input
  document.getElementById("submit-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input");
    const input = userInput.value;
    userInput.value = ""; // Clear the input field
  
    if (gameState.gameActive) {
      const response = handleCommand(input);
      updateOutput(response);
    }
  });
  
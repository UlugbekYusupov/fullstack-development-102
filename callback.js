function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); 
}

function sayGoodbye() {
    console.log("Goodbye, have a great day!");
}


greet("John", sayGoodbye);

// asinxron callback

console.log("Starting the process...");

function fetchData(callback) {
    // Simulating a network request with 2 seconds delay
    setTimeout(() => {
        const data = { id: 1, product: "Laptop" };
        console.log("Data retrieved successfully.");
        callback(data); 
    }, 2000);
}

function displayResult(result) {
    console.log("Result: " + result.product);
}

fetchData(displayResult);


// 4. Handling "Callback Hell"


getUser(1, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            console.log(comments);
        });
    });
});


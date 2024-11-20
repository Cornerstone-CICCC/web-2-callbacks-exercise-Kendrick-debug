const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstname) => {
  // your code here
  if (err) {
    console.log(err);
  } else {
    fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
      // your code here
      if (err) {
        console.log(err);
      } else {
        fs.readFile("./age.txt", "utf-8", (err, age) => {
          // your code here
          if (err) {
            console.log(err);
          } else {
            fs.readFile("./hobbies.txt", "utf-8", (err, hobbies) => {
              //your code here
              if (err) {
                console.log(err);
              } else {
                hobbies = JSON.parse(hobbies);
                console.log(
                  `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
                  // console.log(hobbies[0])
                );
              }
            });
          }
        });
      }
    });
  }
});

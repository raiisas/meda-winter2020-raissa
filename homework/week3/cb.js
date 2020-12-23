const fs = require('fs');

const appUser = {

    "age": 6,
    "sport": "Tennis",
    "league": "Allstars",
    "score": []
}; 

const appData = JSON.stringify(appUser, null, 2);

fs.writeFileSync('app.json', appData, (err, data) => {
    if (err) {
        console.log("File not saved.");
    } else {
        let parsedApp = fs.readFileSync("app.json", "utf-8");
        parsedApp = JSON.parse(parsedApp + appUser.push());
    }
});
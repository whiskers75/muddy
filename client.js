// Muddy
var net = require("net");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('');
rl.write("Welcome to Muddy! Connecting to AarchonMUD...");
var client = net.createConnection({host: "aarchonmud.com", port: 7000}, function() {
    rl.write('Client connected.');
});
client.on('data', function(data) {
    process.stdout.write(data.toString());
});
client.on('end', function() {
    rl.write('Disconnected.');
    process.exit(0);
});
process.stdout.on('data', function(data) {
    client.write(data);
});
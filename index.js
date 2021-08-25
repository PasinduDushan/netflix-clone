const express = require('express');
let app = express();
const config = require('./config.json');
const PORT = config.PORT || 5000

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
})

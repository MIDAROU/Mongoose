//IMPORTS
const express = require("express");
const ConnectDB = require("./Config/Connect");
const Router = require("./Routes/ContactRoute");
const app = express();

//PORT
const PORT = 5000;

//MIDDLEWARE
app.use(express.json());
app.use("/contact", Router);

//DB CONNECTION
ConnectDB();

//SERVER LISTEN
app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}/`);
});

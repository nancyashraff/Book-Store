import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "FrontEnd")));

app.use(express.json());
app.use(routes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "FrontEnd", "notfound.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
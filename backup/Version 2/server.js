// server.js
const express = require("express");
const { google } = require("googleapis");
const app = express();
const port = 3000;

// Set up Google API client
const SCOPES = ["https://www.googleapis.com/auth/forms"];
const KEYFILEPATH = "path/to/your/service_account.json";
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const forms = google.forms({ version: "v1", auth });

app.get("/getFormData", async (req, res) => {
  try {
    const response = await forms.forms.get({
      formId: "your-form-id", // Replace with your form ID
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retrieving form data");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

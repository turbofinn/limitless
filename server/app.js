const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 5000;
app.use(express.json())
app.use(cors());

app.post('/submit-form', async (req, res) => {
    const { First_Name, Last_Name, Email, Phone, Description, Fax} = req.body;
    try {
        const response = await axios.post('https://www.zohoapis.in/crm/v6/Leads', {
            "data": [
                {
                    Last_Name: First_Name,
                    First_Name: Last_Name,
                    Email: Email,
                    Phone: Phone,
                    Description: Description,
                    Fax:Fax
                }
            ],
            trigger: ["approval", "workflow", "blueprint"]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Zoho-oauthtoken 1000.08afc365ff0a9a410766b6817faf459e.9750d3c2f87eee8b9879837260d2a27a'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log("server is running successfully");
})

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const PORT = 5000;
app.use(express.json())
app.use(cors());
const moment = require("moment");
app.post('/submit-form', async (req, res) => {
    const { First_Name, Last_Name, Email, Phone, Description, packages } = req.body;

    let accessToken = '';
    let lastRefreshTime = null;


    async function refreshToken() {
        try {
            const response = await axios.post("https://accounts.zoho.in/oauth/v2/token", null, {
                params: {
                    refresh_token: '1000.7bf3d7b0d7410fb79d8fc5dedb949666.af1e457ee4460401b1c0ab86cc70f988',
                    client_id: '1000.IYC4P1YTFS3DS6MSZLAU7SRTX5UO3K',
                    client_secret: '1bfaa5d08fa85e6f793e318113c750e6a6a966834b',
                    grant_type: 'refresh_token'
                }
            });
            accessToken = response.data.access_token;
            console.log('Token refreshed:', accessToken);
            // console.log('response:', response);
            lastRefreshTime = Date.now();
        } catch (error) {
            console.error('Error refreshing token:', error.message);
        }
    }

    async function sendFormDataToZoho(formData) {
        if (!accessToken || lastRefreshTime === null || Date.now() - lastRefreshTime > 3600000) {
            await refreshToken();
        } 
            try {
                const response = await axios.post('https://www.zohoapis.in/crm/v6/Leads', {
                    "data": [
                        {
                            Last_Name:Last_Name,
                            First_Name: First_Name,
                            Email: Email,
                            Phone: Phone,
                            Query: Description,
                            Package_Details: packages
                        }
                    ],
                    trigger: ["approval", "workflow", "blueprint"]
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Zoho-oauthtoken ${accessToken}`
                    }
                });
                res.json({ code: 1001 });
                console.log("response",response);
            } catch (error) {
                console.error('Error:', error.message);
                res.status(500).json({ error: 'An error occurred' });
            }
    }



    sendFormDataToZoho();

    // if (refreshTime === null || refreshTime === undefined || refreshTime === '' || timeDifferenceMinutes >= 60) {
    // res.cookie("refreshTime", currentTime.toString());
    // console.log("oif");
    // console.log('refreshTime', refreshTime);
    // console.log('timediff', timeDifferenceMinutes);
    // const resp = await axios.post("https://accounts.zoho.in/oauth/v2/token", null, {
    //     params: {
    //         refresh_token: '1000.311b428e5ac36f10b86c6c33ccb58523.67e2a1ff4c4434f6c9a1b7d8d6934524',
    //         client_id: '1000.XM24EDJT3M7IKE26DVJRS2HIHQ6NPT',
    //         client_secret: '51afd6d9dff8b6c2941d0a1825e735f1029de6f154',
    //         grant_type: 'refresh_token'
    //     }
    // });
    // access_token = resp.data.access_token;
    // res.cookie("access_token", access_token);
    // console.log("access_token", access_token);
    // } 





    // else {
    //     access_token = req.cookies.access_token;
    //     console.log("else");

    //     try {
    // const response = await axios.post('https://www.zohoapis.in/crm/v6/Leads', {
    //     "data": [
    //         {
    //             Last_Name: First_Name,
    //             First_Name: Last_Name,
    //             Email: Email,
    //             Phone: Phone,
    //             Description: Description,
    //             Fax: Fax
    //         }
    //     ],
    //     trigger: ["approval", "workflow", "blueprint"]
    // }, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Zoho-oauthtoken ${access_token}`
    //     }
    // });
    //             res.json({ code: 1001 });
    //         } catch (error) {
    //             console.error('Error:', error.message);
    //             res.status(500).json({ error: 'An error occurred' });
    //         }
    //     }

});

app.listen(PORT, () => {
    console.log("server is running successfully");
})

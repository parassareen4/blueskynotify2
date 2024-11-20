const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const BLUESKY_API_BASE = 'https://bsky.social';

// Hardcoded credentials for multiple users
const users = [

    {
        username: "state-farm.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "colgate-palmolive.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "drop-box.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "universal-pictures.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "cvs-health.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "under-armour.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "planet-fitness.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "way-fair.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "old-navy.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "southwest-airlines.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "general-motors.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "dell-technologies.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "trader-joes.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "dall-e.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "runway-ml.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "mid-journey.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "github-copilot.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "notionai.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "grammarlyai.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "zapier-ai.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "e-bay.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "sonyplaystations.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "epic-game.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "air-bnb.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "gpt-4.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "i-b-m.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "adobe-photoshop.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "chatgpt-4o.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "sales-force.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "azureai.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }, {
        username: "valinsontos@hotmail.com",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "shoprite.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "therealpopefrancis.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "thenewyorktimes.bsky.social",
        password: "Pye34#434",
        accessJwt: null, 
        refreshJwt: null, 
    },
    {
        username: "dominospizzas.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },
    {
        username: "home-depot.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },
    {
        username: "victorias-secret.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "pix11news.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "dallas-cowboys.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    }
   
];

// Function to get a new session token using username and password
async function getNewToken(username, password) {
    try {
        const response = await axios.post(`${BLUESKY_API_BASE}/xrpc/com.atproto.server.createSession`, {
            identifier: username,
            password: password,
        });
        console.log(`New tokens for ${username}:`, response.data);
        return {
            accessJwt: response.data.accessJwt,
            refreshJwt: response.data.refreshJwt,
        };
    } catch (error) {
        console.error(`Error during login for ${username}:`, error.response?.data || error.message);
        throw new Error('Failed to get new token');
    }
}


// Function to refresh the session token
async function refreshToken(refreshJwt) {
    try {
        const response = await axios.post(`${BLUESKY_API_BASE}/xrpc/com.atproto.server.refreshSession`, null, {
            headers: {
                Authorization: `Bearer ${refreshJwt}`,
            },
        });
        console.log(`Refreshed token:`, response.data);
        return {
            accessJwt: response.data.accessJwt,
            refreshJwt: response.data.refreshJwt,
        };
    } catch (error) {
        console.error('Error refreshing token:', error.response?.data || error.message);
        throw new Error('Failed to refresh token');
    }
}


// Function to fetch notifications using the current session token
async function fetchNotifications(accessJwt) {
    try {
        const response = await axios.get(`${BLUESKY_API_BASE}/xrpc/app.bsky.notification.listNotifications`, {
            headers: {
                Authorization: `Bearer ${accessJwt}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error.message);

        // Return an indication that the token might need refreshing
        if (error.response && error.response.data.error === "ExpiredToken") {
            return { expiredToken: true };
        }

        throw new Error('Failed to fetch notifications');
    }
}

// Fetch notifications for all users
async function fetchNotificationsForAllUsers() {
    const notificationsForAllUsers = {};

    for (const user of users) {
        try {
            // Ensure user has a valid token
            if (!user.accessJwt || !user.refreshJwt) {
                const tokens = await getNewToken(user.username, user.password);
                user.accessJwt = tokens.accessJwt;
                user.refreshJwt = tokens.refreshJwt;
            }

            // Fetch notifications
            let notifications = await fetchNotifications(user.accessJwt);

            // If the token is expired, refresh and retry
            if (notifications?.expiredToken) {
                console.log(`Token expired for ${user.username}. Refreshing token...`);
                const tokens = await refreshToken(user.refreshJwt);
                user.accessJwt = tokens.accessJwt;
                user.refreshJwt = tokens.refreshJwt;
                notifications = await fetchNotifications(user.accessJwt);
            }

            // Store notifications in the result
            notificationsForAllUsers[user.username] = notifications?.notifications || [];
        } catch (error) {
            console.error(`Failed to fetch notifications for ${user.username}: ${error.message}`);
            notificationsForAllUsers[user.username] = { error: error.message };
        }
    }

    return notificationsForAllUsers;
}

// API endpoint for notifications
app.get('/api/notifications', async (req, res) => {
    try {
        const notifications = await fetchNotificationsForAllUsers();
        res.json(notifications);
    } catch (error) {
        console.error('Error in /api/notifications:', error.message);
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

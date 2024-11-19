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
        username: "starbuckscoffee.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },
    {
        username: "time-magazine.bsky.social",
        password: "parassareen1",
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
        username: "ben-n-jerrys.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
    //     username: "delta-air-lines.bsky.social",
    //     password: "parassareen1",
    //     accessJwt: null, 
    //     refreshJwt: null, 
    // },{
        username: "buzzfeeds-news.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "spotify-music.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "newschannel5.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "fox-17.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "daily-news.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "abc13houston.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "hollywood-reporter.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
    //     username: "apple-services.bsky.social",
    //     password: "parassareen1",
    //     accessJwt: null, 
    //     refreshJwt: null, 
    // },{
        username: "nbc-latestnews.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "fed-ex.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "amazon-delivery.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "mcdonaldscorp.bsky.social",
        password: "parassareen",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "themicrosoft.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "redlobsters.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "unitedparcelservic.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "chipotlegrill.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "newyork-1.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "the-chicagotribune.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "usatodaynews.bsky.social",
        password: "parassareen1",
        accessJwt: null, 
        refreshJwt: null, 
    },{
    //     username: "longjohnsilvers.bsky.social",
    //     password: "Pye34#434",
    //     accessJwt: null, 
    //     refreshJwt: null, 
    // },{
        username: "costcocorp.bsky.social",
        password: "Pye34#434",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "dollargeneral.bsky.social",
        password: "Pye34#434",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "spacexcorp.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "teslainc.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "temuchina.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "netflixsupport.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "verizonsupport.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "walmartshopping.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "targetsupport.bsky.social",
        password: "oute34#434!!",
        accessJwt: null, 
        refreshJwt: null, 
    },{
        username: "losangelestimes.bsky.social",
        password: "Pye34#434",
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

import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [notificationsData, setNotificationsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [seenNotifications, setSeenNotifications] = useState([]);

    // Fetch notifications from the backend
    useEffect(() => {
        async function fetchNotifications() {
            try {
                const response = await fetch('https://blueskynotify2-oc1u.onrender.com/api/notifications');
                if (!response.ok) {
                    throw new Error('Failed to fetch notifications');
                }
                const data = await response.json();
                setNotificationsData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchNotifications();
    }, []);

    // Mark notification as seen
    const markAsSeen = (username, notificationId) => {
        setSeenNotifications((prevSeen) => [...prevSeen, { username, id: notificationId }]);
    };

    // Check if a notification is seen
    const isNotificationSeen = (username, notificationId) =>
        seenNotifications.some((notif) => notif.username === username && notif.id === notificationId);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    // Flatten and sort all notifications by timestamp
    const allNotifications = Object.keys(notificationsData)
        .flatMap((username) =>
            (notificationsData[username] || []).map((notification) => ({
                ...notification,
                username,
            }))
        )
        .filter(
            (notification) =>
                notification.reason !== 'follow' &&
                notification.reason !== 'like' &&
                !isNotificationSeen(notification.username, notification.cid)
        )
        .sort(
            (a, b) =>
                new Date(b.record?.createdAt).getTime() - new Date(a.record?.createdAt).getTime()
        );

    return (
        <div className="app">
            <h1>Notifications</h1>
            {allNotifications.length === 0 ? (
                <p>No relevant notifications</p>
            ) : (
                <ul className="notification-list">
                    {allNotifications.map((notification) => (
                        <li key={notification.cid} className="notification-item">
                            <div className="notification-author">
                                <img
                                    src={notification.author?.avatar || 'placeholder.jpg'}
                                    alt={notification.author?.displayName || 'Author'}
                                    className="avatar"
                                />
                                <div className="author-details">
                                    <strong>{notification.author?.displayName}</strong>
                                    <p>{notification.author?.description}</p>
                                    <small>{`From: ${notification.username}`}</small>
                                </div>
                            </div>
                            <div className="notification-content">
                                <p>{notification.record?.text}</p>
                                <span className="notification-reason">
                                    Reason: {notification.reason}
                                </span>
                                <span className="notification-date">
                                    {new Date(notification.record?.createdAt).toLocaleString()}
                                </span>
                                <button
                                    className="mark-as-seen-btn"
                                    onClick={() =>
                                        markAsSeen(notification.username, notification.cid)
                                    }
                                >
                                    Mark as Seen
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;

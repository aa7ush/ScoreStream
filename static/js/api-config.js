/**
 * api-config.js - Centralized configuration for the API URL.
 */

const API_CONFIG = {
    // During local development, this points to your local Flask server.
    // When deploying, replace 'localhost:5000' with your Render backend URL.
    BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : '/api'
};

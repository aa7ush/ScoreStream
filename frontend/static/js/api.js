/**
 * api.js - Centralized API calls for the Sportylytics frontend.
 * Uses API_CONFIG from api-config.js.
 */

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (e) {
        console.error("Fetch error:", e);
        return null;
    }
}

// Global config singleton
let siteConfig = null;

async function getSiteConfig() {
    if (siteConfig) return siteConfig;
    siteConfig = await fetchData('/init');
    return siteConfig;
}

/**
 * api.js - Centralized API calls for the Sportylytics frontend.
 * Uses API_CONFIG from api-config.js.
 */

async function fetchData(endpoint) {
    try {
        const url = `${API_CONFIG.BASE_URL}${endpoint}`;
        console.log(`[API] Fetching: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`[API] HTTP Error ${response.status} for ${url}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`[API] Success for ${url}`, data);
        return data;
    } catch (e) {
        console.error("[API] Fetch error:", e);
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

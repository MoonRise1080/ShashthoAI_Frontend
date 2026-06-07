export const DISEASES = [
    { id: "dengue", label: "Dengue", color: "#FF4B4B" },
    { id: "cholera", label: "Cholera", color: "#3B82F6" },
    { id: "typhoid", label: "Typhoid", color: "#F59E0B" },
    { id: "malaria", label: "Malaria", color: "#10B981" },
    { id: "covid", label: "COVID-19", color: "#A78BFA" },
];


export const DISTRICTS = [
    { id: 1, name: "Dhaka", lat: 23.8103, lng: 90.4125 },
    { id: 2, name: "Chittagong", lat: 22.3569, lng: 91.7832 },
    { id: 3, name: "Sylhet", lat: 24.8949, lng: 91.8687 },
    { id: 4, name: "Rajshahi", lat: 24.3636, lng: 88.6241 },
    { id: 5, name: "Khulna", lat: 22.8456, lng: 89.5403 },
    { id: 6, name: "Barisal", lat: 22.7010, lng: 90.3535 },
    { id: 7, name: "Rangpur", lat: 25.7439, lng: 89.2752 },
    { id: 8, name: "Mymensingh", lat: 24.7471, lng: 90.4203 },
    { id: 9, name: "Comilla", lat: 23.4607, lng: 91.1809 },
    { id: 10, name: "Narayanganj", lat: 23.6238, lng: 90.4998 },
    { id: 11, name: "Gazipur", lat: 24.0022, lng: 90.4264 },
    { id: 12, name: "Tangail", lat: 24.2512, lng: 89.9167 },
    { id: 13, name: "Faridpur", lat: 23.6070, lng: 89.8429 },
    { id: 14, name: "Jessore", lat: 23.1667, lng: 89.2167 },
    { id: 15, name: "Bogra", lat: 24.8510, lng: 89.3697 },
    { id: 16, name: "Cox's Bazar", lat: 21.4272, lng: 92.0058 },
    { id: 17, name: "Dinajpur", lat: 25.6279, lng: 88.6338 },
    { id: 18, name: "Pabna", lat: 24.0064, lng: 89.2372 },
    { id: 19, name: "Noakhali", lat: 22.8696, lng: 91.0996 },
    { id: 20, name: "Jamalpur", lat: 24.9375, lng: 89.9373 },
    { id: 21, name: "Netrokona", lat: 24.8703, lng: 90.7279 },
    { id: 22, name: "Kishorganj", lat: 24.4449, lng: 90.7766 },
    { id: 23, name: "Manikganj", lat: 23.8630, lng: 89.8369 },
    { id: 24, name: "Munshiganj", lat: 23.5422, lng: 90.5302 },
    { id: 25, name: "Narsingdi", lat: 23.9324, lng: 90.7150 },
];


export const RISK_CONFIG = {
    critical: { color: "#FF1744", fillOpacity: 0.42, radius: 28000 },
    high: { color: "#FF6D00", fillOpacity: 0.32, radius: 21000 },
    medium: { color: "#FFD600", fillOpacity: 0.24, radius: 15000 },
    low: { color: "#00E676", fillOpacity: 0.16, radius: 10000 },
};


export const TILE_LAYERS = {
    dark: {
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    },
    light: {
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    },
    satellite: {
        url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution: "&copy; Esri",
    },
};

import { useState,useRef ,useEffect} from "react";
import { MapContainer, TileLayer, Circle, Popup, useMap } from "react-leaflet";


export function UserLocation({ enabled }) {
    const map = useMap();
    const [pos, setPos] = useState(null);
    const [accuracy, setAccuracy] = useState(0);
    const watchIdRef = useRef(null);
    const markerRef = useRef(null);
    const accCircleRef = useRef(null);

    useEffect(() => {
        // Clean up previous layers when disabled or re-run
        if (markerRef.current) {
            map.removeLayer(markerRef.current);
            markerRef.current = null;
        }
        if (accCircleRef.current) {
            map.removeLayer(accCircleRef.current);
            accCircleRef.current = null;
        }
        if (watchIdRef.current !== null) {
            navigator.geolocation.clearWatch(watchIdRef.current);
            watchIdRef.current = null;
        }
        setPos(null);

        if (!enabled) return;
        if (!navigator.geolocation) return;

        watchIdRef.current = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude, accuracy: acc } = position.coords;
                const latlng = [latitude, longitude];
                setPos(latlng);
                setAccuracy(acc);
                map.setView(latlng, 12);
            },
            (err) => console.warn("Geolocation error:", err.message),
            { enableHighAccuracy: true }
        );

        return () => {
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
                watchIdRef.current = null;
            }
            if (markerRef.current) {
                map.removeLayer(markerRef.current);
                markerRef.current = null;
            }
            if (accCircleRef.current) {
                map.removeLayer(accCircleRef.current);
                accCircleRef.current = null;
            }
        };
    }, [enabled]);

    // Imperatively add/update Leaflet layers when pos changes
    useEffect(() => {
        if (!pos) return;

        // Remove old layers
        if (markerRef.current) map.removeLayer(markerRef.current);
        if (accCircleRef.current) map.removeLayer(accCircleRef.current);

        // Accuracy ring
        accCircleRef.current = L.circle(pos, {
            radius: accuracy || 100,
            color: "#3B82F6",
            fillColor: "#3B82F6",
            fillOpacity: 0.08,
            weight: 1,
        }).addTo(map);

        // Pulsing dot marker via divIcon
        const pulsingIcon = L.divIcon({
            className: "",
            html: `<div style="
                width: 16px; height: 16px; border-radius: 50%;
                background: #3B82F6; border: 3px solid white;
                box-shadow: 0 0 0 3px rgba(59,130,246,0.4);
                animation: userLocPulse 1.5s infinite;
            "></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            popupAnchor: [0, -10],
        });

        markerRef.current = L.marker(pos, { icon: pulsingIcon })
            .addTo(map)
            .bindPopup("<b>📍 You are here</b>");

    }, [pos, accuracy]);

    // Returns nothing — layers are managed imperatively above
    return null;
}

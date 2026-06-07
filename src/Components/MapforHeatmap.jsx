import React, { useState } from 'react'
import { MapContainer, TileLayer, Circle, Popup, useMap } from "react-leaflet";
import { DISEASES, DISTRICTS, RISK_CONFIG, TILE_LAYERS } from "../Utils/utils1";
import { UserLocation } from "../Components/Location";
import { generateData } from '../Utils/utils2';



const MapforHeatmap = ({ locationOn, mapStyle, selectedDisease }) => {


    const [data] = useState(generateData);
    const dis = DISEASES.find(d => d.id === selectedDisease);


    const isDark = mapStyle !== 'light'

    return (
        <div className="flex-1 rounded-2xl overflow-hidden border relative" style={{ minHeight: 460, borderColor: isDark ? "#1E293B" : "#E2E8F0" }}>
            <MapContainer center={[23.5, 90.35]} zoom={7} style={{ height: "100%", width: "100%", minHeight: 460 }} scrollWheelZoom>
                <TileLayer url={TILE_LAYERS[mapStyle].url} attribution={TILE_LAYERS[mapStyle].attribution} />

                <UserLocation enabled={locationOn} />

                {DISTRICTS.map(district => {
                    const dd = data[district.id][selectedDisease];
                    const cfg = RISK_CONFIG[dd.risk];
                    return (
                        <Circle
                            key={`${district.id}-${selectedDisease}-${mapStyle}`}
                            center={[district.lat, district.lng]}
                            radius={cfg.radius}
                            pathOptions={{ color: cfg.color, fillColor: cfg.color, fillOpacity: cfg.fillOpacity, weight: dd.risk === "critical" ? 2 : 1, opacity: 0.85 }}
                            eventHandlers={{ click: () => setSelectedDistrict(district) }}
                        >
                            <Popup>
                                <div className="font-sans min-w-[200px]">
                                    <div className="font-bold text-sm mb-2 border-b border-slate-200 pb-1.5">
                                        📍 {district.name}
                                    </div>
                                    {DISEASES.map(d => {
                                        const ddd = data[district.id][d.id];
                                        return (
                                            <div key={d.id} className="flex justify-between items-center mb-1.5">
                                                <span className="text-xs text-slate-500 flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: d.color }} />
                                                    {d.label}
                                                </span>
                                                <div className="flex gap-1.5 items-center">
                                                    <span className="text-xs font-bold" style={{ color: d.id === selectedDisease ? d.color : "#334155" }}>{ddd.cases}</span>
                                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase"
                                                        style={{ background: RISK_CONFIG[ddd.risk].color + "22", color: RISK_CONFIG[ddd.risk].color }}>
                                                        {ddd.risk}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="mt-2 pt-1.5 border-t border-slate-200 text-[11px] text-slate-400">
                                        {dd.trend === "up" ? "↑ Rising" : "↓ Declining"} · +{dd.newToday} new today
                                    </div>
                                </div>
                            </Popup>
                        </Circle>
                    );
                })}
            </MapContainer>

            {/* Legend overlay */}
            <div className="absolute bottom-8 left-3 z-[1000] rounded-xl px-3 py-2 backdrop-blur-md border"
                style={{ background: isDark ? "rgba(10,15,30,0.92)" : "rgba(255,255,255,0.95)", borderColor: isDark ? "#1E293B" : "#E2E8F0" }}>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">Risk Level</div>
                {Object.entries(RISK_CONFIG).map(([level, cfg]) => (
                    <div key={level} className="flex items-center gap-1.5 mb-1">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: cfg.color }} />
                        <span className={`text-[11px] capitalize ${isDark ? "text-slate-100" : "text-slate-800"}`}>{level}</span>
                    </div>
                ))}
            </div>

            {/* Active disease chip */}
            <div className="absolute top-3 left-3 z-[1000] rounded-lg px-3 py-1.5 backdrop-blur-md flex items-center gap-1.5 border"
                style={{ background: isDark ? "rgba(10,15,30,0.9)" : "rgba(255,255,255,0.95)", borderColor: dis.color + "55" }}>
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: dis.color, boxShadow: `0 0 8px ${dis.color}` }} />
                <span className="text-xs font-bold" style={{ color: dis.color }}>{dis.label} · Active</span>
            </div>
        </div>
    )
}

export default MapforHeatmap

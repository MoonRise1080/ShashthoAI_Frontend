import { useState, useEffect, useRef } from "react";

import { CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { generateData } from "../Utils/utils2";
import HeatmapStat from "../Components/HeatmapStat";
import DiseaseBar from "../Components/DiseaseBar";
import TopDistricts from "../Components/TopDistricts";
import HeatmapHeader from "../Components/HeatmapHeader";
import DiseaseTabandMapstyle from "../Components/DiseaseTabandMapstyle";
import MapforHeatmap from "../Components/MapforHeatmap";






// ─── Component ────────────────────────────────────────────────────────────────

export default function DiseaseHeatmap() {
    const [selectedDisease, setSelectedDisease] = useState("dengue");
    const [mapStyle, setMapStyle] = useState("dark");
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [locationOn, setLocationOn] = useState(false);
    const isDark = mapStyle !== "light";



    return (
        <div className={`min-h-screen flex flex-col p-4 gap-3 box-border font-sans ${isDark ? "bg-[#0A0F1E] text-slate-100" : "bg-slate-50 text-slate-900"}`}>

            {/* Header */}
            < HeatmapHeader selectedDisease={selectedDisease} mapStyle={mapStyle} HlocationOn={locationOn} HsetlocationOn={setLocationOn} />


            {/* Disease tabs + map style */}

            < DiseaseTabandMapstyle setSelectedDisease={setSelectedDisease} selectedDisease={selectedDisease} setMapStyle={setMapStyle} mapStyle={mapStyle} />


            {/* Map + Sidebar */}
            <div className="flex gap-3 flex-1 min-h-0">

                {/* Map */}
                < MapforHeatmap locationOn={locationOn} mapStyle={mapStyle} selectedDisease={selectedDisease} />

                {/* Sidebar */}
                <div className="w-[230px] flex flex-col gap-2.5">
                    {/* Top districts */}
                    < TopDistricts selectedDiseases={selectedDisease} mapthem={mapStyle} selectedDistricttop={selectedDistrict} selectedDistricttop={setSelectedDistrict} />

                    {/* Disease bars */}
                    <DiseaseBar mapthem={mapStyle} selectedDiseases={selectedDisease} setSelectedDiseases={selectedDisease} />
                </div>
            </div>


        </div>
    );
}
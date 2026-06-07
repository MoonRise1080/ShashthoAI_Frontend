import React, { useState } from 'react'
import { DISTRICTS, DISEASES } from '../Utils/utils1';
import { generateData } from '../Utils/utils2';






const HeatmapStat = ({ mapthem,selectedDiseases }) => {
    const [data] = useState(generateData);
    // const [selectedDisease, setSelectedDisease] = useState("dengue");
    
    const dis = DISEASES.find(d => d.id === selectedDiseases);

    const isDark = mapthem !== "light";

    const allStats = DISTRICTS.map(d => data[d.id][selectedDiseases]);
    const newToday = allStats.reduce((s, x) => s + x.newToday, 0);
    const critCount = allStats.filter(x => x.risk === "critical").length;
    const highCount = allStats.filter(x => x.risk === "high").length;
    const totalCases = allStats.reduce((s, x) => s + x.cases, 0);
    return (
        <div className="flex gap-2 flex-wrap">
            {[
                { label: "Total Cases", value: totalCases.toLocaleString(), color: dis.color },
                { label: "New Today", value: "+" + newToday, color: "#FB923C" },
                { label: "Critical", value: critCount, color: "#FF1744" },
                { label: "High Risk", value: highCount, color: "#FF6D00" },
            ].map(s => (
                <div key={s.label}
                    className={`border rounded-xl px-3.5 py-2 text-center ${isDark ? "bg-[#111827] border-[#1E293B]" : "bg-white border-slate-200"}`}
                >
                    <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{s.label}</div>
                </div>
            ))}
        </div>

    )
}

export default HeatmapStat

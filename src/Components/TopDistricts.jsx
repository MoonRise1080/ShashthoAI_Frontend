import React, { useState } from 'react'
import { DISTRICTS, DISEASES, RISK_CONFIG } from '../Utils/utils1';
import { generateData } from '../Utils/utils2';



const TopDistricts = ({ mapthem, selectedDistricttop, setSelectedDistricttop, selectedDiseases }) => {
    const [data] = useState(generateData);
    const dis = DISEASES.find(d => d.id === selectedDiseases);

    const isDark = mapthem !== "light";

    const topDistricts = [...DISTRICTS]
        .map(d => ({ ...d, ...data[d.id][selectedDiseases] }))
        .sort((a, b) => b.cases - a.cases)
        .slice(0, 7);

    return (
        <div className={`border rounded-2xl p-3 flex-1 ${isDark ? "bg-[#111827] border-[#1E293B]" : "bg-white border-slate-200"}`}>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">⚠ Top Risk Districts</div>
            {topDistricts.map((d, i) => (
                <div key={d.id} onClick={() => setSelectedDistricttop(d)}
                    className="flex items-center justify-between px-2 py-1.5 rounded-lg mb-1 cursor-pointer transition-all duration-150 border"
                    style={{
                        background: selectedDistricttop?.id === d.id ? dis.color + "15" : "transparent",
                        borderColor: selectedDistricttop?.id === d.id ? dis.color + "40" : "transparent",
                    }}
                >
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-500 w-3.5">#{i + 1}</span>
                        <span className={`text-xs font-medium ${isDark ? "text-slate-100" : "text-slate-800"}`}>{d.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-xs font-bold" style={{ color: dis.color }}>{d.cases}</span>
                        <span className="text-[8px] font-bold px-1 py-0.5 rounded uppercase"
                            style={{ background: RISK_CONFIG[d.risk].color + "22", color: RISK_CONFIG[d.risk].color }}>
                            {d.risk}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopDistricts

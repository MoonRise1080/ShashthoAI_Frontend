import React, { useState } from 'react'
import { DISTRICTS, DISEASES } from '../Utils/utils1';
import { generateData } from '../Utils/utils2';


const DiseaseBar = ({ mapthem, selectedDiseases,setSelectedDiseases }) => {

    const [data] = useState(generateData);



    const isDark = mapthem !== "light";

    return (
        <div className={`border rounded-2xl p-3 ${isDark ? "bg-[#111827] border-[#1E293B]" : "bg-white border-slate-200"}`}>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">Disease Breakdown</div>
            {DISEASES.map(d => {
                const total = DISTRICTS.reduce((s, dist) => s + data[dist.id][d.id].cases, 0);
                const pct = Math.min(Math.round((total / (DISTRICTS.length * 250)) * 100), 100);
                const active = d.id === selectedDiseases;
                return (
                    <div key={d.id} className="mb-2.5 cursor-pointer" onClick={() => setSelectedDiseases(d.id)}>
                        <div className="flex justify-between mb-1">
                            <span className="text-[11px] flex items-center gap-1.5"
                                style={{ color: active ? d.color : "#64748B", fontWeight: active ? 700 : 400 }}>
                                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: d.color }} />
                                {d.label}
                            </span>
                            <span className="text-[11px]" style={{ color: active ? d.color : "#64748B", fontWeight: active ? 700 : 400 }}>
                                {total.toLocaleString()}
                            </span>
                        </div>
                        <div className={`rounded h-1 ${isDark ? "bg-slate-700" : "bg-slate-100"}`}>
                            <div className="h-full rounded transition-all duration-300"
                                style={{ width: `${pct}%`, background: d.color, opacity: active ? 1 : 0.35 }} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default DiseaseBar

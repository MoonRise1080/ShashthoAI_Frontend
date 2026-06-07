import React from 'react'
import { DISEASES } from '../Utils/utils1'



const DiseaseTabandMapstyle = ({setSelectedDisease,setMapStyle,mapStyle,selectedDisease}) => {


    const dis = DISEASES.find(d => d.id === selectedDisease);

    const isDark= mapStyle !== "light";

    return (
        <div className="flex gap-1.5 flex-wrap items-center">
            {DISEASES.map(d => (
                <button key={d.id} onClick={() => setSelectedDisease(d.id)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 border"
                    style={{
                        borderColor: selectedDisease === d.id ? d.color : isDark ? "#1E293B" : "#E2E8F0",
                        background: selectedDisease === d.id ? d.color + "20" : isDark ? "#1E293B" : "#F1F5F9",
                        color: selectedDisease === d.id ? d.color : "#64748B",
                    }}
                >
                    <span className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: d.color, boxShadow: selectedDisease === d.id ? `0 0 8px ${d.color}` : "none" }}
                    />
                    {d.label}
                </button>
            ))}
            <div className="ml-auto flex gap-1">
                {["dark", "light", "satellite"].map(s => (
                    <button key={s} onClick={() => setMapStyle(s)}
                        className="px-3 py-1 rounded-lg text-[11px] font-medium cursor-pointer capitalize transition-all duration-200 border"
                        style={{
                            borderColor: mapStyle === s ? dis.color : isDark ? "#1E293B" : "#E2E8F0",
                            background: mapStyle === s ? dis.color + "15" : isDark ? "#1E293B" : "#F1F5F9",
                            color: mapStyle === s ? dis.color : "#64748B",
                        }}
                    >{s}</button>
                ))}
            </div>
        </div>
    )
}

export default DiseaseTabandMapstyle

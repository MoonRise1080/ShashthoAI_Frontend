import React from 'react'
import HeatmapStat from './HeatmapStat'

const HeatmapHeader = ({ HlocationOn, HsetlocationOn, mapStyle, selectedDisease }) => {
    return (
        <div className="flex justify-between items-start flex-wrap gap-3">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-[livepulse_1.5s_infinite]" />
                    <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Live · Bangladesh</span>
                </div>
                <h1 className="m-0 text-xl font-bold tracking-tight">Shastho AI — Disease Heatmap</h1>
                <p className="mt-0.5 text-xs text-slate-500">Real-time outbreak intelligence · 25 districts</p>
                <button
                    onClick={() => HsetlocationOn(prev => !prev)}
                    className="mt-2 px-3.5 py-2 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 border border-blue-500"
                    style={{
                        background: HlocationOn ? "#3B82F6" : "transparent",
                        color: HlocationOn ? "white" : "#3B82F6",
                    }}
                >
                    {HlocationOn ? "📍 Location OFF" : "📍 Location ON"}
                </button>
            </div>

            <HeatmapStat mapthem={mapStyle} selectedDiseases={selectedDisease} />
        </div>
    )
}

export default HeatmapHeader

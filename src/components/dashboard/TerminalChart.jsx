import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { time: '1', temp: 20 },
  { time: '2', temp: 35 },
  { time: '3', temp: 50 },
  { time: '4', temp: 40 },
  { time: '5', temp: 80 },
  { time: '6', temp: 100 },
];

export const TerminalChart = () => {
  return (
    <section className="w-full py-20 px-4 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden font-mono relative"
        >
          {/* Terminal Header */}
          <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-rose-500/50" />
              <div className="size-3 rounded-full bg-amber-500/50" />
              <div className="size-3 rounded-full bg-emerald-500/50" />
            </div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
              AstraGuard AI Console v1.0.4
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div className="p-6 lg:p-10">
            <div className="mb-8">
              <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-tighter mb-1">
                Astraguard AI
              </div>
              <h2 className="text-2xl text-white font-bold">
                Temperature vs Time
              </h2>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                  <XAxis 
                    dataKey="time" 
                    stroke="#52525b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#52525b" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false}
                    domain={[20, 100]}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#09090b', 
                      borderColor: '#27272a',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                    itemStyle={{ color: '#6366f1' }}
                    cursor={{ stroke: '#27272a', strokeWidth: 1 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="temp" 
                    stroke="#6366f1" 
                    strokeWidth={2}
                    dot={{ fill: '#6366f1', strokeWidth: 2, r: 4, stroke: '#000' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                    animationDuration={2000}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Terminal Footer Info */}
            <div className="mt-8 pt-8 border-t border-zinc-800/50 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Status', value: 'Monitoring', color: 'text-emerald-400' },
                { label: 'Latency', value: '42ms', color: 'text-zinc-400' },
                { label: 'Uptime', value: '99.98%', color: 'text-zinc-400' },
                { label: 'Region', value: 'US-East-1', color: 'text-zinc-400' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">{item.label}</div>
                  <div className={`text-sm font-bold ${item.color}`}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Faint Glow Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-indigo-500/[0.02]" />
        </motion.div>
      </div>
    </section>
  );
};

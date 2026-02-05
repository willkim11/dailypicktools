import { useState, useMemo } from 'react';
import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';
import cmykPlugin from 'colord/plugins/cmyk';
import hwbPlugin from 'colord/plugins/hwb';
import labPlugin from 'colord/plugins/lab';
import xyzPlugin from 'colord/plugins/xyz';

extend([namesPlugin, cmykPlugin, hwbPlugin, labPlugin, xyzPlugin]);

export default function RgbPickerTool() {
  const [color, setColor] = useState('#3b82f6');

  const colorData = useMemo(() => {
    const c = colord(color);
    return [
        { label: 'HEX', value: c.toHex() },
        { label: 'RGB', value: c.toRgbString() },
        { label: 'HSL', value: c.toHslString() },
        { label: 'CMYK', value: c.toCmykString() },
        { label: 'Name', value: c.toName({ closest: true }) || 'Unknown' },
    ];
  }, [color]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Color Picker & Converter</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="flex flex-col items-center space-y-4">
             <div 
                className="w-full aspect-square max-w-[300px] rounded-xl shadow-lg border-4 border-white dark:border-gray-700 transition-colors"
                style={{ backgroundColor: color }}
             />
             <input 
                type="color" 
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full max-w-[300px] h-12 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-700 px-1 py-1"
             />
             <span className="text-sm text-gray-500">Click to select color</span>
         </div>

         <div className="space-y-4">
             {colorData.map((item) => (
                 <div key={item.label}>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{item.label}</label>
                    <div className="flex gap-2">
                        <input 
                            readOnly
                            value={item.value}
                            className="flex-1 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm"
                        />
                         <button 
                            onClick={() => navigator.clipboard.writeText(item.value)}
                            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-gray-600 dark:text-gray-300"
                        >
                            Copy
                        </button>
                    </div>
                 </div>
             ))}
         </div>
      </div>
    </div>
  );
}

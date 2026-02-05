import { useState } from 'react';
import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import namesPlugin from 'colord/plugins/names';
import labPlugin from 'colord/plugins/lab';
import xyzPlugin from 'colord/plugins/xyz';
import hwbPlugin from 'colord/plugins/hwb';
import lchPlugin from 'colord/plugins/lch';
import cmykPlugin from 'colord/plugins/cmyk';

extend([mixPlugin, namesPlugin, labPlugin, xyzPlugin, hwbPlugin, lchPlugin, cmykPlugin]);

export default function PaletteGeneratorTool() {
  const [baseColor, setBaseColor] = useState('#3b82f6');
  
  const generatePalette = (type: 'shades' | 'tints' | 'analogous' | 'complementary' | 'triadic') => {
    const c = colord(baseColor);
    switch (type) {
        case 'shades': return c.shades(5).map(x => x.toHex());
        case 'tints': return c.tints(5).map(x => x.toHex());
        case 'analogous': return [-30, -15, 0, 15, 30].map(deg => c.rotate(deg).toHex());
        case 'triadic': return [0, 120, 240].map(deg => c.rotate(deg).toHex());
        case 'complementary': return [c.toHex(), c.rotate(180).toHex()];
        default: return [];
    }
  };

  return (
    <div className="space-y-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Palette Generator</h1>
        
        <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
             <input 
                type="color" 
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="h-12 w-12 rounded cursor-pointer border-0"
             />
             <div className="flex-1">
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Base Color</label>
                 <input 
                    type="text" 
                    value={baseColor}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="w-full max-w-xs px-3 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded font-mono text-sm"
                 />
             </div>
        </div>

        <div className="space-y-8">
            {[
                { name: 'Shades', type: 'shades' }, 
                { name: 'Tints', type: 'tints' },
                { name: 'Analogous', type: 'analogous' },
                { name: 'Triadic', type: 'triadic' },
                { name: 'Complementary', type: 'complementary' }
            ].map(group => (
                <div key={group.name}>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">{group.name}</h3>
                    <div className="flex flex-wrap gap-4">
                        {generatePalette(group.type as any).map((hex, i) => (
                            <div key={i} className="group relative">
                                <div 
                                    className="w-24 h-24 rounded-lg shadow-sm cursor-pointer transition-transform hover:scale-105"
                                    style={{ backgroundColor: hex }}
                                    onClick={() => navigator.clipboard.writeText(hex)}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 rounded-lg transition-opacity">
                                        <span className="text-white text-xs font-bold">Copy</span>
                                    </div>
                                </div>
                                <p className="mt-2 text-center text-xs font-mono text-gray-500">{hex}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

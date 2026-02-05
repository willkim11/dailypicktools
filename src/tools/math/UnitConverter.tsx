import { useState, useEffect } from 'react';

type Category = 'length' | 'weight' | 'temperature' | 'area';

const categories: Category[] = ['length', 'weight', 'temperature', 'area'];

const units: Record<Category, string[]> = {
    length: ['m', 'km', 'cm', 'mm', 'in', 'ft', 'yd', 'mi'],
    weight: ['kg', 'g', 'mg', 'lb', 'oz'],
    temperature: ['C', 'F', 'K'],
    area: ['m2', 'km2', 'ft2', 'ac', 'ha']
};

const rates: Record<string, number> = {
    // Length (base: m)
    m: 1, km: 1000, cm: 0.01, mm: 0.001, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344,
    // Weight (base: kg)
    kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495,
    // Area (base: m2)
    m2: 1, km2: 1000000, ft2: 0.092903, ac: 4046.86, ha: 10000
};

export default function UnitConverterTool() {
  const [category, setCategory] = useState<Category>('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');
  const [inputValue, setInputValue] = useState<number | string>(1);
  const [result, setResult] = useState<number | string>('');

  useEffect(() => {
    setFromUnit(units[category][0]);
    setToUnit(units[category][1] || units[category][0]);
  }, [category]);

  useEffect(() => {
     const val = parseFloat(inputValue.toString());
     if (isNaN(val)) {
         setResult('');
         return;
     }

     let res = 0;

     if (category === 'temperature') {
         // Temp conversion
         let celsius = val;
         if (fromUnit === 'F') celsius = (val - 32) * 5 / 9;
         if (fromUnit === 'K') celsius = val - 273.15;
         
         if (toUnit === 'C') res = celsius;
         else if (toUnit === 'F') res = celsius * 9 / 5 + 32;
         else if (toUnit === 'K') res = celsius + 273.15;
     } else {
         // Linear conversion

         // Actually I put all rates in one map.
         const fromRate = rates[fromUnit];
         const toRate = rates[toUnit];
         if (fromRate && toRate) {
             const baseVal = val * fromRate;
             res = baseVal / toRate;
         }
     }

     setResult(Number.isInteger(res) ? res : parseFloat(res.toFixed(6)));
  }, [inputValue, fromUnit, toUnit, category]);

  return (
    <div className="space-y-6">
       <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Unit Converter</h1>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="col-span-full">
               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
               <div className="flex flex-wrap gap-2">
                   {categories.map((m) => (
                       <button
                           key={m}
                           onClick={() => setCategory(m)}
                           className={`px-3 py-1 text-sm rounded-full capitalize ${
                               category === m 
                               ? 'bg-blue-600 text-white shadow-sm' 
                               : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50'
                           }`}
                       >
                           {m}
                       </button>
                   ))}
               </div>
           </div>

           <div className="space-y-4 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
               <h3 className="font-semibold text-gray-900 dark:text-white">From</h3>
               <input 
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-lg"
               />
               <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
               >
                   {units[category].map((u) => (
                       <option key={u} value={u}>{u}</option>
                   ))}
               </select>
           </div>

           <div className="flex items-center justify-center text-gray-400">
               <span className="text-3xl">➔</span>
           </div>

           <div className="space-y-4 p-6 bg-blue-50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700 rounded-xl shadow-sm">
               <h3 className="font-semibold text-gray-900 dark:text-white">To</h3>
               <div className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-lg font-bold text-blue-600 dark:text-blue-400">
                   {result}
               </div>
               <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg"
               >
                   {units[category].map((u) => (
                       <option key={u} value={u}>{u}</option>
                   ))}
               </select>
           </div>
       </div>
    </div>
  );
}

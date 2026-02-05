import { useState } from 'react';

export default function ImageConverterTool() {
  const [base64, setBase64] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const result = event.target?.result as string;
        setBase64(result);
        setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Image to Base64</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 5MB</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Base64 Output</label>
                <div className="relative">
                    <textarea
                        readOnly
                        value={base64}
                        className="w-full h-48 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-xs resize-none"
                    />
                     <button 
                        onClick={() => navigator.clipboard.writeText(base64)}
                        className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg min-h-[300px]">
             {preview ? (
                <img src={preview} alt="Preview" className="max-w-full max-h-[400px] object-contain shadow-lg rounded-lg" />
             ) : (
                <div className="text-gray-400">Image preview will appear here</div>
             )}
        </div>
      </div>
    </div>
  );
}

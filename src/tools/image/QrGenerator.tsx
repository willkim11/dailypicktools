import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';

export default function QrCodeTool() {
  const { t } = useTranslation('translation');
  const [text, setText] = useState('https://example.com');
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('tools.qr.title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('tools.qr.content')}</label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-32 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none"
                    placeholder={t('tools.qr.placeholder')}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('tools.qr.size')}</label>
                     <input 
                        type="number" 
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        min="64" max="1024"
                        className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
                     />
                </div>
                <div>
                     <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('tools.qr.colors')}</label>
                     <div className="flex gap-4">
                         <input 
                            type="color" 
                            value={fgColor}
                            onChange={(e) => setFgColor(e.target.value)}
                            className="h-9 w-full cursor-pointer rounded overflow-hidden"
                            title="Foreground Color"
                         />
                         <input 
                            type="color" 
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                            className="h-9 w-full cursor-pointer rounded overflow-hidden"
                            title="Background Color"
                         />
                     </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
             <div className="p-4 bg-white rounded-lg shadow-sm">
                <QRCodeSVG 
                    value={text} 
                    size={size}
                    fgColor={fgColor}
                    bgColor={bgColor}
                    level="H" 
                    includeMargin={true}
                />
             </div>
             <p className="mt-4 text-sm text-gray-500">{t('tools.qr.saveHelper')}</p>
        </div>
      </div>
    </div>
  );
}

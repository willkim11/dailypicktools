import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';

import TextDiffTool from './tools/text/TextDiff';
import CharCounterTool from './tools/text/CharCounter';
import UrlEncoderTool from './tools/text/UrlEncoder';
import Base64ConverterTool from './tools/text/Base64Converter';
import JsonFormatterTool from './tools/text/JsonFormatter';
import XmlValidatorTool from './tools/text/XmlValidator';
import MarkdownTool from './tools/text/MarkdownPreview';
import RegexTesterTool from './tools/text/RegexTester';

import QrCodeTool from './tools/image/QrGenerator';
import ImageConverterTool from './tools/image/ImageConverter';
import RgbPickerTool from './tools/image/RgbPicker';
import PaletteGeneratorTool from './tools/image/PaletteGenerator';

import CalculatorTool from './tools/math/Calculator';
import UnitConverterTool from './tools/math/UnitConverter';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          
          {/* Tool Routes */}
          <Route path="tools/text/diff" element={<TextDiffTool />} />
          <Route path="tools/text/counter" element={<CharCounterTool />} />
          <Route path="tools/text/url" element={<UrlEncoderTool />} />
          <Route path="tools/text/base64" element={<Base64ConverterTool />} />
          <Route path="tools/text/json" element={<JsonFormatterTool />} />
          <Route path="tools/text/xml" element={<XmlValidatorTool />} />
          <Route path="tools/text/markdown" element={<MarkdownTool />} />
          <Route path="tools/text/regex" element={<RegexTesterTool />} />
          <Route path="tools/image/qr" element={<QrCodeTool />} />
          <Route path="tools/image/converter" element={<ImageConverterTool />} />
          <Route path="tools/image/picker" element={<RgbPickerTool />} />
          <Route path="tools/image/palette" element={<PaletteGeneratorTool />} />
          
          <Route path="tools/math/calculator" element={<CalculatorTool />} />
          <Route path="tools/math/unit" element={<UnitConverterTool />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

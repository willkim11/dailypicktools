import { 
  FileDiff, Type, Link, Binary, FileJson, FileCode, FileText, Regex, 
  QrCode, Image, Palette, Calculator, Ruler, LayoutGrid 
} from 'lucide-react';

export type ToolCategory = 'text' | 'image' | 'math';

export interface Tool {
  id: string;
  name: string;
  description: string;
  path: string;
  category: ToolCategory;
  icon: any;
}

export const tools: Tool[] = [
  // Text & Data
  {
    id: 'text-diff',
    name: 'Text Compare',
    description: 'Compare two texts and highlight differences.',
    path: '/tools/text/diff',
    category: 'text',
    icon: FileDiff
  },
  {
    id: 'char-counter',
    name: 'Word Counter',
    description: 'Count characters, words, and lines.',
    path: '/tools/text/counter',
    category: 'text',
    icon: Type
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    description: 'Encode or decode URLs.',
    path: '/tools/text/url',
    category: 'text',
    icon: Link
  },
  {
    id: 'base64',
    name: 'Base64 Converter',
    description: 'Encode/Decode Base64 strings.',
    path: '/tools/text/base64',
    category: 'text',
    icon: Binary
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Prettify and validate JSON.',
    path: '/tools/text/json',
    category: 'text',
    icon: FileJson
  },
  {
    id: 'xml-validator',
    name: 'XML Validator',
    description: 'Validate and format XML.',
    path: '/tools/text/xml',
    category: 'text',
    icon: FileCode
  },
  {
    id: 'markdown',
    name: 'Markdown Preview',
    description: 'Real-time Markdown editor and preview.',
    path: '/tools/text/markdown',
    category: 'text',
    icon: FileText
  },
  {
    id: 'regex',
    name: 'Regex Tester',
    description: 'Test regular expressions.',
    path: '/tools/text/regex',
    category: 'text',
    icon: Regex
  },
  // Image & Design
  {
    id: 'qr-generator',
    name: 'QR Generator',
    description: 'Generate QR codes from text/URL.',
    path: '/tools/image/qr',
    category: 'image',
    icon: QrCode
  },
  {
    id: 'image-base64',
    name: 'Image Converter',
    description: 'Convert images to Base64/Hex.',
    path: '/tools/image/converter',
    category: 'image',
    icon: Image
  },
  {
    id: 'rgb-picker',
    name: 'RGB Picker',
    description: 'Pick colors and convert formats.',
    path: '/tools/image/picker',
    category: 'image',
    icon: Palette
  },
  {
    id: 'palette',
    name: 'Palette Generator',
    description: 'Generate color palettes.',
    path: '/tools/image/palette',
    category: 'image',
    icon: LayoutGrid
  },
  // Math & Converts
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Scientific calculator.',
    path: '/tools/math/calculator',
    category: 'math',
    icon: Calculator
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert length, weight, temperature, etc.',
    path: '/tools/math/unit',
    category: 'math',
    icon: Ruler
  }
];

export const categories: {id: ToolCategory, name: string}[] = [
  { id: 'text', name: 'Text & Data' },
  { id: 'image', name: 'Image & Design' },
  { id: 'math', name: 'Math & Converts' },
];

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-amber-600/30 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
         
          <p className="text-amber-400"  style={{ fontFamily: 'var(--font-memories)', fontSize: '3rem' }}>Jan & Jona </p>
        </div>
        <p className="text-amber-200 text-sm mb-2">January 10, 2026</p>
        <p className="text-gray-400 text-sm">
          Can't wait to celebrate with you!
        </p>
      </div>
    </footer>
  );
}

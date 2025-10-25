import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-amber-600/30 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 fill-amber-400 stroke-amber-400" />
          <p className="text-amber-400">Jan & Jona</p>
        </div>
        <p className="text-amber-200 text-sm mb-2">January 10, 2026</p>
        <p className="text-gray-400 text-sm">
          Can't wait to celebrate with you!
        </p>
      </div>
    </footer>
  );
}

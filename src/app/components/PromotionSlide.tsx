import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin } from 'lucide-react';
import posterOne from "../src/assets//79008256ed01d57868f525bfdded583554204713.png";
import posterTwo from "../src/assets/7fe45e271feaba533f041eef803ed1c7aecd894e.png";

export function PromotionSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-10 px-12">
      {/* Header */}
      <div className="border-l-4 border-yellow-400 pl-8">
        <h2 className="text-6xl font-bold mb-2">교내 홍보 활동 내역</h2>
        <p className="text-2xl text-white/50 font-light">Campus Activation</p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-h-0 gap-8 pb-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <div className="p-3 bg-yellow-400/10 rounded-xl">
            <MapPin className="w-8 h-8 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-3xl font-bold">Offline Promotion</h3>
            <p className="text-white/50">교내 오프라인 게시판 홍보</p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
          <div className="bg-black/30 rounded-2xl overflow-hidden border border-white/10 relative group h-full">
            <ImageWithFallback 
              src={posterOne}
              alt="Poster 1"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-sm font-medium border border-white/10">
              IT 대학 (공학관)
            </div>
          </div>
          
          <div className="bg-black/30 rounded-2xl overflow-hidden border border-white/10 relative group h-full">
            <ImageWithFallback 
              src={posterTwo}
              alt="Poster 2"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-sm font-medium border border-white/10">
              학생회관 메인 게시판
            </div>
          </div>
        </div>

        {/* Description Footer */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xl font-medium">IT 대학(공학관) 및 학생회관 메인 게시판 포스터 부착</span>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-xl font-medium text-white/70">교내 유동 인구가 가장 많은 거점 2곳 이상 점유</span>
          </div>
        </div>
      </div>
    </div>
  );
}

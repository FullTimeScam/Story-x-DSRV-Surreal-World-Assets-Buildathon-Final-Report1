import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Users, Building2 } from 'lucide-react';
import storyLogo from "../../assets/26edc6389f76e9519f5a73ee2e6d59f264131a98.png";
import dsrvLogo from "../../assets/8134ee5f59adfc50ac2537d98453a4ec5a84dc97.png";

export function CoverSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col items-center justify-center text-center relative px-12">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center gap-12">
        {/* Logos */}
        <div className="flex items-center justify-center gap-12">
          <div className="w-48 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-yellow-400/20 backdrop-blur-sm p-4">
            <ImageWithFallback 
              src={storyLogo}
              alt="Story Protocol"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-5xl text-white/20 font-light">×</div>
          <div className="w-48 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-yellow-400/20 backdrop-blur-sm p-4">
            <ImageWithFallback 
              src={dsrvLogo}
              alt="DSRV"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title Section */}
        <div className="space-y-6">
          <h1 className="text-7xl font-bold leading-tight tracking-tight">
            Story x DSRV<br />
            <span className="text-yellow-400">Surreal World Assets</span><br />
            Buildathon Final Report
          </h1>
          <div className="h-1.5 w-40 bg-yellow-400 mx-auto rounded-full" />
          <p className="text-3xl text-white/70 font-light">
            Local Ambassador Program 결과 보고서
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
            <Building2 className="w-6 h-6 text-yellow-400" />
            <span className="text-2xl font-medium text-white/90">
              고려대학교 블록체인 학회 - <span className="text-yellow-400">Blockchain Valley</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-white/50 text-lg">
            <span>대표자: 신세종</span>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>참여 학회원: 총 15명 (개발, 리서치, 보안, 디젠)</span>
            </div>
            <div className="w-1 h-1 bg-white/30 rounded-full" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>제출일: 2024.12.19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

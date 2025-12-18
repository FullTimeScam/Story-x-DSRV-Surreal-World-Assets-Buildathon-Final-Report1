import { Trophy, Mail, Send } from 'lucide-react';

export function ClosingSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col items-center justify-center text-center relative px-12">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="w-24 h-24 bg-yellow-400/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-yellow-400/20">
            <Trophy className="w-12 h-12 text-yellow-400" />
        </div>

        <h1 className="text-8xl font-bold tracking-tight">
          Thank You
        </h1>
        
        <p className="text-2xl text-white/50">
          Story x DSRV Surreal World Assets Buildathon
        </p>

        <div className="mt-12 pt-12 border-t border-white/10 w-full max-w-lg mx-auto space-y-6">
          <div>
            <p className="text-2xl text-white/90 font-bold mb-1">Blockchain Valley</p>
            <p className="text-lg text-white/60">프로젝트 대표: 신세종</p>
          </div>
          
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span className="text-white/70">fulltimescam@pm.me</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
              <Send className="w-5 h-5 text-yellow-400" />
              <span className="text-white/70">@fulltimescam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

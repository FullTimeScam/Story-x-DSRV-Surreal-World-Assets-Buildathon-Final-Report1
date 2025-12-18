import { Quote, Lightbulb } from 'lucide-react';

export function FeedbackSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-12 px-12">
      {/* Header */}
      <div className="border-l-4 border-yellow-400 pl-8">
        <h2 className="text-6xl font-bold mb-2">활동 후기 및 개선 제안</h2>
        <p className="text-2xl text-white/50 font-light">Feedback & Suggestions</p>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {/* Insights */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-yellow-400/10 rounded-lg">
              <Quote className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold">Participant Insights</h3>
          </div>

          <div className="space-y-4">
             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative">
                <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
                <p className="text-xl text-white/90 leading-relaxed font-light mb-4">
                   "기존 DeFi 중심에서 벗어나 <span className="text-yellow-400 font-medium">IP라는 친숙한 주제</span>로 블록체인에 접근할 수 있어 흥미로웠음."
                </p>
                <p className="text-right text-sm text-white/40">- 학회원 반응</p>
             </div>

             <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative">
                <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
                <p className="text-xl text-white/90 leading-relaxed font-light mb-4">
                   "<span className="text-yellow-400 font-medium">Story Protocol SDK 문서화</span>가 훌륭하여 짧은 기간 내에 MVP 구현이 가능했음."
                </p>
                <p className="text-right text-sm text-white/40">- 기술적 피드백</p>
             </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-400/10 rounded-lg">
              <Lightbulb className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">Suggestions</h3>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-8 h-full flex flex-col justify-center">
             <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                초기 아이디에이션 지원 강화
             </h4>
             <p className="text-lg text-white/80 leading-relaxed">
                개발 멘토링뿐만 아니라, <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-4">기획 단계(아이디어 검증)에서의 멘토링</span>이 
                조기에 지원된다면 더 완성도 높은 프로젝트가 나올 것 같음.
             </p>
             
             <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-xl p-4">
                   <p className="text-xs text-white/50 mb-1">Current</p>
                   <p className="text-sm font-medium">개발 기술 지원 중심</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                   <p className="text-xs text-blue-300 mb-1">Proposed</p>
                   <p className="text-sm font-bold text-blue-100">기획 + 기술 All-in-one</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { SquareCheck, Flag, ArrowRight } from 'lucide-react';

export function ResultsSlide() {
  const checklist = [
    { label: '콘텐츠 발행', value: '8건 (필수4 + 자율4)', status: true },
    { label: '홍보 성과', value: 'SNS 조회수 5,764', status: true },
    { label: '빌더톤 성과', value: '3개 팀 최종 제출 (목표 초과)', status: true },
    { label: '운영 규정', value: '로그 기록 및 데드라인 준수', status: true },
  ];

  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-16 px-12">
      {/* Header */}
      <div className="border-l-4 border-yellow-400 pl-8">
        <h2 className="text-6xl font-bold mb-2">결론 및 성과 요약</h2>
        <p className="text-2xl text-white/50 font-light">Conclusion</p>
      </div>

      {/* Achievement Checklist */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <SquareCheck className="w-6 h-6 text-yellow-400" />
          Achievement Checklist
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {checklist.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-white/50 text-sm mb-1">{item.label}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <SquareCheck className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div className="bg-gradient-to-r from-yellow-400/20 to-transparent border-l-8 border-yellow-400 rounded-r-3xl p-12 relative overflow-hidden">
        <div className="relative z-10">
          <QuoteIcon className="w-12 h-12 text-yellow-400/30 mb-4" />
          <p className="text-3xl font-medium leading-relaxed text-white/90">
            "Blockchain Valley는 이번 활동을 시작으로<br />
            <span className="text-yellow-400">Story Protocol 생태계의 핵심 빌더 커뮤니티</span>로 자리 잡겠습니다."
          </p>
          
          <div className="mt-8 flex items-center gap-4">
             <div className="h-px bg-white/20 w-20" />
             <p className="text-white/50 text-lg">Blockchain Valley</p>
          </div>
        </div>

        {/* Background Decor */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-yellow-400/10 to-transparent" />
      </div>
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
  );
}

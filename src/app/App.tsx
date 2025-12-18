import { CoverSlide } from './components/CoverSlide';
import { OverviewSlide } from './components/OverviewSlide';
import { PromotionSlide } from './components/PromotionSlide';
import { ContentSlide } from './components/ContentSlide';
import { WeekOneSlide } from './components/WeekOneSlide';
import { WeekTwoSlide } from './components/WeekTwoSlide';
import { WeekThreeSlide } from './components/WeekThreeSlide';
import { WeekFourSlide } from './components/WeekFourSlide';
import { TeamSlide } from './components/TeamSlide';
import { FeedbackSlide } from './components/FeedbackSlide';
import { ResultsSlide } from './components/ResultsSlide';
import { ClosingSlide } from './components/ClosingSlide';

export default function App() {
  const slides = [
    CoverSlide,
    OverviewSlide,     // 활동 요약
    ContentSlide,      // 온라인 콘텐츠 제작 내역
    PromotionSlide,    // 교내 홍보 활동 내역
    TeamSlide,         // 팀 모집 및 프로젝트 현황
    WeekOneSlide,
    WeekTwoSlide,
    WeekThreeSlide,
    WeekFourSlide,
    FeedbackSlide,
    ResultsSlide,
    ClosingSlide,
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8 print:p-0 print:bg-black">
      <div className="mx-auto max-w-[1600px] space-y-12 print:space-y-0 print:max-w-none">
        {slides.map((SlideComponent, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              aspect-video
              bg-black
              overflow-hidden
              shadow-2xl
              print:shadow-none
              print:break-after-page
              print:h-screen
              print:w-screen
              print:aspect-auto
              flex
              flex-col
              items-center
              justify-center
              border border-white/5
              print:border-0
            "
          >
            <SlideComponent />
            
            {/* Slide Number (Optional, for reference) */}
            <div className="absolute bottom-4 right-8 text-white/20 text-sm font-mono print:hidden">
              {index + 1} / {slides.length}
            </div>
          </div>
        ))}
      </div>

      {/* Helper message for user */}
      <div className="fixed bottom-8 right-8 print:hidden z-50">
        <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition-colors cursor-default">
          Press Ctrl/Cmd + P to Export PDF
        </div>
      </div>
    </div>
  );
}

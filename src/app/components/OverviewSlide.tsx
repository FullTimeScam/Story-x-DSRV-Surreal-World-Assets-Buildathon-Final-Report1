import { Rocket, CalendarDays, Target, Trophy, Users } from 'lucide-react';

export function OverviewSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-12 px-12">
      {/* Header */}
      <div className="border-l-4 border-yellow-400 pl-8">
        <h2 className="text-6xl font-bold mb-2">활동 요약</h2>
        <p className="text-2xl text-white/50 font-light">Activity Overview</p>
      </div>

      {/* Main Text Content */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
        <p className="text-2xl leading-relaxed text-white/90 font-light">
          본 학회는 Story Protocol의 <span className="text-yellow-400 font-medium">'IP On-chain'</span> 비전을 전파하고, 
          글로벌 빌더 생태계의 일원으로 성장하기 위해 본 앰버서더 프로그램에 참여했습니다. 
          지난 4주간 총 <span className="text-yellow-400 font-medium">8건의 오리지널 콘텐츠</span>를 발행하여 기술적 가치를 심층 분석하였으며, 
          교내 개발자 커뮤니티를 타겟으로 한 온/오프라인 홍보를 통해 생태계 확장에 주력했습니다. 
          그 결과, 학회 내에서 자체적으로 팀 빌딩을 완료하여 <span className="text-yellow-400 font-bold border-b border-yellow-400/50 pb-0.5">총 3개 팀(DreamVerse, THYMIAN, StoryBook)</span>이 
          프로젝트를 성공적으로 제출하는 쾌거를 이루었습니다.
        </p>
      </div>

      {/* Milestone Timeline */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-yellow-400">
          <CalendarDays className="w-6 h-6" />
          <h3 className="text-2xl font-bold">Milestone Timeline</h3>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {[
            { 
              week: 'Week 1', 
              title: '생태계 온보딩', 
              desc: 'AMA 및 워크샵 홍보',
              icon: Rocket
            },
            { 
              week: 'Week 2', 
              title: '팀 빌딩 & 기술 분석', 
              desc: '핵심 기술 블로그 발행\n빌더톤 홍보 및 팀 빌딩 완료',
              icon: Target
            },
            { 
              week: 'Week 3', 
              title: '오프라인 확산', 
              desc: '교내 포스터 부착\n빌더톤 참여 독려 홍보',
              icon: Users
            },
            { 
              week: 'Week 4', 
              title: '최종 제출 & 심화', 
              desc: '심화 기술 아티클 발행\n빌더톤 프로젝트 최종 제출',
              icon: Trophy
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-yellow-400/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-yellow-400/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-sm font-bold rounded-full border border-yellow-400/20">
                      {item.week}
                    </span>
                    <Icon className="w-6 h-6 text-white/30 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm whitespace-pre-line leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

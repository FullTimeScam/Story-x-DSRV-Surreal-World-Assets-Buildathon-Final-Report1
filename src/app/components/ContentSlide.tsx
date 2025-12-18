import { BarChart3, Calendar, Eye, FileText, Heart, MessageCircle, Repeat, Share2, TrendingUp, Users } from 'lucide-react';

export function ContentSlide() {
  const contentStats = [
    {
      week: "Week 1",
      date: "11/11 ~ 11/17",
      items: [
        {
          type: "Social",
          icon: <Share2 className="w-4 h-4" />,
          title: "AMA 내용 요약 및 홍보",
          platform: "X (Twitter)",
          stats: { views: "1,000", likes: "24", reposts: "16" },
          url: "https://x.com/blockchainkor/status/1992141004317794675?t=XbKrfwk_PrSSfRLU0Xc2nw&s=19"
        },
        {
          type: "Social",
          icon: <Share2 className="w-4 h-4" />,
          title: "워크샵 요약 및 빌더톤 가이드",
          platform: "X (Twitter)",
          stats: { views: "437", likes: "24", reposts: "8" },
          url: "https://x.com/blockchainkor/status/1993635853067825570?s=20"
        }
      ]
    },
    {
      week: "Week 2",
      date: "11/18 ~ 11/24",
      items: [
        {
          type: "Blog",
          icon: <FileText className="w-4 h-4" />,
          title: "Tech: IP On-chain 분석",
          platform: "Medium",
          stats: { views: "650", likes: "17", reposts: "5" },
          url: "https://medium.com/@blockchainvalley.kor/%EB%82%B4-%EC%B0%BD%EC%9E%91%EB%AC%BC%EC%9D%B4-%EC%98%A8%EC%B2%B4%EC%9D%B8-%EC%9E%90%EC%82%B0%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%8B%9C%EB%8C%80-story-x-dsrv-surreal-world-assets-buildathon-f5c447dc0d4d"
        },
        {
          type: "Social",
          icon: <Share2 className="w-4 h-4" />,
          title: "Surreal World Assets 빌더톤 홍보",
          platform: "X (Twitter)",
          stats: { views: "1,000", likes: "24", reposts: "16" },
          url: "https://x.com/blockchainkor/status/1992141004317794675?s=20"
        }
      ]
    },
    {
      week: "Week 3",
      date: "11/25 ~ 12/01",
      items: [
        {
          type: "Offline",
          icon: <Users className="w-4 h-4" />,
          title: "교내 포스터 부착 및 홍보",
          platform: "Offline / X",
          stats: { views: "622", likes: "31", reposts: "14" },
          url: "https://x.com/blockchainkor/status/1998195900280402320?s=20"
        },
        {
          type: "Social",
          icon: <Share2 className="w-4 h-4" />,
          title: "빌더톤: 왜 지금 주목해야 할까?",
          platform: "X (Twitter)",
          stats: { views: "950", likes: "32", reposts: "15" },
          url: "https://x.com/blockchainkor/status/1993635853067825570?s=20"
        }
      ]
    },
    {
      week: "Week 4",
      date: "12/02 ~ 12/08",
      items: [
        {
          type: "Blog",
          icon: <FileText className="w-4 h-4" />,
          title: "Tech: Verifiable AI 아키텍처",
          platform: "Medium",
          stats: { views: "325", likes: "22", reposts: "10" },
          url: "https://medium.com/@blockchainvalley.kor/verifiable-ai를-향한-설계-94aa491a3e28?postPublishedType=initial"
        },
        {
          type: "Social",
          icon: <Share2 className="w-4 h-4" />,
          title: "빌더톤 Phase 2 & AI IP 소유권",
          platform: "X (Twitter)",
          stats: { views: "780", likes: "28", reposts: "12" },
          url: "https://x.com/blockchainkor/status/1995991375095951741?s=20"
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col px-12 py-12">
      {/* Header */}
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
        <div className="border-l-4 border-yellow-400 pl-8">
          <div className="flex items-center gap-3 text-yellow-400 mb-2">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xl font-bold tracking-widest uppercase">Performance Review</span>
          </div>
          <h2 className="text-5xl font-bold mb-2">온라인 콘텐츠 제작 성과</h2>
          <p className="text-2xl text-white/50 font-light">Total Content Impact & Analytics</p>
        </div>
        
        {/* Key Metrics Summary */}
        <div className="flex gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl">
            <div className="text-white/50 text-sm mb-1">Total Views</div>
            <div className="text-4xl font-bold text-yellow-400">5,764</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl">
            <div className="text-white/50 text-sm mb-1">Engagements</div>
            <div className="text-4xl font-bold text-white">350+</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl">
            <div className="text-white/50 text-sm mb-1">Contents</div>
            <div className="text-4xl font-bold text-white">8</div>
          </div>
        </div>
      </div>

      {/* Main Content List */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-8 flex-1 overflow-hidden">
        {/* Left Column: Weeks 1-2 */}
        <div className="flex flex-col gap-8">
          {contentStats.slice(0, 2).map((week, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b border-white/10 pb-2">
                <span className="text-yellow-400 font-bold text-lg">{week.week}</span>
                <span className="text-white/30 text-sm">{week.date}</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {week.items.map((item, itemIdx) => (
                  <a 
                    key={itemIdx} 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 hover:border-yellow-400/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 
                        ${item.type === 'Blog' ? 'bg-blue-500/20 text-blue-400' : 
                          item.type === 'Offline' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium text-lg leading-tight mb-1 group-hover:text-yellow-400 transition-colors">{item.title}</div>
                        <div className="text-white/40 text-xs flex items-center gap-2">
                          <span className="uppercase tracking-wider">{item.platform}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span>{item.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {item.stats.views}
                        </div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest">Views</div>
                      </div>
                      <div className="w-px h-8 bg-white/10"></div>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <Heart className="w-3 h-3 text-pink-400" />
                          <span className="text-xs font-medium text-white/70">{item.stats.likes}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Repeat className="w-3 h-3 text-green-400" />
                          <span className="text-xs font-medium text-white/70">{item.stats.reposts}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Weeks 3-4 */}
        <div className="flex flex-col gap-8">
          {contentStats.slice(2, 4).map((week, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b border-white/10 pb-2">
                <span className="text-yellow-400 font-bold text-lg">{week.week}</span>
                <span className="text-white/30 text-sm">{week.date}</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {week.items.map((item, itemIdx) => (
                  <a 
                    key={itemIdx} 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 hover:border-yellow-400/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 
                        ${item.type === 'Blog' ? 'bg-blue-500/20 text-blue-400' : 
                          item.type === 'Offline' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium text-lg leading-tight mb-1 group-hover:text-yellow-400 transition-colors">{item.title}</div>
                        <div className="text-white/40 text-xs flex items-center gap-2">
                          <span className="uppercase tracking-wider">{item.platform}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span>{item.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {item.stats.views}
                        </div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest">Views</div>
                      </div>
                      <div className="w-px h-8 bg-white/10"></div>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center gap-1">
                          <Heart className="w-3 h-3 text-pink-400" />
                          <span className="text-xs font-medium text-white/70">{item.stats.likes}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Repeat className="w-3 h-3 text-green-400" />
                          <span className="text-xs font-medium text-white/70">{item.stats.reposts}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

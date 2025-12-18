import { Users, CircleCheck, Crown, ExternalLink, Twitter, Youtube, Github, Globe } from 'lucide-react';

export function TeamSlide() {
  const teams = [
    {
      name: 'DreamVerse',
      topic: '꿈 기록 및 창작물 IP화 플랫폼',
      members: ['김호현', '정우성', '이도희', '이민기'],
      desc: '자각몽 기록을 IP 자산으로 변환하여 거래할 수 있는 마켓플레이스',
      gradient: 'from-purple-500/20 to-blue-500/5',
      link: 'https://medium.com/@hohyun102209/dreamverse-%EA%BF%88%EC%9D%84-%EC%B0%BD%EC%9E%91%ED%95%98%EB%8B%A4-963f0aefb374?postPublishedType=initial',
      xLink: 'https://x.com/blockchainkor/status/1998558286677684553?s=20',
      youtubeLink: 'https://www.youtube.com/watch?v=cUe98Cgd41o',
      githubLink: 'https://github.com/DreamVerse-story/fe',
      demoLink: 'https://dreamverse-story.vercel.app/'
    },
    {
      name: 'THYMIAN',
      topic: 'Scent To IP (향기 데이터 IP 등록)',
      members: ['김민수', '홍준모', '이혜은', '장유빈'],
      desc: '화학적 향기 데이터를 온체인 IP로 등록하고 라이선싱하는 프로토콜',
      gradient: 'from-green-500/20 to-teal-500/5',
      link: 'https://medium.com/@martinkim99/thymian-scent-to-ip-7b78e3ebd414',
      xLink: 'https://x.com/blockchainkor/status/1999467426694787502?s=20',
      youtubeLink: 'https://www.youtube.com/watch?v=MkX5ZTYJB_Y',
      githubLink: 'https://github.com/orgs/dsrvXstroy/repositories'
    },
    {
      name: 'StoryBook',
      topic: 'StoryBook (스토리 IP 확장 플랫폼)',
      members: ['김한결', '민규선', '양현용', '장민주'],
      desc: '릴레이 소설 창작을 통해 파생 IP의 수익 구조를 자동화하는 플랫폼',
      gradient: 'from-orange-500/20 to-red-500/5',
      link: 'https://medium.com/@ipstte/story-book-story-to-ip-a9f4b2840fd2?postPublishedType=repub',
      xLink: 'https://x.com/blockchainkor/status/2000479832409538952?s=20',
      youtubeLink: 'https://www.youtube.com/shorts/gWZyPPUwoxA',
      githubLink: 'https://github.com/YangHyunYong/StoryBook'
    },
  ];

  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-10 px-12">
      {/* Header with Stats */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div className="border-l-4 border-yellow-400 pl-8">
          <h2 className="text-6xl font-bold mb-2">빌더톤 최종 결과물 및 팀 구성</h2>
          <p className="text-2xl text-white/50 font-light">Builder Teams</p>
        </div>

        <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl">
           <div className="text-right">
              <p className="text-sm text-white/50">Target</p>
              <p className="text-2xl font-bold text-white/50">2팀</p>
           </div>
           <div className="text-3xl text-white/20">→</div>
           <div className="text-right">
              <p className="text-sm text-yellow-400 font-bold">Result</p>
              <p className="text-4xl font-bold text-white">3팀 <span className="text-lg text-green-400 font-normal">(150% 달성)</span></p>
           </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden bg-gradient-to-br ${team.gradient} border border-white/10 rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300`}
          >
             <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Crown className="w-24 h-24" />
             </div>

             <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                   <h3 className="text-3xl font-bold group-hover:text-yellow-400 transition-colors">{team.name}</h3>
                   <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold flex items-center gap-1">
                      <CircleCheck className="w-3 h-3" /> 제출 완료
                   </span>
                </div>

                <div className="space-y-2">
                   <p className="text-yellow-400 font-medium text-sm">Project Topic</p>
                   <p className="text-xl font-medium leading-snug">{team.topic}</p>
                </div>

                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-yellow-400/50 transition-colors">
                   {team.desc}
                </p>
             </div>

             <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white/50 text-xs uppercase tracking-wider font-bold">
                       <Users className="w-3 h-3" /> Team Members
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {team.members.map((member, i) => (
                          <span key={i} className="bg-white/10 px-3 py-1.5 rounded-lg text-sm font-medium">
                             {member}
                          </span>
                       ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 mt-2">
                   <div className="grid grid-cols-2 gap-2">
                       <a 
                         href={team.link}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-2 text-white text-xs font-bold bg-white/5 hover:bg-white/10 p-2.5 rounded-lg border border-white/10 transition-colors"
                       >
                         <ExternalLink className="w-3.5 h-3.5" />
                         <span>Medium</span>
                       </a>
                       {team.demoLink ? (
                           <a 
                             href={team.demoLink}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center justify-center gap-2 text-white text-xs font-bold bg-blue-500/20 hover:bg-blue-500/30 p-2.5 rounded-lg border border-blue-500/30 transition-colors"
                           >
                             <Globe className="w-3.5 h-3.5 text-blue-400" />
                             <span className="text-blue-200">Live Demo</span>
                           </a>
                       ) : (
                           <div className="flex items-center justify-center gap-2 text-white/20 text-xs font-bold bg-white/5 p-2.5 rounded-lg border border-white/5 cursor-not-allowed">
                             <Globe className="w-3.5 h-3.5" />
                             <span>No Demo</span>
                           </div>
                       )}
                   </div>
                   
                   <div className="grid grid-cols-3 gap-2">
                       <a 
                         href={team.xLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-1.5 text-white text-xs font-bold bg-black hover:bg-black/50 p-2 rounded-lg border border-white/10 transition-colors"
                       >
                         <Twitter className="w-3.5 h-3.5" />
                         <span>X</span>
                       </a>
                       <a 
                         href={team.youtubeLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-1.5 text-white text-xs font-bold bg-red-600/20 hover:bg-red-600/30 p-2 rounded-lg border border-red-500/30 transition-colors"
                       >
                         <Youtube className="w-3.5 h-3.5 text-red-500" />
                         <span className="text-red-200">YT</span>
                       </a>
                       <a 
                         href={team.githubLink}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center gap-1.5 text-white text-xs font-bold bg-white/10 hover:bg-white/20 p-2 rounded-lg border border-white/10 transition-colors"
                       >
                         <Github className="w-3.5 h-3.5" />
                         <span>Git</span>
                       </a>
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 justify-center">
         <div className="text-[12px] text-white/60 font-medium bg-black/40 px-6 py-2 rounded-full border border-white/10">
            👆 각 버튼을 클릭하면 프로젝트 상세 기획안, 시연 영상, 데모, 코드 저장소 등으로 이동합니다.
         </div>
      </div>
    </div>
  );
}

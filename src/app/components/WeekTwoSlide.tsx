import { ImageWithFallback } from './figma/ImageWithFallback';
import { FileText, Eye, Repeat, Heart, Calendar, MessageCircle, Twitter } from 'lucide-react';
import mediumHeaderImage from "../src/assets/8ae0ef0a389274a8bf14da5a1605c9ffc48c4304.png";
import promotionTweetImage from "../src/assets/2ef8ce5f623d94c2365c9f3fadf763f8394501f2.png";
import buildathonImage from "../src/assets/effc05eae11433be996a36f020bf11b34ce13bdb.png";

export function WeekTwoSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-12 px-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div className="border-l-4 border-yellow-400 pl-8">
          <div className="flex items-center gap-3 text-yellow-400 mb-2">
            <Calendar className="w-6 h-6" />
            <span className="text-xl font-bold tracking-widest uppercase">Week 2 (11/18 ~ 11/24)</span>
          </div>
          <h2 className="text-5xl font-bold mb-2">팀 빌딩 & 기술 분석</h2>
          <p className="text-2xl text-white/50 font-light">Team Building & Technical Analysis</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-12">
        {/* Item 1: Tech Blog */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">핵심 기술 블로그 발행</h3>
              <p className="text-white/50">Tech Analysis: IP On-chain</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            <a 
              href="https://medium.com/@blockchainvalley.kor/%EB%82%B4-%EC%B0%BD%EC%9E%91%EB%AC%BC%EC%9D%B4-%EC%98%A8%EC%B2%B4%EC%9D%B8-%EC%9E%90%EC%82%B0%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%8B%9C%EB%8C%80-story-x-dsrv-surreal-world-assets-buildathon-f5c447dc0d4d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              {/* Image Grid */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/10">
                  <ImageWithFallback 
                    src={mediumHeaderImage}
                    alt="Medium Article Header"
                    className="w-full h-full object-cover object-top opacity-90"
                  />
                </div>
                <div className="w-1/2 h-full">
                  <ImageWithFallback 
                    src={promotionTweetImage}
                    alt="Promotion Tweet"
                    className="w-full h-full object-cover object-top opacity-90"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6">
                <div className="self-end">
                   <span className="text-[10px] text-white/40 bg-black/20 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                     이미지를 클릭하면 해당 게시물 링크로 연결됩니다.
                   </span>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-yellow-400" />
                    <span className="text-xl font-bold">650</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">17</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">5</span>
                    <span className="text-xs text-white/50">Reposts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-xl font-bold">2</span>
                    <span className="text-xs text-white/50">Replies</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-white/70 text-sm leading-relaxed">
              "내 창작물이 온체인 자산이 되는 시대 - Story Protocol의 비전과 기술적 가치를 심층 분석한 아티클. 
              검색 엔진 최적화(SEO)를 통해 상단 노출 달성."
            </p>
          </div>
        </div>

        {/* Item 2: Buildathon Promotion (Replaced DreamVerse) */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Surreal World Assets Buildathon 홍보</h3>
              <p className="text-white/50">AMA Recap & Participation Guide</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            <a 
              href="https://x.com/blockchainkor/status/1992141004317794675?s=20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer"
            >
              <ImageWithFallback 
                src={buildathonImage}
                alt="Buildathon Promotion"
                className="w-full h-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-between p-6">
                <div className="self-end">
                   <span className="text-[10px] text-white/40 bg-black/20 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                     이미지를 클릭하면 해당 게시물 링크로 연결됩니다.
                   </span>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-yellow-400" />
                    <span className="text-xl font-bold">1,000</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">24</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">16</span>
                    <span className="text-xs text-white/50">Reposts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-xl font-bold">1</span>
                    <span className="text-xs text-white/50">Reply</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-white/70 text-sm leading-relaxed">
              "Story Protocol X DSRV AMA 핵심 요약 및 빌더톤 참여 독려. 개발 경험이 없어도 참여 가능한 Generative Video 트랙과 상금 혜택을 강조하여 비개발자의 참여 유도."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

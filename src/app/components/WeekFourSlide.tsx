import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Cpu, BookOpen, ExternalLink, FileText, Eye, Repeat, Heart, MessageCircle, Twitter } from 'lucide-react';
import verifiableAiHeader from "../../assets/4c3f8187503b800245ffa5457983d687e669c1e0.png";
import verifiableAiContent from "../../assets/bd6579d06a32a18d93ab2369209808ee77f1d683.png";
import phaseTwoImage from "../../assets/96d40f2b5056e0f210239912c2a5bbc368a4d9f0.png";

export function WeekFourSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-12 px-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div className="border-l-4 border-yellow-400 pl-8">
          <div className="flex items-center gap-3 text-yellow-400 mb-2">
            <Calendar className="w-6 h-6" />
            <span className="text-xl font-bold tracking-widest uppercase">Week 4 (12/02 ~ 12/08)</span>
          </div>
          <h2 className="text-5xl font-bold mb-2">심화 연구 및 IP 확장</h2>
          <p className="text-2xl text-white/50 font-light">Deep Dive Research & IP Expansion</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-12">
        {/* Item 1: Verifiable AI */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <Cpu className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Verifiable AI를 향한 설계</h3>
              <p className="text-white/50">Architecture Design for AI Transparency</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            <a 
              href="https://medium.com/@blockchainvalley.kor/verifiable-ai를-향한-설계-94aa491a3e28?postPublishedType=initial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              {/* Image Grid */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/10">
                  <ImageWithFallback 
                    src={verifiableAiHeader}
                    alt="Verifiable AI Article Header"
                    className="w-full h-full object-cover object-top opacity-90"
                  />
                </div>
                <div className="w-1/2 h-full">
                  <ImageWithFallback 
                    src={verifiableAiContent}
                    alt="Verifiable AI Article Content"
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
                    <span className="text-xl font-bold">325</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">22</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">10</span>
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
              "Story Protocol의 Programmable IP Layer를 활용하여 AI 모델의 투명성과 검증 가능성을 확보하는 아키텍처 설계 및 기술적 분석을 담은 심층 연구 포스팅."
            </p>
          </div>
        </div>

        {/* Item 2: Buildathon Promotion & Phase 2 (Replaced Story Book) */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">빌더톤 Phase 2 & AI IP 소유권</h3>
              <p className="text-white/50">Buildathon Promotion & AI Ownership</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            <a 
              href="https://x.com/blockchainkor/status/1995991375095951741?s=20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              <ImageWithFallback 
                src={phaseTwoImage}
                alt="Buildathon Phase 2 Promotion"
                className="w-full h-full object-cover object-center opacity-90"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6">
                <div className="self-end">
                   <span className="text-[10px] text-white/40 bg-black/20 px-2 py-1 rounded backdrop-blur-md border border-white/5">
                     이미지를 클릭하면 해당 게시물 링크로 연결됩니다.
                   </span>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-yellow-400" />
                    <span className="text-xl font-bold">780</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">28</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">12</span>
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
              "AI가 만든 창작물의 주인은 누구인가? Story Protocol이 제시하는 AI IP 소유권 문제 해결과 
              수익 분배 구조를 설명하며, 아이디어를 실제 앱으로 구현하는 빌더톤 Phase 2 참여를 독려."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

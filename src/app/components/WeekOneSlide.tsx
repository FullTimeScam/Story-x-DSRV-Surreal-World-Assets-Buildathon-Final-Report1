import { ImageWithFallback } from './figma/ImageWithFallback';
import { Twitter, Eye, Repeat, Heart, Calendar, MessageCircle } from 'lucide-react';
import amaPostText from "../../assets/f379286537d497ac124594388166413ef327ad1a.png";
import amaBanner from "../../assets/cd9df8d6ed952e87e7f6d1853499b2b72a064420.png";
import workshopImage from "../../assets/b63f8c75ad06547a81f286d015ef3a68bbdeb64f.png";

export function WeekOneSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-12 px-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div className="border-l-4 border-yellow-400 pl-8">
          <div className="flex items-center gap-3 text-yellow-400 mb-2">
            <Calendar className="w-6 h-6" />
            <span className="text-xl font-bold tracking-widest uppercase">Week 1 (11/11 ~ 11/17)</span>
          </div>
          <h2 className="text-5xl font-bold mb-2">생태계 온보딩 및 초기 확산</h2>
          <p className="text-2xl text-white/50 font-light">AMA & Workshop Coverage</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-12">
        {/* Item 1: AMA */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">AMA 내용 요약 및 홍보</h3>
              <p className="text-white/50">Story x DSRV Joint AMA</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            {/* Screenshot Placeholder */}
            <a 
              href="https://x.com/blockchainkor/status/1992141004317794675?t=XbKrfwk_PrSSfRLU0Xc2nw&s=19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              {/* Image Grid */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/10">
                   <ImageWithFallback 
                    src={amaBanner}
                    alt="AMA Live Banner"
                    className="w-full h-full object-cover object-top opacity-90"
                  />
                </div>
                <div className="w-1/2 h-full">
                  <ImageWithFallback 
                    src={amaPostText}
                    alt="AMA Post Content"
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
              "Story Protocol의 IP On-chain 비전과 DSRV의 밸리데이터 역할을 중심으로 한 AMA 세션을 핵심 요약하여 전파. 
              초기 관심 유도에 성공."
            </p>
          </div>
        </div>

        {/* Item 2: Workshop */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">워크샵 요약 및 빌더톤 홍보</h3>
              <p className="text-white/50">Offline Workshop Review</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            {/* Screenshot Placeholder */}
            <a 
              href="https://x.com/blockchainkor/status/1993635853067825570?s=20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              {/* Image Grid */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/10">
                   <ImageWithFallback 
                    src={workshopImage}
                    alt="Buildathon Banner"
                    className="w-full h-full object-cover object-top opacity-90"
                  />
                </div>
                <div className="w-1/2 h-full">
                  <ImageWithFallback 
                    src={workshopImage}
                    alt="Workshop Poster"
                    className="w-full h-full object-cover object-bottom opacity-90"
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
                    <span className="text-xl font-bold">437</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">24</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">8</span>
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
              "오프라인 워크샵에서 다뤄진 Story Network의 기술적 특징과 빌더톤 참여 가이드를 카드뉴스 형태로 제작하여 배포. 
              참여 독려."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

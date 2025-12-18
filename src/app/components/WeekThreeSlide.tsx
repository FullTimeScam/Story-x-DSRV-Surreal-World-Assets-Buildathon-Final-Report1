import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, FileText, Calendar, Eye, Repeat, Heart, MessageCircle, Twitter } from 'lucide-react';
import buildathonWhyImage from "figma:asset/8e52abd40d930f6e64f4fc423732780b740ad84e.png";
import posterTweet from "figma:asset/18a78ef1ae741d56269bf96d49418e99287d4822.png";
import offlinePoster from "figma:asset/f75ae9b42a7257671fdbc09af62ca3e92c0e11fa.png";

export function WeekThreeSlide() {
  return (
    <div className="w-full max-w-[1400px] h-full flex flex-col justify-center gap-12 px-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div className="border-l-4 border-yellow-400 pl-8">
          <div className="flex items-center gap-3 text-yellow-400 mb-2">
            <Calendar className="w-6 h-6" />
            <span className="text-xl font-bold tracking-widest uppercase">Week 3 (11/25 ~ 12/01)</span>
          </div>
          <h2 className="text-5xl font-bold mb-2">오프라인 확산 & 프로젝트 고도화</h2>
          <p className="text-2xl text-white/50 font-light">Offline Activation & Project Deep-dive</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-12">
        {/* Item 1: Offline Promotion */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">교내 포스터 부착 및 홍보</h3>
              <p className="text-white/50">Campus Promotion with X(Twitter)</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            <a 
              href="https://x.com/blockchainkor/status/1998195900280402320?s=20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              {/* Image Grid */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full border-r border-white/10">
                  <ImageWithFallback 
                    src={offlinePoster}
                    alt="Poster on Board"
                    className="w-full h-full object-cover object-center opacity-90"
                  />
                </div>
                <div className="w-1/2 h-full">
                  <ImageWithFallback 
                    src={posterTweet}
                    alt="Twitter Promotion"
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
                    <span className="text-xl font-bold">622</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">31</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">14</span>
                    <span className="text-xs text-white/50">Reposts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-xl font-bold">3</span>
                    <span className="text-xs text-white/50">Replies</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-white/70 text-sm leading-relaxed">
              "IT 대학 및 학생회관 등 주요 거점에 오프라인 포스터를 부착하고, 
              해당 활동을 SNS에 공유하여 온/오프라인 연계 홍보 효과를 극대화함."
            </p>
          </div>
        </div>

        {/* Item 2: Buildathon Why Join (Replaces Thymian) */}
        <div className="flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">빌더톤: 왜 지금 주목해야 할까?</h3>
              <p className="text-white/50">Surreal World Assets Buildathon</p>
            </div>
          </div>

          <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-yellow-400/50 transition-colors">
            <a 
              href="https://x.com/blockchainkor/status/1993635853067825570?s=20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full cursor-pointer relative"
            >
              <ImageWithFallback 
                src={buildathonWhyImage}
                alt="Buildathon Why Join"
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
                    <span className="text-xl font-bold">950</span>
                    <span className="text-xs text-white/50">Views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-xl font-bold">32</span>
                    <span className="text-xs text-white/50">Likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-xl font-bold">15</span>
                    <span className="text-xs text-white/50">Reposts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-xl font-bold">3</span>
                    <span className="text-xs text-white/50">Replies</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-white/70 text-sm leading-relaxed">
              "Story Protocol은 IP를 온체인 자산으로 전환하는 인프라입니다. 이번 빌더톤은 단순 해커톤이 아닌, 
              실제 IP 프로젝트를 출시하고 초기 생태계의 설계자가 될 수 있는 실전형 이벤트임을 강조했습니다."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

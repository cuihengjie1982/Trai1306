/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

// Simple SVG Icons components
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white drop-shadow-lg transform transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
);

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    needs: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Lead Form Submitted:', formData);
    setIsSubmitted(true);
    alert('感谢您的提交！我们会尽快联系您。');
    setFormData({ name: '', email: '', contact: '', needs: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white font-bold text-xl p-1 rounded">cm</div>
            <span className="font-bold text-xl tracking-tight text-gray-900">CallMastery</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-orange-500 transition-colors">关于我们</a>
            <a href="#" className="hover:text-orange-500 transition-colors">课程方案</a>
            <a href="#" className="hover:text-orange-500 transition-colors">博客文章</a>
            <a href="#" className="hover:text-orange-500 transition-colors">学习资源</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-sm hover:shadow-md">
            加入学习圈
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-16 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
              专业呼叫中心运营提升方案
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
              让您的呼叫中心 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">效率提升 30%</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              通过系统化的培训课程和实战经验，帮助企业优化客服流程、提升团队效能、降低运营成本。适合呼叫中心管理者和运营负责人。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                加入学习圈
                <span className="block text-[10px] font-normal opacity-80 mt-0.5">免费加入，立刻开始</span>
              </button>
              <button className="bg-white border border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all hover:bg-gray-50 hover:shadow-md">
                查看课程方案
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 pt-2">
              <span className="flex items-center font-medium"><CheckIcon /> 100+ 企业选择</span>
              <span className="flex items-center font-medium"><CheckIcon /> 50+ 实战视频课程</span>
              <span className="flex items-center font-medium"><CheckIcon /> 定期更新行业洞察</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Call Center Team" 
              className="rounded-2xl shadow-2xl z-10 relative transform hover:scale-[1.01] transition-transform duration-500 border-4 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl z-20 hidden md:flex items-center gap-4 animate-bounce-slow border border-gray-50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold shadow-inner">KPI</div>
              <div>
                <p className="text-sm font-bold text-gray-900">效能分析报告</p>
                <p className="text-xs text-green-600 font-bold flex items-center">
                   <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7l-5 5 1.414 1.414L12 9.828l3.586 3.586L17 12l-5-5z" clipRule="evenodd"/></svg>
                   +24.5% 环比增长
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid - Redesigned for better aesthetics */}
      <section className="py-24 bg-white relative">
         {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-50 opacity-50 blur-2xl"></div>
             <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-orange-50 opacity-50 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">为什么选择我们的课程方案？</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              我们深知呼叫中心运营的痛点。因此，我们打造了一套不仅传授知识，更注重实战落地和效能提升的完整体系。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                  title: "系统化课程体系", 
                  desc: "告别碎片化学习。从坐席基础到班组长管理，再到运营总监战略，构建完整的呼叫中心人才培养路径。", 
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  color: "text-blue-600",
                  bg: "bg-blue-50"
              },
              { 
                  title: "实战视频教学", 
                  desc: "拒绝枯燥理论。所有课程均基于真实业务场景录制，还原客服现场，提供可直接复用的管理话术和流程模版。", 
                  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                  color: "text-orange-600",
                  bg: "bg-orange-50"
              },
              { 
                  title: "数据分析驱动", 
                  desc: "教会您如何通过数据发现问题。深入解析接通率、满意度、AHT等核心指标，用数据指导管理决策。", 
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  color: "text-cyan-600",
                  bg: "bg-cyan-50"
              },
              { 
                  title: "运营专家导师团", 
                  desc: "我们的讲师均来自世界500强企业的呼叫中心负责人，平均拥有10年以上一线管理经验。", 
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  color: "text-purple-600",
                  bg: "bg-purple-50"
              },
              { 
                  title: "实用的SOP工具包", 
                  desc: "订阅会员可免费下载最新的SOP流程图、排班表模版、质检评分表等实用工具，让管理更轻松。", 
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  color: "text-rose-600",
                  bg: "bg-rose-50"
              },
              { 
                  title: "社群陪伴式学习", 
                  desc: "加入高品质学员社群，与同行交流经验，定期举办线上答疑直播，解决您在实际工作中遇到的难题。", 
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                  color: "text-indigo-600",
                  bg: "bg-indigo-50"
              },
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full relative overflow-hidden hover:-translate-y-1">
                <div className={`absolute top-0 left-0 w-full h-1 ${item.bg.replace('bg-', 'bg-gradient-to-r from-transparent via-').replace('-50', '-400')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 transition-colors group-hover:scale-110 duration-300`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto cursor-pointer">
                  了解更多 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-500/50 rounded-2xl z-0"></div>
             <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Learning Steps" 
              className="rounded-2xl shadow-2xl z-10 relative"
            />
          </div>
          <div className="md:w-1/2 space-y-10">
            <div>
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">学习路径</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">3步开启您的学习之旅</h2>
              <p className="text-gray-400 text-lg">简单高效的学习流程，帮助您快速掌握呼叫中心运营的核心知识</p>
            </div>
            
            <div className="space-y-8">
              {[
                { id: 1, title: "领取免费资源", desc: "获取我们精心准备的呼叫中心运营指南，了解核心概念和最佳实践" },
                { id: 2, title: "观看视频课程", desc: "按照系统化的课程体系学习，通过实战案例深入理解运营策略和技巧" },
                { id: 3, title: "应用到实践", desc: "将所学知识应用到日常工作中，持续优化流程，提升团队效能和客户满意度" }
              ].map((step) => (
                <div key={step.id} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 group-hover:bg-blue-600 border border-blue-600/50 rounded-full flex items-center justify-center font-bold text-xl text-white transition-colors shadow-lg shadow-blue-900/20">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transform hover:-translate-y-0.5">
              立即开始学习
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section - Improved Structure */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
                精选视频课程
              </span>
              <h2 className="text-3xl font-bold text-gray-900">最新实战视频内容</h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                通过实战视频课程，快速掌握呼叫中心运营的核心技能
              </p>
            </div>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
              查看全部课程 <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Video - Left Column (2/3 width) */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-5 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Featured Video" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                     <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-medium px-3 py-1 rounded backdrop-blur-sm">
                  45:30
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
                  本周主打
                </div>
              </div>
              
              <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm">
                    <span className="bg-blue-100 text-blue-700 font-bold px-2.5 py-0.5 rounded text-xs">运营管理</span>
                    <span className="text-gray-500">2024-05-12 发布</span>
                    <span className="text-gray-500 flex items-center"><svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg> 2.3k 次观看</span>
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  呼叫中心效能提升完整指南：从入门到精通
                 </h3>
                 <p className="text-gray-600 leading-relaxed line-clamp-2">
                  深入讲解如何通过系统化的方法提升呼叫中心整体效能，包括人员管理、流程优化、技术应用等核心要素。本课程由拥有10年经验的资深专家主讲。
                 </p>
              </div>
            </div>

            {/* Video List - Right Column (1/3 width) */}
            <div className="flex flex-col gap-6">
              <h4 className="text-gray-900 font-bold text-lg pb-2 border-b border-gray-200">热门推荐</h4>
              {[
                { title: "新员工快速上岗培训方法论", desc: "分享7天快速培训新员工的有效方法", duration: "22:15", tag: "培训技巧", views: "1.8k", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                { title: "关键KPI指标监控与数据分析", desc: "教您如何通过数据分析发现问题", duration: "18:45", tag: "数据分析", views: "1.5k", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                { title: "提升客户满意度的实战沟通技巧", desc: "全面提升客户体验的沟通策略", duration: "25:30", tag: "客户服务", views: "2.1k", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
                { title: "智能化工具应用与流程再造", desc: "了解最新的AI工具和自动化技术", duration: "32:20", tag: "流程优化", views: "890", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
              ].map((video, idx) => (
                <div key={idx} className="group cursor-pointer flex gap-4 items-start p-3 -mx-3 hover:bg-white hover:shadow-md rounded-xl transition-all">
                  <div className="w-36 h-24 flex-shrink-0 relative rounded-lg overflow-hidden bg-gray-200">
                     <img 
                       src={video.img} 
                       alt={video.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                     <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-medium">
                       {video.duration}
                     </div>
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <div className="flex flex-col h-full py-0.5">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1 mb-2">{video.desc}</p>
                    <div className="flex items-center text-xs text-gray-400 mt-auto">
                       <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded mr-2">{video.tag}</span>
                       <span>{video.views} 次观看</span>
                    </div>
                  </div>
                </div>
              ))}
              <button className="mt-2 w-full py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all text-sm shadow-sm">
                加载更多视频
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">解锁全部 50+ 专业视频课程</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">获取完整的呼叫中心运营体系，包括高级策略、案例分析和实操演示。加入我们，开启职业进阶之路。</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-orange-500/30">
                    观看全部课程
                </button>
                <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                    加入学习圈
                </button>
            </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">最新博客文章</h2>
                  <p className="text-gray-600">获取呼叫中心运营的最新洞察、实用技巧和行业趋势</p>
                </div>
                <button className="hidden md:block text-blue-600 font-medium hover:underline">
                    查看所有文章 &rarr;
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { title: "如何优化呼叫中心的排班管理", date: "2025年1月", read: "5分钟阅读", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "运营策略" },
                    { title: "新员工培训的完整流程指南", date: "2025年1月", read: "7分钟阅读", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "培训技巧" },
                    { title: "必须关注的5个呼叫中心KPI指标", date: "2024年12月", read: "6分钟阅读", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "数据分析" },
                 ].map((post, idx) => (
                     <div key={idx} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 cursor-pointer">
                         <div className="h-52 overflow-hidden relative">
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">{post.tag}</span>
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                         </div>
                         <div className="p-6">
                             <div className="flex items-center text-xs text-gray-400 mb-3 font-medium">
                                 <span>{post.date}</span>
                                 <span className="mx-2">•</span>
                                 <span>{post.read}</span>
                             </div>
                             <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                             <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                                 {idx === 0 && "科学的排班管理能够显著提升呼叫中心的运营效率，减少人力浪费，提升员工满意度。本文详细介绍了三种高效排班模型。"}
                                 {idx === 1 && "系统化的新员工培训是团队成功的关键，了解如何构建高效的培训体系，让新人在第一周就能产生价值。"}
                                 {idx === 2 && "通过正确的KPI指标监控，优化业务流程，发现问题并采取改进措施。这5个指标是每个运营经理都必须掌握的。"}
                             </p>
                             <span className="text-blue-600 font-bold text-sm hover:underline flex items-center">
                                 阅读全文 <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                             </span>
                         </div>
                     </div>
                 ))}
            </div>
            <div className="text-center mt-8 md:hidden">
                <button className="text-blue-600 font-medium hover:underline">
                    查看所有文章 &rarr;
                </button>
            </div>
        </div>
      </section>

      {/* Lead Collection Form Section */}
      <section id="contact-form" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-blue-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/20 z-0"></div>
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
               <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">定制您的企业培训方案</h2>
                  <p className="text-blue-100 leading-relaxed mb-6">填写您的需求，我们将为您提供专属的呼叫中心运营提升计划。</p>
                  <ul className="space-y-4 text-sm text-blue-50">
                    <li className="flex items-center"><CheckIcon /> 1对1 需求诊断</li>
                    <li className="flex items-center"><CheckIcon /> 定制化课程推荐</li>
                    <li className="flex items-center"><CheckIcon /> 免费试看权限</li>
                  </ul>
               </div>
               
               <div className="relative z-10 mt-10">
                  <p className="text-xs opacity-60">已有 500+ 企业提交了需求</p>
               </div>
            </div>
            
            <div className="md:w-3/5 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">姓名 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-bold text-gray-700 mb-2">联系方式 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="contact" 
                      name="contact" 
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="手机号码"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">企业邮箱 <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="needs" className="block text-sm font-bold text-gray-700 mb-2">您的需求</label>
                  <textarea 
                    id="needs" 
                    name="needs" 
                    rows={4} 
                    value={formData.needs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="请简要描述您当前遇到的运营痛点，或希望提升的具体指标..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center"
                >
                  {isSubmitted ? (
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      提交成功
                    </span>
                  ) : '提交需求，获取方案'}
                </button>
                <p className="text-center text-xs text-gray-400">点击提交即表示您同意我们的隐私政策</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-orange-500 text-white font-bold text-xl p-1.5 rounded">cm</div>
                <span className="font-bold text-2xl text-white tracking-tight">CallMastery</span>
              </div>
              <p className="text-sm leading-relaxed mb-8 max-w-sm text-slate-400">
                专注呼叫中心运营提升，十年深耕呼叫中心行业，助力企业构建高效的客户服务体系。通过系统化的培训课程和专业咨询，助力团队成长。
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><span className="font-bold text-xs">WX</span></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><span className="font-bold text-xs">IN</span></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><span className="font-bold text-xs">EM</span></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">运营培训</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">系统化课程体系</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">团队管理课程</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">数据分析实战</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">客户体验优化</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">联系我们</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">关于我们</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">商务合作</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">加入我们</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors block py-1">帮助中心</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
             <p>&copy; 2024 CallMastery. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-300">隐私政策</a>
                <a href="#" className="hover:text-slate-300">服务条款</a>
                <a href="#" className="hover:text-slate-300">Cookie 设置</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
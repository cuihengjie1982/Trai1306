
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

// --- Simple SVG Icons ---
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white drop-shadow-lg transform transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
);

const WechatIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.69 15.29c-.51 0-1.03-.05-1.52-.14l-1.84 1.08c-.45.27-.82.07-.82-.45v-1.41c-1.59-1.15-2.56-2.79-2.56-4.58 0-3.2 3.03-5.79 6.77-5.79s6.77 2.59 6.77 5.79-3.03 5.5-6.8 5.5zm9.6 2.93c-.41 0-.83-.04-1.23-.11l-1.49.87c-.36.21-.66.06-.66-.36v-1.14c-1.29-.93-2.07-2.26-2.07-3.71 0-2.59 2.46-4.69 5.49-4.69s5.49 2.1 5.49 4.69-2.46 4.45-5.53 4.45z"/></svg>
);

// --- Sub-Components ---

// 1. Home Page Component
const HomePage: React.FC<{ onNavigate: (page: 'home' | 'course-plan' | 'blog' | 'video-learning') => void; onJoin: () => void }> = ({ onNavigate, onJoin }) => {
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
    console.log('Lead Form Submitted:', formData);
    setIsSubmitted(true);
    alert('感谢您的提交！我们会尽快联系您。');
    setFormData({ name: '', email: '', contact: '', needs: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="animate-fade-in">
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
              <button 
                onClick={onJoin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              >
                加入学习圈
                <span className="block text-[10px] font-normal opacity-80 mt-0.5">免费加入，立刻开始</span>
              </button>
              <button 
                onClick={() => onNavigate('course-plan')}
                className="bg-white border border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all hover:bg-gray-50 hover:shadow-md"
              >
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
            
            <button 
              onClick={() => onNavigate('course-plan')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transform hover:-translate-y-0.5"
            >
              立即开始学习
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
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
            <button onClick={() => onNavigate('video-learning')} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
              查看全部课程 <ArrowRightIcon />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Video */}
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-5 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Featured Video" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                     <PlayIcon />
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

            {/* Video List */}
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
              <button onClick={() => onNavigate('video-learning')} className="mt-2 w-full py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-white hover:border-blue-300 hover:text-blue-600 transition-all text-sm shadow-sm">
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
                <button 
                  onClick={() => onNavigate('course-plan')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-orange-500/30"
                >
                    观看全部课程
                </button>
                <button 
                  onClick={onJoin}
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                >
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
                <button 
                  onClick={() => onNavigate('blog')}
                  className="hidden md:flex items-center text-blue-600 font-medium hover:underline group"
                >
                    查看所有文章 <ArrowRightIcon />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { title: "如何优化呼叫中心的排班管理", date: "2025年1月", read: "5分钟阅读", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "运营策略" },
                    { title: "新员工培训的完整流程指南", date: "2025年1月", read: "7分钟阅读", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "培训技巧" },
                    { title: "必须关注的5个呼叫中心KPI指标", date: "2024年12月", read: "6分钟阅读", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "数据分析" },
                 ].map((post, idx) => (
                     <div key={idx} onClick={() => onNavigate('blog')} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 cursor-pointer">
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
                                 阅读全文 <ArrowRightIcon />
                             </span>
                         </div>
                     </div>
                 ))}
            </div>
            <div className="text-center mt-8 md:hidden">
                <button onClick={() => onNavigate('blog')} className="text-blue-600 font-medium hover:underline flex items-center justify-center w-full py-3 bg-blue-50 rounded-lg">
                    查看所有文章 <ArrowRightIcon />
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
    </div>
  );
};

// 2. Course Plan Page Component
const CoursePlanPage: React.FC<{ onJoin: () => void }> = ({ onJoin }) => {
  const modules = [
    {
      title: "基础运营规范 (Foundation)",
      description: "构建呼叫中心运行的底层逻辑与基础设施标准",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      items: ["职场行为规范手册", "系统操作权限管理规定", "设备资产管理办法", "信息安全与保密协议", "突发事件应急预案 (BCP)"]
    },
    {
      title: "人员管理体系 (People)",
      description: "选、育、用、留全流程的人才管理SOP",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      items: ["客服专员胜任力模型", "标准化招聘面试流程", "新员工入职培训SOP", "员工晋升与职业发展路径", "离职面谈与交接流程"]
    },
    {
      title: "现场管理流程 (Operations)",
      description: "确保日常业务平稳有序进行的现场管控标准",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      items: ["班前/班后会执行标准", "现场巡视与异常处理机制", "坐席辅助与支撑流程", "话务高峰期应急调度策略", "交接班管理日志规范"]
    },
    {
      title: "质量与绩效 (Quality & KPI)",
      description: "通过数据驱动和质量监控提升团队效能",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      items: ["QA质检评分标准表 (细则)", "录音监听与校准流程", "绩效考核指标库 (KPI)", "月度绩效面谈SOP", "客户满意度(CSAT)提升方案"]
    }
  ];

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block">Operations Excellence</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">呼叫中心 SOP 标准化运营体系</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              从基础建设到高阶管理，全方位打造“自动运转”的高效呼叫中心。
              我们提供的不仅仅是文档，而是经过实战验证的管理智慧。
            </p>
         </div>
      </header>

      {/* Main Content Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SOP 核心模块</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((mod, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                   <div className="flex items-start gap-5 mb-8">
                      <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={mod.icon}></path></svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{mod.title}</h3>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">{mod.description}</p>
                      </div>
                   </div>
                   <div className="space-y-3">
                      {mod.items.map((item, i) => (
                        <div key={i} className="flex items-center text-gray-700 bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                           <div className="bg-white rounded-full p-1 mr-3 shadow-sm text-green-500">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                           </div>
                           <span className="font-medium">{item}</span>
                           <button className="ml-auto text-xs text-blue-500 hover:text-blue-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">预览</button>
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
      
      {/* Preview & CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold mb-4 text-gray-900">SOP 文档库预览</h2>
             <p className="text-gray-500 mb-12">包含 50+ 个标准文档、流程图与表单模版</p>
             
             <div className="relative max-w-5xl mx-auto mb-12">
                {/* Blurred Document Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60 select-none pointer-events-none overflow-hidden h-80 relative">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex flex-col items-center space-y-2 transform scale-95">
                            <div className="w-full h-2 bg-gray-200 rounded"></div>
                            <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                            <div className="w-full h-20 bg-gray-100 rounded mt-4"></div>
                            <div className="w-full h-2 bg-gray-200 rounded mt-2"></div>
                            <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                            <div className="w-full h-2 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
                
                {/* CTA Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-white via-white/90 to-transparent z-10 pt-20">
                    <div className="bg-white p-2 rounded-2xl shadow-2xl mb-8">
                       <div className="bg-slate-900 text-white px-8 py-10 rounded-xl text-center">
                          <DocumentIcon />
                          <h3 className="text-2xl font-bold mt-4 mb-2">获取完整版 SOP 手册</h3>
                          <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">加入我们的学习圈，即可免费下载所有文档和更新。</p>
                          <button onClick={onJoin} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all w-full">
                              立即加入学习圈
                          </button>
                       </div>
                    </div>
                </div>
             </div>
         </div>
      </section>
    </div>
  );
}

// 3. Blog Page Component
const BlogPage: React.FC<{ onNavigate: (page: 'home' | 'course-plan' | 'blog' | 'video-learning') => void }> = ({ onNavigate }) => {
  const posts = [
    { 
      id: 1, 
      title: "如何优化呼叫中心的排班管理", 
      excerpt: "科学的排班管理能够显著提升呼叫中心的运营效率，减少人力浪费，提升员工满意度。本文详细介绍了三种高效排班模型。", 
      date: "2025年1月15日", 
      readTime: "5分钟阅读", 
      category: "运营策略",
      author: "张志明",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 2, 
      title: "新员工培训的完整流程指南", 
      excerpt: "系统化的新员工培训是团队成功的关键，了解如何构建高效的培训体系，让新人在第一周就能产生价值，降低早期流失率。", 
      date: "2025年1月12日", 
      readTime: "7分钟阅读", 
      category: "培训技巧",
      author: "李娜",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 3, 
      title: "必须关注的5个呼叫中心KPI指标", 
      excerpt: "通过正确的KPI指标监控，优化业务流程，发现问题并采取改进措施。这5个指标是每个运营经理都必须掌握的核心数据。", 
      date: "2024年12月28日", 
      readTime: "6分钟阅读", 
      category: "数据分析",
      author: "王伟",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 4, 
      title: "AI时代：客服机器人与人工的协作模式", 
      excerpt: "人工智能正在重塑呼叫中心。探讨如何利用AI处理简单重复性问题，让人工坐席专注于处理高价值、复杂的情感交互。", 
      date: "2024年12月20日", 
      readTime: "8分钟阅读", 
      category: "技术趋势",
      author: "陈思思",
      img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 5, 
      title: "如何处理愤怒客户：投诉处理的艺术", 
      excerpt: "投诉是转机。掌握正确的情绪安抚技巧和投诉处理流程，不仅能化解危机，甚至能将不满客户转化为忠实拥趸。", 
      date: "2024年12月15日", 
      readTime: "4分钟阅读", 
      category: "客户体验",
      author: "赵刚",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    { 
      id: 6, 
      title: "远程办公模式下的呼叫中心管理挑战", 
      excerpt: "随着混合办公的普及，如何有效管理远程分布的客服团队？本文分享了远程监控、沟通协作与团队建设的实用策略。", 
      date: "2024年12月05日", 
      readTime: "6分钟阅读", 
      category: "运营策略",
      author: "刘强",
      img: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
  ];

  const [activeCategory, setActiveCategory] = useState('全部');

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
       {/* Header */}
       <div className="bg-white border-b border-gray-100 py-16 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent opacity-50 z-0"></div>
         <div className="relative z-10">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">CallMastery Insights</span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">行业洞察与运营干货</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              探索呼叫中心管理的最新趋势、实战技巧与深度案例分析，助您保持行业领先。
            </p>
         </div>
       </div>

       {/* Content */}
       <div className="container mx-auto px-4 py-12">
         {/* Categories Filter */}
         <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['全部', '运营策略', '培训技巧', '数据分析', '客户体验', '技术趋势'].map(tag => (
              <button 
                key={tag} 
                onClick={() => setActiveCategory(tag)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === tag 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm'
                }`}
              >
                {tag}
              </button>
            ))}
         </div>

         {/* Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter(post => activeCategory === '全部' || post.category === activeCategory)
              .map(post => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1 flex flex-col h-full">
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700 shadow-sm">
                      {post.category}
                   </div>
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                   <div className="flex items-center text-xs text-gray-400 mb-3 font-medium">
                      <span>{post.date}</span> 
                      <span className="mx-2 text-gray-300">•</span> 
                      <span>{post.readTime}</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                   </h3>
                   <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                   </p>
                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                            {post.author.charAt(0)}
                         </div>
                         <span className="text-xs font-bold text-gray-700">{post.author}</span>
                      </div>
                      <span className="text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform flex items-center">
                        阅读全文 <ArrowRightIcon />
                      </span>
                   </div>
                </div>
              </article>
            ))}
         </div>

         {/* Load More */}
         <div className="mt-16 text-center">
           <button className="px-8 py-3 border border-gray-200 rounded-xl text-gray-500 font-medium hover:bg-white hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all">
             加载更多文章
           </button>
         </div>
       </div>
    </div>
  );
}

// 4. Video Learning Page Component (New)
const VideoLearningPage: React.FC = () => {
  // Mock Data Generation for 24 videos
  const allVideos = [
    {
      id: 1,
      title: "呼叫中心效能提升完整指南：从入门到精通",
      desc: "深入讲解如何通过系统化的方法提升呼叫中心整体效能，包括人员管理、流程优化。",
      duration: "45:30",
      tags: ["运营管理", "精选"],
      views: "2.3k",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "新员工快速上岗培训方法论",
      desc: "分享7天快速培训新员工的有效方法，缩短爬坡期。",
      duration: "22:15",
      tags: ["培训技巧", "新人"],
      views: "1.8k",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "关键KPI指标监控与数据分析",
      desc: "教您如何通过数据分析发现问题，涵盖接通率、平均处理时长等核心指标。",
      duration: "18:45",
      tags: ["数据分析", "KPI"],
      views: "1.5k",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "提升客户满意度的实战沟通技巧",
      desc: "全面提升客户体验的沟通策略，话术设计与情商训练。",
      duration: "25:30",
      tags: ["客户服务", "沟通"],
      views: "2.1k",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "投诉处理：化解危机的黄金6步法",
      desc: "遇到愤怒客户怎么办？资深讲师手把手教你平息怒火，挽回信任。",
      duration: "30:10",
      tags: ["投诉处理", "危机公关"],
      views: "3.4k",
      img: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "质检评分标准的设计与实施",
      desc: "如何制定公平有效的质检表？从维度设计到校准流程全解析。",
      duration: "40:00",
      tags: ["质量管理", "QA"],
      views: "1.2k",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "智能化工具应用与流程再造",
      desc: "了解最新的AI工具和自动化技术，如何利用科技降本增效。",
      duration: "32:20",
      tags: ["流程优化", "AI技术"],
      views: "890",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "呼叫中心班组长管理技能进阶",
      desc: "从优秀坐席到合格班组长的转身，团队激励与现场管控技巧。",
      duration: "28:50",
      tags: ["团队管理", "领导力"],
      views: "1.6k",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    // Generate more mock data to reach 20+ items
    ...Array.from({ length: 16 }).map((_, i) => ({
      id: 9 + i,
      title: `呼叫中心实战案例分析系列 Vol.${i + 1}`,
      desc: "深入剖析真实业务场景中的疑难杂症，提供可落地的解决方案。",
      duration: `${10 + i % 20}:00`,
      tags: i % 2 === 0 ? ["案例分析", "实战"] : ["技巧分享", "进阶"],
      views: `${(Math.random() * 5).toFixed(1)}k`,
      img: `https://images.unsplash.com/photo-${[
        '1521737711867-e3b97375f902', 
        '1573496359142-b8d87734a5a2', 
        '1556761175-5973dc0f32e7', 
        '1600880292203-757bb62b4baf'
      ][i % 4]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    }))
  ];

  const [visibleCount, setVisibleCount] = useState(9);
  const [showShareAlert, setShowShareAlert] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, allVideos.length));
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // In a real app, this would open a native share dialog or copy to clipboard
    // For now, we simulate the feedback
    setShowShareAlert(true);
    setTimeout(() => setShowShareAlert(false), 2000);
  };

  const handleLearningClick = () => {
    // Placeholder for external platform redirection
    // window.location.href = "https://your-learning-platform.com";
    alert("即将跳转到专业视频学习平台...");
  };

  return (
    <div className="animate-fade-in min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="text-orange-400 font-bold tracking-wider uppercase text-xs mb-3 block">Video Learning Center</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">视频学习中心</h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              汇集 50+ 门精品视频课程，随时随地开启您的职业进阶之旅
            </p>
         </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 py-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVideos.slice(0, visibleCount).map((video) => (
               <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gray-200 overflow-hidden cursor-pointer" onClick={handleLearningClick}>
                     <img src={video.img} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                           <svg className="w-5 h-5 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                     </div>
                     <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm font-medium">
                        {video.duration}
                     </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                     <div className="flex flex-wrap gap-2 mb-3">
                        {video.tags.map((tag, i) => (
                           <span key={i} className={`text-[10px] px-2 py-0.5 rounded font-bold ${tag === '精选' ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                              {tag}
                           </span>
                        ))}
                     </div>
                     <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={handleLearningClick}>
                        {video.title}
                     </h3>
                     <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {video.desc}
                     </p>

                     {/* Footer Actions */}
                     <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-xs text-gray-400 flex items-center">
                           <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                           {video.views}
                        </span>
                        
                        <div className="flex gap-2">
                           <button 
                              onClick={handleShare}
                              className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors relative group/btn"
                              title="分享到微信"
                           >
                              <WechatIcon />
                           </button>
                           <button 
                              onClick={handleLearningClick}
                              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-blue-200"
                           >
                              立即学习
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Load More Button */}
         {visibleCount < allVideos.length && (
            <div className="mt-12 text-center">
               <button 
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-white border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
               >
                  加载更多视频
               </button>
            </div>
         )}
      </div>

      {/* Share Alert Feedback */}
      {showShareAlert && (
         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-lg shadow-2xl z-[70] flex items-center animate-fade-in">
            <CheckIcon />
            <span>链接已复制，请在微信中粘贴分享</span>
         </div>
      )}
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'course-plan' | 'blog' | 'video-learning'>('home');

  // Resource/Community Modal state
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [resourceFormData, setResourceFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: ''
  });
  const [resourceSubmitted, setResourceSubmitted] = useState(false);

  const handleResourceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResourceFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResourceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Resource Form Submitted:', resourceFormData);
    setResourceSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setResourceFormData({ name: '', phone: '', email: '', position: '' });
      setTimeout(() => {
        setResourceSubmitted(false);
        setShowResourceModal(false);
      }, 2000);
    }, 1000);
  };

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="bg-orange-500 text-white font-bold text-xl p-1 rounded">cm</div>
            <span className="font-bold text-xl tracking-tight text-gray-900">CallMastery</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-orange-500 transition-colors ${currentPage === 'home' ? 'text-orange-500 font-bold' : ''}`}>首页</button>
            <button onClick={() => setCurrentPage('course-plan')} className={`hover:text-orange-500 transition-colors ${currentPage === 'course-plan' ? 'text-orange-500 font-bold' : ''}`}>课程方案</button>
            <button onClick={() => setCurrentPage('blog')} className={`hover:text-orange-500 transition-colors ${currentPage === 'blog' ? 'text-orange-500 font-bold' : ''}`}>博客文章</button>
            <button onClick={() => setCurrentPage('video-learning')} className={`hover:text-orange-500 transition-colors ${currentPage === 'video-learning' ? 'text-orange-500 font-bold' : ''}`}>视频学习</button>
          </div>
          <button 
            onClick={() => setShowResourceModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-sm hover:shadow-md"
          >
            加入学习圈
          </button>
        </div>
      </nav>

      {/* Page Rendering */}
      {currentPage === 'home' && (
        <HomePage onNavigate={setCurrentPage} onJoin={() => setShowResourceModal(true)} />
      )}
      {currentPage === 'course-plan' && (
        <CoursePlanPage onJoin={() => setShowResourceModal(true)} />
      )}
      {currentPage === 'blog' && (
        <BlogPage onNavigate={setCurrentPage} />
      )}
      {currentPage === 'video-learning' && (
        <VideoLearningPage />
      )}

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
                <li><button onClick={() => setCurrentPage('course-plan')} className="hover:text-blue-400 transition-colors block py-1 text-left">系统化课程体系</button></li>
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

      {/* Resource/Join Modal */}
      {showResourceModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300" onClick={() => setShowResourceModal(false)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row relative animate-[fade-in-up_0.3s_ease-out]" 
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShowResourceModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 p-1 hover:bg-gray-100 rounded-full transition-colors">
              <CloseIcon />
            </button>

            {/* Left: Community & QR Code */}
            <div className="md:w-2/5 bg-blue-600 p-8 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-700 opacity-50 z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">扫码加入学习社群</h3>
                <p className="text-blue-100 text-sm mb-6">与 5000+ 呼叫中心精英共同成长</p>
                
                <div className="bg-white p-3 rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                  {/* User provided QR Code */}
                  <img 
                    src="./wechat_qr.png" 
                    alt="扫码加入学习群" 
                    className="w-40 h-40 object-contain rounded-lg" 
                  />
                </div>
                
                <div className="space-y-3 text-left text-sm text-blue-50 w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-3 bg-blue-700/30 p-2 rounded-lg">
                    <div className="bg-blue-500 rounded-full p-1"><CheckIcon /></div>
                    <span>每日早报：行业动态一网打尽</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-700/30 p-2 rounded-lg">
                    <div className="bg-blue-500 rounded-full p-1"><CheckIcon /></div>
                    <span>大咖直播：每周四晚8点干货分享</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-700/30 p-2 rounded-lg">
                    <div className="bg-blue-500 rounded-full p-1"><CheckIcon /></div>
                    <span>资源对接：优质人脉与招聘信息</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Resource Form */}
            <div className="md:w-3/5 p-8 md:p-10 relative">
              {resourceSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">资料领取成功！</h3>
                   <p className="text-gray-500 max-w-xs">
                     《呼叫中心精细化运营 SOP 手册》已发送至您的邮箱，请注意查收。同时欢迎您加入左侧的学习社群。
                   </p>
                   <button onClick={() => setShowResourceModal(false)} className="mt-6 text-blue-600 font-bold hover:underline">
                     返回首页
                   </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">限时福利</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-3">免费领取 SOP 工具包</h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                      完善以下信息，我们将把包含 <span className="text-gray-900 font-medium">排班模版、质检评分表、话术库</span> 等在内的工具包发送给您。
                    </p>
                  </div>
                  
                  <form onSubmit={handleResourceSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">姓名</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={resourceFormData.name}
                            onChange={handleResourceInputChange}
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                            placeholder="您的称呼"
                          />
                       </div>
                       <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">职位</label>
                          <input 
                            type="text" 
                            name="position"
                            value={resourceFormData.position}
                            onChange={handleResourceInputChange}
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                            placeholder="如：运营主管"
                          />
                       </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">手机/微信号</label>
                      <input 
                        type="text" 
                        name="phone"
                        required
                        value={resourceFormData.phone}
                        onChange={handleResourceInputChange}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                        placeholder="用于加入社群审核"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">接收邮箱</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={resourceFormData.email}
                        onChange={handleResourceInputChange}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
                        placeholder="用于接收资料包"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3.5 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
                      >
                        立即领取资料
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-3">
                        我们承诺严格保密您的个人信息，仅用于资料发送。
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

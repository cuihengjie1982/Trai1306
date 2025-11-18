
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
  <svg className="w-12 h-12 text-white opacity-80 hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
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
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white font-bold text-xl p-1 rounded">cm</div>
            <span className="font-bold text-xl tracking-tight">CallMastery</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-orange-500">关于我们</a>
            <a href="#" className="hover:text-orange-500">课程方案</a>
            <a href="#" className="hover:text-orange-500">博客文章</a>
            <a href="#" className="hover:text-orange-500">学习资源</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
            加入学习圈
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 to-white pt-16 pb-20">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
              专业呼叫中心运营提升方案
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              让您的呼叫中心 <br />
              <span className="text-blue-600">效率提升 30%</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              通过系统化的培训课程和实战经验，帮助企业优化客服流程、提升团队效能、降低运营成本。适合呼叫中心管理者和运营负责人。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
                加入学习圈
                <span className="block text-xs font-normal opacity-80">免费加入，立刻开始</span>
              </button>
              <button className="bg-white border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors">
                查看课程方案
              </button>
            </div>
            <div className="flex gap-6 text-xs text-gray-500 pt-2">
              <span className="flex items-center"><CheckIcon /> 100+ 企业选择</span>
              <span className="flex items-center"><CheckIcon /> 50+ 实战视频课程</span>
              <span className="flex items-center"><CheckIcon /> 定期更新博客文章</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="Call Center Team" 
              className="rounded-xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">KPI</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">效能分析</p>
                  <p className="text-xs text-green-600">+24.5% 增长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择我们的课程方案？</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">系统化的培训体系，结合实战经验，助您快速掌握呼叫中心运营的核心技能</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "系统化课程体系", desc: "从基础到进阶，完整覆盖呼叫中心运营的各个环节，帮助您建立完善的知识架构", color: "bg-blue-100 text-blue-600" },
              { title: "高质量视频教学", desc: "50+ 精心制作的实战视频课程，随时随地学习，反复观看巩固知识点", color: "bg-yellow-100 text-yellow-600" },
              { title: "实战案例分析", desc: "真实企业案例深度剖析，学习如何在实际工作中应用所学知识，快速见效", color: "bg-green-100 text-green-600" },
              { title: "专业博客文章", desc: "定期发布行业洞察、实用技巧和最新趋势，让您保持竞争优势", color: "bg-red-100 text-red-600" },
              { title: "实用工具资源", desc: "提供可下载的模板、工具包和指南，直接应用到您的日常工作中", color: "bg-purple-100 text-purple-600" },
              { title: "持续更新内容", desc: "根据行业变化和用户反馈，不断更新课程和资源，确保内容的实效性", color: "bg-indigo-100 text-indigo-600" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-white group">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${item.color}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:underline">
                  了解更多 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Learning Steps" 
              className="rounded-lg shadow-2xl opacity-90"
            />
          </div>
          <div className="md:w-1/2 space-y-8">
            <div>
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">学习路径</span>
              <h2 className="text-3xl font-bold mb-4">3步开启您的学习之旅</h2>
              <p className="text-gray-400">简单高效的学习流程，帮助您快速掌握呼叫中心运营的核心知识</p>
            </div>
            
            <div className="space-y-6">
              {[
                { id: 1, title: "领取免费资源", desc: "获取我们精心准备的呼叫中心运营指南，了解核心概念和最佳实践" },
                { id: 2, title: "观看视频课程", desc: "按照系统化的课程体系学习，通过实战案例深入理解运营策略和技巧" },
                { id: 3, title: "应用到实践", desc: "将所学知识应用到日常工作中，持续优化流程，提升团队效能和客户满意度" }
              ].map((step) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition-colors">
              立即开始学习
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">精选视频课程</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">最新视频内容</h2>
            <p className="text-gray-600 mt-2">通过实战视频课程，快速掌握呼叫中心运营的核心技能和实用技巧</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "新员工快速上岗培训方法", desc: "分享7天快速培训新员工的有效方法，帮助新人快速掌握核心技能并独立上岗。", views: "1.8k", duration: "22:15", tag: "培训技巧" },
              { title: "关键KPI指标监控与优化", desc: "教您如何通过数据分析发现问题，制定改进策略，持续优化呼叫中心表现。", views: "1.5k", duration: "18:45", tag: "数据分析" },
              { title: "提升客户满意度的实战技巧", desc: "从沟通技巧到问题解决，全面提升客户体验，打造高满意度的服务团队。", views: "2.1k", duration: "25:30", tag: "客户服务" },
              { title: "智能化工具应用与流程再造", desc: "了解最新的AI工具和自动化技术，优化业务流程，降低运营成本。", views: "890", duration: "32:20", tag: "流程优化" }
            ].map((video, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-gray-800 relative h-48 md:h-auto group cursor-pointer">
                  <img src={`https://images.unsplash.com/photo-${1550000000000 + idx}?auto=format&fit=crop&w=500&q=60`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2 inline-block">{video.tag}</span>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{video.desc}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg> {video.views}</span>
                    <button className="text-blue-600 font-medium hover:underline">观看</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">解锁全部 50+ 专业视频课程</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">获取完整的呼叫中心运营体系，包括高级策略、案例分析和实操演示</p>
            <div className="flex justify-center gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition-colors">
                    观看全部课程
                </button>
                <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
                    加入学习圈
                </button>
            </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">最新博客文章</h2>
                <p className="text-gray-600 mt-2">获取呼叫中心运营的最新洞察、实用技巧和行业趋势</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { title: "如何优化呼叫中心的排班管理", date: "2025年1月", read: "5分钟阅读", img: "https://images.unsplash.com/photo-1553877615-30c73a63f4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "运营策略" },
                    { title: "新员工培训的完整流程指南", date: "2025年1月", read: "7分钟阅读", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "培训技巧" },
                    { title: "必须关注的5个呼叫中心KPI指标", date: "2024年12月", read: "6分钟阅读", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tag: "数据分析" },
                 ].map((post, idx) => (
                     <div key={idx} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                         <div className="h-48 overflow-hidden relative">
                            <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded z-10">{post.tag}</span>
                            <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                         </div>
                         <div className="p-6">
                             <div className="flex items-center text-xs text-gray-400 mb-3">
                                 <span>{post.date}</span>
                                 <span className="mx-2">•</span>
                                 <span>{post.read}</span>
                             </div>
                             <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                             <p className="text-gray-500 text-sm mb-4">
                                 {idx === 0 && "科学的排班管理能够显著提升呼叫中心的运营效率..."}
                                 {idx === 1 && "系统化的新员工培训是团队成功的关键，了解如何构建高效的培训体系..."}
                                 {idx === 2 && "通过正确的KPI指标监控，优化业务流程，发现问题并采取改进措施..."}
                             </p>
                             <a href="#" className="text-blue-600 font-medium text-sm hover:underline flex items-center">
                                 阅读全文 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                             </a>
                         </div>
                     </div>
                 ))}
            </div>
            <div className="text-center mt-12">
                <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors text-sm">
                    查看所有文章
                </button>
            </div>
        </div>
      </section>

      {/* Lead Collection Form Section - New Addition */}
      <section id="contact-form" className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-blue-600 p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">定制您的企业培训方案</h2>
              <p className="text-blue-100">填写您的需求，我们将为您提供专属的呼叫中心运营提升计划</p>
            </div>
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">联系方式 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="contact" 
                      name="contact" 
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50"
                      placeholder="电话或手机号码"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">企业邮箱 <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50"
                    placeholder="name@company.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">我们将通过邮箱发送产品资料和定期行业报告。</p>
                </div>

                <div>
                  <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-1">您的需求</label>
                  <textarea 
                    id="needs" 
                    name="needs" 
                    rows={4} 
                    value={formData.needs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50"
                    placeholder="请简要描述您当前遇到的问题或想要提升的方向..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center"
                >
                  {isSubmitted ? '提交成功！' : '提交需求，获取方案'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-500 text-white font-bold text-lg p-1 rounded">cm</div>
                <span className="font-bold text-xl text-white tracking-tight">CallMastery</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-sm">
                专注呼叫中心运营提升，十年深耕呼叫中心行业，助力企业构建高效的客户服务体系。通过系统化的培训课程和专业咨询，助力团队成长。
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><span className="sr-only">WeChat</span>微信</a>
                <a href="#" className="hover:text-white transition-colors"><span className="sr-only">LinkedIn</span>领英</a>
                <a href="#" className="hover:text-white transition-colors"><span className="sr-only">Email</span>邮件</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">运营培训</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">系统化课程体系</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">团队管理课程</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">数据分析实战</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">客户体验优化</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">商务合作</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">加入我们</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">帮助中心</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
             <p>&copy; 2024 CallMastery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

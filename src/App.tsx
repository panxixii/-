import { 
  Monitor, 
  Smartphone, 
  Cpu, 
  Shield, 
  Globe, 
  Terminal, 
  Layers, 
  Table, 
  Lightbulb, 
  MessageCircle, 
  ChevronRight,
  Code,
  Gamepad2,
  Workflow,
  CheckCircle2,
  AlertCircle,
  Zap,
  Lock,
  Cloud,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const OS_DATA = {
  desktop: [
    {
      id: 'windows',
      name: 'Windows',
      company: 'Microsoft',
      description: '全球市场份额最大的桌面操作系统，以广泛的软硬件兼容性著称。',
      pros: ['软件生态极其丰富', '顶级游戏性能', '硬件兼容性广', '系统普及度极高'],
      cons: ['易受安全攻击', '更新频率与稳定性平衡', '隐私设置较为复杂'],
      usage: '通用办公、骨灰级游戏玩家、专业软件使用、Windows生态开发',
      color: 'bg-blue-600',
      icon: <Monitor className="w-12 h-12 text-blue-600" />
    },
    {
      id: 'macos',
      name: 'macOS',
      company: 'Apple',
      description: '专为 Mac 硬件打造，注重极致的用户体验与极致的系统稳定性。',
      pros: ['精美绝伦的 UI', '极佳的系统流畅性', '高安全性', '顶级的创意工具支持'],
      cons: ['硬件价格门槛高', '软件生态相对垂直', '游戏资源匮乏'],
      usage: '专业设计（视频/图形）、软件编程、追求系统美感与极致体验者',
      color: 'bg-gray-800',
      icon: <Monitor className="w-12 h-12 text-gray-800" />
    },
    {
      id: 'linux',
      name: 'Linux',
      company: 'Open Source',
      description: '开源、自由且强大的内核，诞生了无数满足多样化需求的发行版。',
      pros: ['完全开源免费', '极致的定制化', '系统极度稳定', '资源消耗极低'],
      cons: ['上手门槛较高', '部分硬件兼容挑战', '主流商业软件匮乏'],
      usage: '后端服务器、嵌入式系统、底层开发、追求极致自由与安全的开发者',
      color: 'bg-yellow-500',
      icon: <Terminal className="w-12 h-12 text-yellow-500" />
    }
  ],
  mobile: [
    {
      id: 'android',
      name: 'Android',
      company: 'Google / OHA',
      description: '基于 Linux 的开源移动 OS，以其开放性成就了庞大的全球生态。',
      pros: ['开放性、高定制', '硬件价格覆盖广', '应用市场规模巨大'],
      cons: ['系统碎片化严重', '安全性挑战', '隐私管理难度大'],
      usage: '智能手机、平板电脑、智能电视、车载系统',
      color: 'bg-green-500',
      icon: <Smartphone className="w-12 h-12 text-green-500" />
    },
    {
      id: 'ios',
      name: 'iOS',
      company: 'Apple',
      description: 'Apple 生态的核心，以流畅、安全和私密保护闻名。',
      pros: ['极致流畅稳定', '顶尖安全性', '统一且优质的体验', '强大的软硬协同'],
      cons: ['封闭式系统', '较低的自定义程度', '设备价格高'],
      usage: 'iPhone 终端、对隐私与体验有极高要求的移动用户',
      color: 'bg-zinc-800',
      icon: <Smartphone className="w-12 h-12 text-zinc-800" />
    }
  ]
};

const COMPARISON = [
  { label: '闭源/开源', win: '闭源', mac: '闭源', linux: '开源', and: '开源', ios: '闭源' },
  { label: '硬件绑定', win: '广泛', mac: '强绑定', linux: '自由', and: '自由', ios: '强绑定' },
  { label: '应用生态', win: '庞大', mac: '优秀', linux: '较弱', and: '庞大', ios: '优秀' },
  { label: '定制化', win: '一般', mac: '较少', linux: '极高', and: '高', ios: '较少' },
  { label: '安全性', win: '一般', mac: '高', linux: '极高', and: '一般', ios: '极高' },
  { label: '价格', win: '授权费用', mac: '硬件赠送', linux: '免费', and: '免费', ios: '硬件赠送' },
];

export default function App() {
  const [activeMenu, setActiveMenu] = useState('home');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Cpu className="text-blue-600" />
          <span className="font-bold text-xl tracking-tight">OS Insights</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#desktop" className="hover:text-blue-600 transition-colors">桌面端</a>
          <a href="#mobile" className="hover:text-blue-600 transition-colors">移动端</a>
          <a href="#comparison" className="hover:text-blue-600 transition-colors">异同分析</a>
          <a href="#future" className="hover:text-blue-600 transition-colors">未来趋势</a>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          立即探索
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
            23软件A班 潘茜茜
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            主流操作系统 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">深度解析</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            异同、优势与选择：从 PC 灵魂到移动心脏，全面剖析决定你设备体验的“数字大脑”。
          </p>
          <div className="flex justify-center gap-4">
            <a href="#intro" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group">
              开始分享 <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="text-blue-600" />
                什么是操作系统？
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  操作系统（OS）是计算机系统的核心软件。它像一个严整的幕后总指挥，负责管理软硬件资源。
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
                  <p className="italic text-slate-500 font-medium">
                    "没有操作系统，您的硬件只是一堆废铁。它让用户、程序和原始代码之间实现了无缝共鸣。"
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: '资源管理', desc: '高效公平分配CPU/内存', icon: <Cpu className="w-6 h-6" /> },
                { title: '用户接口', desc: '桥接人机沟通的载体', icon: <Globe className="w-6 h-6" /> },
                { title: '软件生态', desc: '决定应用多样性的土壤', icon: <Workflow className="w-6 h-6" /> },
                { title: '硬件兼容', desc: '万物互通的翻译官', icon: <Layers className="w-6 h-6" /> },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="text-blue-600 mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop OS Section */}
      <section id="desktop" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">桌面操作系统：PC 的灵魂</h2>
            <p className="text-slate-500">主宰生产力与娱乐的核心平台</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {OS_DATA.desktop.map((os) => (
              <motion.div 
                key={os.id}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col"
              >
                <div className="mb-6">{os.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{os.name}</h3>
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">{os.company}</p>
                <p className="text-slate-600 mb-8 flex-grow">{os.description}</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold text-green-600 flex items-center gap-2 mb-3">
                      <CheckCircle2 size={16} /> 核心优势
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {os.pros.map(pro => (
                        <li key={pro} className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-red-500 flex items-center gap-2 mb-3">
                      <AlertCircle size={16} /> 局限性
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {os.cons.map(con => (
                        <li key={con} className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50">
                   <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-tighter">
                     <Zap size={14} /> 最佳场景:
                   </div>
                   <p className="text-sm text-slate-600 mt-2">{os.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile OS Section */}
      <section id="mobile" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">移动操作系统：智能终端的心脏</h2>
            <p className="text-slate-500">连接数字世界的口袋中枢</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {OS_DATA.mobile.map((os) => (
              <div key={os.id} className="group relative overflow-hidden bg-slate-950 rounded-3xl p-10 text-white min-h-[400px] flex flex-col justify-end">
                <div className="absolute top-10 left-10 opacity-20 group-hover:opacity-40 transition-opacity">
                  {os.icon}
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32" />
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-2">{os.name}</h3>
                  <p className="text-blue-400 font-medium mb-6">{os.company}</p>
                  <p className="text-slate-300 text-lg mb-8 max-w-lg">{os.description}</p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">核心优势</h4>
                      <div className="flex flex-wrap gap-2">
                        {os.pros.map(pro => (
                          <span key={pro} className="px-3 py-1 rounded-full bg-white/10 text-xs border border-white/10 whitespace-nowrap">{pro}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">最佳应用</h4>
                      <p className="text-sm text-slate-400">{os.usage}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other OS Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { name: 'Chrome OS', desc: '轻量化云端系统' },
               { name: 'HarmonyOS', desc: '全场景分布式架构' },
               { name: 'RTOS', desc: '极速实时响应' },
               { name: 'Server OS', desc: '企业级稳定中枢' }
             ].map(item => (
               <div key={item.name} className="p-6 bg-slate-50 rounded-2xl text-center">
                 <h4 className="font-extrabold text-slate-800">{item.name}</h4>
                 <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Table className="text-blue-600" /> 核心异同点分析
            </h2>
            <p className="text-slate-500">五大维度的极简横向对标</p>
          </div>
          
          <div className="overflow-x-auto rounded-3xl shadow-2xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">维度</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Windows</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">macOS</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Linux</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Android</th>
                  <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">iOS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-slate-800">{row.label}</td>
                    <td className="px-8 py-6 text-slate-600 text-sm">{row.win}</td>
                    <td className="px-8 py-6 text-slate-600 text-sm font-medium">{row.mac}</td>
                    <td className="px-8 py-6 text-slate-600 text-sm">{row.linux}</td>
                    <td className="px-8 py-6 text-slate-600 text-sm italic">{row.and}</td>
                    <td className="px-8 py-6 text-slate-600 text-sm font-semibold">{row.ios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Future Trends Section */}
      <section id="future" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                未来趋势 <br />
                <span className="text-blue-600">与演进方向</span>
              </h2>
              <p className="text-slate-600 text-lg mb-12">
                操作系统正在从单一的设备管理器，演变为跨设备、跨场景的智慧数字基座。
              </p>
              
              <div className="space-y-6">
                {[
                  { title: '融合化', desc: '桌面与移动 OS 界限模糊，全场景统一架构。', icon: <Layers className="text-indigo-500" /> },
                  { title: '智能化', desc: 'AI 原生集成，系统级自适应与预测。', icon: <Lightbulb className="text-yellow-500" /> },
                  { title: '极致安全', desc: '硬件级隔离、沙盒化与零信任。', icon: <Lock className="text-red-500" /> },
                  { title: '云原生', desc: '系统性能将大规模依托云端协同。', icon: <Cloud className="text-blue-400" /> }
                ].map((trend, idx) => (
                  <div key={idx} className="flex gap-6 items-start hover:translate-x-2 transition-transform cursor-default">
                    <div className="p-3 bg-slate-50 rounded-xl">{trend.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{trend.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{trend.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
               <div className="w-full aspect-square bg-blue-600 rounded-[60px] transform rotate-6 animate-pulse opacity-10 absolute -inset-4" />
               <div className="bg-slate-900 rounded-[40px] p-12 text-white relative z-10 shadow-2xl">
                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                   <Monitor className="text-blue-400" /> 场景化选择建议
                 </h3>
                 <div className="space-y-8">
                    <div>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">普通办公 / 日常</p>
                      <p className="text-slate-300">Windows (兼容优) / macOS (体验佳)</p>
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">游戏玩家</p>
                      <p className="text-slate-300">Windows (性能巅峰、支持广)</p>
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">开发者 / 极客</p>
                      <p className="text-slate-300">Linux (自由度) / macOS (Unix 生态)</p>
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">创意工作者</p>
                      <p className="text-slate-300">macOS (色彩管理与效率)</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / QA */}
      <footer className="bg-slate-950 py-24 px-6 text-center text-white">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="max-w-2xl mx-auto"
        >
          <MessageCircle className="w-16 h-16 mx-auto text-blue-500 mb-8" />
          <h2 className="text-4xl font-bold mb-4">Q & A</h2>
          <p className="text-slate-400 mb-12">
            感谢您的聆听！如果您对操作系统有任何疑问或见解，欢迎交流。
          </p>
          <div className="pt-12 border-t border-white/10 text-slate-500 text-sm">
            &copy; 2026 OS Insights. 基于 PPT 大纲深度解析分享。
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

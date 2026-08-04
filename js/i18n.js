/**
 * Bilingual dictionary — default language: en
 */
(function (global) {
  const dict = {
    en: {
      'nav.features': 'Features',
      'nav.pipeline': 'Pipeline',
      'nav.simulation': 'Simulation',
      'nav.pcb': 'PCB',
      'nav.labs': 'Labs',
      'nav.announcement': 'News',
      'hero.eyebrow': 'HarmonyOS NEXT · ElecDraw',
      'hero.title': 'Schematic simulation that turns AI into verifiable circuits',
      'hero.sub': 'AI-SCH brings Proteus-class editing, mixed-signal simulation, and PCB 2D/3D preview to HarmonyOS — with an engineered multi-agent loop from clarify → place → net → WAR route → QA.',
      'hero.ctaPrimary': 'Explore capabilities',
      'hero.ctaSecondary': 'View announcement',
      'hero.badge': 'v1.1.0 · Native ArkTS',
      'hero.floatTitle': 'SCH · PCB · Instruments',
      'hero.floatBody': 'From topology to board preview in one HarmonyOS app.',
      'ann.eyebrow': 'Latest announcement',
      'ann.title': 'AI-SCH News',
      'ann.loading': 'Loading announcement…',
      'ann.error': 'Announcement unavailable. Please try again later.',
      'ann.openLink': 'Open details',
      'why.eyebrow': 'More than chat',
      'why.title': 'Not just models — build trusted, simulatable intelligence',
      'why.card1.title': 'Executable topology',
      'why.card1.body': 'Prompts emit structured constraints. Local engines place, net, route, and gate with ERC — never “text as a circuit.”',
      'why.card2.title': 'Mixed-signal kernel',
      'why.card2.body': 'Analog MNA, event-driven digital, in-process 8051 / Cortex-M3 teaching paths, nanosecond global scheduling.',
      'why.card3.title': 'Teachable loop',
      'why.card3.body': 'Lab templates, stepwise power-up, fault injection, instrument binding, and coverage-oriented classroom workflows.',
      'why.card4.title': 'HarmonyOS native',
      'why.card4.body': 'Built for 2-in-1 / tablet on HarmonyOS NEXT with modular HAR architecture and Proteus-flavored UX.',
      'cap.eyebrow': 'Flagship capability family',
      'cap.title': 'One platform from idea to waveform',
      'cap.ai.title': 'AI design pipeline',
      'cap.ai.body': 'Versioned prompts, multi-agent quality bus, device usage manuals, modular parallel generation.',
      'cap.sim.title': 'Mixed-signal simulation',
      'cap.sim.body': 'Transient / DC / AC paths, interactive pots & switches, fault types for teaching diagnosis.',
      'cap.mcu.title': 'MCU debug',
      'cap.mcu.body': 'Intel HEX load, SFR / core registers, breakpoints, virtual UART with instrument loopback.',
      'cap.inst.title': 'Virtual instruments',
      'cap.inst.body': 'Scope, logic analyzer, DMM, sources, UART terminal — live-bound to schematic nets.',
      'cap.pcb.title': 'PCB 2D editor',
      'cap.pcb.body': 'Forward annotation, copper-aware routing, multi-layer lab boards with clash-free teaching layouts.',
      'cap.pcb3d.title': 'PCB 3D preview',
      'cap.pcb3d.body': 'Inspect footprints, silkscreen, and board geometry in an interactive 3D view before fab.',
      'cap.lab.title': 'Lab templates',
      'cap.lab.body': 'Dozens of .schsim / .pcbsim experiments spanning passives, op-amps, digital gates, MCU, and UART.',
      'pcb.eyebrow': 'Board preview',
      'pcb.title': 'PCB workspace — 2D layout & 3D inspection',
      'pcb.sub': 'After schematic capture and AI routing, review copper layers in 2D and validate the physical board in 3D — the same HarmonyOS-native toolchain.',
      'pcb.tag2d': '2D copper & placement',
      'pcb.tag3d': '3D board preview',
      'pcb.note2d': 'Multi-layer traces, pads, and silk for teaching boards',
      'pcb.note3d': 'Spatial check of packages and board outline',
      'pipe.eyebrow': 'AI closed loop',
      'pipe.title': 'Clarify → select → layout → net → WAR → QA',
      'pipe.s1': 'Clarify',
      'pipe.s1d': 'Ask only topology-critical ambiguity',
      'pipe.s2': 'Select',
      'pipe.s2d': 'Library-bound BOM, anti-hallucination',
      'pipe.s3': 'Layout',
      'pipe.s3d': 'Region / adjacency → GA placement',
      'pipe.s4': 'Net',
      'pipe.s4d': 'Pin-level nets + usage manuals',
      'pipe.s5': 'WAR',
      'pipe.s5d': 'Same router as the editor',
      'pipe.s6': 'QA',
      'pipe.s6d': 'ERC & geometry hard gates',
      'plat.eyebrow': 'Platform',
      'plat.title': 'Native on HarmonyOS NEXT',
      'plat.body': 'AI-SCH Simulator (com.elecdraw.aischsim) targets SDK API 12+, Stage model ArkUI, and classroom / contest / pre-validation workflows — filling the gap left by Windows-only EDA toolchains.',
      'plat.li1': 'Bundle · com.elecdraw.aischsim',
      'plat.li2': 'License · Apache-2.0',
      'plat.li3': 'Vendor · ElecDraw',
      'footer.tag': 'Hardware AI auto-routing & simulation for HarmonyOS',
      'footer.api': 'Announcement API',
      'footer.github': 'Deploy repository',
      'footer.copy': '© 2024–2026 ElecDraw · AI-SCH Simulator'
    },
    zh: {
      'nav.features': '能力',
      'nav.pipeline': '流水线',
      'nav.simulation': '仿真',
      'nav.pcb': 'PCB',
      'nav.labs': '实验',
      'nav.announcement': '公告',
      'hero.eyebrow': 'HarmonyOS NEXT · ElecDraw',
      'hero.title': '把 AI 变成可仿真、可验证的原理图',
      'hero.sub': 'AI-SCH 在鸿蒙上提供对标 Proteus 的编辑、混合信号仿真与 PCB 2D/3D 预览，并以工程化多 Agent 闭环完成「澄清 → 选型 → 布局 → 建网 → WAR 布线 → QA」。',
      'hero.ctaPrimary': '了解能力',
      'hero.ctaSecondary': '查看公告',
      'hero.badge': 'v1.1.0 · 原生 ArkTS',
      'hero.floatTitle': '原理图 · PCB · 仪器',
      'hero.floatBody': '从拓扑到板级预览，一站完成。',
      'ann.eyebrow': '最新公告',
      'ann.title': 'AI-SCH 动态',
      'ann.loading': '正在加载公告…',
      'ann.error': '公告暂时无法加载，请稍后再试。',
      'ann.openLink': '查看详情',
      'why.eyebrow': '不止聊天',
      'why.title': '不止模型，构建可信、可仿真的智能',
      'why.card1.title': '可执行拓扑',
      'why.card1.body': 'Prompt 只产出结构化约束；本地引擎完成摆放、建网、布线与 ERC 门禁——杜绝「一段文字当电路」。',
      'why.card2.title': '混合信号内核',
      'why.card2.body': '模拟 MNA、事件驱动数字、进程内 8051 / Cortex-M3 教学路径，纳秒级全局调度协同。',
      'why.card3.title': '教学闭环',
      'why.card3.body': '实验模板、分步上电、故障注入、仪器绑定网络，面向课堂与竞赛的可度量流程。',
      'why.card4.title': '鸿蒙原生',
      'why.card4.body': '面向 HarmonyOS NEXT 的 2in1 / 平板，模块化 HAR 架构与 Proteus 风格交互。',
      'cap.eyebrow': '旗舰能力家族',
      'cap.title': '从想法到波形，一站完成',
      'cap.ai.title': 'AI 设计流水线',
      'cap.ai.body': '分阶段 Prompt、多 Agent 质量总线、器件用法手册、模块并行生图。',
      'cap.sim.title': '混合信号仿真',
      'cap.sim.body': '瞬态 / 直流 / 交流等路径，电位器与按键交互，教学向故障类型。',
      'cap.mcu.title': 'MCU 调试',
      'cap.mcu.body': 'Intel HEX 加载、SFR / 核心寄存器、断点、虚拟 UART 与仪器回环。',
      'cap.inst.title': '虚拟仪器',
      'cap.inst.body': '示波器、逻辑分析仪、万用表、信号源、UART 终端——与原理图网络实时绑定。',
      'cap.pcb.title': 'PCB 2D 编辑',
      'cap.pcb.body': '正向标注、铜箔感知布线、多层教学板与接近零交叉的布局。',
      'cap.pcb3d.title': 'PCB 3D 预览',
      'cap.pcb3d.body': '在投板前检查封装、丝印与板框的三维空间关系。',
      'cap.lab.title': '实验模板',
      'cap.lab.body': '覆盖无源、运放、数字门、MCU、UART 等数十套 .schsim / .pcbsim 实验。',
      'pcb.eyebrow': '板级预览',
      'pcb.title': 'PCB 工作区 — 2D 布局与 3D 检视',
      'pcb.sub': '原理图捕获与 AI 布线之后，在 2D 审阅铜箔层，在 3D 校验实物板几何——同一套鸿蒙原生工具链。',
      'pcb.tag2d': '2D 铜箔与布局',
      'pcb.tag3d': '3D 板级预览',
      'pcb.note2d': '多层走线、焊盘与丝印，面向教学板',
      'pcb.note3d': '封装与板框的空间检查',
      'pipe.eyebrow': 'AI 闭环',
      'pipe.title': '澄清 → 选型 → 布局 → 建网 → WAR → QA',
      'pipe.s1': '澄清',
      'pipe.s1d': '只追问影响拓扑的歧义',
      'pipe.s2': '选型',
      'pipe.s2d': '库内 BOM，抑制幻觉',
      'pipe.s3': '布局',
      'pipe.s3d': '区域 / 邻接 → GA 摆放',
      'pipe.s4': '建网',
      'pipe.s4d': '引脚级网络 + 用法手册',
      'pipe.s5': 'WAR',
      'pipe.s5d': '与编辑器同源布线',
      'pipe.s6': 'QA',
      'pipe.s6d': 'ERC 与几何硬门禁',
      'plat.eyebrow': '平台',
      'plat.title': '原生运行于 HarmonyOS NEXT',
      'plat.body': 'AI-SCH 仿真器（com.elecdraw.aischsim）面向 SDK API 12+、ArkUI Stage 模型，服务高校实验、竞赛训练与方案预验证——补齐 Windows 专属 EDA 在国产 OS 上的空白。',
      'plat.li1': '包名 · com.elecdraw.aischsim',
      'plat.li2': '许可证 · Apache-2.0',
      'plat.li3': '厂商 · ElecDraw',
      'footer.tag': '面向鸿蒙的硬件 AI 自动布线与仿真',
      'footer.api': '公告 API',
      'footer.github': '部署仓库',
      'footer.copy': '© 2024–2026 ElecDraw · AI-SCH 仿真器'
    }
  };

  let lang = 'en';

  function t(key) {
    const table = dict[lang] || dict.en;
    return table[key] ?? dict.en[key] ?? key;
  }

  function apply() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const on = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  }

  function setLang(next) {
    lang = next === 'zh' ? 'zh' : 'en';
    try {
      localStorage.setItem('aisch-lang', lang);
    } catch (_e) { /* ignore */ }
    apply();
  }

  function init() {
    let saved = null;
    try {
      saved = localStorage.getItem('aisch-lang');
    } catch (_e) { /* ignore */ }
    lang = saved === 'zh' || saved === 'en' ? saved : 'en';
    apply();
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
    });
  }

  global.AischI18n = { init, setLang, t, getLang: () => lang };
})(window);

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
      'nav.mcp': 'MCP',
      'nav.labs': 'Labs',
      'nav.announcement': 'News',
      'hero.eyebrow': 'HarmonyOS NEXT · ElecDraw',
      'hero.title': 'Turn AI into simulatable, verifiable schematics',
      'hero.sub': 'Edit and simulate circuits, generate schematics from natural language, auto-route PCB copper, and let external agents drive the running app via Agent Bridge + MCP.',
      'hero.ctaPrimary': 'Explore capabilities',
      'hero.ctaSecondary': 'Agent Bridge + MCP',
      'hero.badge': 'v1.1.1 · Native ArkTS',
      'hero.floatTitle': 'Simulate · Generate · Route · Agent',
      'hero.floatBody': 'Schematic simulation, AI schematics, PCB auto-routing, and live MCP control.',
      'ann.eyebrow': 'Latest announcement',
      'ann.title': 'AI-SCH News',
      'ann.loading': 'Loading announcement…',
      'ann.error': 'Announcement unavailable. Please try again later.',
      'ann.openLink': 'Open details',
      'why.eyebrow': 'Core capabilities',
      'why.title': 'Simulate · Generate · Route · Agent-drive',
      'why.card1.title': 'Schematic simulation',
      'why.card1.body': 'Mixed-signal kernel with virtual instruments — run topology, watch waveforms, and verify behavior before you build.',
      'why.card2.title': 'AI schematic generation',
      'why.card2.body': 'Natural language becomes structured constraints; local engines place, net, and ERC-gate — never “text pretending to be a circuit.”',
      'why.card3.title': 'PCB layout & auto-routing',
      'why.card3.body': 'Forward annotation from schematic, classic copper-aware maze routing, then inspect layers in 2D and the board in 3D.',
      'why.card4.title': 'Agent Bridge + MCP',
      'why.card4.body': 'External agents (Cursor / OpenClaw) live-control atomic SCH/PCB edits on the running app — strategy stays outside; no in-app auto-route tools exposed.',
      'why.card5.title': 'HarmonyOS native',
      'why.card5.body': 'Built for 2-in-1 / tablet on HarmonyOS NEXT with modular HAR architecture and familiar schematic UX.',
      'cap.eyebrow': 'Flagship capability family',
      'cap.title': 'From idea to routed board',
      'cap.ai.title': 'AI schematic generation',
      'cap.ai.body': 'Clarify → select → layout → net → route → QA. Versioned prompts and a multi-agent loop land editable, simulatable topology — as shown while the canvas is locked during generation.',
      'cap.sim.title': 'Schematic simulation',
      'cap.sim.body': 'Analog MNA, event-driven digital, MCU teaching paths — with scope, logic analyzer, and sources live-bound to nets.',
      'cap.mcu.title': 'MCU debug',
      'cap.mcu.body': 'Intel HEX load for 8051 / STM32 labs, SFR / core registers, breakpoints, single-step, and virtual UART with instrument loopback.',
      'cap.inst.title': 'Virtual instruments',
      'cap.inst.body': 'Scope, logic analyzer, DMM, sources, UART terminal — live-bound to schematic nets.',
      'cap.pcb.title': 'PCB auto-routing',
      'cap.pcb.body': 'Classic maze / orchestrator stack: obstacle-aware path search, multi-layer copper, teaching-board layouts ready for 2D/3D review.',
      'cap.pcb3d.title': 'PCB 3D preview',
      'cap.pcb3d.body': 'Inspect footprints, silkscreen, and board geometry in an interactive 3D view before fab.',
      'cap.lab.title': 'Lab templates',
      'cap.lab.body': 'Dozens of .schsim / .pcbsim experiments spanning passives, op-amps, digital gates, MCU, and UART — insert from the teaching panel.',
      'pcb.eyebrow': 'PCB layout & auto-routing',
      'pcb.title': 'From netlist to copper — then inspect in 2D & 3D',
      'pcb.sub': 'Forward/reverse annotate after schematic capture, classic maze auto-route, review copper layers in 2D, and validate the physical board in 3D.',
      'pcb.tag2d': '2D copper & placement',
      'pcb.tag3d': '3D board preview',
      'pcb.note2d': 'Multi-layer traces, pads, and silk after classic auto-routing',
      'pcb.note3d': 'Spatial check of packages and board outline',
      'mcp.eyebrow': 'New · Agent Bridge + MCP',
      'mcp.title': 'Let external agents drive the running app',
      'mcp.sub': 'Connect Cursor or OpenClaw through a localhost MCP adapter. Reasoning stays in the agent; ElecDraw executes atomic SCH/PCB edits with drawing sessions, DRC-aware clearance, and a live canvas lock.',
      'mcp.p1.label': 'Live control',
      'mcp.p1.title': 'Agent Bridge on-device',
      'mcp.p1.body': 'Enable in AI Settings → Agent Bridge. Copy the MCP snippet (token included) and point Cursor / OpenClaw at tools/elecdraw-mcp.',
      'mcp.p2.label': 'Atomic ops',
      'mcp.p2.title': 'SCH & PCB primitives',
      'mcp.p2.body': 'Library search, place devices, wire segments, net labels; PCB forward annotate, move footprints, tracks, vias, copper clear — strategy decided by the external agent.',
      'mcp.p3.label': 'Safe boundary',
      'mcp.p3.title': 'What stays inside the app',
      'mcp.p3.body': 'In-app AI full pipeline and classic WAR / PCB auto-route tools are not exposed over MCP. Localhost-only RPC with bearer token.',
      'mcp.note': 'Screenshot gallery for MCP coming soon — this section is a capability intro only.',
      'pipe.eyebrow': 'AI schematic pipeline',
      'pipe.title': 'Clarify → Select → Layout → Net → Route → QA',
      'pipe.s1': 'Clarify',
      'pipe.s1d': 'Topology-critical questions only',
      'pipe.s2': 'Select',
      'pipe.s2d': 'Library BOM, no hallucinated parts',
      'pipe.s3': 'Layout',
      'pipe.s3d': 'Region adjacency → GA place',
      'pipe.s4': 'Net',
      'pipe.s4d': 'Pin nets + usage manuals',
      'pipe.s5': 'Route',
      'pipe.s5d': 'Editor-grade auto-router',
      'pipe.s6': 'QA',
      'pipe.s6d': 'ERC & geometry hard gates',
      'plat.eyebrow': 'Platform',
      'plat.title': 'Native on HarmonyOS NEXT',
      'plat.body': 'AI-SCH Simulator (com.elecdraw.aischsim) targets SDK API 12+, Stage model ArkUI — schematic simulation, AI generation, PCB layout, and Agent Bridge + MCP for classroom, contest, and pre-validation workflows.',
      'plat.li1': 'Bundle · com.elecdraw.aischsim',
      'plat.li2': 'License · Apache-2.0',
      'plat.li3': 'Vendor · ElecDraw',
      'footer.tag': 'Schematic simulation · AI schematics · PCB · Agent Bridge + MCP on HarmonyOS',
      'footer.api': 'Announcement API',
      'footer.github': 'Deploy repository',
      'footer.copy': '© 2024–2026 ElecDraw · AI-SCH Simulator'
    },
    zh: {
      'nav.features': '能力',
      'nav.pipeline': '流水线',
      'nav.simulation': '仿真',
      'nav.pcb': 'PCB',
      'nav.mcp': 'MCP',
      'nav.labs': '实验',
      'nav.announcement': '公告',
      'hero.eyebrow': 'HarmonyOS NEXT · ElecDraw',
      'hero.title': '把 AI 变成可仿真、可验证的原理图',
      'hero.sub': '在鸿蒙上编辑并仿真电路，用自然语言生成可验证原理图，完成 PCB 铜箔自动布线，再通过 Agent Bridge + MCP 让外部 Agent 实机驱动正在运行的应用。',
      'hero.ctaPrimary': '了解能力',
      'hero.ctaSecondary': 'Agent Bridge + MCP',
      'hero.badge': 'v1.1.1 · 原生 ArkTS',
      'hero.floatTitle': '仿真 · 生成 · 布线 · Agent',
      'hero.floatBody': '原理图仿真、AI 生成原理图、PCB 自动布线，以及 MCP 实机控制。',
      'ann.eyebrow': '最新公告',
      'ann.title': 'AI-SCH 动态',
      'ann.loading': '正在加载公告…',
      'ann.error': '公告暂时无法加载，请稍后再试。',
      'ann.openLink': '查看详情',
      'why.eyebrow': '核心能力',
      'why.title': '仿真 · 生成 · 布线 · Agent 驱动',
      'why.card1.title': '原理图仿真',
      'why.card1.body': '混合信号内核配合虚拟仪器——跑通拓扑、观察波形，在动手焊接前验证行为。',
      'why.card2.title': 'AI 生成原理图',
      'why.card2.body': '自然语言落地为结构化约束；本地引擎完成摆放、建网与 ERC 门禁——杜绝「一段文字当电路」。',
      'why.card3.title': 'PCB 布局与自动布线',
      'why.card3.body': '原理图正向标注、经典铜箔感知迷宫布线，再在 2D 审层、3D 检板。',
      'why.card4.title': 'Agent Bridge + MCP',
      'why.card4.body': '外部 Agent（Cursor / OpenClaw）对正在运行的 App 做原子级 SCH/PCB 编辑——策略在外部，不暴露应用内自动布线工具。',
      'why.card5.title': '鸿蒙原生',
      'why.card5.body': '面向 HarmonyOS NEXT 的 2in1 / 平板，模块化 HAR 架构与熟悉的原理图交互体验。',
      'cap.eyebrow': '旗舰能力家族',
      'cap.title': '从想法到已布线的板',
      'cap.ai.title': 'AI 生成原理图',
      'cap.ai.body': '澄清 → 选型 → 布局 → 建网 → 布线 → QA。分阶段 Prompt 与多 Agent 闭环，输出可编辑、可仿真的拓扑——生成过程中画布锁定，与截图一致。',
      'cap.sim.title': '原理图仿真',
      'cap.sim.body': '模拟 MNA、事件驱动数字、MCU 教学路径——示波器、逻辑分析仪与信号源与网络实时绑定。',
      'cap.mcu.title': 'MCU 调试',
      'cap.mcu.body': '8051 / STM32 实验 Intel HEX 加载、SFR / 核心寄存器、断点、单步，以及虚拟 UART 与仪器回环。',
      'cap.inst.title': '虚拟仪器',
      'cap.inst.body': '示波器、逻辑分析仪、万用表、信号源、UART 终端——与原理图网络实时绑定。',
      'cap.pcb.title': 'PCB 自动布线',
      'cap.pcb.body': '经典迷宫 / 编排器栈：避障寻径、多层铜箔，教学板布局可直接进入 2D/3D 检视。',
      'cap.pcb3d.title': 'PCB 3D 预览',
      'cap.pcb3d.body': '在投板前检查封装、丝印与板框的三维空间关系。',
      'cap.lab.title': '实验模板',
      'cap.lab.body': '覆盖无源、运放、数字门、MCU、UART 等数十套 .schsim / .pcbsim 实验——可从教学面板一键插入。',
      'pcb.eyebrow': 'PCB 布局与自动布线',
      'pcb.title': '从网络表到铜箔 — 再以 2D / 3D 检视',
      'pcb.sub': '原理图捕获后正/反向标注，经典迷宫自动布线，在 2D 审阅铜箔层，在 3D 校验实物板几何。',
      'pcb.tag2d': '2D 铜箔与放置',
      'pcb.tag3d': '3D 板级预览',
      'pcb.note2d': '经典自动布线后的多层走线、焊盘与丝印',
      'pcb.note3d': '封装与板框的空间检查',
      'mcp.eyebrow': '新能力 · Agent Bridge + MCP',
      'mcp.title': '让外部 Agent 实机驱动正在运行的应用',
      'mcp.sub': '通过本机 MCP 适配器连接 Cursor 或 OpenClaw。推理留在 Agent 侧；ElecDraw 执行原子级 SCH/PCB 编辑，支持绘制会话、DRC 感知间隙与画布锁定。',
      'mcp.p1.label': '实机控制',
      'mcp.p1.title': '设备内 Agent Bridge',
      'mcp.p1.body': '在「AI 设置 → Agent Bridge」开启，复制含 token 的 MCP 配置，将 Cursor / OpenClaw 指向 tools/elecdraw-mcp。',
      'mcp.p2.label': '原子操作',
      'mcp.p2.title': '原理图与 PCB 原语',
      'mcp.p2.body': '库搜索、放置器件、导线、网络标号；PCB 正向标注、移动封装、走线、过孔、清铜——策略由外部 Agent 决定。',
      'mcp.p3.label': '安全边界',
      'mcp.p3.title': '仍保留在应用内的能力',
      'mcp.p3.body': '应用内 AI 全流水线与经典 WAR / PCB 自动布线工具不经 MCP 暴露。仅监听本机 RPC，并要求 Bearer Token。',
      'mcp.note': 'MCP 截图画廊稍后补充——本节仅作能力介绍。',
      'pipe.eyebrow': 'AI 原理图流水线',
      'pipe.title': '澄清 → 选型 → 布局 → 建网 → 布线 → QA',
      'pipe.s1': '澄清',
      'pipe.s1d': '只追问拓扑歧义',
      'pipe.s2': '选型',
      'pipe.s2d': '库内 BOM，抑幻觉',
      'pipe.s3': '布局',
      'pipe.s3d': '区域邻接 → GA 摆放',
      'pipe.s4': '建网',
      'pipe.s4d': '引脚网络 + 用法手册',
      'pipe.s5': '布线',
      'pipe.s5d': '编辑器级自动布线',
      'pipe.s6': 'QA',
      'pipe.s6d': 'ERC 与几何硬门禁',
      'plat.eyebrow': '平台',
      'plat.title': '原生运行于 HarmonyOS NEXT',
      'plat.body': 'AI-SCH 仿真器（com.elecdraw.aischsim）面向 SDK API 12+、ArkUI Stage 模型——原理图仿真、AI 生成原理图、PCB 布局，以及 Agent Bridge + MCP，服务高校实验、竞赛训练与方案预验证。',
      'plat.li1': '包名 · com.elecdraw.aischsim',
      'plat.li2': '许可证 · Apache-2.0',
      'plat.li3': '厂商 · ElecDraw',
      'footer.tag': '原理图仿真 · AI 生成原理图 · PCB · Agent Bridge + MCP',
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

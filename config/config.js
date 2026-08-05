var config = {
    /* ===== 基本信息 ===== */
    name: "小白 (gutddts)",
    sex: "网安 + AI 双修 / Security & AI",
    age: "中国 · China",
    phone: '<a href="https://github.com/gutddts" target="_blank">github.com/gutddts</a>',
    email: "1159318655@qq.com",
    address: '<a href="https://gutddts.github.io/resume/" target="_blank">gutddts.github.io/resume</a>',
    qq: "",
    log: "gutddts",
    excpect_work: "渗透测试 · 红队 · 安全工具开发 / LLM 应用安全",

    /* ===== 轮播座右铭 ===== */
    motto: [
        "用代码把攻击路径变成防御证据。",
        "授权测试优先，证据优先，防御者优先。",
        "小工具，清边界。",
        "Stay curious, stay authorized.",
        "把安全经验沉淀成可复用的工具。"
    ],

    /* ===== 首页大字 ===== */
    welcome: "小白 · 网安 × AI 双修<br>渗透测试 · 红队 · 安全工具开发<br>Security & AI learner<br>Glad to have you here.",

    /* ===== 自我介绍 ===== */
    about: "<p>你好，我是小白（gutddts），流窜在网络世界的网安 + AI 学习者。</p>" +
        "<p>专注渗透测试、红队工具开发、安全运营（SIEM / 漏洞扫描）与大模型应用安全。</p>" +
        "<p>我持续公开构建安全工具链：AI 原生多代理渗透平台、安全事件关联分析、漏洞扫描与密码审计，把零散的安全经验沉淀成可复用的工具与知识库。</p>",

    /* ===== 技能（名称, 熟练度, 颜色） ===== */
    skills: [
        ["渗透测试 / 红队", 90, "#ff4d6d"],
        ["安全工具开发", 88, "#00d4ff"],
        ["Python", 86, "#22c55e"],
        ["TypeScript / React", 82, "#7c3aed"],
        ["FastAPI / Node.js", 80, "#14b8a6"],
        ["LLM 应用安全", 78, "#f59e0b"],
        ["威胁检测 / SIEM", 76, "#3a86ff"]
    ],

    skills_description: "<ul>" +
        "<li>渗透测试与红队：Web/Windows 渗透、侦察方法论、反弹 Shell。</li>" +
        "<li>全栈安全产品：React + FastAPI 构建 SIEM、漏洞扫描、密码审计平台。</li>" +
        "<li>AI 应用安全：LangGraph 多代理编排、RAG 知识库、提示词注入与工具链风险。</li>" +
        "<li>威胁检测与响应：日志关联分析、MITRE ATT&CK 映射、攻击溯源。</li>" +
        "<li>密码学：密码学攻击基础、密码强度评估与合规审计。</li>" +
        "</ul>",

    /* ===== 项目卡片（图片, 链接, 名称, 简介） ===== */
    portfolio: [
        ["./images/card-vulnflow.png", "https://github.com/gutddts/vulnflow", "vulnflow",
            "AI 原生多代理渗透测试平台：LangGraph 编排 + RAG 知识库 + 安全工具链，让自主安全评估可复现。"],
        ["./images/card-LogShield-SIEM.png", "https://github.com/gutddts/LogShield-SIEM", "LogShield-SIEM",
            "安全事件关联分析平台：React + FastAPI + WebSocket，MITRE ATT&CK 热力图与实时告警管理。"],
        ["./images/card-SentinelScan.png", "https://github.com/gutddts/SentinelScan", "SentinelScan",
            "全栈漏洞扫描管理平台：端口 / HTTP / SSL / 漏洞检测，可视化仪表盘 + PDF 报告。"],
        ["./images/card-CyberPass-Audit.png", "https://github.com/gutddts/CyberPass-Audit", "CyberPass-Audit",
            "企业密码安全审计系统：NIST / CIS / PCI 合规检查 + 碰撞检测，批量审计密码风险。"],
        ["./images/card-security-log-report.png", "https://github.com/gutddts/security-log-report", "security-log-report",
            "NDR/EDR 安全日志智能分析报告：多维统计图表 + Markdown 报告，自动生成威胁分析与攻击溯源。"],
        ["./images/card-pentest-skill-set.png", "https://github.com/gutddts/pentest-skill-set", "pentest-skill-set",
            "个人渗透测试技能集：Web/Windows 渗透、密码学攻击、侦察方法论与反弹 Shell 技术手册。"]
    ],

    /* ===== 时间线经历（时间, 标题, 描述） ===== */
    work: [
        ["2025 — Present", "<br>网安 + AI 学习者",
            "<p><strong>独立安全研究与工具开发</strong></p>" +
            "<p>持续构建公开安全工具链：AI 渗透平台、SIEM、漏洞扫描、密码审计，把攻击路径变成防御证据。</p>" +
            "<p>聚焦：渗透测试 / 红队、安全工具开发、LLM 应用安全、威胁检测与响应。</p>"
        ],
        ["2024 — Present", "<br>开源项目维护",
            "<p><strong>6+ 安全 / AI 方向开源项目</strong></p>" +
            "<p>vulnflow · LogShield-SIEM · SentinelScan · CyberPass-Audit · security-log-report · pentest-skill-set。</p>" +
            "<p>全栈（TypeScript + Python + React + FastAPI）交付，注重可复现性与防御价值。</p>"
        ]
    ],

    /* ===== 高亮时间线（时间, 标题, 描述） ===== */
    others: [
        ["2025", "vulnflow", "AI 原生多代理渗透测试平台，基于 LangGraph 的自主安全评估。"],
        ["2025", "LogShield-SIEM", "安全事件关联分析平台，MITRE ATT&CK 热力图。"],
        ["2025", "SentinelScan", "全栈漏洞扫描管理平台，可视化仪表盘 + PDF 报告。"],
        ["2024", "CyberPass-Audit", "企业密码安全审计，NIST / CIS / PCI 合规。"],
        ["2024", "security-log-report", "NDR/EDR 安全日志智能分析报告。"],
        ["2024", "pentest-skill-set", "个人渗透测试技能集技术手册。"]
    ],

    /* ===== 社交图标（图标, 链接, 描述） ===== */
    icon: [
        ["./svg/github.svg", "https://github.com/gutddts", "GitHub"],
        ["./svg/QQ.svg", "mailto:1159318655@qq.com", "Email / QQ"]
    ],

    /* ===== 图片资源（背景, 头像, 项目区背景, 高亮区背景） ===== */
    url: [
        "./images/index_background.jpg",
        "./images/avatar.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]
}

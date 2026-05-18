import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Database,
  Download,
  FileSearch,
  Filter,
  Gavel,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  Microscope,
  MoreHorizontal,
  Network,
  PanelLeft,
  Play,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TimerReset,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { ResearchAssistant } from "./components/research-assistant";

const navItems = [
  [BarChart3, "Command"],
  [FileSearch, "Research"],
  [Gavel, "Authorities"],
  [ClipboardCheck, "Claims"],
  [UsersRound, "Team"],
];

const metrics = [
  {
    label: "Research Confidence",
    value: "94%",
    detail: "Evidence-backed positions",
    icon: BadgeCheck,
    tone: "bg-emerald-100 text-emerald-700",
  },
  {
    label: "Authority Coverage",
    value: "2,418",
    detail: "IRC, regs, cases, notices",
    icon: Landmark,
    tone: "bg-blue-100 text-blue-700",
  },
  {
    label: "Open R&D Studies",
    value: "31",
    detail: "Across software, pharma, energy",
    icon: Microscope,
    tone: "bg-amber-100 text-amber-700",
  },
  {
    label: "Hours Recovered",
    value: "186",
    detail: "This month for consultants",
    icon: TimerReset,
    tone: "bg-rose-100 text-rose-700",
  },
];

const evidenceSources = [
  { name: "IRC Section 41", type: "Code", score: 98, color: "bg-emerald-500" },
  { name: "Treas. Reg. 1.41-4", type: "Regulation", score: 96, color: "bg-blue-500" },
  { name: "Little Sandy Coal", type: "Case law", score: 89, color: "bg-orange-500" },
  { name: "IRS Audit Technique Guide", type: "Practice", score: 84, color: "bg-violet-500" },
];

const workflows = [
  ["Fact Pattern Triage", "Extract technical uncertainty, experimentation, and business component signals.", "Running"],
  ["Authority Matrix", "Map every claim to controlling law, interpretive guidance, and counterauthority.", "Ready"],
  ["Credit Memo Draft", "Generate consultant-ready memo sections with cited support and risk notes.", "Queued"],
  ["Exam Defense Pack", "Prepare IDR response outlines, exhibits, and reviewer questions.", "Review"],
];

const recentFindings = [
  {
    client: "Asterion Robotics",
    matter: "Autonomous navigation firmware",
    finding: "Strong experimentation trail across simulation failures and sensor-fusion iterations.",
    risk: "Low",
  },
  {
    client: "Northline BioSystems",
    matter: "Fermentation yield optimization",
    finding: "Uncertainty is well framed, but wage allocation needs cleaner project linkage.",
    risk: "Medium",
  },
  {
    client: "HelioGrid Energy",
    matter: "Battery dispatch optimizer",
    finding: "Software exclusions analysis requires additional contemporaneous documentation.",
    risk: "High",
  },
];

const citations = [
  "Four-part test applied with business-component level granularity.",
  "Substantially all threshold supported by sprint evidence and test logs.",
  "Process of experimentation distinguished from routine debugging.",
  "Funded research limitation flagged for contract review.",
];

function StatusPill({ children, tone }: { children: React.ReactNode; tone: string }) {
  return <span className={`rounded-md px-2.5 py-1 text-xs font-bold ${tone}`}>{children}</span>;
}

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded bg-zinc-200">
      <div className={`h-full ${color}`} style={{ width: `${score}%` }} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ee] text-zinc-950">
      <div className="grid min-h-screen lg:grid-cols-[248px_minmax(0,1fr)]">
        <aside className="hidden border-r border-zinc-200 bg-[#101412] text-white lg:flex lg:flex-col">
          <div className="border-b border-white/10 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#84dcc6] text-zinc-950">
                <Brain size={22} />
              </span>
              <div>
                <p className="text-lg font-black">R&D Oracle</p>
                <p className="text-xs font-medium text-white/45">Tax research intelligence</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1 p-3">
            {navItems.map(([Icon, label], index) => {
              const NavIcon = Icon as typeof Brain;
              return (
                <a
                  key={label as string}
                  href={label === "Research" ? "#tax-chat" : "#workspace"}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold ${
                    index === 0 ? "bg-white text-zinc-950" : "text-white/55 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <NavIcon size={18} />
                  {label as string}
                </a>
              );
            })}
          </nav>

          <div className="mx-3 mt-4 rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <div className="flex items-center gap-2 text-sm font-black">
              <ShieldCheck className="text-[#84dcc6]" size={18} />
              Secure Research Vault
            </div>
            <p className="mt-3 text-xs leading-5 text-white/50">
              Privileged matters, source trails, and reviewer notes stay partitioned by client workspace.
            </p>
          </div>

          <div className="mt-auto p-3">
            <div className="rounded-lg bg-[#f9dc5c] p-4 text-zinc-950">
              <p className="text-sm font-black">Next review window</p>
              <p className="mt-1 text-xs font-semibold text-zinc-700">12 positions due before Friday</p>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-950 px-3 py-2 text-sm font-black text-white">
                Open Queue <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-10 border-b border-zinc-200 bg-[#f6f3ee]/92 px-4 py-3 backdrop-blur md:px-6">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white lg:hidden">
                  <PanelLeft size={19} />
                </button>
                <div>
                  <h1 className="text-2xl font-black tracking-tight md:text-3xl">R&D Tax Research Command Center</h1>
                  <p className="mt-1 text-sm font-medium text-zinc-600">
                    AI-assisted authority research, claim analysis, memo drafting, and exam defense for tax consultants.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-bold">
                  <Bell size={16} />
                  Alerts
                </button>
                <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-black text-white">
                  <Download size={16} />
                  Export Memo
                </button>
              </div>
            </div>
          </header>

          <div id="workspace" className="grid min-w-0 gap-5 p-4 md:p-6 xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0 space-y-5">
              <section className="min-w-0 overflow-hidden rounded-lg border border-zinc-200 bg-white">
                <div className="grid 2xl:grid-cols-[minmax(0,1fr)_340px]">
                  <div className="p-5 md:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusPill tone="bg-[#84dcc6]/30 text-emerald-800">Live authority graph</StatusPill>
                      <StatusPill tone="bg-[#f9dc5c]/45 text-amber-800">R&D Section 41 specialist</StatusPill>
                    </div>
                    <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight [overflow-wrap:anywhere] sm:text-4xl md:text-5xl">
                      Research AI that thinks like a senior R&D tax reviewer.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 [overflow-wrap:anywhere]">
                      Ask it to investigate a client fact pattern, compare authority, identify missing substantiation,
                      and produce a defensible research trail your consultants can review.
                    </p>
                    <div className="mt-6 min-w-0 rounded-lg border border-zinc-200 bg-[#faf9f6] p-3">
                      <div className="flex items-center gap-2 border-b border-zinc-200 pb-3 text-sm font-bold text-zinc-500">
                        <Search size={17} />
                        Research prompt
                      </div>
                      <div className="flex min-w-0 flex-col gap-3 pt-3 md:flex-row md:items-center">
                        <p className="min-h-10 min-w-0 flex-1 text-sm font-semibold text-zinc-800 [overflow-wrap:anywhere]">
                          Analyze whether iterative AI model training costs qualify for the R&D credit under Section 41.
                        </p>
                        <a
                          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#0f766e] px-4 text-sm font-black text-white md:w-auto"
                          href="#tax-chat"
                        >
                          Open AI Chat <Send size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="min-h-[220px] border-t border-zinc-200 bg-zinc-950 2xl:min-h-[320px] 2xl:border-l 2xl:border-t-0">
                    <img
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85"
                      alt="Research documents, charts, and professional tax analysis workspace"
                      className="h-full min-h-[220px] w-full object-cover opacity-80 mix-blend-luminosity 2xl:min-h-[320px]"
                    />
                  </div>
                </div>
              </section>

              <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <article key={metric.label} className="rounded-lg border border-zinc-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${metric.tone}`}>
                          <Icon size={19} />
                        </span>
                        <TrendingUp className="text-zinc-400" size={17} />
                      </div>
                      <p className="mt-4 text-sm font-bold text-zinc-500">{metric.label}</p>
                      <p className="mt-1 text-3xl font-black tracking-tight">{metric.value}</p>
                      <p className="mt-1 text-xs font-semibold text-zinc-500">{metric.detail}</p>
                    </article>
                  );
                })}
              </section>

              <ResearchAssistant />

              <section className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)]">
                <article className="rounded-lg border border-zinc-200 bg-white p-5">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <h2 className="text-xl font-black">Authority Strength</h2>
                      <p className="mt-1 text-sm text-zinc-500">Ranked evidence sources for the current research question.</p>
                    </div>
                    <button className="inline-flex h-9 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm font-bold">
                      <Filter size={15} />
                      Filters
                    </button>
                  </div>
                  <div className="mt-5 space-y-4">
                    {evidenceSources.map((source) => (
                      <div key={source.name} className="grid gap-3 sm:grid-cols-[170px_minmax(0,1fr)_48px] sm:items-center">
                        <div>
                          <p className="text-sm font-black">{source.name}</p>
                          <p className="text-xs font-semibold text-zinc-500">{source.type}</p>
                        </div>
                        <ScoreBar score={source.score} color={source.color} />
                        <p className="text-right text-sm font-black">{source.score}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-lg border border-zinc-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-black">AI Reasoning Trace</h2>
                      <p className="mt-1 text-sm text-zinc-500">Visible chain of review outputs.</p>
                    </div>
                    <Sparkles className="text-[#0f766e]" size={21} />
                  </div>
                  <div className="mt-5 space-y-3">
                    {citations.map((item, index) => (
                      <div key={item} className="flex gap-3 rounded-lg bg-[#faf9f6] p-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-zinc-950 text-xs font-black text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm font-semibold leading-6 text-zinc-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-black">Research Workflow Automation</h2>
                    <p className="mt-1 text-sm text-zinc-500">From raw facts to reviewer-ready technical support.</p>
                  </div>
                  <button className="inline-flex h-9 items-center gap-2 rounded-md bg-zinc-950 px-3 text-sm font-black text-white">
                    <Play size={15} />
                    Start Run
                  </button>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {workflows.map(([title, description, status]) => (
                    <article key={title} className="rounded-lg border border-zinc-200 bg-[#faf9f6] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-black">{title}</h3>
                          <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
                        </div>
                        <MoreHorizontal className="shrink-0 text-zinc-400" size={18} />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <StatusPill
                          tone={
                            status === "Running"
                              ? "bg-emerald-100 text-emerald-700"
                              : status === "Review"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-zinc-200 text-zinc-700"
                          }
                        >
                          {status}
                        </StatusPill>
                        <ArrowRight size={16} className="text-zinc-500" />
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-black">Client Research Docket</h2>
                    <p className="mt-1 text-sm text-zinc-500">Priority matters with latest AI findings and risk posture.</p>
                  </div>
                  <button className="inline-flex h-9 items-center gap-2 rounded-md border border-zinc-200 px-3 text-sm font-bold">
                    <ChevronDown size={15} />
                    This week
                  </button>
                </div>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-left text-sm">
                    <thead className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                      <tr>
                        <th className="px-3 py-2">Client</th>
                        <th className="px-3 py-2">Matter</th>
                        <th className="px-3 py-2">Latest finding</th>
                        <th className="px-3 py-2">Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentFindings.map((row) => (
                        <tr key={row.client} className="bg-[#faf9f6]">
                          <td className="rounded-l-lg px-3 py-3 font-black">{row.client}</td>
                          <td className="px-3 py-3 font-semibold text-zinc-700">{row.matter}</td>
                          <td className="px-3 py-3 text-zinc-600">{row.finding}</td>
                          <td className="rounded-r-lg px-3 py-3">
                            <StatusPill
                              tone={
                                row.risk === "Low"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : row.risk === "Medium"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-rose-100 text-rose-700"
                              }
                            >
                              {row.risk}
                            </StatusPill>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <article className="rounded-lg border border-zinc-200 bg-zinc-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">Research Brain</h2>
                  <Network className="text-[#84dcc6]" size={22} />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                  {["Code", "Cases", "Client"].map((label) => (
                    <div key={label} className="rounded-lg bg-white/10 p-3">
                      <p className="text-2xl font-black">{label === "Code" ? "41" : label === "Cases" ? "312" : "18k"}</p>
                      <p className="mt-1 text-xs font-bold text-white/45">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-lg bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-black">
                    <LockKeyhole size={16} />
                    Consultant controls
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Every answer separates cited authority, inferred analysis, open assumptions, and reviewer approval status.
                  </p>
                </div>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">Capability Stack</h2>
                  <Layers3 className="text-zinc-500" size={21} />
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    [Database, "Authority retrieval", "Searches tax law, guidance, and firm knowledge."],
                    [MessageSquareText, "Interview builder", "Creates client questions from research gaps."],
                    [BookOpenCheck, "Memo composer", "Drafts cited technical narratives for review."],
                    [CheckCircle2, "Quality checks", "Flags weak nexus, exclusions, and unsupported costs."],
                  ].map(([Icon, title, copy]) => {
                    const StackIcon = Icon as typeof Database;
                    return (
                      <div key={title as string} className="flex gap-3 rounded-lg bg-[#faf9f6] p-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white text-[#0f766e]">
                          <StackIcon size={18} />
                        </span>
                        <div>
                          <p className="text-sm font-black">{title as string}</p>
                          <p className="mt-1 text-xs leading-5 text-zinc-500">{copy as string}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-[#f9dc5c] p-5">
                <div className="flex items-center gap-2 text-sm font-black">
                  <BriefcaseBusiness size={18} />
                  Built for R&D teams
                </div>
                <h2 className="mt-4 text-2xl font-black leading-tight">
                  Less hunting. More defensible consulting judgment.
                </h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-zinc-700">
                  The AI accelerates the research grind while keeping experts in control of conclusions, workpapers,
                  and client-facing advice.
                </p>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">Review Calendar</h2>
                  <CalendarClock className="text-zinc-500" size={21} />
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["9:30 AM", "Partner review: software exclusions"],
                    ["11:00 AM", "Client interview: process evidence"],
                    ["2:15 PM", "Memo QA: funded research clause"],
                  ].map(([time, event]) => (
                    <div key={event} className="flex gap-3 rounded-lg border border-zinc-200 p-3">
                      <p className="w-16 shrink-0 text-xs font-black text-[#0f766e]">{time}</p>
                      <p className="text-sm font-semibold text-zinc-700">{event}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">Output Mix</h2>
                  <LineChart className="text-zinc-500" size={21} />
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    ["Technical memos", 72, "bg-[#0f766e]"],
                    ["Authority matrices", 58, "bg-[#2563eb]"],
                    ["IDR responses", 41, "bg-[#e11d48]"],
                  ].map(([label, score, color]) => (
                    <div key={label as string}>
                      <div className="mb-2 flex items-center justify-between text-sm font-bold">
                        <span>{label as string}</span>
                        <span>{score as number}%</span>
                      </div>
                      <ScoreBar score={score as number} color={color as string} />
                    </div>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

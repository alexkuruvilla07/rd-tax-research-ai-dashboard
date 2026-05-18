"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  BookMarked,
  Bot,
  CheckCircle2,
  Copy,
  FileText,
  Gavel,
  Lightbulb,
  MessageSquare,
  Paperclip,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Table2,
  Trash2,
  UploadCloud,
  UserRound,
} from "lucide-react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  sections?: {
    title: string;
    icon: typeof Gavel;
    items: string[];
    tone: string;
  }[];
};

type ImportedFile = {
  id: number;
  name: string;
  size: number;
  type: string;
  category: string;
  preview: string;
  extractedText?: string;
  imageUrl?: string;
};

const modes = [
  "R&D Credit Analysis",
  "Authority Research",
  "Client Interview Prep",
  "Exam Defense",
  "Memo Drafting",
];

const starterPrompts = [
  "Can AI model training and tuning qualify for the R&D credit?",
  "Build an authority matrix for internal-use software and process of experimentation.",
  "What questions should I ask a SaaS client before we claim R&D credits?",
  "Help me defend a pricing algorithm project under audit.",
];

const acceptedFileTypes = [
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".csv",
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".txt",
  ".md",
];

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function categorizeFile(file: File) {
  const name = file.name.toLowerCase();

  if (name.endsWith(".doc") || name.endsWith(".docx")) return "Word memo";
  if (name.endsWith(".xls") || name.endsWith(".xlsx") || name.endsWith(".csv")) return "Spreadsheet";
  if (name.endsWith(".png") || name.endsWith(".jpg") || name.endsWith(".jpeg") || name.endsWith(".webp")) {
    return "Screenshot";
  }
  if (name.endsWith(".pdf")) return "PDF";
  if (name.endsWith(".txt") || name.endsWith(".md")) return "Text notes";
  return "Research file";
}

function getFilePreview(file: File) {
  const category = categorizeFile(file);

  if (category === "Spreadsheet") {
    return "Ready for wage allocation, QRE schedules, employee hours, project lists, and cost-center review.";
  }
  if (category === "Word memo") {
    return "Ready for memo review, technical narrative extraction, open-issue spotting, and citation planning.";
  }
  if (category === "Screenshot") {
    return "Ready for screenshot-based evidence review, ticket trails, diagrams, UI logs, and experiment records.";
  }
  if (category === "PDF") {
    return "Ready for contracts, IRS notices, technical reports, and audit-document triage.";
  }
  return "Ready for notes, copied research, interviews, and project fact patterns.";
}

function isReadableTextFile(file: File) {
  const name = file.name.toLowerCase();
  return name.endsWith(".txt") || name.endsWith(".md") || name.endsWith(".csv") || file.type.startsWith("text/");
}

function isImageFile(file: File) {
  return file.type.startsWith("image/");
}

function makeAssistantMessage(prompt: string, mode: string, id: number, files: ImportedFile[]): ChatMessage {
  const topic = prompt.trim().replace(/\s+/g, " ");
  const lowerTopic = topic.toLowerCase();
  const isSoftware = lowerTopic.includes("software") || lowerTopic.includes("saas") || lowerTopic.includes("algorithm");
  const isDefense = mode === "Exam Defense" || lowerTopic.includes("audit") || lowerTopic.includes("idr");
  const isInterview = mode === "Client Interview Prep" || lowerTopic.includes("question") || lowerTopic.includes("interview");

  const opening = isInterview
    ? "I would use this as a guided technical interview, not a generic questionnaire. The goal is to pull out uncertainty, alternatives, testing, failures, and project-level cost support."
    : isDefense
      ? "I would frame this as an exam-defense workstream first: define the qualified business component, tie each claimed activity to evidence, and prepare a clean response to likely IRS challenges."
      : "I would analyze this like a senior R&D tax reviewer: start with the business component, test technical uncertainty, map experimentation evidence, then pressure-test exclusions and cost support.";

  const textFiles = files.filter((file) => file.extractedText);
  const fileSummary =
    files.length > 0
      ? ` I see ${files.length} imported file${files.length === 1 ? "" : "s"} in the workspace: ${files
          .map((file) => `${file.name} (${file.category})`)
          .join(", ")}. I would use those as source material for evidence mapping, but I would still require consultant review before relying on conclusions.${
          textFiles.length > 0
            ? ` I can also read extracted text from ${textFiles.map((file) => file.name).join(", ")}.`
            : ""
        }`
      : "";

  return {
    id,
    role: "assistant",
    content: `${opening} For "${topic}", my preliminary view is that the position can be researchable, but it needs a tight evidence trail. I would avoid a broad conclusion until the activities, contracts, wage allocations, and technical records are mapped by project.${fileSummary}`,
    sections: [
      ...(files.length > 0
        ? [
            {
              title: "Imported data plan",
              icon: Paperclip,
              tone: "text-[#84dcc6]",
              items: [
                "Extract project names, dates, employees, cost categories, and technical evidence from the uploaded files.",
                "Separate authority research from client-provided facts so the workpaper remains reviewable.",
                textFiles.length > 0
                  ? `Use extracted text preview: ${textFiles
                      .map((file) => `${file.name}: ${file.extractedText}`)
                      .join(" | ")
                      .slice(0, 240)}`
                  : "Flag missing source support, conflicting documents, and items that need a consultant follow-up.",
              ],
            },
          ]
        : []),
      {
        title: "Authority lens",
        icon: Gavel,
        tone: "text-[#84dcc6]",
        items: [
          "Apply IRC Section 41 at the business-component level.",
          "Use Treas. Reg. 1.41-4 for uncertainty, experimentation, and the substantially-all requirement.",
          isSoftware
            ? "For software, separately analyze internal-use software, economic risk, innovative result, and deployment context."
            : "Check whether the activities are technological in nature and grounded in hard science, engineering, or computer science.",
        ],
      },
      {
        title: "Risk flags",
        icon: AlertTriangle,
        tone: "text-[#f9dc5c]",
        items: [
          "Routine debugging, cosmetic changes, or post-release maintenance can weaken the claim.",
          "Weak nexus between wages and qualified activities creates documentation risk.",
          "Funded research terms, IP ownership, or fixed-fee contracts may need contract-level review.",
        ],
      },
      {
        title: "What I would do next",
        icon: CheckCircle2,
        tone: "text-[#84dcc6]",
        items: [
          "Build a claim matrix with project, business component, uncertainty, experiments, evidence, costs, and reviewer notes.",
          "Collect sprint tickets, design docs, testing logs, failed alternatives, technical decision records, and contracts.",
          isDefense
            ? "Draft an IDR-ready narrative that answers qualification, substantiation, and cost allocation in the same record."
            : "Draft a research memo section with support, assumptions, open questions, and counterarguments.",
        ],
      },
    ],
  };
}

export function ResearchAssistant() {
  const [mode, setMode] = useState(modes[0]);
  const [input, setInput] = useState("");
  const [importedFiles, setImportedFiles] = useState<ImportedFile[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "I am your R&D tax research copilot. Ask me about Section 41 qualification, software projects, audit defense, client interviews, authority matrices, substantiation, or memo drafting. I will answer like a tax research assistant and keep the analysis tied to authority, risk, and next steps.",
      sections: [
        {
          title: "Specialty",
          icon: BookMarked,
          tone: "text-[#84dcc6]",
          items: [
            "R&D credit research and claim development.",
            "Authority mapping for tax consultant review.",
            "Client fact gathering, documentation gaps, and exam defense.",
          ],
        },
      ],
    },
  ]);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const latestAssistantMessage = useMemo(
    () => [...messages].reverse().find((message) => message.role === "assistant"),
    [messages],
  );

  useEffect(() => {
    transcriptRef.current?.scrollTo({ top: transcriptRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function sendMessage(value = input) {
    const prompt = value.trim();
    if (!prompt) return;

    setMessages((current) => {
      const userMessage: ChatMessage = {
        id: current.length + 1,
        role: "user",
        content: prompt,
      };
      const assistantMessage = makeAssistantMessage(prompt, mode, current.length + 2, importedFiles);
      return [...current, userMessage, assistantMessage];
    });
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  function copyLatestBrief() {
    if (!latestAssistantMessage) return;

    const sectionText = latestAssistantMessage.sections
      ?.map((section) => `${section.title}\n${section.items.map((item) => `- ${item}`).join("\n")}`)
      .join("\n\n");

    navigator.clipboard?.writeText([latestAssistantMessage.content, sectionText].filter(Boolean).join("\n\n"));
  }

  async function handleFileImport(event: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);
    if (!selectedFiles.length) return;

    const nextFiles = await Promise.all(
      selectedFiles.map(async (file, index) => {
        const extractedText = isReadableTextFile(file) ? (await file.text()).replace(/\s+/g, " ").slice(0, 1200) : undefined;

        return {
          id: Date.now() + index,
          name: file.name,
          size: file.size,
          type: file.type || "Unknown",
          category: categorizeFile(file),
          preview: getFilePreview(file),
          extractedText,
          imageUrl: isImageFile(file) ? URL.createObjectURL(file) : undefined,
        };
      }),
    );

    setImportedFiles((current) => [...current, ...nextFiles]);
    setMessages((current) => [
      ...current,
      {
        id: current.length + 1,
        role: "assistant",
        content: `Imported ${nextFiles.length} file${nextFiles.length === 1 ? "" : "s"} into the research workspace: ${nextFiles
          .map((file) => file.name)
          .join(", ")}. Ask me to summarize them, build an R&D claim matrix, find substantiation gaps, or prepare an audit-ready evidence plan.`,
        sections: [
          {
            title: "File intake",
            icon: UploadCloud,
            tone: "text-[#84dcc6]",
            items: nextFiles.map((file) =>
              file.extractedText
                ? `${file.category}: ${file.name} (${formatBytes(file.size)}) · text preview captured`
                : `${file.category}: ${file.name} (${formatBytes(file.size)})`,
            ),
          },
        ],
      },
    ]);

    event.target.value = "";
  }

  function removeImportedFile(id: number) {
    setImportedFiles((current) => current.filter((file) => file.id !== id));
  }

  return (
    <section id="tax-chat" className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 p-5">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md bg-[#84dcc6]/30 px-2.5 py-1 text-xs font-black text-emerald-800">
                <Bot size={14} />
                TaxGPT-style research chat
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-black text-zinc-600">
                <ShieldCheck size={14} />
                R&D tax consulting niche
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight">Chat with an R&D tax research specialist</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
              A focused assistant for R&D credit analysis, authority research, workpapers, exam defense, client questions,
              and technical memo drafting.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              ["Sec. 41", "focused"],
              ["IRS", "aware"],
              ["memo", "ready"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-[#faf9f6] px-4 py-3">
                <p className="text-lg font-black">{value}</p>
                <p className="text-[11px] font-bold uppercase text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid min-h-[760px] 2xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="border-b border-zinc-200 bg-[#faf9f6] p-4 2xl:border-b-0 2xl:border-r">
          <p className="text-sm font-black text-zinc-800">Specialist mode</p>
          <div className="mt-3 grid gap-2">
            {modes.map((item) => (
              <button
                key={item}
                className={`rounded-md px-3 py-2 text-left text-xs font-black ${
                  item === mode ? "bg-zinc-950 text-white" : "bg-white text-zinc-600 ring-1 ring-zinc-200"
                }`}
                onClick={() => setMode(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-zinc-400">Ask it</p>
            <div className="space-y-2">
              {starterPrompts.map((item) => (
                <button
                  key={item}
                  className="flex w-full items-start gap-2 rounded-lg bg-white p-3 text-left text-xs font-bold leading-5 text-zinc-600 ring-1 ring-zinc-200 hover:text-zinc-950"
                  onClick={() => sendMessage(item)}
                  type="button"
                >
                  <Lightbulb className="mt-0.5 shrink-0 text-[#0f766e]" size={15} />
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-4">
            <div className="flex items-center gap-2 text-sm font-black">
              <Search className="text-[#0f766e]" size={16} />
              Research behavior
            </div>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Answers are structured around authority, qualification, substantiation, risk, and consultant next steps.
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-black">
                <UploadCloud className="text-[#0f766e]" size={17} />
                Import files
              </div>
              <span className="rounded-md bg-[#84dcc6]/25 px-2 py-1 text-[11px] font-black text-emerald-800">
                Local
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Add Word docs, Excel workbooks, PDFs, screenshots, CSVs, and notes as research context.
            </p>
            <input
              ref={fileInputRef}
              accept={acceptedFileTypes.join(",")}
              className="hidden"
              multiple
              onChange={handleFileImport}
              type="file"
            />
            <button
              className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#0f766e] px-4 text-sm font-black text-white"
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              Choose Files <Paperclip size={16} />
            </button>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Word", "Excel", "PDF", "Images", "CSV", "TXT"].map((label) => (
                <span key={label} className="rounded bg-zinc-100 px-2 py-1 text-[11px] font-bold text-zinc-500">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {importedFiles.length > 0 && (
            <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black">Imported data</p>
                <span className="text-xs font-black text-zinc-400">{importedFiles.length} files</span>
              </div>
              <div className="mt-3 space-y-2">
                {importedFiles.map((file) => {
                  const FileIcon = file.category === "Spreadsheet" ? Table2 : FileText;

                  return (
                    <div key={file.id} className="rounded-lg bg-[#faf9f6] p-3 ring-1 ring-zinc-200">
                      <div className="flex items-start gap-2">
                        <FileIcon className="mt-0.5 shrink-0 text-[#0f766e]" size={16} />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-black text-zinc-800">{file.name}</p>
                          <p className="mt-1 text-[11px] font-bold text-zinc-400">
                            {file.category} · {formatBytes(file.size)}
                          </p>
                        </div>
                        <button
                          aria-label={`Remove ${file.name}`}
                          className="rounded p-1 text-zinc-400 hover:bg-white hover:text-rose-600"
                          onClick={() => removeImportedFile(file.id)}
                          type="button"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="mt-2 text-[11px] leading-5 text-zinc-500">{file.preview}</p>
                      {file.imageUrl && (
                        <img
                          alt={`Preview of ${file.name}`}
                          className="mt-2 max-h-28 w-full rounded-md object-cover ring-1 ring-zinc-200"
                          src={file.imageUrl}
                        />
                      )}
                      {file.extractedText && (
                        <p className="mt-2 line-clamp-3 rounded-md bg-white p-2 text-[11px] leading-5 text-zinc-500 ring-1 ring-zinc-200">
                          {file.extractedText}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <button
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-black text-zinc-700"
            onClick={() => {
              setMessages([
                {
                  id: 1,
                  role: "assistant",
                  content:
                    "I am your R&D tax research copilot. Ask me about Section 41 qualification, software projects, audit defense, client interviews, authority matrices, substantiation, or memo drafting. I will answer like a tax research assistant and keep the analysis tied to authority, risk, and next steps.",
                  sections: [
                    {
                      title: "Specialty",
                      icon: BookMarked,
                      tone: "text-[#84dcc6]",
                      items: [
                        "R&D credit research and claim development.",
                        "Authority mapping for tax consultant review.",
                        "Client fact gathering, documentation gaps, and exam defense.",
                      ],
                    },
                  ],
                },
              ]);
              setImportedFiles([]);
            }}
            type="button"
          >
            New Chat <RotateCcw size={16} />
          </button>
        </aside>

        <div className="flex min-w-0 flex-col bg-zinc-950">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#84dcc6] text-zinc-950">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="text-sm font-black">R&D Oracle Chat</p>
                <p className="text-xs font-semibold text-white/45">
                  {mode} · {importedFiles.length} imported file{importedFiles.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <button
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-white/10 px-3 text-xs font-black text-white"
              onClick={copyLatestBrief}
              type="button"
            >
              Copy Last Answer <Copy size={14} />
            </button>
          </div>

          <div ref={transcriptRef} className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4">
            {messages.map((message) => (
              <article
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#84dcc6] text-zinc-950">
                    <Bot size={18} />
                  </span>
                )}
                <div
                  className={`max-w-[860px] rounded-lg p-4 ${
                    message.role === "user" ? "bg-[#0f766e] text-white" : "bg-white/10 text-white"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-7">{message.content}</p>
                  {message.sections && (
                    <div className="mt-4 grid gap-3 2xl:grid-cols-3">
                      {message.sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <div key={section.title} className="rounded-lg bg-white/[0.07] p-3">
                            <div className="mb-2 flex items-center gap-2 text-sm font-black">
                              <Icon className={section.tone} size={15} />
                              {section.title}
                            </div>
                            <ul className="space-y-2 text-xs leading-5 text-white/65">
                              {section.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <FileText className="mt-0.5 shrink-0 text-white/35" size={12} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                    <UserRound size={18} />
                  </span>
                )}
              </article>
            ))}
          </div>

          <form className="border-t border-white/10 p-4" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="tax-chat-input">
              Ask the R&D tax research assistant
            </label>
            <div className="rounded-lg bg-white p-2">
              <textarea
                id="tax-chat-input"
                className="min-h-20 w-full resize-none rounded-md p-3 text-sm font-semibold leading-6 text-zinc-900 outline-none"
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about R&D qualification, Section 41, software, substantiation, exam defense, client questions, or memo drafting..."
                value={input}
              />
              <div className="flex flex-col gap-2 border-t border-zinc-200 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold text-zinc-500">
                  {importedFiles.length > 0
                    ? "Imported files will be treated as research context for the next answer."
                    : "Press Enter to send. Use Shift+Enter for a new line."}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-zinc-200 px-4 text-sm font-black text-zinc-700"
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                  >
                    Attach <Paperclip size={16} />
                  </button>
                  <button
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-zinc-950 px-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-45"
                    disabled={!input.trim()}
                    type="submit"
                  >
                    Send <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

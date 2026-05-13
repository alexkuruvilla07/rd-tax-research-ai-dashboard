import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Globe2,
  HelpCircle,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Quote,
  Rocket,
  SearchCheck,
  Smartphone,
  Sparkles,
  Star,
  Youtube,
} from "lucide-react";

const inquiryUrl = "https://forms.monday.com/forms/7dc5232b59f54d42ea81e439f3349944?r=use1";

const services = [
  {
    title: "Operations Overhaul",
    copy: "Bring messy systems, stalled projects, and unclear workflows into one operational success plan.",
    icon: SearchCheck,
  },
  {
    title: "Admin Accelerator",
    copy: "Move follow-ups, invoicing, email management, scheduling, and recurring admin work off your plate.",
    icon: ClipboardCheck,
  },
  {
    title: "Scaling for Success",
    copy: "Design the support structure you need before building a permanent operations team.",
    icon: Rocket,
  },
];

const faqs = [
  {
    question: "How do we express interest in being a client?",
    answer:
      "Simply complete the Engagement Spec form located here on the website and a member of the team will respond to schedule a call so they can learn more about your needs.",
  },
  {
    question: "How long does it take to get started?",
    answer: "You can be onboarded in as soon as 2 weeks.",
  },
  {
    question: "How quickly will tasks be completed?",
    answer:
      "Done & Done works on deadlines. You can indicate the desired deadline for all tasks and projects, including recurring weekly or monthly tasks.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "Once you submit the Engagement Specs Form, the team assesses which service is ideal for you.",
  },
  {
    question: "How many people will work with our company?",
    answer:
      "It depends on your final service package. The team designs a package around the amount of support your company needs.",
  },
  {
    question: "Can you be trained on our software?",
    answer:
      "Yes. As needed, they may do corporate training for the main software your organization uses.",
  },
  {
    question: "Do you work in a physical office or location?",
    answer: "The entire service is conducted 100% online.",
  },
  {
    question: "Do you provide month-to-month services?",
    answer:
      "No. Service lengths are 3 months, 6 months, 9 months, or 1 year.",
  },
  {
    question: "Do you need us to provide any technology?",
    answer:
      "No laptop, business phone, internet allowance, or other client-provided tools are required.",
  },
  {
    question: "How am I billed?",
    answer:
      "Your final service agreement includes the billing schedule, though clients are typically billed monthly.",
  },
];

const stats = [
  ["100%", "online operations support"],
  ["2 weeks", "possible onboarding speed"],
  ["4 terms", "3, 6, 9, or 12 months"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#2d6070] text-[#173629]">
      <div className="fixed inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.18)_1.5px,_transparent_1.5px)] bg-[length:28px_28px] opacity-30" />
      <div className="fixed inset-0 bg-[linear-gradient(135deg,#4a8fa8_0%,#3d7a8a_45%,#224d5c_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 text-white">
          <a className="flex items-center gap-3" href="#home" aria-label="Done and Done home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c8e63a] text-xs font-black text-[#173629]">
              D&D
            </span>
            <span className="text-sm font-bold tracking-wide">DONE & DONE</span>
          </a>
          <nav className="hidden items-center rounded-2xl bg-black/25 p-1 text-sm font-semibold backdrop-blur-sm md:flex">
            {["Services", "Process", "FAQ", "Contact"].map((item) => (
              <a
                key={item}
                className="rounded-xl px-4 py-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 text-xs font-medium text-white/70 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#c8e63a]" />
              Chief Get It Done Officer
            </span>
            <a
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-[#173629] shadow-sm transition hover:-translate-y-0.5"
              href={inquiryUrl}
            >
              Get Started <ArrowRight size={16} />
            </a>
          </div>
        </header>

        <section
          id="home"
          className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_430px] lg:py-16"
        >
          <div className="max-w-3xl text-white">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#dff66b]">
              <Sparkles size={15} /> Your chief &quot;get it done&quot; officer
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl">
              DONE & DONE
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-bold leading-snug text-white">
              Busy entrepreneur and business leaders? We got you.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
              Imagine being knee-deep in operational issues that are stopping you from making more
              money and serving clients at a higher level. Done & Done steps in so you stop trying
              to do it all on your own and start owning your role as CEO.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-2xl bg-[#c8e63a] px-5 py-3 text-sm font-black text-[#173629] shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
                href={inquiryUrl}
              >
                Submit Service Inquiry <ArrowRight size={17} />
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-2xl bg-white/12 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/18"
                href="#services"
              >
                View Services
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={value} className="rounded-2xl bg-black/18 p-4 ring-1 ring-white/10 backdrop-blur">
                  <p className="text-2xl font-black text-[#dff66b]">{value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-white/66">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[390px] lg:justify-self-end">
            <div className="relative h-[680px] rounded-[46px] bg-[#0a0a0a] p-[4px] shadow-[0_34px_80px_rgba(0,0,0,0.48)]">
              <div className="absolute left-1/2 top-4 z-30 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
              <div className="h-full overflow-hidden rounded-[42px] bg-[#f7f4e8]">
                <div className="flex items-center justify-between px-6 pb-3 pt-5 text-xs font-bold text-[#173629]">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <Smartphone size={14} />
                    Online
                  </span>
                </div>
                <div className="px-5">
                  <div className="overflow-hidden rounded-[30px] bg-[#173629] text-white">
                    <div className="h-52 bg-[url('https://static.wixstatic.com/media/b5cda4_70399a2c62ca4ac99113cabd85127ae4~mv2.jpg')] bg-cover bg-center" />
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8e63a]">
                        How done?
                      </p>
                      <h2 className="mt-2 text-2xl font-black leading-tight">
                        Off your plate. On ours.
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-white/70">
                        We collect your Get it Done Data, inspect current processes, and design a
                        custom Operational Success plan.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.title} className="flex gap-3 rounded-3xl bg-white p-4 shadow-sm">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f3a1] text-[#173629]">
                          <Icon size={20} />
                        </span>
                        <div>
                          <h3 className="text-sm font-black">{service.title}</h3>
                          <p className="mt-1 text-xs leading-5 text-[#637064]">{service.copy}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="process" className="relative z-10 bg-[#f7f4e8] py-20 text-[#173629]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#58756b]">Inspect your ops</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              We&apos;re talkin&apos; done done.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#59685f]">
              The first step is an assessment of your current operational processes. Done & Done
              collects important Get it Done Data so they can design a customized Operational
              Success plan for your business.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#59685f]">
              That gives you clarity about what they can assist with, how many projects they can
              accomplish, and how long you can work together before hiring a permanent operations
              team.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Assess", "Collect the operational details that show what is slowing the business down."],
              ["02", "Design", "Build a customized plan around services, projects, timing, and support level."],
              ["03", "Execute", "Take on the administrative and operational work with deadline-based delivery."],
              ["04", "Scale", "Support the business until a permanent operations team makes sense."],
            ].map(([step, title, copy]) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <span className="text-sm font-black text-[#8ca10f]">{step}</span>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#637064]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#58756b]">Our services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Operations help that feels like momentum.
              </h2>
            </div>
            <a
              className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#173629] px-5 py-3 text-sm font-bold text-white"
              href={inquiryUrl}
            >
              More Info <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-3xl bg-[#f7f4e8] p-7 ring-1 ring-black/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8e63a]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#637064]">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#173629] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c8e63a]">
              Receipts, we got &apos;em
            </p>
            <h2 className="mt-3 text-4xl font-black">BV Partners</h2>
          </div>
          <figure className="rounded-[32px] bg-white/8 p-8 ring-1 ring-white/10">
            <Quote className="text-[#c8e63a]" size={34} />
            <blockquote className="mt-6 text-xl font-bold leading-9 text-white/90">
              Done & Done has been a gamechanger for BVP Coffee Co.! From taking on
              administrative tasks such as client followups, invoicing, and email management, our
              Chief Get It Done Officer has truly made my life as a busy CEO so much easier. I
              highly recommend their services for businesses of all sizes.
            </blockquote>
            <div className="mt-6 flex gap-1 text-[#c8e63a]" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
          </figure>
        </div>
      </section>

      <section className="relative z-10 bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#58756b]">Our partners</p>
            <h2 className="mt-3 text-3xl font-black">Virtual assistant support with operational range.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Virtual assistant", "Operational systems", "Administrative execution"].map((partner) => (
              <div key={partner} className="rounded-3xl bg-[#f7f4e8] px-5 py-4 text-sm font-black text-[#173629]">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 bg-[#f7f4e8] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#58756b]">
            Frequently asked questions
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Everything clients ask first.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="flex gap-3">
                  <HelpCircle className="mt-1 shrink-0 text-[#8ca10f]" size={20} />
                  <div>
                    <h3 className="text-base font-black">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#637064]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#58756b]">Ready to get started?</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">Hand off the work that keeps stealing CEO time.</h2>
            <a
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#c8e63a] px-5 py-3 text-sm font-black text-[#173629]"
              href={inquiryUrl}
            >
              Submit Service Inquiry <ArrowRight size={17} />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [MapPin, "45 E City Ave.", "Bala Cynwyd, PA 19004"],
              [Mail, "Email", "contact@chiefgetitdoneofficer.org"],
              [Clock3, "Hours", "M-F 10a - 5p"],
              [Globe2, "Service Model", "100% online"],
            ].map(([Icon, title, detail]) => {
              const ContactIcon = Icon as typeof MapPin;
              return (
                <div key={title as string} className="rounded-3xl bg-[#f7f4e8] p-5">
                  <ContactIcon size={22} className="text-[#58756b]" />
                  <p className="mt-4 text-sm font-black">{title as string}</p>
                  <p className="mt-1 text-sm leading-6 text-[#637064]">{detail as string}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 px-5 py-6 text-xs text-[#637064] sm:px-8 md:flex-row lg:px-10">
          <p>©2023 by Sight Solutions LLC. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.chiefgetitdoneofficer.org/services-1">Services</a>
            <a href="https://www.chiefgetitdoneofficer.org/about">Meet the Team</a>
            <a href="https://www.chiefgetitdoneofficer.org/general-5">Careers</a>
            <a href="https://www.chiefgetitdoneofficer.org/general-6">Press</a>
            <a href="https://www.chiefgetitdoneofficer.org/privacy-policy">Privacy Policy</a>
            <a href="https://www.chiefgetitdoneofficer.org/terms-and-conditions">Terms & Conditions</a>
            <a className="inline-flex items-center gap-1" href="https://www.youtube.com/channel/UCuqspa4GvJsFy316Q9-Mm2g">
              <Youtube size={14} /> YouTube
            </a>
            <a className="inline-flex items-center gap-1" href="https://www.linkedin.com/in/ajee-cook-a6a455115/">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-1" href="https://www.instagram.com/chiefgetitdoneofficer/">
              <Instagram size={14} /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

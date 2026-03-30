import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BookOpen,
  ChevronRight,
  ChevronUp,
  Clock,
  Download,
  Linkedin,
  Menu,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const CHAPTERS = [
  {
    id: 1,
    icon: "🌱",
    title: "प्रारंभिक जीवन और संस्कार",
    shortDesc: "मधुबनी की पावन धरती से उद्यमिता का बीज",
    content: [
      "आशीष झा का जन्म 24 मार्च 1989 को बिहार के मधुबनी जिले के एक सुसंस्कृत मैथिल 'झा परिवार' में हुआ। उनके पिता, श्री अजीत झा, एक दिग्गज FoxPro प्रोग्रामर हेड थे। आशीष के भीतर उद्यमिता का बीज 12वीं कक्षा के दौरान ही पनप गया था।",
      "'Datagen' की नींव उनके पिता ने ही रखी थी, लेकिन नौकरी की व्यस्तता के कारण वे इसे समय नहीं दे पा रहे थे। आशीष ने अपने पिता के उस अधूरे सपने को अपनी आंखों में सजा लिया और महज 20 साल की उम्र में घर से बाहर निकल गए।",
      'उनके मन में एक ही बात थी— "अपने पिता का सपना, उनका बेटा जरूर पूरा करेगा।"',
    ],
  },
  {
    id: 2,
    icon: "⚔️",
    title: "स्वाभिमान की अग्निपरीक्षा",
    shortDesc: "दिल्ली के संघर्ष और तीन पहले योद्धा",
    content: [
      'महज 20 साल की उम्र में आशीष दिल्ली आए। ग्रेटर कैलाश में एक रियल एस्टेट व्यवसायी से मुलाकात हुई। आशीष ने एक स्वाभिमानी शर्त पर काम शुरू किया— "मैं पैसा मांग कर नहीं लूंगा, जो मेरा हक बनेगा बस वही दे दीजिएगा।"',
      "दो साल वहां सेल्स में कड़ी मेहनत की, लेकिन मालिक के हक का पैसा न देने की आदत के कारण आशीष ने वह रास्ता छोड़ दिया। इसके बाद उन्होंने घर से ही SMS का काम शुरू किया।",
      "इस सफर में उनके प्रथम तीन योद्धा मिले जो आज भी उनके साथ हैं:\n\n१. रजनीश कुमार झा (1st Employee): सेल्स में साथ दिया\n२. राहुल कुमार (2nd Employee): सपोर्ट की रीढ़ बने\n३. नवीन 'पंडित जी' (3rd Employee): एडमिन और रोजमर्रा के कार्य संभाले",
    ],
  },
  {
    id: 3,
    icon: "📱",
    title: "डिजिटल क्रांति का आगाज",
    shortDesc: "2014-2016: SMS, GST और राजनीतिक कैंपेन",
    content: [
      "2014 के बाद उन्होंने नेताजी सुभाष प्लेस से काम शुरू किया। 2016 में GST के आने के बाद उन्हें बिहार चुनाव में IAS आर.सी.पी. सिंह जी के साथ नीतीश कुमार जी के लिए SMS कैंपेन का बड़ा काम मिला।",
      "यह उनकी कंपनी के लिए एक बड़ा मोड़ था। राजनीतिक कैंपेन की सफलता ने Datagen को एक विश्वसनीय नाम बना दिया। बड़े नाम, बड़े प्रोजेक्ट, और बड़ी ज़िम्मेदारी — यही आशीष का नया सफर था।",
      "1 जुलाई को उनका विवाह हुआ, जिसने उनके जीवन में एक नया उत्तरदायित्व और मजबूती जोड़ी।",
    ],
  },
  {
    id: 4,
    icon: "🚀",
    title: "Authkey AI का जन्म",
    shortDesc: "संकट में अवसर: कोविड काल में महाआविष्कार",
    content: [
      "2018 में पहले बच्चे और दिसंबर 2019 में दूसरे बच्चे के जन्म के बाद, जब दुनिया कोविड के कारण थम गई थी, आशीष ने आपदा को अवसर में बदला।",
      "उन्होंने अपनी तकनीकी टीम के साथ 'Authkey.io' प्लेटफॉर्म का निर्माण किया। यह एक 'ऑल-इन-वन' कम्युनिकेशंस प्लेटफॉर्म है जो SMS, Voice, WhatsApp और Email को एक ही API पर जोड़ देता है।",
      "बिना किसी मार्केटिंग बजट के, केवल कॉल और मैसेज के जरिए उन्होंने इस ग्लोबल प्लेटफॉर्म को खड़ा किया। यह भारत का अपना 'स्वदेशी' कम्युनिकेशन इंजन था।",
    ],
  },
  {
    id: 5,
    icon: "👥",
    title: "42 जांबाज योद्धा",
    shortDesc: "वह परिवार जिसने ₹10 करोड़ का सपना साकार किया",
    content: [
      "आशीष का मानना है कि व्यापार अकेले नहीं, 'परिवार' से चलता है। आज 42 लोगों की टीम ने कंपनी को ₹10 करोड़ के टर्नओवर तक पहुँचाया है।",
      "सेल्स टीम: रजनीश झा, विनोद महलान, अमन झा, अजय यादव, प्रिंस झा, रितु तोमर, रवि कुमार\n\nसपोर्ट टीम: राहुल कुमार, पोयानी पाटिल, दीपक भारती और टीम\n\nतकनीकी टीम: सूरज सिंह और आशीष शर्मा के नेतृत्व में — नितेश सिंह, असद उल्लाह, कुणाल लिंगवाल, रिदम चौधरी, खुशबू सिंह, सागर झा",
      'एडमिन व अकाउंट्स: नवीन झा और जगन्नाथ झा (आशीष के बेहद करीबी)\n\nआशीष झा गर्व से कहते हैं— "मेरी 42 लोगों की यह टीम ही मेरी असली दौलत है।"',
    ],
  },
  {
    id: 6,
    icon: "🤖",
    title: "Authkey AI का क्रांतिकारी आविष्कार",
    shortDesc: "99.9% डिलीवरी रेट और AI-स्मार्ट राउटिंग",
    content: [
      "टेक टीम ने 'इंटेलिजेंट राउटिंग सिस्टम' बनाया। AI का उपयोग करके यह सिस्टम खुद तय करता है कि कौन सा मैसेज किस टेलीकॉम रूट से सबसे तेज और सुरक्षित तरीके से पहुंचेगा।",
      "इस तकनीक ने Datagen के क्लाइंट्स को 99.9% डिलीवरी रेट की गारंटी दी, जो पहले नामुमकिन माना जाता था।",
      "सूरज सिंह और आशीष शर्मा: एक साथ लाखों मैसेजेस को बिना रुके डिलीवर करने वाला प्लेटफॉर्म बनाया।\n\nनितेश सिंह और असद उल्लाह: एंड-टू-एंड एन्क्रिप्शन पर काम किया, जिससे सरकारी और निजी डेटा पूरी तरह सुरक्षित रहता है।",
    ],
  },
  {
    id: 7,
    icon: "♟️",
    title: "राजीव बिसारिया: ग्रोथ के चाणक्य",
    shortDesc: "टेलीकॉम उद्योग के महारथी का आगमन",
    content: [
      "2023 से राजीव बिसारिया Datagen परिवार का अहम हिस्सा बने। उनका असाधारण करियर कई कंपनियों को शून्य से शिखर तक ले जाने का गवाह रहा है।",
      "२००७-२००९: चैलनेक्स्ट सॉल्यूशंस में Cellpay (मोबाइल पेमेंट)\n\n२०१०-२०१५: यूनिचैल टेक्नोलॉजीज में ₹10 करोड़ से ₹120 करोड़ तक\n\nराष्ट्रीय योगदान: TCS के सहयोग से 'पासपोर्ट सेवा प्रोजेक्ट' को सफल बनाया\n\n२०१६: स्मार्टपिंग (वीडियोकॉन ग्रुप) में जीरो से ₹500 करोड़",
      'आशीष के शब्दों में— "राजीव वो हीरा हैं, जिसे तराशने की ज़रूरत नहीं थी, बस उसे सही जौहरी और सही मंच की तलाश थी।"',
    ],
  },
  {
    id: 8,
    icon: "🇮🇳",
    title: "जय प्रकाश: मिशन मातृभूमि",
    shortDesc: "जहाँ दुनिया सोचना बंद करती है, वहाँ से शुरुआत",
    content: [
      'पीआर कंसल्टेंट प्रियंका जी (MD) के माध्यम से जय प्रकाश से मुलाकात हुई। प्रियंका जी ने कहा था— "आशीष जी, ऐसा आदमी आपको दोबारा कभी नहीं मिलेगा।"',
      '"जहाँ दुनिया की सोच खत्म होती है, वहां से जय प्रकाश की रणनीति शुरू होती है।"',
      "उनके मार्गदर्शन में Datagen को भारत सरकार और वरिष्ठ IAS अधिकारियों के साथ काम करने का अवसर मिला। GeM Portal से शुरू होकर महज 15 दिनों में Datagen उन गलियारों में पहुँची जहाँ भारत के सबसे बड़े IAS अधिकारी नीतियां बनाते हैं।",
    ],
  },
  {
    id: 9,
    icon: "🏡",
    title: "प्रियंका जी और परिवार",
    shortDesc: "सफलता की असली प्रेरणा और शक्ति",
    content: [
      "प्रियंका जी (MD, PR Consultant) ने Datagen के भविष्य की दिशा बदल दी। उन्होंने जय प्रकाश को टीम से जोड़ा — यह एक ऐसा निर्णय था जिसने इतिहास रच दिया।",
      "आशीष जी का 1 जुलाई को विवाह हुआ। 2018 में पहले बच्चे और दिसंबर 2019 में दूसरे बच्चे का जन्म हुआ — दोनों बार नई ऊर्जा, नया जुनून।",
      "वे कहते हैं— \"ऑफिस की 42 लोगों की टीम और घर का यह छोटा सा संसार मिलकर ही 'Datagen' की आत्मा बनते हैं।\"",
    ],
  },
  {
    id: 10,
    icon: "🌟",
    title: "भविष्य का विजन",
    shortDesc: "₹12.95 लाख करोड़ का महासाम्राज्य",
    content: [
      "आज आशीष झा के मार्गदर्शन में Datagen और Authkey AI केंद्र और राज्य सरकारों के साथ काम कर रही हैं। वरिष्ठ IAS अधिकारियों के मार्गदर्शन में आशीष भारत का अपना स्वदेशी प्लेटफॉर्म बनाने की राह पर हैं।",
      "लक्ष्य स्पष्ट है—आने वाले 10 वर्षों में ₹12.95 लाख करोड़ के विशाल स्तर पर पहुँचना और दुनिया को दिखाना कि एक बिहारी युवा अपने पिता के सपने को किस ऊंचाई तक ले जा सकता है।",
      'आशीष झा गर्व से कहते हैं— "मेरी टेक टीम ने वो बनाया है जो दुनिया के लिए एक सपना था। Authkey AI केवल एक सॉफ्टवेयर नहीं, बल्कि आत्मनिर्भर भारत की तकनीकी ताकत का प्रमाण है।"\n\nजय हिन्द।',
    ],
  },
];

const TIMELINE = [
  { year: "1989", event: "जन्म", detail: "मधुबनी, बिहार" },
  { year: "2009", event: "दिल्ली यात्रा", detail: "संघर्ष की शुरुआत" },
  { year: "2012", event: "SMS बिजनेस", detail: "नींव पड़ी" },
  { year: "2016", event: "GST कैंपेन", detail: "+ विवाह" },
  { year: "2018", event: "पहला बच्चा", detail: "नई ऊर्जा" },
  { year: "2020", event: "Authkey AI", detail: "कोविड काल" },
  { year: "2023", event: "राजीव बिसारिया", detail: "नया अध्याय" },
  { year: "2024", event: "जय प्रकाश", detail: "सरकारी प्रोजेक्ट्स" },
  { year: "2034+", event: "₹12.95 लाख करोड़", detail: "महालक्ष्य" },
];

const QUOTES = [
  { text: "अपने पिता का सपना, उनका बेटा जरूर पूरा करेगा।", author: "आशीष झा" },
  {
    text: "जहाँ संघर्ष बड़ा होता है, वहां सफलता का शोर पूरी दुनिया सुनती है!",
    author: "आशीष झा",
  },
  {
    text: "जहाँ दुनिया की सोच खत्म होती है, वहां से जय प्रकाश की रणनीति शुरू होती है।",
    author: "Datagen परिवार",
  },
  { text: "मेरी 42 लोगों की यह टीम ही मेरी असली दौलत है।", author: "आशीष झा" },
  {
    text: "राजीव वो हीरा हैं, जिसे तराशने की ज़रूरत नहीं थी, बस उसे सही जौहरी और सही मंच की तलाश थी।",
    author: "आशीष झा",
  },
];

const TEAM = [
  {
    name: "आशीष झा",
    role: "Founder & Visionary",
    company: "Datagen Internet Services",
    initials: "आ",
    bg: "#D9771E",
    fg: "#fff",
  },
  {
    name: "राजीव बिसारिया",
    role: "Growth Architect",
    company: "Telecom Expert",
    initials: "रा",
    bg: "#0B1F3A",
    fg: "#C6A45D",
  },
  {
    name: "सूरज प्रकाश सिंह",
    role: "CTO & Tech Lead",
    company: "Authkey AI",
    initials: "सू",
    bg: "#C6A45D",
    fg: "#0B1F3A",
  },
  {
    name: "जगन्नाथ झा",
    role: "Accounts Head",
    company: "Trusted Backbone",
    initials: "ज",
    bg: "#132D4D",
    fg: "#E8D3A7",
  },
  {
    name: "रजनीश कुमार झा",
    role: "Sales Pioneer",
    company: "1st Employee",
    initials: "र",
    bg: "#D9771E",
    fg: "#fff",
  },
  {
    name: "राहुल कुमार",
    role: "Support Head",
    company: "2nd Employee",
    initials: "रा",
    bg: "#0B1F3A",
    fg: "#fff",
  },
  {
    name: "विनोद महलान",
    role: "Support Team Lead",
    company: "Datagen",
    initials: "वि",
    bg: "#C6A45D",
    fg: "#0B1F3A",
  },
  {
    name: "जय प्रकाश",
    role: "Strategic Advisor",
    company: "Mission India",
    initials: "ज",
    bg: "#132D4D",
    fg: "#E8D3A7",
  },
];

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

function ReadingProgressBar({ progress }: { progress: number }) {
  return (
    <div className="no-print fixed top-0 left-0 right-0 z-[100] h-1 bg-gold-light/30">
      <div
        className="reading-progress h-full bg-gradient-to-r from-saffron to-gold"
        style={{ width: `${progress}%` }}
        data-ocid="reading.loading_state"
      />
    </div>
  );
}

function ChapterNav({
  activeChapter,
  onChapterClick,
}: {
  activeChapter: number;
  onChapterClick: (id: number) => void;
}) {
  return (
    <nav aria-label="अध्याय नेविगेशन">
      <div className="mb-4 flex items-center gap-2 px-2">
        <BookOpen className="h-4 w-4 text-gold" />
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          अध्याय सूची
        </span>
      </div>
      <ul className="space-y-1">
        {CHAPTERS.map((ch) => (
          <li key={ch.id}>
            <button
              type="button"
              onClick={() => onChapterClick(ch.id)}
              data-ocid="chapter.tab"
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-all ${
                activeChapter === ch.id
                  ? "bg-saffron/20 text-saffron font-semibold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    activeChapter === ch.id
                      ? "bg-saffron text-white"
                      : "bg-white/20 text-white/70"
                  }`}
                >
                  {ch.id}
                </span>
                <span className="line-clamp-1 text-xs">{ch.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Header({
  activeChapter,
  onChapterClick,
}: {
  activeChapter: number;
  onChapterClick: (id: number) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print sticky top-1 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy font-display text-xl font-bold text-gold shadow-navy">
            आ
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold leading-tight text-navy">
              ASHISH JHA
            </div>
            <div className="text-xs leading-tight text-muted-foreground">
              शून्य से शिखर तक
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            { label: "होम", href: "#hero" },
            { label: "अध्याय", href: "#chapters-grid" },
            { label: "यात्रा", href: "#timeline" },
            { label: "टीम", href: "#team" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-saffron"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            data-ocid="nav.pdf_button"
            variant="outline"
            className="hidden rounded-full border-navy px-4 text-navy hover:bg-navy hover:text-white sm:inline-flex gap-2"
            onClick={() => window.print()}
          >
            <Download className="h-4 w-4" />
            PDF
          </Button>
          <a href="#chapter-1">
            <Button
              data-ocid="nav.primary_button"
              className="hidden rounded-full bg-saffron px-5 text-white hover:bg-saffron-hover sm:inline-flex"
            >
              ई-बुक पढ़ें
            </Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-ocid="nav.open_modal_button"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-72 bg-navy p-6"
              data-ocid="nav.sheet"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron font-display text-xl font-bold text-white">
                  आ
                </div>
                <div>
                  <div className="font-bold text-white">आशीष झा</div>
                  <div className="text-xs text-gold">शून्य से शिखर तक</div>
                </div>
              </div>
              <ChapterNav
                activeChapter={activeChapter}
                onChapterClick={onChapterClick}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-2/5 bg-saffron" />
        <div className="flex-1 bg-navy" />
      </div>
      {/* Curve separator */}
      <div
        className="absolute inset-y-0 left-[36%] w-24 bg-navy"
        style={{ clipPath: "ellipse(100% 100% at 100% 50%)" }}
      />
      {/* Gold line accent */}
      <div
        className="absolute left-[34%] inset-y-0 w-0.5 opacity-50"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.71 0.098 73), transparent)",
        }}
      />
      {/* Mandala bg right */}
      <div
        className="pointer-events-none absolute right-12 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{
          border: "1px solid oklch(0.71 0.098 73)",
          boxShadow:
            "0 0 0 40px oklch(0.71 0.098 73 / 0.04), 0 0 0 80px oklch(0.71 0.098 73 / 0.02)",
        }}
      />
      {/* Mandala bg left */}
      <div
        className="pointer-events-none absolute left-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-[0.08]"
        style={{
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow: "0 0 0 30px rgba(255,255,255,0.04)",
        }}
      />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center gap-8 px-6 py-20 md:flex-row md:gap-16">
        {/* Book cover */}
        <motion.div
          className="flex w-full shrink-0 justify-center md:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="book-3d relative">
            <img
              src="/assets/generated/ebook-cover.dim_400x560.jpg"
              alt="आशीष झा: शून्य से शिखर तक — ई-बुक कवर"
              className="w-56 rounded-lg object-cover md:w-72"
              style={{
                boxShadow:
                  "-15px 15px 50px rgba(0,0,0,0.6), 5px 0 20px rgba(0,0,0,0.3)",
              }}
            />
            {/* Book pages effect */}
            <div
              className="absolute inset-y-2 right-0 w-3 rounded-r-lg"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, #f5f5f0, #f5f5f0 1px, #e8e8e3 2px)",
                boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex w-full flex-col gap-5 md:w-3/5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <div>
            <Badge className="mb-4 border-gold/30 bg-gold/15 text-gold hover:bg-gold/20">
              <Sparkles className="mr-1 h-3 w-3" />
              प्रीमियम डिजिटल ई-बुक
            </Badge>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              आशीष झा
            </h1>
            <h2 className="mt-2 text-xl font-bold text-saffron md:text-2xl lg:text-3xl">
              शून्य से शिखर तक
            </h2>
            <p className="mt-2 text-base text-gold-light/90">
              पिता के सपने को हकीकत बनाने की महागाथा
            </p>
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
            मधुबनी, बिहार से दिल्ली के पावर कॉरिडोर्स तक — एक युवा उद्यमी की वह
            अविस्मरणीय यात्रा जिसने Authkey AI और Datagen Internet Services को जन्म
            दिया।
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#chapter-1">
              <Button
                data-ocid="hero.primary_button"
                className="rounded-full bg-saffron px-7 py-2.5 text-white hover:bg-saffron-hover"
                style={{ boxShadow: "0 4px 20px oklch(0.65 0.163 50 / 0.4)" }}
              >
                अभी पढ़ें
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#chapters-grid">
              <Button
                variant="outline"
                data-ocid="hero.secondary_button"
                className="rounded-full border-gold text-gold hover:bg-gold/10 px-7 py-2.5"
              >
                अध्याय देखें
              </Button>
            </a>
            <Button
              data-ocid="hero.pdf_button"
              variant="outline"
              size="lg"
              className="rounded-full border-white/50 text-white hover:bg-white/10 gap-2"
              onClick={() => window.print()}
            >
              <Download className="h-5 w-5" />
              PDF डाउनलोड करें
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-4">
            {[
              {
                icon: <BookOpen className="h-4 w-4 text-gold" />,
                label: "10 अध्याय",
              },
              {
                icon: <Users className="h-4 w-4 text-gold" />,
                label: "42 योद्धा",
              },
              {
                icon: <Clock className="h-4 w-4 text-gold" />,
                label: "35 साल की महागाथा",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/60"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gold/60">✍️ लेखक: IAS प्रमोद कुमार मिश्रा</p>
        </motion.div>
      </div>
    </section>
  );
}

function ChapterGrid() {
  return (
    <section id="chapters-grid" className="bg-secondary/50 py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            अध्याय सूची
          </h2>
          <div className="gold-divider mx-auto mt-3 max-w-xs">✦ ◈ ✦</div>
          <p className="mt-2 text-muted-foreground">
            दस अध्यायों में समाई एक महागाथा
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {CHAPTERS.map((ch, i) => (
            <motion.a
              key={ch.id}
              href={`#chapter-${ch.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-ocid={`chapters.item.${ch.id}`}
            >
              <div className="chapter-card h-full cursor-pointer rounded-xl border border-border bg-white p-4">
                <div className="mb-3 flex items-start justify-between">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-saffron/10 text-xs font-bold text-saffron">
                    {ch.id}
                  </span>
                  <span className="text-2xl">{ch.icon}</span>
                </div>
                <h3 className="mb-1 text-sm font-semibold leading-tight text-navy">
                  {ch.title}
                </h3>
                <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {ch.shortDesc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterSection({
  chapter,
  chapterRef,
}: {
  chapter: (typeof CHAPTERS)[0];
  chapterRef: (el: HTMLElement | null) => void;
}) {
  return (
    <section
      id={`chapter-${chapter.id}`}
      data-chapter-id={chapter.id}
      ref={chapterRef}
      className="print-chapter py-14 px-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="gold-divider mb-8">✦ ◈ ✦</div>

        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-2xl shadow-navy">
            {chapter.icon}
          </div>
          <div>
            <div className="mb-1 text-sm font-semibold uppercase tracking-widest text-saffron">
              अध्याय {chapter.id}
            </div>
            <h2 className="text-2xl font-bold leading-tight text-navy md:text-3xl">
              {chapter.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {chapter.shortDesc}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border-l-4 border-saffron bg-secondary/50 p-6 md:p-8">
          {chapter.content.map((para, i) => (
            <p
              // biome-ignore lint/suspicious/noArrayIndexKey: paragraph order is stable
              key={i}
              className={`whitespace-pre-line text-base leading-[2] text-foreground/85 ${i > 0 ? "mt-4" : ""}`}
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="timeline" className="overflow-hidden bg-navy py-20 px-4">
      <div className="relative mx-auto max-w-7xl">
        {/* Mandala decorations */}
        {[-1, 1].map((side) => (
          <div
            key={side}
            className="pointer-events-none absolute top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-[0.08]"
            style={{
              [side === -1 ? "left" : "right"]: "-80px",
              border: "1px solid oklch(0.71 0.098 73)",
              boxShadow:
                "0 0 0 25px oklch(0.71 0.098 73 / 0.06), 0 0 0 50px oklch(0.71 0.098 73 / 0.03)",
            }}
          />
        ))}

        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            यात्रा का कालक्रम
          </h2>
          <div className="gold-divider mx-auto mt-3 max-w-xs text-gold">
            ✦ ◈ ✦
          </div>
          <p className="mt-2 text-white/50 text-sm">
            1989 से आज तक का अविश्वसनीय सफर
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-max px-4">
            <div className="relative flex items-center">
              {/* Line */}
              <div
                className="absolute left-12 right-12 top-1/2 h-px -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(to right, transparent, oklch(0.71 0.098 73 / 0.8), transparent)",
                }}
              />
              {TIMELINE.map((item, i) => (
                <motion.div
                  // biome-ignore lint/suspicious/noArrayIndexKey: timeline order is stable
                  key={i}
                  className="relative mx-6 flex flex-col items-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  data-ocid={`timeline.item.${i + 1}`}
                >
                  <div className="mb-4 text-center">
                    <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-white whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <div
                    className="timeline-dot z-10 h-3.5 w-3.5 rounded-full bg-gold"
                    style={{ boxShadow: "0 0 10px oklch(0.71 0.098 73 / 0.6)" }}
                  />
                  <div className="mt-4 max-w-[90px] text-center">
                    <div className="text-xs font-semibold text-white leading-tight">
                      {item.event}
                    </div>
                    <div className="mt-1 text-xs text-gold/60">
                      {item.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuotesSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % QUOTES.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-navy-secondary py-20 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Quote className="mx-auto mb-6 h-10 w-10 text-saffron opacity-60" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <blockquote className="text-xl font-semibold leading-relaxed text-white md:text-2xl lg:text-3xl">
                &ldquo;{QUOTES[active].text}&rdquo;
              </blockquote>
              <p className="mt-4 font-medium text-saffron">
                — {QUOTES[active].author}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-2">
            {QUOTES.map((q, i) => (
              <button
                // biome-ignore lint/suspicious/noArrayIndexKey: quote dot navigation, stable order
                type="button"
                key={q.text.slice(0, 10)}
                onClick={() => setActive(i)}
                data-ocid="quote.toggle"
                className={`h-2 rounded-full transition-all ${active === i ? "w-8 bg-saffron" : "w-2 bg-white/30"}`}
                aria-label={`उद्धरण ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            प्रमुख योद्धा
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            वे लोग जिन्होंने इतिहास रचा
          </p>
          <div className="gold-divider mx-auto mt-3 max-w-xs">✦ ◈ ✦</div>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: team order is stable
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              data-ocid={`team.item.${i + 1}`}
            >
              <div className="rounded-2xl border border-border p-5 text-center transition-shadow hover:shadow-md">
                <Avatar className="mx-auto mb-3 h-14 w-14">
                  <AvatarFallback
                    className="text-lg font-bold"
                    style={{ backgroundColor: member.bg, color: member.fg }}
                  >
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-sm font-semibold leading-tight text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-saffron">
                  {member.role}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {member.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInSection() {
  return (
    <section className="bg-secondary/50 py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-navy md:text-4xl">
              LinkedIn पोस्ट
            </h2>
            <div className="gold-divider mx-auto mt-3 max-w-xs">✦ ◈ ✦</div>
          </div>

          <div className="rounded-2xl bg-navy p-6 md:p-8 shadow-navy">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-white">आशीष झा</div>
                <div className="text-xs text-gold/70">
                  Founder, Datagen Internet Services
                </div>
              </div>
            </div>

            <div className="space-y-4 text-white/90 leading-relaxed">
              <p className="text-base font-semibold text-saffron">
                &ldquo;जहाँ संघर्ष बड़ा होता है, वहां सफलता का शोर पूरी दुनिया सुनती
                है!&rdquo;
              </p>
              <p className="text-sm">
                आज मैं अपनी जीवन यात्रा के उन पन्नों को साझा कर रहा हूँ, जो मेरे दिल के सबसे
                करीब हैं। बिहार के मधुबनी की गलियों से लेकर दिल्ली के पावर कॉरिडोर्स तक का
                यह सफर केवल मेरा नहीं, बल्कि मेरे पिता श्री अजीत झा के उस अधूरे सपने का है,
                जिसे मैंने अपनी आँखों में सजाया था।
              </p>

              <div className="rounded-xl bg-white/5 p-4 space-y-2.5 text-sm">
                <p className="font-medium text-gold">इस सफर के कुछ खास पड़ाव:</p>
                <p>
                  🔹 <span className="font-medium">शुरुआत:</span> 20 साल की उम्र में
                  बिना किसी सिफारिश के दिल्ली में अपनी पहचान बनाने की जद्दोजहद।
                </p>
                <p>
                  🔹 <span className="font-medium">कोविड की आपदा:</span> जब
                  दुनिया थमी थी, तब घर में बच्चों की किलकारियों के बीच Authkey.io का
                  जन्म हुआ।
                </p>
                <p>
                  🔹 <span className="font-medium">टीम की शक्ति:</span> साकेत,
                  सूरज, आशीष शर्मा, जगन्नाथ, विनोद जी और मेरी 42 लोगों की वो 'Datagen
                  Family', जिन्होंने हर मुश्किल को मुमकिन बनाया।
                </p>
                <p>
                  🔹 <span className="font-medium">नया अध्याय (2024):</span>{" "}
                  राजीव जैसे टेलीकॉम के 'चाणक्य' और जय प्रकाश जैसे रणनीतिकार के जुड़ने से, आज
                  हम भारत सरकार के साथ मिलकर राष्ट्र निर्माण में योगदान दे रहे हैं।
                </p>
              </div>

              <div className="rounded-xl border border-gold/30 bg-gold/8 p-4 text-center space-y-1">
                <p className="font-bold text-gold text-sm">
                  पिता का सपना + अटूट स्वाभिमान + 42 योद्धाओं की टीम = Datagen
                  Internet Services
                </p>
                <p className="font-semibold text-white text-sm">
                  शून्य से शुरू होकर ₹12.95 लाख करोड़ के विजन तक!
                </p>
              </div>

              <p className="text-center font-bold text-lg text-gold">
                जय हिन्द। 🇮🇳
              </p>
              <p className="text-center text-xs text-gold/60">
                — लेखक: IAS प्रमोद कुमार मिश्रा
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-saffron font-display text-2xl font-bold text-white shadow-lg">
                आ
              </div>
              <div>
                <div className="text-xl font-bold text-white">आशीष झा</div>
                <div className="text-sm text-gold">शून्य से शिखर तक</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              मधुबनी से दिल्ली तक — एक बेटे का संकल्प, पिता का सपना, और 42 योद्धाओं की
              अनथक मेहनत से बना Datagen Internet Services का महासाम्राज्य।
            </p>
            <p className="mt-4 font-bold text-gold">जय हिन्द। 🇮🇳</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              अध्याय १-५
            </h4>
            <ul className="space-y-2">
              {CHAPTERS.slice(0, 5).map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#chapter-${ch.id}`}
                    data-ocid="footer.link"
                    className="text-xs text-white/60 transition-colors hover:text-gold"
                  >
                    {ch.id}. {ch.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              अध्याय ६-१०
            </h4>
            <ul className="space-y-2">
              {CHAPTERS.slice(5).map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#chapter-${ch.id}`}
                    data-ocid="footer.link"
                    className="text-xs text-white/60 transition-colors hover:text-gold"
                  >
                    {ch.id}. {ch.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <span>लेखक: IAS प्रमोद कुमार मिश्रा</span>
            <span>·</span>
            <span>Datagen Internet Services</span>
            <span>·</span>
            <span>Authkey AI</span>
          </div>
          <p className="text-xs text-white/40">
            © {year}. Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 transition-colors hover:text-gold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-ocid="app.button"
          className="no-print fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-saffron text-white shadow-lg transition-colors hover:bg-saffron-hover"
          aria-label="ऊपर जाएं"
          style={{ boxShadow: "0 4px 20px oklch(0.65 0.163 50 / 0.5)" }}
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function DesktopSidebar({
  activeChapter,
  onChapterClick,
}: { activeChapter: number; onChapterClick: (id: number) => void }) {
  return (
    <aside className="no-print hidden w-60 shrink-0 lg:block">
      <div
        className="sticky top-20 rounded-2xl bg-navy p-4"
        style={{ boxShadow: "0 8px 32px oklch(0.21 0.054 242 / 0.4)" }}
      >
        <ChapterNav
          activeChapter={activeChapter}
          onChapterClick={onChapterClick}
        />
      </div>
    </aside>
  );
}

// ─────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────
export default function App() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const chapterRefs = useRef<Map<number, HTMLElement>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(Math.min(100, progress));
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-chapter-id"));
            if (id) setActiveChapter(id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    const refs = chapterRefs.current;
    for (const el of refs.values()) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const setChapterRef = (id: number) => (el: HTMLElement | null) => {
    if (el) chapterRefs.current.set(id, el);
    else chapterRefs.current.delete(id);
  };

  const scrollToChapter = (id: number) => {
    document
      .getElementById(`chapter-${id}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen font-sans">
      <ReadingProgressBar progress={readingProgress} />
      <Header activeChapter={activeChapter} onChapterClick={scrollToChapter} />

      <main>
        <HeroSection />
        <ChapterGrid />

        {/* Chapter content with sidebar */}
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex gap-8">
            <DesktopSidebar
              activeChapter={activeChapter}
              onChapterClick={scrollToChapter}
            />
            <div className="min-w-0 flex-1">
              {CHAPTERS.map((ch) => (
                <ChapterSection
                  key={ch.id}
                  chapter={ch}
                  chapterRef={setChapterRef(ch.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <TimelineSection />
        <QuotesSection />
        <TeamSection />
        <LinkedInSection />
      </main>

      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
}

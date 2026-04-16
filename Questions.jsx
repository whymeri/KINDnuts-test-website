import { useState } from "react";

// ─── Assets ───────────────────────────────────────────────────────────────────
const LOGO =
  "https://www.figma.com/api/mcp/asset/a53a6ba0-407e-4e35-b5c7-f21ab7a986f6";
const BG_TEXTURE =
  "https://www.figma.com/api/mcp/asset/f3c994a2-8948-4480-b3c4-175e22351ea4";
const ACCOUNT_ICON =
  "https://www.figma.com/api/mcp/asset/9c080dc4-3027-4829-980b-29b7d65c74ba";
const CHEVRON_DOWN =
  "https://www.figma.com/api/mcp/asset/09619d4a-82bc-4d40-aa87-77d9ac361a5d";

// ─── SVG Radio Icons ──────────────────────────────────────────────────────────
function RadioSelected() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#1a1a19" />
      <circle cx="12" cy="12" r="5" fill="white" />
    </svg>
  );
}

function RadioDeactive() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" stroke="#dbd8d5" strokeWidth="2" fill="white" />
    </svg>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav
      style={{ backgroundColor: "#211f20" }}
      className="w-full h-[108px] relative shrink-0 flex items-center px-[86px] justify-between"
    >
      <img
        src={LOGO}
        alt="KIND Nuts+"
        className="h-[80px] object-contain"
        style={{ aspectRatio: "1250/390" }}
      />
      <div className="flex items-center gap-2">
        <img src={ACCOUNT_ICON} alt="" className="w-[18px] h-[18px]" />
        <span
          className="text-[#f1f1f1] text-[16px] font-medium"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          John Miller
        </span>
        <img src={CHEVRON_DOWN} alt="" className="w-[18px] h-[18px]" />
      </div>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="w-full shrink-0"
      style={{ backgroundColor: "#1a1a19", minHeight: 318 }}
    >
      <div className="px-[83px] pt-[64px] pb-[32px] flex flex-col gap-0">
        <h2
          className="text-white text-[32px] font-bold tracking-[-0.64px] mb-[62px]"
          style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
        >
          Happier happens together
        </h2>
        <div className="flex gap-[130px] mb-[24px]">
          {["Accessibility", "Privacy Policy", "Site Map", "Terms of Use"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-white text-[14px] underline leading-[1.5]"
                style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
              >
                {link}
              </a>
            )
          )}
        </div>
        <hr className="border-t border-white/20 mb-[24px]" />
        <p
          className="text-white text-[12px] leading-[1.5]"
          style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
        >
          © Copyright 2026 Mars
        </p>
      </div>
    </footer>
  );
}

// ─── Option Row ───────────────────────────────────────────────────────────────
function OptionRow({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center border border-[#dbd8d5] rounded-[20px] bg-white pr-4 text-left transition-colors duration-150"
      style={{
        minHeight: 56,
        boxShadow: selected ? "0 0 0 2px #1a1a19" : undefined,
      }}
    >
      <div className="flex items-center justify-center w-[56px] h-[56px] shrink-0">
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          {selected ? <RadioSelected /> : <RadioDeactive />}
        </div>
      </div>
      <span
        className="text-[16px] text-black leading-[1.5] px-2"
        style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
      >
        {label}
      </span>
    </button>
  );
}

// ─── Question Tile ────────────────────────────────────────────────────────────
function QuestionTile({ question, options, multiSelect, selected, onSelect, hint }) {
  return (
    <div
      className="w-full bg-white rounded-[24px] p-[24px] flex flex-col gap-[40px]"
      style={{ boxShadow: "0px 1.4px 8px 0px rgba(26,26,25,0.25)" }}
    >
      {/* Header */}
      <div className="flex flex-col gap-[16px]">
        <p
          className="text-[20px] font-bold text-[#1a1a19] leading-[1.2]"
          style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
        >
          {question}
        </p>
        <hr className="border-t border-[#dbd8d5] w-full" />
      </div>

      {/* Options */}
      <div className="flex flex-col gap-[16px]">
        {options.map((opt) => {
          const isSelected = multiSelect
            ? selected.includes(opt.value)
            : selected === opt.value;
          return (
            <OptionRow
              key={opt.value}
              label={opt.label}
              selected={isSelected}
              onClick={() => onSelect(opt.value, multiSelect)}
            />
          );
        })}
        {hint && (
          <p
            className="text-[16px] text-black leading-[1.5] italic py-[12px]"
            style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
          >
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Step Navigation ──────────────────────────────────────────────────────────
function StepNav({ step, total, onBack, onNext, onSubmit }) {
  const isLast = step === total;
  return (
    <div className="flex items-center justify-between w-full mt-[32px]">
      <button
        onClick={onBack}
        disabled={step === 1}
        className="px-[32px] py-[12px] rounded-full border border-[#dbd8d5] text-[14px] font-medium text-[#1a1a19] bg-white disabled:opacity-30 transition-opacity"
        style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
      >
        Back
      </button>
      <div className="flex gap-[6px] items-center">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{
              width: i + 1 === step ? 20 : 8,
              height: 8,
              backgroundColor: i + 1 === step ? "#1a1a19" : "#dbd8d5",
            }}
          />
        ))}
      </div>
      <button
        onClick={isLast ? onSubmit : onNext}
        className="px-[32px] py-[12px] rounded-full text-[14px] font-medium text-white transition-opacity"
        style={{
          backgroundColor: "#1a1a19",
          fontFamily: "Helvetica Neue, Helvetica, sans-serif",
        }}
      >
        {isLast ? "See my match" : "Next"}
      </button>
    </div>
  );
}

// ─── Question Data ────────────────────────────────────────────────────────────
const STEPS = [
  {
    id: "q1",
    label: "Question 1",
    questions: [
      {
        id: "goals",
        question: "What are you looking to get out of your daily nuts? (multi-select)",
        multiSelect: true,
        options: [
          { label: "Sustained Energy", value: "sustained_energy" },
          { label: "Micronutrients & Electrolytes", value: "micronutrients" },
          { label: "Low sugar / Clean snacking", value: "low_sugar" },
          { label: "Something to munch on", value: "munch" },
          { label: "I just love nuts! ❤️", value: "love_nuts" },
        ],
      },
    ],
  },
  {
    id: "q2",
    label: "Question 2",
    questions: [
      {
        id: "activity",
        question: "How active are you on a typical day?",
        multiSelect: false,
        options: [
          { label: "Mostly desk / low movement", value: "desk" },
          { label: "Light activity (walking, errands)", value: "light" },
          { label: "Moderate workouts 3–4x/week", value: "moderate" },
          { label: "Heavy training / endurance / sweating a lot", value: "heavy" },
        ],
      },
      {
        id: "sweat",
        question: "Follow-up: Do you sweat a lot when you exercise?",
        multiSelect: false,
        options: [
          { label: "Not really", value: "not_really" },
          { label: "Average", value: "average" },
          { label: "A lot", value: "a_lot" },
        ],
      },
    ],
  },
  {
    id: "q3",
    label: "Question 3",
    questions: [
      {
        id: "afternoon",
        question: "How do you usually feel mid-afternoon?",
        multiSelect: false,
        options: [
          { label: "Energized", value: "energized" },
          { label: "Slightly tired", value: "slightly_tired" },
          { label: "Craving salty snacks", value: "cravings" },
          { label: "Headache / foggy / drained", value: "headache" },
        ],
        hint: "Salt cravings and fatigue can be signs you need more electrolytes.",
      },
    ],
  },
  {
    id: "q4",
    label: "Question 4",
    questions: [
      {
        id: "flavors",
        question: "What flavors do you naturally reach for?",
        multiSelect: false,
        options: [
          { label: "Bold & spicy 🌶️", value: "bold_spicy" },
          { label: "Clean & classic 🧂", value: "clean_classic" },
          { label: "Savory-sweet 🍫", value: "savory_sweet" },
          { label: "Herbal & mello 🍯", value: "herbal_mello" },
        ],
      },
      {
        id: "flavor_detail",
        question: "Follow-up",
        multiSelect: false,
        options: [
          { label: "Sweet & savory", value: "sweet_savory" },
          { label: "Mostly savory", value: "mostly_savory" },
          { label: "Balanced", value: "balanced" },
          { label: "Occasionally sweet", value: "occ_sweet" },
        ],
      },
    ],
  },
  {
    id: "q5",
    label: "Question 5",
    questions: [
      {
        id: "macros",
        question: "What macro's do you tend to under index in?",
        multiSelect: false,
        options: [
          { label: "Protein", value: "protein" },
          { label: "Healthy Fats", value: "healthy_fats" },
          { label: "Carbs", value: "carbs" },
        ],
      },
    ],
  },
  {
    id: "q6",
    label: "Question 6",
    questions: [
      {
        id: "preferences",
        question: "Any preferences we should know?",
        multiSelect: true,
        options: [
          { label: "Lower sodium", value: "lower_sodium" },
          { label: "Higher protein", value: "higher_protein" },
          { label: "No added sugar", value: "no_sugar" },
          { label: "Keto / low-carb friendly", value: "keto" },
          { label: "Plant-based focus!", value: "plant_based" },
        ],
      },
    ],
  },
  {
    id: "q7",
    label: "Question 7",
    questions: [
      {
        id: "timing",
        question: "When would you eat your daily nuts?",
        multiSelect: false,
        options: [
          { label: "Morning commute", value: "morning_commute" },
          { label: "Mid-morning snack", value: "mid_morning" },
          { label: "Pre-workout", value: "pre_workout" },
          { label: "Post-workout", value: "post_workout" },
          { label: "Afternoon slump", value: "afternoon_slump" },
          { label: "Evening wind-down", value: "evening" },
        ],
      },
    ],
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Questions({ onComplete }) {
  const [step, setStep] = useState(0); // 0-indexed
  const [answers, setAnswers] = useState({});

  const currentStep = STEPS[step];
  const totalSteps = STEPS.length;

  function handleSelect(questionId, value, multiSelect) {
    setAnswers((prev) => {
      if (multiSelect) {
        const current = prev[questionId] || [];
        const exists = current.includes(value);
        return {
          ...prev,
          [questionId]: exists
            ? current.filter((v) => v !== value)
            : [...current, value],
        };
      }
      return { ...prev, [questionId]: value };
    });
  }

  function getSelected(questionId, multiSelect) {
    return multiSelect ? answers[questionId] || [] : answers[questionId] || null;
  }

  function handleNext() {
    if (step < totalSteps - 1) setStep((s) => s + 1);
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleSubmit() {
    if (onComplete) onComplete(answers);
    else console.log("Assessment complete:", answers);
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />

      {/* Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Marble background */}
        <img
          src={BG_TEXTURE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.4 }}
        />

        <div className="relative z-10 py-[80px] px-[104px] flex flex-col gap-[24px] max-w-[1232px]">
          {/* Step label */}
          <p
            className="text-[24px] font-bold text-[#1a1a19] leading-[1.2]"
            style={{ fontFamily: "Helvetica Neue, Helvetica, sans-serif" }}
          >
            {currentStep.label}
          </p>

          {/* Question tiles */}
          <div className="flex flex-col gap-[24px] w-[918px]">
            {currentStep.questions.map((q) => (
              <QuestionTile
                key={q.id}
                question={q.question}
                options={q.options}
                multiSelect={q.multiSelect}
                selected={getSelected(q.id, q.multiSelect)}
                onSelect={(value, multiSelect) =>
                  handleSelect(q.id, value, multiSelect)
                }
                hint={q.hint}
              />
            ))}
          </div>

          {/* Step navigation */}
          <div className="w-[918px]">
            <StepNav
              step={step + 1}
              total={totalSteps}
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

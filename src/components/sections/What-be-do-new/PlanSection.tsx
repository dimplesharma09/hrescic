import React from "react";

const plans = [
    {
        label: "Plan",
        title: "START",
        subtitle: "You’re not getting the sales or inquiries you should.",
        intro: "People aren’t clearly understanding your offer or your value.",
        foundationTitle: "One-time foundation:",
        foundation: [
            "Brand & website audit",
            "Clear messaging + value proposition",
            "One high-impact landing page or core update",
            "Initial AI video or visual assets",
        ],
        monthlyTitle: "Monthly rhythm (light):",
        monthly: [
            "Essential updates",
            "Light launch support",
            "Small conversion-focused improvements",
        ],
        ideal:
            "A clear setup and steady inquiries - without heavy monthly production.",
        bg: "bg-[#F8F8F8]",
    },
    {
        label: "Plan",
        title: "GROW",
        subtitle:
            "You’re getting clients — but not consistently or not the right ones.",
        intro: "Your communication isn’t attracting the audience you want.",
        foundationTitle: "One-time foundation:",
        foundation: [
            "Deep brand & website review",
            "Messaging & positioning refinement",
            "Setup of content formats, tone and templates",
        ],
        monthlyTitle: "Monthly rhythm (light):",
        monthly: [
            "Regular social + email content",
            "Monthly design + copy support",
            "Ongoing AI video refresh",
            "Website + funnel optimisation",
            "Monthly insights",
        ],
        ideal:
            "A reliable flow of high-quality clients and a consistent brand presence.",
        bg: "bg-[#F3EEF7]",
    },
    {
        label: "Plan",
        title: "SCALE",
        subtitle:
            "You already have demand — but your creative workload is chaos.",
        intro: "Too many tasks, too many channels, no unified system.",
        foundationTitle: "One-time foundation:",
        foundation: [
            "Strategic workshop",
            "Brand system refinement",
            "Funnel & journey mapping",
            "Multi-channel content strategy",
        ],
        monthlyTitle: "Monthly rhythm (light):",
        monthly: [
            "High-volume content + design",
            "Continuous UX/web improvements",
            "Multi-channel campaigns",
            "Strategy + analytics calls",
            "AI video integrated in every cycle",
        ],
        ideal:
            "A full creative department — without hiring a full creative department.",
        bg: "bg-[#E4DDEA]",
    },
    {
        label: "Plan",
        title: "CUSTOM",
        subtitle:
            "You have internal people — but no partner who sees the whole system.",
        intro: "",
        foundationTitle: "One-time foundation:",
        foundation: [
            "Full ecosystem review",
            "Internal alignment",
            "Long-term roadmap",
        ],
        monthlyTitle: "Monthly rhythm (light):",
        monthly: [
            "Hybrid execution (in-house + precise)",
            "Unified content + web + design + video",
            "Ongoing leadership & optimisation",
        ],
        ideal:
            "A strategic partner who connects the dots across your entire ecosystem.",
        bg: "bg-[#E2D8EC]",
    },
];

const PlanSection = () => {
    return (
        <section className="container-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-14 md:mt-0">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-light tracking-tight text-[#4a4a4a] md:text-4xl">
                    Plans & Deliverables
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b6b6b] md:text-base">
                    Choose the plan that matches where your brand is right now
                    <br className="hidden sm:block" />
                    and where you want to go next.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {plans.map((plan) => (
                    <div
                        key={plan.title}
                        className={`${plan.bg} flex min-h-[540px] flex-col rounded-[16px] px-4 py-4 sm:px-5 sm:py-5`}
                    >
                        <p className="text-[14px] font-medium text-[#555]">{plan.label}</p>

                        <div className="mt-9">
                            <h4 className="text-[20px] font-bold tracking-tight text-[#300060]">
                                {plan.title}
                            </h4>

                            <div className="mt-3 h-px w-full bg-[#00000012]" />

                            <p className="mt-3 text-[14px] leading-8 text-[#555]">
                                {plan.subtitle}
                            </p>
                        </div>

                        <div className="mt-8 flex-1">
                            {plan.intro ? (
                                <>
                                    <div className="h-px w-full bg-[#00000012]" />
                                    <p className="mt-4 text-[11px] leading-5 text-[#555555]">
                                        {plan.intro}
                                    </p>
                                </>
                            ) : (
                                <div className="h-px w-full bg-[#00000012]" />
                            )}

                            <div className="mt-4">
                                <h4 className="text-[11px] font-semibold text-[#4f4f4f]">
                                    {plan.foundationTitle}
                                </h4>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-[10.5px] leading-5 text-[#555555]">
                                    {plan.foundation.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h4 className="text-[11px] font-semibold text-[#4f4f4f]">
                                    {plan.monthlyTitle}
                                </h4>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-[10.5px] leading-5 text-[#555555]">
                                    {plan.monthly.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 border-t border-[#00000012] pt-4">
                            <h4 className="text-[16px] font-bold text-[#4d4d4d]">
                                Ideal if you want:
                            </h4>
                            <p className="mt-2 text-[16px] leading-6 text-[#555]">
                                {plan.ideal}
                            </p>

                            <button className="bg-[#37C100] hover:bg-[#2d9802] text-white  px-5 py-2 rounded-full text-[11px] font-medium transition-all my-6 mx-auto flex ">
                                Book a Free Demo
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlanSection;
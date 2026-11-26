"use client";

import React, { useState, useEffect } from "react";
import {
  campaignPackages,
  publishingOptions,
  CampaignPackage,
  PublishingOption,
  calculateEstimate,
  packageInclusionsNote,
} from "@/data/packages";

interface StudioInquiryProps {
  initialPackage?: CampaignPackage["id"];
  initialPublishing?: PublishingOption["id"];
  onPackageChange?: (id: CampaignPackage["id"]) => void;
  onPublishingChange?: (id: PublishingOption["id"]) => void;
}

export default function StudioInquiry({
  initialPackage = "product-launch",
  initialPublishing = "self",
  onPackageChange,
  onPublishingChange,
}: StudioInquiryProps) {
  const [packageId, setPackageId] = useState<CampaignPackage["id"]>(initialPackage);
  const [publishingId, setPublishingId] =
    useState<PublishingOption["id"]>(initialPublishing);

  // Sync with prop changes if passed from parent
  useEffect(() => {
    if (initialPackage) setPackageId(initialPackage);
  }, [initialPackage]);

  useEffect(() => {
    if (initialPublishing) setPublishingId(initialPublishing);
  }, [initialPublishing]);

  const [productNameOrUrl, setProductNameOrUrl] = useState("");
  const [mainTakeaway, setMainTakeaway] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [phoneOrWhatsapp, setPhoneOrWhatsapp] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const estimate = calculateEstimate(packageId, publishingId);

  const handlePackageSelect = (id: CampaignPackage["id"]) => {
    setPackageId(id);
    if (onPackageChange) onPackageChange(id);
  };

  const handlePublishingSelect = (id: PublishingOption["id"]) => {
    setPublishingId(id);
    if (onPublishingChange) onPublishingChange(id);
  };

  // Build mailto link
  const buildMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Video Project Inquiry: ${productNameOrUrl || "New SaaS Project"} [${estimate.pkg.name} - ${estimate.displayTotal}]`
    );

    const bodyText = `Hi Ali,

I'd like to get an explainer / product film produced with ExplainerAce.

PROJECT DETAILS:
- Product Name / URL: ${productNameOrUrl || "[Provide link]"}
- Package: ${estimate.pkg.name} ($${estimate.pkg.price})
- Publishing Preference: ${estimate.pub.name} (${estimate.pub.priceLabel})
- Calculated Estimate: ${estimate.displayTotal}
- Primary Takeaway / Goal: ${mainTakeaway || "[What viewers should understand]"}
- Target Launch Date: ${targetDate || "[Target date or flexible]"}

CONTACT:
- Name: ${senderName || "[My Name]"}
- Email: ${senderEmail || "[My Email]"}
${phoneOrWhatsapp ? `- WhatsApp / Phone: ${phoneOrWhatsapp}\n` : ""}
Looking forward to hearing from you.`;

    return `mailto:ali@explainerace.com?subject=${subject}&body=${encodeURIComponent(
      bodyText
    )}`;
  };

  // Build WhatsApp quick chat URL
  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hi Ali, I'm interested in the ${estimate.pkg.name} package (${estimate.displayTotal}) for ${
        productNameOrUrl || "my product"
      }. Are you available for a quick chat?`
    );
    return `https://wa.me/923139110721?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!senderName || !senderEmail || !productNameOrUrl) {
      setErrorMessage("Please fill in your name, work email, and product name/URL.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const fullMessage = `
--- CAMPAIGN INQUIRY DETAILS ---
Package Selected: ${estimate.pkg.name} ($${estimate.pkg.price})
Publishing Option: ${estimate.pub.name} (${estimate.pub.priceLabel})
Total Estimate: ${estimate.displayTotal}
Turnaround: ${estimate.pkg.turnaround}

Product Name or URL: ${productNameOrUrl}
Viewer Goal / Main Takeaway: ${mainTakeaway || "Not specified"}
Target Launch Date: ${targetDate || "Flexible"}
WhatsApp / Phone: ${phoneOrWhatsapp || "Not provided"}

Inclusions:
- ${estimate.pkg.headlineSummary}
- ${estimate.pkg.filesSummary}
    `.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          company: productNameOrUrl,
          selectedPackage: `${estimate.pkg.name} (${estimate.displayTotal})`,
          message: fullMessage,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send inquiry. Please email ali@explainerace.com directly.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong. Please click 'Open Email Draft' to contact Ali directly."
      );
    }
  };

  return (
    <section
      id="inquiry"
      className="relative py-24 sm:py-32 border-t border-white/[0.08] bg-[#07080B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-white/[0.04] border border-white/[0.1] text-accent-lime mb-5">
            <span>Step 03</span>
            <span className="text-white/30">•</span>
            <span>Project Brief</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-warm-50 font-display">
            Start your campaign inquiry.
          </h2>

          <p className="mt-5 text-base sm:text-xl text-warm-300 leading-relaxed font-light">
            Share what you’re launching and when you need it. You’ll receive a
            confirmed quote, production timeline, and script kickoff within 12
            hours.
          </p>
        </div>

        {status === "success" ? (
          /* Success Screen */
          <div className="max-w-2xl mx-auto rounded-3xl bg-[#101217] border border-accent-lime/40 p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(212,255,58,0.15)]">
            <div className="w-16 h-16 rounded-full bg-accent-lime/10 border border-accent-lime/40 flex items-center justify-center mx-auto mb-6 text-accent-lime">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-warm-50 font-display">
              Inquiry received, {senderName}!
            </h3>

            <p className="mt-4 text-warm-300 text-sm sm:text-base leading-relaxed">
              I’ve received your brief for{" "}
              <strong className="text-warm-100">{productNameOrUrl}</strong> with
              the{" "}
              <strong className="text-accent-lime">
                {estimate.pkg.name}
              </strong>{" "}
              package ({estimate.displayTotal}).
            </p>

            <p className="mt-3 text-xs sm:text-sm text-warm-400">
              I’ll review your product screens and email you at{" "}
              <span className="text-warm-200 underline">{senderEmail}</span>{" "}
              within 12 hours with script starters and schedule confirmation.
            </p>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-lime text-black font-semibold text-sm hover:bg-accent-limeHover transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <span className="font-mono">→</span>
              </a>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.06] text-warm-200 font-medium text-sm hover:bg-white/[0.1] transition-colors"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Inquiry Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Package & Publishing Switchers */}
                <div className="p-6 rounded-2xl bg-[#0F1116] border border-white/[0.08] space-y-6">
                  {/* Select Package */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-400 mb-3">
                      Selected Production Package:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {campaignPackages.map((pkg) => (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => handlePackageSelect(pkg.id)}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            packageId === pkg.id
                              ? "bg-accent-lime/10 border-accent-lime text-warm-50 shadow-[0_0_15px_rgba(212,255,58,0.15)]"
                              : "bg-white/[0.02] border-white/[0.08] text-warm-300 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="text-xs font-bold">{pkg.name}</div>
                          <div className="font-mono text-xs text-accent-lime mt-1">
                            ${pkg.price}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Publishing */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <label className="block text-xs font-mono uppercase tracking-wider text-warm-400 mb-3">
                      Publishing & Distribution Preference:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {publishingOptions.map((pub) => (
                        <button
                          key={pub.id}
                          type="button"
                          onClick={() => handlePublishingSelect(pub.id)}
                          className={`p-3 rounded-xl text-left border transition-all ${
                            publishingId === pub.id
                              ? "bg-accent-lime/10 border-accent-lime text-warm-50 shadow-[0_0_15px_rgba(212,255,58,0.15)]"
                              : "bg-white/[0.02] border-white/[0.08] text-warm-300 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="text-xs font-bold leading-tight">
                            {pub.name}
                          </div>
                          <div className="font-mono text-xs text-warm-300 mt-1">
                            {pub.priceLabel}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="space-y-6">
                  {/* Product Name or URL */}
                  <div>
                    <label
                      htmlFor="productNameOrUrl"
                      className="block text-sm font-medium text-warm-200 mb-2"
                    >
                      Product name or URL <span className="text-accent-lime">*</span>
                    </label>
                    <input
                      id="productNameOrUrl"
                      type="text"
                      required
                      value={productNameOrUrl}
                      onChange={(e) => setProductNameOrUrl(e.target.value)}
                      placeholder="e.g. Acme Studio or https://acme.app"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0F1116] border border-white/[0.1] text-warm-100 placeholder-warm-500 focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime text-sm"
                    />
                  </div>

                  {/* One main thing the viewer should understand */}
                  <div>
                    <label
                      htmlFor="mainTakeaway"
                      className="block text-sm font-medium text-warm-200 mb-2"
                    >
                      One main takeaway / key action{" "}
                      <span className="text-warm-400 text-xs font-normal">
                        (What should the viewer do or understand?)
                      </span>
                    </label>
                    <textarea
                      id="mainTakeaway"
                      rows={3}
                      value={mainTakeaway}
                      onChange={(e) => setMainTakeaway(e.target.value)}
                      placeholder="e.g. See how fast our AI auto-generates test suites, or sign up for our public beta launch on Product Hunt."
                      className="w-full px-4 py-3 rounded-xl bg-[#0F1116] border border-white/[0.1] text-warm-100 placeholder-warm-500 focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime text-sm leading-relaxed"
                    />
                  </div>

                  {/* Target Date */}
                  <div>
                    <label
                      htmlFor="targetDate"
                      className="block text-sm font-medium text-warm-200 mb-2"
                    >
                      Target launch date / deadline{" "}
                      <span className="text-warm-400 text-xs font-normal">
                        (Estimated turnaround: {estimate.pkg.turnaround})
                      </span>
                    </label>
                    <input
                      id="targetDate"
                      type="text"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      placeholder="e.g. Next week, end of month, or April 15 Product Hunt launch"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0F1116] border border-white/[0.1] text-warm-100 placeholder-warm-500 focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime text-sm"
                    />
                  </div>

                  {/* Contact Info (Name + Email) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="senderName"
                        className="block text-sm font-medium text-warm-200 mb-2"
                      >
                        Your name <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        id="senderName"
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Ali or Sarah Connor"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0F1116] border border-white/[0.1] text-warm-100 placeholder-warm-500 focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="senderEmail"
                        className="block text-sm font-medium text-warm-200 mb-2"
                      >
                        Work email <span className="text-accent-lime">*</span>
                      </label>
                      <input
                        id="senderEmail"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="founder@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0F1116] border border-white/[0.1] text-warm-100 placeholder-warm-500 focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp (Optional) */}
                  <div>
                    <label
                      htmlFor="phoneOrWhatsapp"
                      className="block text-sm font-medium text-warm-200 mb-2"
                    >
                      WhatsApp / Phone{" "}
                      <span className="text-warm-400 text-xs font-normal">
                        (Optional, for quick script questions)
                      </span>
                    </label>
                    <input
                      id="phoneOrWhatsapp"
                      type="text"
                      value={phoneOrWhatsapp}
                      onChange={(e) => setPhoneOrWhatsapp(e.target.value)}
                      placeholder="+1 (555) 000-0000 or WhatsApp number"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0F1116] border border-white/[0.1] text-warm-100 placeholder-warm-500 focus:outline-none focus:border-accent-lime focus:ring-1 focus:ring-accent-lime text-sm"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex-1 py-4 px-6 rounded-xl bg-accent-lime text-black font-bold text-sm tracking-wide hover:bg-accent-limeHover transition-all shadow-[0_0_20px_rgba(212,255,58,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Sending brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <span className="font-mono">→</span>
                        </>
                      )}
                    </button>

                    <a
                      href={buildMailtoUrl()}
                      className="py-4 px-6 rounded-xl bg-white/[0.06] border border-white/[0.1] text-warm-100 font-semibold text-sm hover:bg-white/[0.1] transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <span>Open Email Draft</span>
                      <span className="text-warm-400 font-mono text-xs">✉</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-xs text-warm-400 font-mono pt-2">
                    <span>Direct contact: ali@explainerace.com</span>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-lime hover:underline"
                    >
                      Or ping on WhatsApp (+92 313 9110721) →
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Live Quote & Estimate Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 rounded-3xl bg-[#0E1015] border border-white/[0.1] p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-lime mb-1">
                    Live Transparent Estimate
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-warm-50 font-display">
                    Campaign Summary
                  </h3>
                </div>

                {/* Breakdown List */}
                <div className="space-y-4 py-4 border-y border-white/[0.08] text-sm">
                  {/* Selected Package */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-warm-100">
                        {estimate.pkg.name} Package
                      </div>
                      <div className="text-xs text-warm-400 mt-0.5">
                        {estimate.pkg.headlineSummary}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-warm-100 text-right">
                      ${estimate.pkg.price}
                    </div>
                  </div>

                  {/* Publishing Option */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-warm-100">
                        Publishing: {estimate.pub.name}
                      </div>
                      <div className="text-xs text-warm-400 mt-0.5">
                        {estimate.pub.summary}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-warm-100 text-right whitespace-nowrap">
                      {estimate.pub.priceLabel}
                    </div>
                  </div>

                  {/* Total Files Output */}
                  <div className="flex items-start justify-between gap-4 pt-2 border-t border-white/[0.04]">
                    <div className="text-xs text-warm-300">
                      Total Finished Video Files:
                    </div>
                    <div className="font-mono font-bold text-accent-lime text-xs text-right">
                      {estimate.pkg.totalFilesCount} files
                    </div>
                  </div>

                  {/* Turnaround */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-xs text-warm-300">
                      Estimated Production Time:
                    </div>
                    <div className="font-mono text-warm-200 text-xs text-right">
                      {estimate.pkg.turnaround}
                    </div>
                  </div>
                </div>

                {/* Total Calculated Estimate */}
                <div className="p-4 rounded-xl bg-accent-lime/10 border border-accent-lime/30">
                  <div className="text-xs font-mono uppercase tracking-wider text-warm-300 mb-1">
                    Calculated Total
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent-lime font-mono">
                    {estimate.displayTotal}
                  </div>
                  <div className="text-xs text-warm-300 mt-1">
                    {estimate.pub.id === "monthly"
                      ? "Production fee one-time + monthly posting retainer"
                      : "All production & export files covered"}
                  </div>
                </div>

                {/* Inclusions note */}
                <p className="text-xs text-warm-400 leading-relaxed">
                  {packageInclusionsNote}
                </p>

                {/* Studio Trust Pill */}
                <div className="pt-2 flex items-center gap-3 text-xs text-warm-300 border-t border-white/[0.06]">
                  <span className="w-2 h-2 rounded-full bg-accent-lime" />
                  <span>
                    Direct 1-on-1 collaboration with founder & lead motion
                    designer Ali.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

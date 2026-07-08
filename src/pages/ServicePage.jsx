import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Inline SVG Icons ── */
const IconSearch = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const IconFileText = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);
const IconDroplet = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);
const IconEye = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const IconSprout = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10"></path>
    <path d="M12 10a6 6 0 0 1 6-6"></path>
    <path d="M12 14a6 6 0 0 0-6-6"></path>
  </svg>
);
const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
const IconTag = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);
const IconTrendingUp = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const IconTarget = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const IconAlertCircle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const IconCheckCircle = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const IconDollarSign = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);


/* ── Animation Variants ── */
const EASE_CURVE = [0.16, 1, 0.3, 1];

const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_CURVE } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE_CURVE } },
};

const STYLES = `
  /* ── Shared bullet list ── */
  .srv-bullet-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .srv-bullet-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    font-size: 16px;
    line-height: 1.65;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
  }
  .srv-bullet-item strong {
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    font-weight: 600;
  }
  .srv-bullet-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    margin-top: 9px;
    flex-shrink: 0;
  }
  .srv-check-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    flex-shrink: 0;
    margin-top: 3px;
  }

  /* ── Part cards ── */
  .srv-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-top: 36px;
  }
  .srv-role-card {
    background: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245,241,229));
    border-radius: 16px;
    padding: 32px;
  }
  .srv-role-card h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 18px;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
  }
  .srv-role-body {
    font-size: 15px;
    line-height: 1.7;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin: 0 0 20px;
  }

  /* ── Process steps grid ── */
  .srv-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 44px;
  }
  .srv-step-card {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 16px;
    padding: 28px;
  }
  .srv-step-num {
    font-size: 13px;
    font-weight: 700;
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    letter-spacing: 0.06em;
    margin-bottom: 10px;
  }
  .srv-step-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    margin-bottom: 14px;
  }
  .srv-step-card h3 {
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 10px;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
  }
  .srv-step-card p {
    font-size: 14px;
    line-height: 1.65;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin: 0;
  }

  /* ── Harvest numbered list ── */
  .srv-harvest-list {
    list-style: none;
    padding: 0;
    margin: 28px 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 780px;
  }
  .srv-harvest-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    font-size: 16px;
    line-height: 1.65;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
  }
  .srv-harvest-num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .srv-harvest-item strong {
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    font-weight: 600;
  }

  /* ── Responsibility table ── */
  .srv-resp-wrapper {
    margin-top: 36px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 16px;
    overflow: hidden;
  }
  .srv-resp-header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    background: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    color: #fff;
  }
  .srv-resp-header-cell {
    padding: 14px 20px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }
  .srv-resp-header-cell.orange {
    background: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-resp-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    border-top: 1px solid rgba(0,0,0,0.07);
  }
  .srv-resp-row:nth-child(even) {
    background: rgba(0,0,0,0.015);
  }
  .srv-resp-cell {
    padding: 16px 20px;
    font-size: 15px;
    line-height: 1.5;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    display: flex;
    align-items: center;
  }
  .srv-resp-cell.label {
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    font-weight: 500;
  }
  .srv-check-mark {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-dash {
    color: rgba(0,0,0,0.25);
  }

  /* ── Traceability bullets ── */
  .srv-trace-list {
    list-style: none;
    padding: 0;
    margin: 28px 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 780px;
  }
  .srv-trace-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    font-size: 16px;
    line-height: 1.65;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
  }
  .srv-trace-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    flex-shrink: 0;
    margin-top: 1px;
  }
  .srv-trace-item strong {
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    font-weight: 600;
  }

  /* ── Why Farmers cards ── */
  .srv-why-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
  }
  .srv-why-card-item {
    background: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245,241,229));
    border-radius: 16px;
    padding: 28px;
  }
  .srv-why-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    margin-bottom: 14px;
  }
  .srv-why-card-item h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 8px;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
  }
  .srv-why-card-item p {
    font-size: 14px;
    line-height: 1.65;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin: 0;
  }

  /* ── Closing statement block ── */
  .srv-closing-block {
    background: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245,241,229));
    border-left: 4px solid var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    border-radius: 0 12px 12px 0;
    padding: 24px 28px;
    margin-top: 36px;
    font-size: 16px;
    line-height: 1.75;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    max-width: 780px;
  }

  @media (max-width: 900px) {
    .srv-two-col { grid-template-columns: 1fr; }
    .srv-steps-grid { grid-template-columns: 1fr 1fr; }
    .srv-why-cards { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .srv-steps-grid { grid-template-columns: 1fr; }
    .srv-why-cards { grid-template-columns: 1fr; }
    .srv-resp-header { grid-template-columns: 2fr 1fr 1fr; }
    .srv-resp-row { grid-template-columns: 2fr 1fr 1fr; }
    .srv-resp-cell { padding: 12px 14px; font-size: 13px; }
    .srv-resp-header-cell { padding: 12px 14px; }
  }

  /* ── Redesigned Partnership Section Styles ── */
  .srv-intro-container {
    max-width: 680px;
    margin: 20px 0 48px 0;
  }
  .srv-intro-p {
    font-size: 16px;
    line-height: 1.7;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin-bottom: 20px;
  }
  .srv-grid-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin-bottom: 48px;
  }
  .srv-premium-card {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015), 0 2px 6px rgba(0, 0, 0, 0.015);
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 280ms cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    text-align: left;
  }
  .srv-premium-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
  }
  .srv-premium-card-icon {
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin-bottom: 24px;
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
  }
  .srv-premium-card:hover .srv-premium-card-icon {
    transform: scale(1.05);
  }
  .srv-premium-card.orange-accent .srv-premium-card-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-premium-card h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 12px 0;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    text-transform: none;
    letter-spacing: normal;
  }
  .srv-premium-card.orange-accent h3 {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-premium-card p {
    font-size: 15px;
    line-height: 1.7;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin: 0;
  }

  /* Stat Cards */
  .srv-stat-card-number {
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    margin-bottom: 16px;
    font-family: inherit;
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-block;
  }
  .srv-premium-card:hover .srv-stat-card-number {
    transform: scale(1.02);
  }
  .srv-premium-card.orange-accent .srv-stat-card-number {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-stat-card-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    margin-bottom: 12px;
  }

  /* Benefits Panel */
  .srv-benefits-panel {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015), 0 2px 6px rgba(0, 0, 0, 0.015);
    margin-top: 16px;
    text-align: left;
  }
  .srv-benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-top: 24px;
  }
  .srv-benefit-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .srv-benefit-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    margin-bottom: 16px;
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
  }
  .srv-benefit-item:hover .srv-benefit-icon {
    transform: scale(1.05);
  }
  .srv-benefit-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    margin-bottom: 8px;
  }
  .srv-benefit-desc {
    font-size: 14px;
    line-height: 1.6;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
  }

  @media (max-width: 900px) {
    .srv-grid-two-col {
      grid-template-columns: 1fr 1fr;
    }
    .srv-benefits-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }
  }
  @media (max-width: 600px) {
    .srv-grid-two-col {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .srv-benefits-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .srv-benefits-panel {
      padding: 24px;
    }
  }

  /* ── Premium Chapter/Part Layout ── */
  .srv-section-chapter-grid {
    display: grid;
    grid-template-columns: 6fr 4fr;
    gap: 48px;
    margin-bottom: 40px;
    align-items: start;
    text-align: left;
  }
  .srv-chapter-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .srv-chapter-left h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    margin: 16px 0 24px;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
  }
  .srv-chapter-left p {
    font-size: 16px;
    line-height: 1.75;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin-bottom: 24px;
    max-width: 650px;
  }
  .srv-chapter-left p:last-child {
    margin-bottom: 0;
  }

  .srv-chapter-right {
    display: flex;
    flex-direction: column;
  }

  /* Executive Summary Panel */
  .srv-summary-panel {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015), 0 2px 6px rgba(0, 0, 0, 0.015);
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  .srv-summary-badge {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .srv-summary-highlight {
    font-size: 32px;
    font-weight: 700;
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .srv-summary-short-exp {
    font-size: 14px;
    line-height: 1.5;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin-bottom: 20px;
  }
  .srv-summary-divider {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
    margin: 0 0 20px 0;
  }
  .srv-summary-points {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .srv-summary-point-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    font-weight: 550;
  }
  .srv-summary-point-icon {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    flex-shrink: 0;
    margin-top: 1px;
  }
  .srv-summary-supporting {
    font-size: 12px;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    line-height: 1.5;
  }

  /* Chapter Cards Grid */
  .srv-chapter-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 40px;
    width: 100%;
  }

  /* Premium chapter cards styling */
  .srv-chapter-card {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.015), 0 2px 6px rgba(0, 0, 0, 0.015);
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    height: 100%;
  }
  .srv-chapter-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05), 0 4px 14px rgba(0, 0, 0, 0.03);
  }
  .srv-chapter-card-icon {
    font-size: 28px;
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    margin-bottom: 20px;
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
    align-items: center;
  }
  .srv-chapter-card:hover .srv-chapter-card-icon {
    transform: scale(1.05);
  }
  .srv-chapter-card h4 {
    font-size: 16px;
    font-weight: 700;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    margin: 0 0 10px 0;
  }
  .srv-chapter-card p {
    font-size: 14px;
    line-height: 1.65;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin: 0;
  }

  /* Responsive Design Breakers */
  @media (max-width: 900px) {
    .srv-section-chapter-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .srv-chapter-right {
      order: 2; /* Stacks summary panel below introduction */
    }
    .srv-chapter-cards-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 600px) {
    .srv-section-chapter-grid {
      grid-template-columns: 1fr;
    }
    .srv-chapter-right {
      order: -1; /* Summary panel goes first on mobile */
      margin-bottom: 24px;
    }
    .srv-chapter-cards-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  /* ── Premium Feature Rail Redesign ── */
  .srv-feature-rail {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
  .srv-rail-row {
    position: relative;
    display: flex;
    align-items: center;
    padding: 36px 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: background-color 300ms ease-out;
    text-align: left;
    text-decoration: none;
  }
  .srv-rail-row::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    opacity: 0;
    transform: scaleY(0.7);
    transition: opacity 300ms ease-out, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .srv-rail-row:hover {
    background-color: rgba(195, 96, 54, 0.015);
  }
  .srv-rail-row:hover::before {
    opacity: 1;
    transform: scaleY(1);
  }
  .srv-rail-num {
    font-size: 20px;
    font-weight: 600;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    width: 60px;
    flex-shrink: 0;
    transition: color 300ms ease-out;
  }
  .srv-rail-row:hover .srv-rail-num {
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-rail-icon-wrapper {
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin-right: 48px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), color 300ms ease-out;
  }
  .srv-rail-row:hover .srv-rail-icon-wrapper {
    transform: scale(1.05);
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
  }
  .srv-rail-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .srv-rail-row:hover .srv-rail-content {
    transform: translateX(4px);
  }
  .srv-rail-content h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    margin: 0;
    text-transform: none;
    letter-spacing: normal;
  }
  .srv-rail-content p {
    font-size: 14px;
    line-height: 1.6;
    color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
    margin: 0;
  }
  .srv-rail-arrow {
    font-size: 24px;
    color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
    opacity: 0;
    transform: translateX(-8px);
    transition: opacity 300ms ease-out, transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
    margin-left: 24px;
    flex-shrink: 0;
    display: inline-flex;
  }
  .srv-rail-row:hover .srv-rail-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* CTA Section Styling */
  .srv-rail-cta-section {
    margin-top: 64px;
    margin-bottom: 64px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .srv-rail-cta-statement {
    font-size: 18px;
    line-height: 1.7;
    color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
    max-width: 720px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .srv-rail-row {
      padding: 28px 16px;
    }
    .srv-rail-icon-wrapper {
      margin-right: 24px;
    }
  }
  @media (max-width: 600px) {
    .srv-rail-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 24px 16px;
    }
    .srv-rail-num {
      width: auto;
      margin-bottom: 4px;
    }
    .srv-rail-arrow {
      align-self: flex-end;
      margin-left: 0;
      opacity: 1;
      transform: none;
    }
    .srv-rail-row:hover .srv-rail-content {
      transform: none;
    }
  }
  }
  }
`;

/* ── Responsibilities table data ── */
const RESP_ROWS = [
  { label: 'Provide eligible mature Agarwood trees',      you: true,  mrida: false },
  { label: 'Maintain and protect trees through to harvest', you: true,  mrida: false },
  { label: 'Secure required permissions from authorities', you: true,  mrida: false },
  { label: 'Survey the site and tag every eligible tree', you: false, mrida: true  },
  { label: 'Fund and carry out all professional inoculation', you: false, mrida: true },
  { label: 'Monitor tree health and resin development',   you: false, mrida: true  },
  { label: 'Cover all inoculation and monitoring costs',  you: false, mrida: true  },
  { label: 'Manage harvesting, grading, and sale',        you: false, mrida: true  },
  { label: 'Connect harvest to global buyers and markets', you: false, mrida: true },
];

export default function ServicePage() {
  useEffect(() => {
    document.title = 'Agarwood Farmer Partnership Model | How It Works | Mrida Infra';
  }, []);

  return (
    <div className="contact-page srv-page-redesign">
      <style>{STYLES}</style>

      {/* ── HERO ── */}
      <section className="contact-hero">
        <h1>How Our Agarwood Farmer Partnership Works</h1>
        <p className="contact-hero-sub">
          A transparent, farmer-first partnership that puts real income in your hands from day one — with zero inoculation cost on your remaining trees and a clear, agreed share of returns after harvest. No hidden terms. No lost land. Just a fair deal, confirmed in writing before any work begins.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      {/* ── HOW THE AGARWOOD FARMER PARTNERSHIP MODEL WORKS ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="srv-redesign-section"
      >
        <h2>How the Agarwood Farmer Partnership Model Works</h2>
        
        {/* 1. Introduction */}
        <div className="srv-intro-container">
          <p className="srv-intro-p">
            Mrida's mixed commercial acquisition model is built to solve that. We split your eligible trees into two clearly defined parts, so you earn income now and again at harvest — without carrying any inoculation cost.
          </p>
        </div>

        {/* 2. Problem → Solution */}
        <div className="srv-grid-two-col">
          <div className="srv-premium-card">
            <div className="srv-premium-card-icon">
              <IconAlertCircle />
            </div>
            <h3>The Problem</h3>
            <p>
              Most farmers who own mature Agarwood trees face the same barrier. The trees hold genuine, significant value — but unlocking it through professional inoculation takes capital, expertise, and time that most landowners simply can't access. So the value stays locked inside the wood, and the opportunity passes.
            </p>
          </div>
          <div className="srv-premium-card orange-accent">
            <div className="srv-premium-card-icon">
              <IconCheckCircle />
            </div>
            <h3>The Mrida Solution</h3>
            <p>
              Mrida's mixed commercial acquisition model is built to solve that. We split your eligible trees into two clearly defined parts, so you earn income now and again at harvest — without carrying any inoculation cost.
            </p>
          </div>
        </div>

        {/* 3. 20% / 80% Split */}
        <div className="srv-grid-two-col">
          <div className="srv-premium-card">
            <div className="srv-stat-card-number">20%</div>
            <div className="srv-stat-card-title">A minimum of 20%</div>
            <p>
              we purchase these trees outright and pay you an agreed price, upfront, before any harvest takes place.
            </p>
          </div>
          <div className="srv-premium-card orange-accent">
            <div className="srv-stat-card-number">80%</div>
            <div className="srv-stat-card-title">The remaining 80%</div>
            <p>
              these stay in your name. We fund and carry out professional inoculation and all monitoring entirely at our own cost.
            </p>
          </div>
        </div>

        {/* 4. Partnership Outcome */}
        <div className="srv-benefits-panel">
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Partnership Outcome</h3>
          <div className="srv-benefits-grid">
            <div className="srv-benefit-item">
              <div className="srv-benefit-icon">
                <IconDollarSign />
              </div>
              <div className="srv-benefit-title">Guaranteed Early Income</div>
              <div className="srv-benefit-desc">guaranteed early income</div>
            </div>
            <div className="srv-benefit-item">
              <div className="srv-benefit-icon">
                <IconDroplet />
              </div>
              <div className="srv-benefit-title">Zero Inoculation Cost</div>
              <div className="srv-benefit-desc">zero inoculation expense</div>
            </div>
            <div className="srv-benefit-item">
              <div className="srv-benefit-icon">
                <IconSearch />
              </div>
              <div className="srv-benefit-title">Transparent Harvest Returns</div>
              <div className="srv-benefit-desc">a transparent share of harvest returns</div>
            </div>
            <div className="srv-benefit-item">
              <div className="srv-benefit-icon">
                <IconShield />
              </div>
              <div className="srv-benefit-title">Full Land Ownership</div>
              <div className="srv-benefit-desc">your land stays fully yours throughout</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── PART 1: THE 20% UPFRONT TREE PURCHASE ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="srv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <div className="srv-section-chapter-grid">
          <div className="srv-chapter-left">
            <div className="process-badge" style={{ marginBottom: '20px' }}>
              <span className="process-badge-dot" />
              <span className="process-badge-text">Part 1</span>
            </div>
            <h2>Part 1: The 20% Upfront Tree Purchase — Guaranteed Income From Day One</h2>
            <p>
              We open every partnership by buying a minimum of 20% of your eligible mature Agarwood trees. These trees transfer fully to Mrida, and you receive an agreed payment — immediately, and long before any trees are harvested.
            </p>
            <p>
              This is real, guaranteed income. Whatever happens at harvest, the money you were paid upfront is yours to keep. You carry no risk on the trees we've purchased.
            </p>
          </div>
          
          <div className="srv-chapter-right">
            <div className="srv-summary-panel">
              <div className="srv-summary-badge">Part 1 Summary</div>
              <div className="srv-summary-highlight">20% Upfront</div>
              <div className="srv-summary-short-exp">Guaranteed income from day one, before harvesting begins.</div>
              <hr className="srv-summary-divider" />
              <ul className="srv-summary-points">
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Paid at the start of the partnership</span>
                </li>
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Minimum 20% outright purchase</span>
                </li>
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Zero financial risk on sold trees</span>
                </li>
              </ul>
              <hr className="srv-summary-divider" />
              <div className="srv-summary-supporting">
                Immediate liquidity for landowners before any inoculation work starts.
              </div>
            </div>
          </div>
        </div>

        <div className="srv-chapter-cards-grid">
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconDollarSign /></div>
            <h4>Paid at the start of the partnership</h4>
            <p>agreed income from day one, at a clear price</p>
          </div>
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconTag /></div>
            <h4>A minimum of 20%, not a fixed limit</h4>
            <p>if you'd like to discuss selling a higher share, we're open to that conversation</p>
          </div>
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconShield /></div>
            <h4>Zero ongoing responsibility on purchased trees</h4>
            <p>once bought, they are fully ours to survey, inoculate, monitor, and manage</p>
          </div>
        </div>
      </motion.section>

      {/* ── PART 2: THE 80% SHARED ARRANGEMENT ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="srv-redesign-section"
      >
        <div className="srv-section-chapter-grid">
          <div className="srv-chapter-left">
            <div className="process-badge" style={{ marginBottom: '20px' }}>
              <span className="process-badge-dot" />
              <span className="process-badge-text">Part 2</span>
            </div>
            <h2>Part 2: The 80% Shared Arrangement — Zero Cost, Full Ownership Retained</h2>
            <p>
              Your remaining trees stay in your name. This is where we work as true partners — you retain full ownership while Mrida brings the science, the materials, the expertise, and the market access needed to bring those trees to their full worth.
            </p>
            <p>
              This arrangement is designed so your land and trees keep generating value for you, without the financial burden or technical complexity that has historically prevented farmers from unlocking what they already own.
            </p>
          </div>
          
          <div className="srv-chapter-right">
            <div className="srv-summary-panel">
              <div className="srv-summary-badge">Part 2 Summary</div>
              <div className="srv-summary-highlight">0 Cost</div>
              <div className="srv-summary-short-exp">Zero financial burden or technical complexity for the landowner.</div>
              <hr className="srv-summary-divider" />
              <ul className="srv-summary-points">
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Retain full land and tree ownership</span>
                </li>
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Fully funded professional inoculation</span>
                </li>
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Comprehensive ongoing monitoring</span>
                </li>
              </ul>
              <hr className="srv-summary-divider" />
              <div className="srv-summary-supporting">
                Mrida manages the scientific application and covers all associated costs.
              </div>
            </div>
          </div>
        </div>

        <div className="srv-chapter-cards-grid">
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconTarget /></div>
            <h4>Your Role as a Farmer or Landowner</h4>
            <p>
              You provide the eligible mature Agarwood trees, maintain and protect them through the inoculation-to-harvest period, and secure the necessary permissions from the relevant authorities.
            </p>
          </div>
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconSprout /></div>
            <h4>What Mrida Handles on Your Behalf</h4>
            <p>
              Mrida carries out professional inoculation on your remaining trees, monitors every tree carefully through to harvest, and covers all associated costs — materials, professional expertise, site inspections, and ongoing monitoring assessments. You pay nothing toward any of this.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── THE AGARWOOD PARTNERSHIP PROCESS: FIVE STEPS ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="srv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <h2>The Agarwood Partnership Process: Five Steps From Survey to Settlement</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px', margin: '20px 0 0' }}>
          Every Mrida partnership follows the same clear, documented five-stage workflow — from the first site visit to the final settlement payment. The process is the same on every site, so you always know exactly where you stand.
        </p>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="srv-steps-grid">
          <motion.div variants={cardAnimation} className="srv-step-card">
            <div className="srv-step-num">STEP 01</div>
            <div className="srv-step-icon"><IconSearch /></div>
            <h3>Survey</h3>
            <p>We visit your site, assess every mature Agarwood tree for eligibility, and tag each one with a unique, traceable number.</p>
          </motion.div>
          <motion.div variants={cardAnimation} className="srv-step-card">
            <div className="srv-step-num">STEP 02</div>
            <div className="srv-step-icon"><IconFileText /></div>
            <h3>Split & Agree</h3>
            <p>We confirm the 20% upfront purchase and all shared-return terms — documented in a signed agreement before any work begins.</p>
          </motion.div>
          <motion.div variants={cardAnimation} className="srv-step-card">
            <div className="srv-step-num">STEP 03</div>
            <div className="srv-step-icon"><IconDroplet /></div>
            <h3>Inoculate</h3>
            <p>Professional inoculation is carried out on your shared trees entirely at Mrida's expense — materials, labour, and expertise all covered.</p>
          </motion.div>
          <motion.div variants={cardAnimation} className="srv-step-card">
            <div className="srv-step-num">STEP 04</div>
            <div className="srv-step-icon"><IconEye /></div>
            <h3>Monitor</h3>
            <p>We monitor every tree carefully through to harvest, covering all associated inspection and monitoring costs throughout.</p>
          </motion.div>
          <motion.div variants={cardAnimation} className="srv-step-card">
            <div className="srv-step-num">STEP 05</div>
            <div className="srv-step-icon"><IconSprout /></div>
            <h3>Harvest & Settle</h3>
            <p>Mrida manages the harvest, grading, and sale through our buyer network, then settles returns transparently per your signed agreement.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── HOW HARVEST RETURNS ARE SHARED ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="srv-redesign-section"
      >
        <div className="srv-section-chapter-grid">
          <div className="srv-chapter-left">
            <div className="process-badge" style={{ marginBottom: '20px' }}>
              <span className="process-badge-dot" />
              <span className="process-badge-text">Part 3</span>
            </div>
            <h2>Part 3: How Harvest Returns Are Shared — Simple, Transparent Settlement</h2>
            <p>
              When the resin reaches maturity, Mrida manages the harvest, grading, and sale through our established buyer network. The settlement that follows is simple, sequenced, and fully transparent — every figure traceable back to your individually tagged trees.
            </p>
            <p>
              No surprise deductions. No revised terms after the fact. No ambiguity. Every figure traces directly back to the trees tagged under your partnership.
            </p>
          </div>
          
          <div className="srv-chapter-right">
            <div className="srv-summary-panel">
              <div className="srv-summary-badge">Part 3 Summary</div>
              <div className="srv-summary-highlight">3 Steps</div>
              <div className="srv-summary-short-exp">A sequenced and fully transparent settlement process.</div>
              <hr className="srv-summary-divider" />
              <ul className="srv-summary-points">
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Harvest & sale managed end to end</span>
                </li>
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Deductions limited to expenses</span>
                </li>
                <li className="srv-summary-point-item">
                  <span className="srv-summary-point-icon"><IconCheck /></span>
                  <span>Returns shared on agreed ratios</span>
                </li>
              </ul>
              <hr className="srv-summary-divider" />
              <div className="srv-summary-supporting">
                No surprise deductions or revised terms after work begins.
              </div>
            </div>
          </div>
        </div>

        <div className="srv-chapter-cards-grid">
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconSearch /></div>
            <h4>Trees are harvested and sold</h4>
            <p>managed end to end through Mrida's market channels and buyer network.</p>
          </div>
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconFileText /></div>
            <h4>Harvesting expenses are deducted</h4>
            <p>transparently, from total sale proceeds.</p>
          </div>
          <div className="srv-chapter-card">
            <div className="srv-chapter-card-icon"><IconDollarSign /></div>
            <h4>Remaining returns are shared</h4>
            <p>on the exact percentage agreed and fixed in your signed agreement before any work began.</p>
          </div>
        </div>
      </motion.section>

      {/* ── PARTNERSHIP RESPONSIBILITIES: WHO DOES WHAT ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="srv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <h2>Partnership Responsibilities: Who Does What</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px', margin: '20px 0 0' }}>
          A clear, documented division of responsibilities keeps the partnership fair, accountable, and easy to follow at every stage — for both sides.
        </p>
        <motion.div variants={cardAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }} className="srv-resp-wrapper">
          <div className="srv-resp-header">
            <div className="srv-resp-header-cell">Responsibility</div>
            <div className="srv-resp-header-cell">You (Farmer / Landowner)</div>
            <div className="srv-resp-header-cell orange">Mrida Infra LLP</div>
          </div>
          {RESP_ROWS.map((row) => (
            <div key={row.label} className="srv-resp-row">
              <div className="srv-resp-cell label">{row.label}</div>
              <div className="srv-resp-cell">
                {row.you
                  ? <span className="srv-check-mark"><IconCheck /></span>
                  : <span className="srv-dash">—</span>
                }
              </div>
              <div className="srv-resp-cell">
                {row.mrida
                  ? <span className="srv-check-mark"><IconCheck /></span>
                  : <span className="srv-dash">—</span>
                }
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── FULL TRACEABILITY ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="srv-redesign-section"
      >
        <h2>Full Traceability: Every Tree Tracked From Tagging to Settlement</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px', margin: '20px 0 4px' }}>
          Transparency isn't just a principle at Mrida — it's built into the operational model. Every partnership is tracked at two distinct levels, so the accounting is always clear and verifiable for both farmers and investors.
        </p>
        <ul className="srv-trace-list">
          <li className="srv-trace-item">
            <span className="srv-trace-icon"><IconTag /></span>
            <span><strong>Unique Site Number</strong> — every plantation site receives its own identifier, keeping all sites, records, and settlements cleanly separated from one another.</span>
          </li>
          <li className="srv-trace-item">
            <span className="srv-trace-icon"><IconTag /></span>
            <span><strong>Unique Tree Number</strong> — every eligible mature Agarwood tree is individually tagged and logged from inoculation through each inspection stage, harvest, and final sale.</span>
          </li>
        </ul>
        <p className="contact-section-intro" style={{ maxWidth: '780px' }}>
          Purchased trees and shared trees are flagged separately throughout the process. At any point, you can follow exactly which trees were bought upfront, which are under the shared arrangement, and how each one contributed to the final settlement figure.
        </p>
      </motion.section>

      {/* ── WHY FARMERS CHOOSE THE MRIDA AGARWOOD FARMER PARTNERSHIP ── */}
      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="srv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <h2>Why Farmers Choose the Mrida Agarwood Farmer Partnership</h2>
        
        {/* Premium Feature Rail */}
        <div className="srv-feature-rail">
          <div className="srv-rail-row">
            <div className="srv-rail-num">01</div>
            <div className="srv-rail-icon-wrapper">
              <IconTrendingUp />
            </div>
            <div className="srv-rail-content">
              <h3>Guaranteed upfront income</h3>
              <p>on a minimum of 20% of your mature trees, paid before harvesting begins</p>
            </div>
            <div className="srv-rail-arrow">
              <IconArrowRight />
            </div>
          </div>

          <div className="srv-rail-row">
            <div className="srv-rail-num">02</div>
            <div className="srv-rail-icon-wrapper">
              <IconDroplet />
            </div>
            <div className="srv-rail-content">
              <h3>Zero inoculation cost</h3>
              <p>your remaining trees are fully funded and professionally managed by Mrida</p>
            </div>
            <div className="srv-rail-arrow">
              <IconArrowRight />
            </div>
          </div>

          <div className="srv-rail-row">
            <div className="srv-rail-num">03</div>
            <div className="srv-rail-icon-wrapper">
              <IconShield />
            </div>
            <div className="srv-rail-content">
              <h3>Full land ownership retained</h3>
              <p>your land stays yours throughout the entire partnership</p>
            </div>
            <div className="srv-rail-arrow">
              <IconArrowRight />
            </div>
          </div>

          <div className="srv-rail-row">
            <div className="srv-rail-num">04</div>
            <div className="srv-rail-icon-wrapper">
              <IconFileText />
            </div>
            <div className="srv-rail-content">
              <h3>Transparent profit sharing</h3>
              <p>sharing ratios confirmed in writing before any work starts, with no revisions afterward</p>
            </div>
            <div className="srv-rail-arrow">
              <IconArrowRight />
            </div>
          </div>

          <div className="srv-rail-row">
            <div className="srv-rail-num">05</div>
            <div className="srv-rail-icon-wrapper">
              <IconTarget />
            </div>
            <div className="srv-rail-content">
              <h3>Complete traceability</h3>
              <p>every tree individually numbered, logged, and tracked from tagging through to final settlement</p>
            </div>
            <div className="srv-rail-arrow">
              <IconArrowRight />
            </div>
          </div>
        </div>

        {/* Dedicated CTA Section */}
        <div className="srv-rail-cta-section">
          <div className="srv-rail-cta-statement">
            Whether you own a few mature Agarwood trees or a full plantation, the Mrida partnership model is built to reward you fairly — with guaranteed income upfront and a transparent share when the harvest comes in. The first step costs you nothing.
          </div>
          <div className="contact-cta-pair" style={{ margin: 0 }}>
            <Link to="/contact" className="btn-primary">Partner With Us</Link>
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

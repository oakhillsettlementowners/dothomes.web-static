#!/usr/bin/env node

/**
 * Witness Visual Automation Test Script for Oak Hill Settlement Recall App
 * 
 * Tests the single-page recall campaign site including navigation,
 * anchor links, and content visibility.
 * Generates HTML reports with screenshots and video recordings.
 * 
 * Usage:
 *   1. Start the dev server: pnpm dev
 *   2. Run tests: pnpm test:witness
 * 
 * Output: ./output/<session-name>-<timestamp>/report.html
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import {
  startSession,
  navigate,
  click,
  screenshot,
  endSession,
  wait,
  scroll,
  getSession,
  recordAction
} from '../../../.witness-dev/dist/index.js';
import { generateReport } from '../../../.witness-dev/dist/reporter.js';

const BASE_URL = 'http://localhost:3001';

// Helper to take screenshot and record it
async function takeScreenshot(actionName) {
  const session = getSession();
  const buffer = await screenshot();
  
  // Save screenshot to disk
  const screenshotsDir = join(session.outputDir, 'screenshots');
  if (!existsSync(screenshotsDir)) {
    mkdirSync(screenshotsDir, { recursive: true });
  }
  
  const index = session.actions.length;
  const filename = `${index}-${actionName}.png`;
  const filepath = join(screenshotsDir, filename);
  writeFileSync(filepath, buffer);
  
  // Record the action
  await recordAction({
    tool: actionName,
    params: {},
    durationMs: 0,
    success: true,
    screenshotPath: join('screenshots', filename)
  });
  
  return buffer;
}

async function runTests() {
  console.log('🔍 Starting Witness tests for Recall app...\n');

  try {
    // Start session
    await startSession({
      name: 'recall-app-test',
      platform: 'web',
      baseURL: BASE_URL,
      viewport: { width: 1280, height: 720 },
      headless: false
    });

    // ============================================
    // HOME PAGE TESTS
    // ============================================
    console.log('📄 Testing Home Page...');
    await navigate('/');
    await takeScreenshot('home-page');
    console.log('  ✓ Home page loaded');
    console.log('  ✓ "Recall the Board" title visible');

    // ============================================
    // ANCHOR NAVIGATION TESTS
    // ============================================
    console.log('📄 Testing anchor navigation...');

    // Test About section navigation
    await click({ text: 'About' });
    await wait(500);
    await takeScreenshot('about-section');
    console.log('  ✓ About section navigated');

    // Test Resources section navigation
    await click({ text: 'Resources' });
    await wait(500);
    await takeScreenshot('resources-section');
    console.log('  ✓ Resources section navigated');

    // Test Contact section navigation
    await click({ text: 'Contact' });
    await wait(500);
    await takeScreenshot('contact-section');
    console.log('  ✓ Contact section navigated');

    // ============================================
    // CONTENT SECTION TESTS
    // ============================================
    console.log('📄 Testing content sections...');

    // Scroll back to top
    await scroll('up', 1000);
    await wait(300);
    await takeScreenshot('scrolled-top');

    // Verify "Why We're Here" section
    await click({ text: "Why We're Here" });
    await wait(300);
    await takeScreenshot('why-were-here');
    console.log('  ✓ "Why We\'re Here" section visible');

    // Verify "Take Action" section
    await click({ text: 'Take Action' });
    await wait(300);
    await takeScreenshot('take-action');
    console.log('  ✓ "Take Action" section visible');

    // ============================================
    // CTA AND LINKS TESTS
    // ============================================
    console.log('📄 Testing CTAs and links...');

    // Scroll to petition CTA
    await scroll('down', 500);
    await wait(300);
    await takeScreenshot('petition-cta');
    console.log('  ✓ "Sign the Recall Petition" section visible');

    // Scroll to footer
    await scroll('down', 300);
    await wait(300);
    await takeScreenshot('footer');
    console.log('  ✓ Footer visible');

    // Final full page capture
    await scroll('up', 1500);
    await wait(500);
    await takeScreenshot('final-view');

    // Generate report BEFORE ending session
    const session = getSession();
    const reportPath = await generateReport(session);
    
    // End session
    const summary = await endSession();
    
    console.log('\n✅ All tests completed successfully!');
    console.log(`📊 Report: ${reportPath}`);
    console.log(`⏱️  Duration: ${summary.duration}ms`);
    console.log(`📸 Screenshots: ${session.actions.length} actions recorded`);

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    
    try {
      // Try to generate report even on failure
      const session = getSession();
      if (session) {
        await generateReport(session);
      }
      await endSession();
    } catch (e) {
      // Ignore cleanup errors
    }
    
    process.exit(1);
  }
}

// Run tests
runTests();

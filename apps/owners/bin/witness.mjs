#!/usr/bin/env node

/**
 * Witness Visual Automation Test Script for Oak Hill Settlement Owners App
 * 
 * Tests navigation, element visibility, and interactions across all pages.
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
  getSession,
  recordAction
} from '../../../.witness-dev/dist/index.js';
import { generateReport } from '../../../.witness-dev/dist/reporter.js';

const BASE_URL = 'http://localhost:3000';

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
  console.log('🔍 Starting Witness tests for Owners app...\n');

  try {
    // Start session
    await startSession({
      name: 'owners-app-test',
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

    // ============================================
    // RIGHTS PAGE TESTS
    // ============================================
    console.log('📄 Testing Rights Page...');
    await click({ text: 'Your Rights' });
    await wait(500);
    await takeScreenshot('rights-page');
    console.log('  ✓ Rights page loaded');

    // ============================================
    // DOCUMENTS PAGE TESTS  
    // ============================================
    console.log('📄 Testing Documents Page...');
    await click({ text: 'Documents' });
    await wait(500);
    await takeScreenshot('documents-page');
    console.log('  ✓ Documents page loaded');

    // ============================================
    // CHAT PAGE TESTS
    // ============================================
    console.log('📄 Testing Chat Page...');
    await click({ text: 'Ask AI' });
    await wait(500);
    await takeScreenshot('chat-page');
    console.log('  ✓ Chat page loaded');

    // ============================================
    // NAVIGATION BACK TO HOME
    // ============================================
    console.log('📄 Testing navigation back to Home...');
    await click({ text: 'Home' });
    await wait(500);
    await takeScreenshot('home-return');
    console.log('  ✓ Navigation complete');

    // ============================================
    // HOME PAGE INTERACTIONS
    // ============================================
    console.log('📄 Testing Home Page interactions...');
    await click({ text: 'Know Your Rights' });
    await wait(500);
    await takeScreenshot('know-your-rights-click');
    console.log('  ✓ Know Your Rights button works');

    // Navigate back home for final screenshot
    await click({ text: 'Home' });
    await wait(500);
    await takeScreenshot('final-home');

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

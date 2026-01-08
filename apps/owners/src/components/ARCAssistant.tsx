'use client';

import { useState } from 'react';

export default function ARCAssistant() {
  const [submissionDate, setSubmissionDate] = useState<string>('');
  const [dates, setDates] = useState<{
    twentyWorkingDays: Date | null;
    sixtyDays: Date | null;
  }>({
    twentyWorkingDays: null,
    sixtyDays: null,
  });

  const calculateWorkingDays = (startDate: Date, workingDays: number): Date => {
    const result = new Date(startDate);
    let daysAdded = 0;

    while (daysAdded < workingDays) {
      result.setDate(result.getDate() + 1);
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (result.getDay() !== 0 && result.getDay() !== 6) {
        daysAdded++;
      }
    }

    return result;
  };

  const calculateDates = (dateString: string) => {
    if (!dateString) {
      setDates({ twentyWorkingDays: null, sixtyDays: null });
      return;
    }

    const startDate = new Date(dateString + 'T00:00:00');
    
    // Calculate 20 working days
    const twentyWorkingDays = calculateWorkingDays(startDate, 20);
    
    // Calculate 60 calendar days
    const sixtyDays = new Date(startDate);
    sixtyDays.setDate(sixtyDays.getDate() + 60);

    setDates({ twentyWorkingDays, sixtyDays });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSubmissionDate(newDate);
    calculateDates(newDate);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getDaysRemaining = (targetDate: Date): number => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);
    const diffTime = target.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div id="arc-timeline-assistant" className="bg-white dark:bg-stone-950/70 border border-primary-200 dark:border-stone-800 rounded-xl shadow-lg p-8 overflow-hidden">
      <h3 className="text-2xl font-bold text-primary-900 dark:text-stone-100 mb-4">
        ⏱️ ARC Timeline Assistant
      </h3>
      <p className="text-primary-800 dark:text-stone-200 mb-6 text-sm">
        Track your Architectural Review Committee submission timeline based on CC&R §6.5
      </p>

      {/* Date Picker */}
      <div className="mb-6">
        <label
          htmlFor="submission-date"
          className="block text-sm font-semibold text-primary-900 dark:text-stone-100 mb-2"
        >
          ARC Submission Date
        </label>
        <input
          type="date"
          id="submission-date"
          value={submissionDate}
          onChange={handleDateChange}
          className="w-full max-w-full min-w-0 box-border px-4 py-3 rounded-lg border border-primary-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-primary-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
        />
      </div>

      {/* Timeline Display */}
      {dates.twentyWorkingDays && dates.sixtyDays && (
        <div className="space-y-4">
          {/* 20 Working Days */}
          <div className="bg-primary-50 dark:bg-primary-950/30 border-l-4 border-primary-500 dark:border-primary-600 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                20
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-primary-900 dark:text-stone-100 mb-1">
                  Written Decision Due
                </h4>
                <p className="text-sm text-primary-800 dark:text-stone-200 mb-2">
                  ARC must issue written decision within 20 working days
                </p>
                <p className="text-lg font-semibold text-primary-900 dark:text-primary-400">
                  {formatDate(dates.twentyWorkingDays)}
                </p>
                {(() => {
                  const daysLeft = getDaysRemaining(dates.twentyWorkingDays);
                  return daysLeft >= 0 ? (
                    <p className="text-xs text-primary-700 dark:text-stone-300 mt-1">
                      {daysLeft === 0
                        ? 'Due today'
                        : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} remaining`}
                    </p>
                  ) : (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1 font-semibold">
                      Overdue by {Math.abs(daysLeft)} day{Math.abs(daysLeft) !== 1 ? 's' : ''}
                    </p>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* 60 Days Auto-Approval */}
          <div className="bg-primary-100 dark:bg-primary-900/20 border-l-4 border-primary-700 dark:border-primary-500 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-700 dark:bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                60
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-primary-900 dark:text-stone-100 mb-1">
                  Automatic Approval Date
                </h4>
                <p className="text-sm text-primary-800 dark:text-stone-200 mb-2">
                  If no written decision by this date, your request is{' '}
                  <strong>automatically approved</strong> (CC&R §6.5)
                </p>
                <p className="text-lg font-semibold text-primary-900 dark:text-primary-400">
                  {formatDate(dates.sixtyDays)}
                </p>
                {(() => {
                  const daysLeft = getDaysRemaining(dates.sixtyDays);
                  return daysLeft >= 0 ? (
                    <p className="text-xs text-primary-700 dark:text-stone-300 mt-1">
                      {daysLeft === 0
                        ? 'Auto-approval date is today'
                        : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} until auto-approval`}
                    </p>
                  ) : (
                    <p className="text-xs text-primary-900 dark:text-primary-400 mt-1 font-semibold">
                      ✓ Your request is deemed approved
                    </p>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-6 p-4 bg-stone-100 dark:bg-stone-900/50 rounded-lg">
            <h5 className="font-semibold text-sm text-primary-900 dark:text-stone-100 mb-2">
              📌 Important Reminders:
            </h5>
            <ul className="text-xs text-primary-800 dark:text-stone-300 space-y-1">
              <li>• Keep a copy of your ARC submission and submission date</li>
              <li>• Save all written responses (or note the lack thereof)</li>
              <li>• Working days exclude weekends</li>
              <li>
                • Routine maintenance (painting, repairs) does NOT require ARC approval (CC&R
                §4.2)
              </li>
            </ul>
          </div>
        </div>
      )}

      {!submissionDate && (
        <div className="text-center py-8 text-primary-700 dark:text-stone-400 text-sm">
          Select your ARC submission date to see your timeline
        </div>
      )}

      {/* Quick Tips - Always Visible */}
      <div className="mt-6 p-4 bg-stone-100 dark:bg-stone-900/50 rounded-lg">
        <h5 className="font-semibold text-sm text-primary-900 dark:text-stone-100 mb-2">
          💡 Quick Tips:
        </h5>
        <ul className="text-xs text-primary-800 dark:text-stone-300 space-y-1">
          <li>• Submit complete applications to avoid delays</li>
          <li>• Keep dated copies of all submissions</li>
          <li>• Track your 20-day and 60-day deadlines</li>
          <li>• Request written confirmation of receipt</li>
        </ul>
      </div>
    </div>
  );
}


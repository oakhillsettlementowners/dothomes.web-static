// Feature flags controlled via environment variables

export const SHOW_CHAT = process.env.NEXT_PUBLIC_SHOW_CHAT === 'true';
export const SHOW_RECALL_BANNER = process.env.NEXT_PUBLIC_SHOW_RECALL_BANNER === 'true';


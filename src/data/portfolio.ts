export interface Skill {
  name: string;
  years: number;
  category: 'frontend' | 'backend' | 'infrastructure' | 'language';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: 'personal' | 'professional';
  githubUrl?: string;
  liveUrl?: string;
}

export const skills: Skill[] = [
  { name: 'React', years: 2, category: 'frontend' },
  { name: 'JavaScript/TypeScript', years: 3, category: 'language' },
  { name: 'Ruby on Rails', years: 1, category: 'backend' },
  { name: 'C#', years: 3, category: 'language' },
  { name: 'Python', years: 3, category: 'language' },
  { name: 'AWS', years: 4, category: 'infrastructure' },
];

export const projects: Project[] = [
  {
    title: 'LINEBotを使ったゴミ通知Bot',
    description: 'LINEBotを使用してゴミ出しの通知を自動化するBotを開発しました。AWS CDKを使用したインフラ構築と、定期的な通知機能を実装しました。',
    technologies: ['TypeScript', 'AWS CDK', 'AWS Lambda', 'Docker'],
    type: 'personal',
    githubUrl: 'https://github.com/009ksk/trash-notification-bot',
  },
  {
    title: 'AWSコンソールウォーターマーク拡張機能',
    description: 'AWSのコンソール画面でアカウント識別しやすくするためのウォーターマーク拡張機能を開発しました。複数アカウント管理時の混乱を防ぎ、ドラッグ可能なウォーターマークを提供します。',
    technologies: ['JavaScript', 'Chrome Extension API', 'CSS', 'HTML'],
    type: 'personal',
    githubUrl: 'https://github.com/009ksk/aws-account-indicator',
  },
  {
    title: '文字列変換Webアプリ',
    description: '様々な文字列変換機能を提供するWebアプリケーションを開発しました。大文字小文字変換、エンコーディング変換などの機能を実装しました。',
    technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    type: 'personal',
    githubUrl: 'https://github.com/009ksk/string-utility-app',
  },
];

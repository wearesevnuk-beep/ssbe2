// Added React import to provide access to the React namespace for types like ReactNode
import React from 'react';

export type Page = 'home' | 'about' | 'aim' | 'parents' | 'referrals' | 'contact';

export interface NavItem {
  label: string;
  page: Page;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

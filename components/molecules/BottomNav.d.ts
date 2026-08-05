import * as React from 'react';

export interface BottomNavItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items: BottomNavItem[];
  value: string;
  onChange?: (value: string) => void;
}

/** Mobile bottom tab bar; active item uses the accent color. */
export function BottomNav(props: BottomNavProps): JSX.Element;

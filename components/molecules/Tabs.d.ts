import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
}

export interface TabsProps {
  /** Tabs as strings or {value,label}. */
  tabs: Array<string | TabItem>;
  /** Currently selected value. */
  value: string;
  /** Called with the new value on select. */
  onChange?: (value: string) => void;
  className?: string;
}

/** Underline tab bar (controlled). Active indicator uses the accent color. */
export function Tabs(props: TabsProps): JSX.Element;

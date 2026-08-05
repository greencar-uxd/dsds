import * as React from 'react';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

/** Toggle switch with an accent active track. Behaves as a checkbox. */
export function Switch(props: SwitchProps): JSX.Element;

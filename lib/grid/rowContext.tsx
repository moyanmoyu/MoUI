import React from 'react';

export interface ConfigProviderProps {
  gutter?: number;
}

const defaultConfig: ConfigProviderProps = {
  gutter: 0
};

export const RowContext = React.createContext(defaultConfig);

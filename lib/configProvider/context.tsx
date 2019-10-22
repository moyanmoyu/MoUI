import React from 'react';


export interface ConfigProviderProps {
  zIndex?: number;
  children?: React.ReactNode;
}

const defaultConfig: ConfigProviderProps = {
  zIndex: 20
};

export const ConfigContext = React.createContext(defaultConfig);

export const ConfigConsumer = ConfigContext.Consumer;

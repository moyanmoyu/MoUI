import React from 'react';
import {ConfigContext} from './context';

interface ConfigProviderProps {
  zIndex?: number;
  children?: React.ReactNode;
}

const ConfigProvider: React.FunctionComponent<ConfigProviderProps> = (props: ConfigProviderProps) => {

  const {children, zIndex = 20} = props;

  return (
      <ConfigContext.Provider value={{zIndex}}>
        {children}
      </ConfigContext.Provider>
  );
};

export default ConfigProvider;

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'USD' | 'NGN' | 'EUR' | 'GBP';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const EXCHANGE_RATES: Record<Currency, number> = {
  NGN: 1,
  USD: 0.00067,
  EUR: 0.00061,
  GBP: 0.00053,
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: '$',
  NGN: '₦',
  EUR: '€',
  GBP: '£',
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('NGN');

  // Load currency from local storage on mount
  // useEffect(() => {
  //   const savedCurrency = localStorage.getItem('luxevale-currency');
  //   if (savedCurrency && Object.keys(EXCHANGE_RATES).includes(savedCurrency)) {
  //     setCurrency(savedCurrency as Currency);
  //   }
  // }, []);

  // Save currency to local storage on change
  useEffect(() => {
    localStorage.setItem('luxevale-currency', currency);
  }, [currency]);

  const convertPrice = (price: number) => {
    return price * EXCHANGE_RATES[currency];
  };

  const formatPrice = (price: number) => {
    const converted = convertPrice(price);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(converted);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

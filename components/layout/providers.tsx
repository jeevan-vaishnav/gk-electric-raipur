'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import QueryProvider from '@/providers/query-provider';
import { ActiveThemeProvider } from '../themes/active-theme';

export default function Providers({
    activeThemeValue,
    children
}: {
    activeThemeValue: string;
    children: React.ReactNode;
}) {

    return (
        <>
            <ActiveThemeProvider initialTheme={activeThemeValue}>
                <SessionProvider>
                    <QueryProvider>{children}</QueryProvider>
                </SessionProvider>
            </ActiveThemeProvider>
        </>
    );
}
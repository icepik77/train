import { Jaro, Roboto } from 'next/font/google'

export const jaro = Jaro({
    subsets: ['latin'],
    display: 'swap',
});

export const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
});



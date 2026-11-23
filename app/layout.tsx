import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'AI Developer Playground',description:'Your command center for AI-powered software development.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}

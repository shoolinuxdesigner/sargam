'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import styles from './style.module.css'

export default function PathCopy() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [completeURL, setCompleteURL] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fullPath = searchParams.toString()
                ? `${pathname}?${searchParams.toString()}`
                : pathname;

            setCompleteURL(`${window.location.origin}${fullPath}`);
        }
    }, [pathname, searchParams]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(completeURL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="flex items-stretch gap-2 w-full">
            <div className={`flex w-full p-3 bg-neutral-900 rounded-md border border-gray-700 font-mono text-white text-sm overflow-x-auto`}>
                <p className='whitespace-nowrap overflow-hidden w-full'>{completeURL || 'Loading...'}</p>
                <button
                    onClick={copyToClipboard}
                    disabled={!completeURL}
                    className="pl-3 text-white dark:text-white font-bold rounded-lg transition-colors duration-200 flex items-center justify-center"
                    aria-label="Copy URL to clipboard"
                >
                    {copied ? (
                        <FiCheck className="h-5 w-5" />
                    ) : (
                        <FiCopy className="h-5 w-5" />
                    )}
                </button>
            </div>
        </div>
    );
}
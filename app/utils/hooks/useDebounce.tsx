import { useRef, useState } from 'react';

export default function useDebounce(callback: (term: string) => void, time: number) {
    const timer = useRef<ReturnType<typeof setTimeout>>();

    // 명시적으로 형식 주석을 추가
    const dispatchDebounce: (term: string) => void = (term) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        const newTimer = setTimeout(() => {
            callback(term);
        }, time);
        timer.current = newTimer;
    };
    return dispatchDebounce;
}

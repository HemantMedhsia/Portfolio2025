import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import music from "../assets/Sounds/epic.mp3";
import { useLocation } from "react-router-dom";

const MusicContext = createContext<any>(null);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement>(new Audio(music));
    const [isPlaying, setIsPlaying] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    const location = useLocation();

    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;

        // Optional: preload the audio
        audio.load();
    }, []);

    // React to toggle change AFTER user has triggered play
    useEffect(() => {
        const audio = audioRef.current;
        if (!isInitialized) return;

        if (isPlaying) {
            audio.play().catch(err => console.warn("Play error:", err));
        } else {
            audio.pause();
        }
    }, [isPlaying, isInitialized]);

    const toggleMusic = () => {
        const audio = audioRef.current;

        // First time toggle, initialize and try playing
        if (!isInitialized) {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsInitialized(true);
                })
                .catch(err => {
                    console.warn("User-triggered play failed:", err);
                });
        } else {
            setIsPlaying(prev => !prev);
        }
    };

    return (
        <MusicContext.Provider value={{ toggleMusic, isPlaying, isOpen, toggleMenu, closeMenu }}>
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => useContext(MusicContext);

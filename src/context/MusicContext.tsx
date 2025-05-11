import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import music from "../assets/Sounds/epic.mp3";
import { useLocation } from "react-router-dom";

const MusicContext = createContext<any>(null);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement>(new Audio(music));
    const [isPlaying, setIsPlaying] = useState(true);
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

        const tryPlay = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsInitialized(true);
                })
                .catch((err) => {
                    console.warn("Autoplay failed, waiting for user interaction:", err);
                    const handleUserClick = () => {
                        audio.play().then(() => {
                            setIsPlaying(true);
                            setIsInitialized(true);
                            window.removeEventListener("click", handleUserClick);
                        }).catch(err => {
                            console.error("Still can't play:", err);
                        });
                    };

                    window.addEventListener("click", handleUserClick);
                });
        };

        tryPlay();
    }, []);

    // React to toggle change after initialization
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
        setIsPlaying((prev) => !prev);
    };

    return (
        <MusicContext.Provider value={{ toggleMusic, isPlaying, isOpen, toggleMenu, closeMenu }}>
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => useContext(MusicContext);

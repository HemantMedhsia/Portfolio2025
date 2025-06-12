import { motion, } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from "react";

interface PaymentPopupProps {
    seatId: string;
    onClose: () => void;
    autoCloseDuration?: number; // in ms, e.g., 5000 for 5 seconds
}

const quotes = [
    "Great journeys begin with small steps.",
    "You just booked comfort, enjoy the ride!",
    "Your space is secured. Take a deep breath.",
    "Seat reserved. Now relax and let your thoughts fly.",
    "Moments of peace start with a comfortable seat.",
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
const generatePaymentId = () =>
    "PAY-" + Math.floor(Math.random() * 1000000).toString().padStart(6, "0");

export const PaymentPopup = ({ seatId = "A-22", onClose, autoCloseDuration = 5000 }: PaymentPopupProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const paymentId = generatePaymentId();
    const quote = getRandomQuote();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, autoCloseDuration);

        return () => clearTimeout(timer);
    }, [autoCloseDuration, onClose]);

    return (
        <>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            <DotLottieReact
                                src="https://lottie.host/a27171c0-946f-4dad-b411-293124ac9ca4/9tN7U8xPlq.lottie"
                                loop
                                autoplay
                            />
                        </motion.div>

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            $ 4999
                        </h2>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            Payment Successful
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{quote}</p>

                        <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-4 text-left text-sm space-y-2">
                            <p>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">Seat ID:</span> SIT19389873094HT9
                            </p>
                            <p>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">Seat Number:</span> {seatId}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">Payment Ref#:</span> {paymentId}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-700 dark:text-gray-200">Amount:</span> $4999
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                setIsVisible(false);
                                onClose();
                            }}
                            className="text-lg mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-xl font-medium shadow-md transition"
                        >
                            Done
                        </button>

                        {/* Optional progress bar */}
                        <div className="w-full mt-4 h-1 bg-gray-300 dark:bg-zinc-700 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-green-500"
                                initial={{ width: "100%" }}
                                animate={{ width: 0 }}
                                transition={{ duration: autoCloseDuration / 1000, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

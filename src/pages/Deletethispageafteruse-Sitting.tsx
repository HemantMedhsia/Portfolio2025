import { seatingData, type Section, type Seat } from "../Data/GeneralSittingRoomData";
import { LuArmchair } from "react-icons/lu";
import { useState } from "react";

export const GeneralSittingRoom = () => {
    const [selectedSeatId, setSelectedSeatId] = useState<string | null>(null);

    const handleSeatSelection = (seat: Seat) => {
        if (seat.status === "available") {
            setSelectedSeatId(seat.seatId);
            console.log(`Seat ${seat.seatId} selected`);
        }
    };

    return (
        <div className="min-h-screen p-6 text-black overflow-auto">
            <div className="flex gap-6">
                {seatingData.map((section: Section) => (
                    <div
                        key={section.sectionId}
                        className="bg-white/10 border-2 border-dashed border-red-200/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full transition hover:scale-[1.01]"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center text-orange-700 tracking-wide">
                            Section {section.sectionName}
                        </h2>

                        <div className="grid grid-rows-8 grid-flow-col gap-6 justify-center items-center overflow-y-auto">
                            {section.seats.map((seat: Seat) => {
                                const isAvailable = seat.status === "available";
                                const isSelected = selectedSeatId === seat.seatId;

                                const baseStyle = `w-full h-full flex flex-col items-center justify-center text-lg font-semibold 
                                    transition-all duration-300 ease-in-out bg-transparent`;

                                const statusStyle = isAvailable
                                    ? "text-green-600 hover:scale-105"
                                    : "text-gray-700 cursor-not-allowed";

                                const iconStyle = isAvailable
                                    ? isSelected ? "text-4xl text-red-500 rounded-full drop-shadow-lg"
                                        : "text-4xl text-green-500 border rounded-lg drop-shadow-md"
                                    : "text-3xl text-gray-700 opacity-80";

                                const selectedStyle = isSelected
                                    ? "bg-red-100! rounded-full border-2 border-red-500 scale-105 !text-red-500 hover:bg-red-200"
                                    : "";

                                return (
                                    <div className="flex flex-col items-center" key={seat.seatId}>
                                        <button
                                            className={`p-2 ${baseStyle} ${statusStyle} ${selectedStyle}`}
                                            onClick={() => handleSeatSelection(seat)}
                                            disabled={!isAvailable}
                                            title={`Seat ${seat.seatId} (${seat.type})`}
                                        >
                                            <LuArmchair className={`${iconStyle}`} />
                                        </button>
                                        <span className={`mt-1 font-semibold text-xs ${statusStyle}`}>
                                            {seat.seatId}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// seatingData.ts

// -------------------- Types --------------------

export type SeatStatus = "available" | "booked" | "blocked";
export type SeatType = "general" | "private" | "group";
export type TimeSlotStatus = "available" | "booked" | "blocked";

export interface TimeSlot {
  slot: string; // e.g., "10:00-11:00"
  status: TimeSlotStatus;
}

export interface Seat {
  seatId: string;
  status: SeatStatus;
  type: SeatType;
  bookedBy: string | null;
  hasPowerOutlet: boolean;
  windowSeat: boolean;
  timeSlots: TimeSlot[];
  groupSize?: number; // only for group type
}

export interface Section {
  sectionId: string;
  sectionName: string;
  floor: number;
  seats: Seat[];
}

// -------------------- Data --------------------

// Generate 100 sections, each with 20 seats, each seat with 5 time slots
function generateSeatingData(): Section[] {
    const sections: Section[] = [];
    const seatTypes: SeatType[] = ["general", "private", "group"];
    const seatStatuses: SeatStatus[] = ["available", "booked"];
    const timeSlotStatuses: TimeSlotStatus[] = ["available", "booked", "blocked"];
    const timeSlotsList = [
        "10:00-11:00",
        "11:00-12:00",
        "12:00-13:00",
        "13:00-14:00",
        "14:00-15:00"
    ];

    for (let s = 1; s <= 4; s++) {
        const sectionId = `S${s}`;
        const section: Section = {
            sectionId,
            sectionName: `${s === 1 ? "A" : s === 2 ? "B" : s === 3 ? "C" : "D"}`,
            floor: Math.floor((s - 1) / 10) + 1,
            seats: []
        };

        for (let i = 1; i <= 32; i++) {
            const seatType = seatTypes[Math.floor(Math.random() * seatTypes.length)];
            const seatStatus = seatStatuses[Math.floor(Math.random() * seatStatuses.length)];
            const seatId = `${section.sectionName}-${i}`;
            const hasPowerOutlet = Math.random() < 0.5;
            const windowSeat = Math.random() < 0.3;
            const bookedBy = seatStatus === "booked" ? `user${Math.floor(Math.random() * 1000)}` : null;

            const timeSlots: TimeSlot[] = timeSlotsList.map(slot => ({
                slot,
                status: timeSlotStatuses[Math.floor(Math.random() * timeSlotStatuses.length)]
            }));

            const seat: Seat = {
                seatId,
                status: seatStatus,
                type: seatType,
                bookedBy,
                hasPowerOutlet,
                windowSeat,
                timeSlots
            };

            if (seatType === "group") {
                seat.groupSize = Math.floor(Math.random() * 6) + 2; // group size between 2 and 7
            }

            section.seats.push(seat);
        }

        sections.push(section);
    }

    return sections;
}

export const seatingData: Section[] = generateSeatingData();


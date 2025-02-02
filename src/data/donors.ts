import { faker } from "@faker-js/faker";

export interface Donor {
    id: number;
    name: string;
    bloodType: string;
    location: string;
    lastDonation: string;
    donations: number;
    available: boolean;
    avatar: string;
}

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const locations = [
    "Mirpur",
    "Dhanmondi",
    "Gulshan",
    "Uttara",
    "Banani",
    "Mohakhali",
    "Bashundhara",
    "Motijheel",
    "Khilgaon",
    "Rampura",
].map((area) => `${area}, Dhaka`);

export const donors: Donor[] = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    bloodType: bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    lastDonation: faker.date
        .between({
            from: "2024-01-01",
            to: "2024-02-29",
        })
        .toISOString()
        .split("T")[0],
    donations: faker.number.int({ min: 0, max: 20 }),
    available: faker.datatype.boolean(),
    avatar: `https://i.pravatar.cc/150?img=${faker.number.int({
        min: 1,
        max: 70,
    })}`,
}));

export const bloodGroupsList = bloodGroups;

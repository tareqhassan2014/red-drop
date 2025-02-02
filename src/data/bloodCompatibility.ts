type BloodCompatibility = {
    [key: string]: string[];
};

export const bloodCompatibility: BloodCompatibility = {
    "A+": ["A+", "A-", "O+", "O-"],
    "A-": ["A-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    "AB-": ["A-", "B-", "AB-", "O-"],
    "O+": ["O+", "O-"],
    "O-": ["O-"],
};

export const getCompatibleDonors = (bloodType: string) => {
    return bloodCompatibility[bloodType] || [];
};

export const getCompatibleRecipients = (bloodType: string) => {
    return Object.entries(bloodCompatibility)
        .filter(([_, donors]) => donors.includes(bloodType))
        .map(([recipient]) => recipient);
};

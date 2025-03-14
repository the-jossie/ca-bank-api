export type UserRole = "admin" | "user" | "guest";
export type User = {
    firstName: string;
    lastName: string;
    email: string;
    userRole: UserRole;
    userId: number;
};

import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateMockUsers = (quantity = 50) => {
const users = [];
const hashedPassword = bcrypt.hashSync("coder123", 10);

for (let i = 0; i < quantity; i++) {
    users.push({
    _id: faker.database.mongodbObjectId(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(["user", "admin"]),
    pets: []
    });
}

return users;
};

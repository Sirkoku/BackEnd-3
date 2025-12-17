import { faker } from "@faker-js/faker";

export const generateMockPets = (quantity = 10) => {
const pets = [];

for (let i = 0; i < quantity; i++) {
    pets.push({
    _id: faker.database.mongodbObjectId(),
    name: faker.animal.petName(),
    specie: faker.helpers.arrayElement(["dog", "cat", "rabbit", "bird"]),
    age: faker.number.int({ min: 1, max: 15 })
    });
}

return pets;
};

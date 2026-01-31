import { Router } from "express";
import { generateMockUsers } from "../services/mocking/mockingUsers.js";
import { generateMockPets } from "../services/mocking/mockingPets.js";

import UsersDAO from "../dao/Users.dao.js";
import PetsDAO from "../dao/Pets.dao.js";

const router = Router();

// GET /api/mocks/mockingusers
router.get("/mockingusers", (req, res) => {
const users = generateMockUsers(50);
res.status(200).json({
    status: "success",
    payload: users
});
});

// GET /api/mocks/mockingpets
router.get("/mockingpets", (req, res) => {
const pets = generateMockPets(10);
res.status(200).json({
    status: "success",
    payload: pets
});
});

// POST /api/mocks/generateData
router.post("/generateData", async (req, res) => {
try {
    const { users = 0, pets = 0 } = req.query;

    const usersToInsert = generateMockUsers(users).map(user => ({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
    role: user.role,
    pets: []
    }));

    const petsToInsert = generateMockPets(pets).map(pet => ({
    name: pet.name,
    specie: pet.specie,
    age: pet.age
    }));

    if (users > 0) await UsersDAO.insertMany(usersToInsert);
    if (pets > 0) await PetsDAO.insertMany(petsToInsert);

    res.status(201).json({
    status: "success",
    message: "Datos generados e insertados correctamente",
    inserted: {
        users,
        pets
    }
    });
} catch (error) {
    res.status(500).json({
    status: "error",
    error: error.message
    });
}
});

export default router;

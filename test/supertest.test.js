import chai from 'chai';
import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app.js';

const expect = chai.expect;
const request = supertest(app);

describe('Adoptions Router', function () {

this.timeout(10000);

let createdAdoption;
let fakeUserId;
let fakePetId;

before(async () => {
    fakeUserId = new mongoose.Types.ObjectId();
    fakePetId = new mongoose.Types.ObjectId();
});

it('GET /api/adoptions - devuelve todas las adopciones', async () => {
    const res = await request.get('/api/adoptions');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
});

it('POST /api/adoptions/:uid/:pid - crea adopción correctamente', async () => {
    const res = await request
    .post(`/api/adoptions/${fakeUserId}/${fakePetId}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('_id');

    createdAdoption = res.body;
});

it('GET /api/adoptions/:aid - devuelve adopción existente', async () => {
    const res = await request
    .get(`/api/adoptions/${createdAdoption._id}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('_id');
});

it('GET /api/adoptions/:aid - error 404 si no existe', async () => {
    const fakeAdoptionId = new mongoose.Types.ObjectId();

    const res = await request
    .get(`/api/adoptions/${fakeAdoptionId}`);

    expect(res.status).to.equal(404);
});

it('POST /api/adoptions/:uid/:pid - error si user o pet no existe', async () => {
    const res = await request
    .post(`/api/adoptions/123/456`);

    expect(res.status).to.be.oneOf([400, 404]);
});

});

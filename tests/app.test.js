const request = require('supertest')
const app = require('../app.js')

describe('API test', () => {
    it('should show api', async () => {
        const res = await request(app)
            .get('/')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('msg')
    })
})

describe('Create User', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/user')
            .send({
                nome: "Jane Doe",
                email: "jane2.doe@email.com",
                senha: "123Mudar"
            })
        expect(res.statusCode).toEqual(201)
    })
})

describe('Try Create a Duplicated User', () => {
    it('should be try create a new user with duplicated email', async () => {
        const res = await request(app)
            .post('/api/user')
            .send({
                nome: "John Doe",
                email: "j.doe@email.com",
                senha: "123Mudar"
            })
        expect(res.statusCode).toEqual(302)
    })
})

describe('Say Hello', () => {
    it('should show Hello Message in endpoint', async () => {
        const res = await request(app)
        .get('/hello')
    expect(res.body).toHaveProperty('Hello')
    expect(res.statusCode).toEqual(200)
    })
})

describe('Create Category', () => {
    it('should create a new category', async () => {
        const res = await request(app)
            .post('/api/category')
            .send({
                loja: "camicado",
                categoria: "eletro-eletrônico1"
            })
        expect(res.statusCode).toEqual(201)
    })
})
const expect = require('expect');
const request = require('supertest');

const { app } = require('../server/server');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');


beforeEach((done) => {
    Todo.remove({}).then(() => done());
})
describe('Post /todos', () => {
    it('Crea un nuovo todo', (done) => {
        var text = 'Text todo';
        request(app).post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text + 1)
            }).end((err, res) => {
                if (err) { return done(err); }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e))
            })
    })
});
const request = require('supertest');

var app = require('./server').app;
var expect = require('expect');
describe('Server',() => {
    describe('GET /',() => {
        it('should re hello world',(done) =>{
            request(app)
                   .get('/')
                   .expect(200)
                   .expect((res) => {
                       expect(res.body).toInclude({
                           error:'Page not found'
                       });
                   })
                   .end(done);
          });
    });
     describe('GET /user',() =>{
        it('it should return my user object',(done) => {
            request(app)
                  .get('/user')
                  .expect(200)
                  .expect((res) =>{
                      expect(res.body).toInclude({
                        name:'Andrew',age:25
                      });
                  })
                  .end(done);
        });
     });
     
});

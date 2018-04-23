const expect = require('expect');
const utils = require('./utils');
describe('Utils',() => {
    describe('#add',() =>{
        it('should add two number',() =>{
            var res = utils.add(33,11);
             expect(res).toBe(44).toBeA('number');
          });
    });
    
      it('should Async add two number',(done) =>{
          utils.asyncAdd(4,3,(sum) =>{
              expect(sum).toBe(7).toBeA('number');
              done();
          });
      });
      it('should multy two number',() => {
        var resM = utils.square(3);
        expect(resM).toBe(9).toBeA('number');
      });
      it('should Async multy two number',(done) => {
          utils.asyncSquare(5,(res) =>{
              expect(res).toBe(25).toBeA('number');
              done();
          });
        });
       
      it('should verfiy first name and last name',() => {
          var user = {age:25,location:'gurgaon'};
          var res = utils.setName(user,"Aamir Brar");
          expect(res).toInclude({firstName:'Aamir',lastName:'Brar'});
      });
});



// it('should except some value',() =>{
//    // expect(12).toNotBe(12);
//    //expect({name:'Andrew'}).toEqual({name:'Andrew'});
//    //expect([2,3,4]).toInclude(4);
//    expect({name:'Aamir',age:25,location:'gurgaon'}).toInclude({age:25});
// });
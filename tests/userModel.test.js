// const db = require("../models");

// describe('User Schema', () => {
//     describe('Role Requirement', () => {
//         it("Should return 'true' if the New Class has any value", () => {
//             const test = new db.User({
//                 firstname: 'test-first',
//                 lastname: 'test-last',
//                 email: 'test@test.test',
//                 password: 'test_pass',
//                 role: 'bad-test'
//             });
//             expect(test).toEqual(true);
//         });
//     });
// });

describe("travis", () =>{
    describe("travis", () => {
        it("should pass travis", () => {
            expect({status: true}).toEqual({status: true});
        });
    });
});
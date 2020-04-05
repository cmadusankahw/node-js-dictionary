
//requier test file's dependencies
const appMock = require ("./app");

//file to test
require("./index.js");

//create mocks of dependencies for unit testing of index.js
jest.mock("./app");


//test case
describe("index.js - app entry", () => {

    it(" should call app.listen()", () => {
        expect(appMock.listen).toHaveBeenCalled();
    });

})
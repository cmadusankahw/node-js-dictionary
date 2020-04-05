//get express to create a fake app for testing
const express = require ("express");
const request = require("supertest");

const dictionaryRouter = require ("./dictionary-router");

//mocking a fake data set as SkiTerms
jest.mock("../data/skiTerms.json", () =>[
    {term: "aaa", defined: "define a"},
    {term: "bbb", defined: "define b"}
]);


const app = express();

app.use("/dictionary", dictionaryRouter );

describe ("dictionary-router", () => {
    it("GET dictionary/ - Success", async () =>{
        const body = await  request(app).get("/dictionary");
        expect(body).toEqual([
            {term: "aaa", defined: "define a"},
            {term: "bbb", defined: "define b"}
        ]);
    });

    it("DELETE dictionary/aaa - Success", async () =>{
        const body = await  request(app).delete("/dictionary/aaa");
        expect(body).toEqual(
            {
                status: "success",
                removed: "aaa",
                newLength: 1
            }
        );
    });
})
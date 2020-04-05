const { Router } = require ("express");

let skiTerms = require("../data/skiTerms.json");
const { save } = require ("./lib");

const router = new Router();

router.get("/", (req, res) => {
    res.json(skiTerms);
});

router.post("/", (req, res) => {
    skiTerms.push(req.body);
    save(skiTerms);
    res.json({
        status: "success",
        term: req.body
    });
});

router.delete("/:term", (req, res) => {
    skiTerms = skiTerms.filter(def => def.term !== req.params.term);
    save(skiTerms);
    res.json({
        status: "success",
        removed: req.params.term,
        newLength: skiTerms.length
    });
});

module.exports = router;
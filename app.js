const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("home.hbs");
});

app.get("/about", (req, res) => {
    res.render("about.hbs");
});

app.get("/career", (req, res) => {
    res.render("career.hbs", {
        club: "Barcelona",
        LaLiga: [
            {year: "2020-21", matches: "32", goals: "28", assists: "10"},
            {year: "2019-20", matches: "33", goals: "25", assists: "21"},
            {year: "2018-19", matches: "34", goals: "36", assists: "13"},
            {year: "2017-18", matches: "36", goals: "34", assists: "12"},
            {year: "2016-17", matches: "34", goals: "37", assists: "9"},
            {year: "2015-16", matches: "33", goals: "26", assists: "16"},
            {year: "2014-15", matches: "38", goals: "43", assists: "18"},
            {year: "2013-14", matches: "31", goals: "28", assists: "11"},
            {year: "2012-13", matches: "32", goals: "46", assists: "12"},
            {year: "2011-12", matches: "37", goals: "50", assists: "16"},
            {year: "2010-11", matches: "33", goals: "31", assists: "18"},
            {year: "2009-10", matches: "35", goals: "34", assists: "10"},
            {year: "2008-09", matches: "31", goals: "23", assists: "11"},
            {year: "2007-08", matches: "28", goals: "10", assists: "12"},
            {year: "2006-07", matches: "26", goals: "14", assists: "2"},
            {year: "2005-06", matches: "17", goals: "6", assists: "2"},
            {year: "2004-05", matches: "7", goals: "1", assists: "0"}
        ],
        ChampionsLeague: [
            {clYear: "2020-21", clMatches: "6", clGoals: "5", clAssists: "2"},
            {clYear: "2019-20", clMatches: "8", clGoals: "3", clAssists: "3"},
            {clYear: "2018-19", clMatches: "10", clGoals: "12", clAssists: "3"},
            {clYear: "2017-18", clMatches: "10", clGoals: "6", clAssists: "2"},
            {clYear: "2016-17", clMatches: "9", clGoals: "11", clAssists: "2"},
            {clYear: "2015-16", clMatches: "7", clGoals: "6", clAssists: "1"},
            {clYear: "2014-15", clMatches: "13", clGoals: "10", clAssists: "5"},
            {clYear: "2013-14", clMatches: "7", clGoals: "8", clAssists: "0"},
            {clYear: "2012-13", clMatches: "11", clGoals: "8", clAssists: "2"},
            {clYear: "2011-12", clMatches: "11", clGoals: "14", clAssists: "5"},
            {clYear: "2010-11", clMatches: "13", clGoals: "12", clAssists: "3"},
            {clYear: "2009-10", clMatches: "11", clGoals: "8", clAssists: "0"},
            {clYear: "2008-09", clMatches: "12", clGoals: "9", clAssists: "5"},
            {clYear: "2007-08", clMatches: "9", clGoals: "6", clAssists: "1"},
            {clYear: "2006-07", clMatches: "5", clGoals: "1", clAssists: "0"},
            {clYear: "2005-06", clMatches: "6", clGoals: "1", clAssists: "1"},
            {clYear: "2004-05", clMatches: "1", clGoals: "0", clAssists: "0"}
        ],
        CopadelRey: [
            {crYear: "2020-21", crMatches: "5", crGoals: "3", crAssists: "1"},
            {crYear: "2019-20", crlMatches: "2", crGoals: "2", crAssists: "1"},
            {crYear: "2018-19", crMatches: "5", crGoals: "3", crAssists: "2"},
            {crYear: "2017-18", crMatches: "6", crGoals: "4", crAssists: "4"},
            {crYear: "2016-17", crMatches: "7", crGoals: "5", crAssists: "3"},
            {crYear: "2015-16", crMatches: "5", crGoals: "5", crAssists: "6"},
            {crYear: "2014-15", crMatches: "6", crGoals: "5", crAssists: "4"},
            {crYear: "2013-14", crMatches: "6", crGoals: "5", crAssists: "3"},
            {crYear: "2012-13", crMatches: "5", crGoals: "4", crAssists: "1"},
            {crYear: "2011-12", crMatches: "7", crGoals: "3", crAssists: "4"},
            {crYear: "2010-11", crMatches: "7", crGoals: "7", crAssists: "2"},
            {crYear: "2009-10", crMatches: "3", crGoals: "1", crAssists: "0"},
            {crYear: "2008-09", crMatches: "8", crGoals: "6", crAssists: "1"},
            {crYear: "2007-08", crMatches: "3", crGoals: "0", crAssists: "0"},
            {crYear: "2006-07", crMatches: "2", crGoals: "2", crAssists: "1"},
            {crYear: "2005-06", crMatches: "2", crGoals: "1", crAssists: "0"},
            {crYear: "2004-05", crMatches: "1", crGoals: "0", crAssists: "0"}
        ],
        national: "Argentina",
        WorldCup: [
            {wcYear: "2018", wcMatches: "4", wcGoals: "1", wcAssists: "2"},
            {wcYear: "2014", wcMatches: "7", wcGoals: "4", wcAssists: "1"},
            {wcYear: "2010", wcMatches: "5", wcGoals: "0", wcAssists: "1"},
            {wcYear: "2006", wcMatches: "3", wcGoals: "1", wcAssists: "1"}
        ],
        CopaAmerica: [
            {caYear: "2019", caMatches: "6", caGoals: "1", caAssists: "1"},
            {caYear: "2016", caMatches: "5", caGoals: "5", caAssists: "4"},
            {caYear: "2015", caMatches: "6", caGoals: "1", caAssists: "3"},
            {caYear: "2011", caMatches: "4", caGoals: "0", caAssists: "3"},
            {caYear: "2007", caMatches: "6", caGoals: "2", caAssists: "1"}
        ]
    });
    // #if else #unless #each 
});

app.listen(3010);
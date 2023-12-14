"use strict";
{
    //   spread oparator
    //   rest oparator
    //   destructring
    const poorUser = {
        name: "mr.X",
    };
    const boy1 = ["mira", "babu", "raj", "jaj"];
    const boy2 = ["har", "riy", "jub", "rja"];
    boy1.push(...boy2);
    const mentors1 = {
        typeScript: "zubair",
        redux: "mir",
    };
    const mentors2 = {
        next: "fiz next",
        cloud: "nah",
    };
    const mentors3 = Object.assign(Object.assign({}, mentors1), mentors2);
    //   rest oparetot
    const greet = (...friends) => {
        // console.log(`hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greet("ami", "tumi", "she");
}

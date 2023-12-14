"use strict";
{
    //  Ternary, optional chaining & nullish coalescing operator
    // Ternary operator
    const age = 17;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    // nullish coalescing operator only for null and undefine
    const isAuth = undefined;
    const res1 = isAuth !== null && isAuth !== void 0 ? isAuth : "Guest";
    console.log(res1);
    // optional chaining
}

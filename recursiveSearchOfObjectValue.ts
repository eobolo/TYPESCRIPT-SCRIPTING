export const RecursiveSearchOfObjectValue = function (user: object, propAmount: number = 0, ranAlready: boolean = false) {
    let userPropsAmount: number = propAmount;
    if (!ranAlready) {
        for (let _ in user) {
            userPropsAmount += 1;
        }
        if (userPropsAmount === 0) {
            userPropsAmount = Object.keys(user).length;
        }
        ranAlready = true;
    }
    const objectValues: any[] = Object.values(user);
    for (let i: number = 0; i < userPropsAmount; i++) {
        if (typeof objectValues[i] === "object") {
            RecursiveSearchOfObjectValue(objectValues[i], propAmount=0, ranAlready=false)
        } else {
            console.log(objectValues[i]);
        }
    }
    return
}
/*
 test case
*/
type userData = {
    full_name: string,
    age: number,
    isStudent: boolean,
    results: object[],
    isGraduating: boolean,
}
let testInt: userData = {
    full_name: "Emmanuel Obolo",
    age: 24,
    isStudent: true,
    results: [{
        id: 1,
        subject: "Maths",
        Score: 85,
        passed: true,
    }],
    isGraduating: false,
}
RecursiveSearchOfObjectValue(testInt);
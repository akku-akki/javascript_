// import { reject, resolve } from "bluebird";

async function logName(name) {
    console.log(name + "Param");
    const transformName = new Promise((resolve, rej) => {
        setTimeout(() =>
            rej("UNable to resolve the issue"), 1000
            // resolve(name.toUpperCase()), 1000
        );
    });
    const result = await transformName;
    return result;
}

try {
    const result = await logName("Ankit Is Gupta")
    console.log(result);
    // logName('ankit').then(res => {
    //     console.log("result from async Function" + res )
    // })
} catch (err) {
    console.log(err)
}


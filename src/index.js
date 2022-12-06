/* Parameters, arguments and default settings */

// Declaration of a function
function func(param = "default") {
    // param = param || "default"; // Old way
    if (param) {
        console.log(param.toUpperCase());
    }
}
func("param"); // PARAM
func(); // DEFAULT

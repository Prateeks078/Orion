// ============================================================
// 🔥 EXECUTION CONTEXT
// ============================================================
//
// JavaScript executes code inside an Execution Context.
//
// 1️⃣ GLOBAL EXECUTION CONTEXT
//    → Created when JS starts running.
//    → `this` is created.
//
// 2️⃣ MEMORY / CREATION PHASE
//    → Memory is allocated for variables and functions.
//    → `let` / `const` → uninitialized (TDZ)
//    → Function declaration → complete function stored
//
// 3️⃣ EXECUTION PHASE
//    → Code executes line-by-line.
//    → Variables get their values.
//    → Function calls create a NEW Execution Context.
//
// ============================================================


// Example:

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);


// When addNum() is called:
//
// 🔹 NEW FUNCTION EXECUTION CONTEXT is created
//
// ┌─────────────────────────────────┐
// │ Function Execution Context      │
// │                                 │
// │ num1  → 10                      │
// │ num2  → 5                       │
// │ total → 15                      │
// └─────────────────────────────────┘
//
// Memory Phase:
// num1  → uninitialized
// num2  → uninitialized
// total → uninitialized
//
// Execution Phase:
// num1  → 10
// num2  → 5
// total → 15
// return 15
//
// After function finishes:
// → Function Execution Context is removed
// → Control returns to Global Execution Context
// Constants
const r1 = 0.7;
const r2 = 0.4;
const r3 = 0.2;
const p_d = 100;
const ins = 0.3;
const vat = 0.18;

// Read in the input values

let total_km = 1200
let num_days = 7

// Calculate the cost of Rental by the kilometer formula
let cost_by_km = 0;
if (total_km <= 100) {
    cost_by_km = total_km * r1;
} else if (total_km > 100 && total_km <= 1000) {
    cost_by_km = 100 * r1 + (total_km - 100) * r2;
} else {
    cost_by_km = 100 * r1 + 900 * r2 + (total_km - 1000) * r3;
}
let cost_by_km_with_ins = (cost_by_km + num_days * ins) * (1 + vat);

// Calculate the cost of Daily rate formula
let cost_daily_rate = num_days * p_d;
let cost_daily_rate_with_ins = (cost_daily_rate + num_days * ins) * (1 + vat);

// Determine which formula is more advantageous
let label = "";
let min_cost = Math.min(cost_by_km_with_ins, cost_daily_rate_with_ins);
if (min_cost == cost_by_km_with_ins) {
    label = "Rental by the kilometer formula is more advantageous.";
} else {
    label = "Daily rate formula is more advantageous.";
}

// Display the results
console.log("Total cost of Rental by the kilometer formula: " + cost_by_km_with_ins);
console.log("Total cost of Daily rate formula: " + cost_daily_rate_with_ins);
console.log(label);
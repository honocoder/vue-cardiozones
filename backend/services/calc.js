const FCmin = 54;
const FCmax = 194;

const FCreserve = FCmax - FCmin;

const Z1 = [FCmin + 0.5 * FCreserve, FCmin + 0.6 * FCreserve];
const Z2 = [FCmin + 0.6 * FCreserve, FCmin + 0.7 * FCreserve];
const Z3 = [FCmin + 0.7 * FCreserve, FCmin + 0.8 * FCreserve];
const Z4 = [FCmin + 0.8 * FCreserve, FCmin + 0.9 * FCreserve];
const Z5 = [FCmin + 0.9 * FCreserve, FCmax];

console.log(`Your Z1 is between ${Z1[0]}bpm and ${Z1[1]}bpm`);
console.log(`Your Z2 is between ${Z2[0]}bpm and ${Z2[1]}bpm`);
console.log(`Your Z3 is between ${Z3[0]}bpm and ${Z3[1]}bpm`);
console.log(`Your Z4 is between ${Z4[0]}bpm and ${Z4[1]}bpm`);
console.log(`Your Z5 is between ${Z5[0]}bpm and ${Z5[1]}bpm`);

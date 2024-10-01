const players = [75, 65, 67, 72, 55, 59];

const selected = players.find(player => player > 60);
console.log(selected);

const selected2 = players.find(player => player < 60);
console.log(selected2);

const selected3 = players.find(player => player > 90);
console.log(selected3);//jodi value khuje na pai undefined return kore

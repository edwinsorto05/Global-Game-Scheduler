function getOffset(){
    var offset = new Date().getTimezoneOffset();
    var offsetHour = offset/60;
    return offsetHour
}
function convertToMatrix(){
    console.time("scheduler");
    const data = { /* your full JSON here */ };
    const people = data.people;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = Array.from({ length: 24 }, (_, i) => i);
    // Create 7 rows × 24 columns grid
    const grid = Array.from({ length: 7 }, () =>
        Array.from({ length: 24 }, () => [])
    );
    // Fill grid
    people.forEach(person => {
        person.availability.forEach(slot => {
            const dayIndex = days.indexOf(slot.day);
        slot.time.forEach(hour => {
            grid[dayIndex][hour].push(person.name);
            });
        });
    });
    console.timeEnd("scheduler");
    return(grid);
}
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.rank = new Array(n).fill(0);
    }
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);
        if (rootA !== rootB) {
            if (this.rank[rootA] < this.rank[rootB]) {
                this.parent[rootA] = rootB;
            } else if (this.rank[rootA] > this.rank[rootB]) {
                this.parent[rootB] = rootA;
            } else {
                this.parent[rootB] = rootA;
                this.rank[rootA]++;
            }
        }
    }
}

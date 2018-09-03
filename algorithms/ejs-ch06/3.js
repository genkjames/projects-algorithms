// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration.

class Group {
  constructor() {
    this.values = []
  }

  add(value) {
    const index = this.values.indexOf(value);
    if (index === -1) this.values.push(value);
  }

  delete(value) {
    this.values = this.values.filter(val => val !== value);
  }

  has(value) {
    return this.values.includes(value);
  }

  static from(values) {
    let group = new Group;
    for (let el of values) {
      group.add(el);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.current = 0;
    this.values = group.values;
  }

  next() {
    if (this.current === this.values.length) return {done: true};
    let value = this.values[this.current];
    this.current++;
    return { value, done: false};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
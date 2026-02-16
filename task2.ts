/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать класс Stack

class Stack<T> {
  arr: T[] = [];
  constructor(...items: T[]) {
    this.arr = items;
  }
  /** Добавляет элемент в стек */
  push(item: T) {
    this.arr.push(item);
  }

  /** Удаляет и возвращает верхний элемент */
  pop() {
    return this.arr.pop();
  }

  /** Проверяет, пуст ли стек */
  isEmpty() {
    return this.arr.length === 0;
  }

  /** Количество элементов в стеке */
  get size() {
    return this.arr.length;
  }

  /** Очищает стек */
  clear() {
    this.arr.length = 0;
  }
}

const stack = new Stack<number>(6, 10, 23);

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.size); // 2
console.log(stack.isEmpty()); // false

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {

  let roster = l;                                                     // объявление временной переменной roster равной l
  if (!l) return l;                                                   // проверка на наличие значений в l
  if (l.value === k) l = l.next;                                      // нахождение элемента списка l равному k, и его пропуск, с переходом к следующему значению
  while (roster.next) {                                               // проверка циклом наличия значений списка до тех пор пока не закончатся
    if (roster.next.value === k) roster.next = roster.next.next;      // нахождение элемента списка roster равному k, и его пропуск, с переходом к следующему значению
    roster = roster.next;                                             // есди не равен k, то переход к следующему значению
  }
  return l;                                                           // возврат нового списка l по заверщению цикла while
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Definition for singly-linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Function to print the linked list
function printList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + " -> ");
    current = current.next;
  }
  process.stdout.write("null\n");
}

// Function to create a linked list from an array
function createListFromArray(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

var addTwoNumbers = function (head, head2) {
  let prev = null;
  let next = null;
  let current = head;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};

// Example usage
let inputList = createListFromArray([1, 2, 3, 4, 5]);
let inputList2 = createListFromArray([1, 2, 3, 2, 1]);
let result = addTwoNumbers(inputList, inputList2);
console.log("reverse linked list:");
printList(result);

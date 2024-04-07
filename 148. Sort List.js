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

var sortList = function (head) {
  if (head == null) return null;

  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  let ans = new ListNode(arr[0]);
  let i = 1;
  let temp = ans;
  while (i < arr.length) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
    i++;
  }

  return ans;
};

// Example usage
let inputList = createListFromArray([6, 8, 71, 2, 3, 4, 5]);
let inputList2 = createListFromArray([1, 2, 3, 2, 1]);
let result = sortList(inputList);
console.log("reverse linked list:");
printList(result);

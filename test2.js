// email validation
// problem 1
function emailValidation(str) {
	const strArray = str.split("")
	let counter = 0
	const index = str.indexOf("@")
	const afterAdd = str.substring(str.lastIndexOf("@") + 1)

	for (let char of strArray) {
		if (char == "@") {
			counter += 1
		}
	}

	const domain = afterAdd.split(".")
	if (
		domain.length < 2 ||
		str.length > 256 ||
		str[index + 1] == "." ||
		!afterAdd.includes(".") ||
		counter !== 1 ||
		str.startsWith("@") ||
		str.endsWith("@")
	) {
		return false
	} else {
		return true
	}
}
emailValidation("mohammadfakih@.gmail.com")

// Problem 4
// Bracket matching
function isValidBracketSequence(str){
    const stack=[]
    for (var char of str){
        if(char === "(" || char === "{" || char === "[" ){
            stack.push(char)
        }else {
			const opening = stack.pop()
			if (
			  (char === ")" && opening !== "(") ||
			  (char === "]" && opening !== "[") ||
			  (char === "}" && opening !== "{")
			){
				return false
			}
		  }
		}

    return stack.length === 0 ? true: false
}

isValidBracketSequence('{[]}')

// Problem 3
// Linked List class

class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor(data) {
		this.head = null
		this.tail = null
		this.size = 0
	}
	// add to head
	addToHead(data) {
		let newNode = new Node(data)
		if (!this.head) {
			this.node = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.size++
	}
	// add data to the end of the list
	addToEnd(data) {
		let newNode = new Node(data)
		if (this.head == null) {
			this.head == newNode
			return
		}
		let current = this.head
		while (current.next != null) {
			current = current.next
		}
		current.next = newNode
	}

	// remove node who's value is greater than x
	removeNode(x) {
		if (!this.head) {
			return null
		}
		let current = this.head
		let prev = null
		while (current && current.data > x) {
			this.head = current.next
			current = this.head
			this.size--
		}
		prev = current
		current = current.next
		while (current) {
			if (current.data > x) {
				prev.next = current.next
				current = prev.next
				this.size--
			} else {
				prev = current
				current = current.next
			}
		}
	}

	//    print nodes
	printNodes() {
		let current = this.head
		while (current) {
			console.log("current data" + current.data)
			current = current.next
		}
	}
}

function removeNodesGreaterThanX(head, x) {
	if (!head) {
	  return null
	}
  
	let current = head
	let prev = null
  
	while (current) {
	  if (current.data > x) {
		if (!prev) { 
		  head = current.next
		} else {
		  prev.next = current.next
		}
		current = prev ? prev.next : head
	  } else {
		prev = current
		current = current.next
	  }
	}
	return head
  }

const list = new LinkedList()
list.addToHead(10)
list.addToHead(3)
list.addToEnd(7)
list.addToHead(8)
list.addToHead(2)
list.addToHead(11)
list.printNodes()
list.removeNode(10)

// Problem 2 Probability check

const arr = [
	["Diamonds", "Hearts", "Spades", "Clubs", "Joker"],
	["Lion", "Fox", "Parrot", "Seal", "Snake"],
	["Apple", "Mango", "Bananas", "Papaya", "Watermelon"],
]

const combineAll = (array) => {
	const res = []
	let max = array.length - 1
	const helper = (arr, i) => {
		for (let j = 0, l = array[i].length; j < l; j++) {
			let copy = arr.slice(0)
			copy.push(array[i][j])
			if (i == max) res.push(copy)
			else helper(copy, i + 1)
		}
	}
	helper([], 0)
	return res
}
console.log(combineAll(arr))

function probabilityToBeatBoss(suits, animals, fruits) {
//     // compare the combination with the csv data inside it
//     // calculate the probability of winning and return it
}

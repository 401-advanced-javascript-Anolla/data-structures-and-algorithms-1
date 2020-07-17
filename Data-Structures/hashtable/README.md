
# Code Challenge 30

## Challenge Description
- Implement a Hashtable with the following methods:
 - add: takes in both the key and value. This method should hash the key, and add the key and value pair to the  - table, handling collisions as needed.
 - get: takes in the key and returns the value from the table.
 - contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
 - hash: takes in an ar

## Approach & Efficiency
- Find()
 - The Find takes in a key, gets the Hash, and goes to the index location specified. Once at the index location is found in the array, it is then the responsibility of the algorithm the iterate through the bucket and see if the key exists and return the value.

- Contains()
 - The Contains method will accept a key, and return a bool on if that key exists inside the hashtable. The best way to do this is to have the contains call the GetHash and check the hashtable if the key exists in the table given the index returned.

- GetHash()
 - The GetHash will accept a key as a string, conduct the hash, and then return the index of the array where the key/value should be placed.

- Add()
 - The add takes in both the key and value. This method hash the key, and add the key and value pair to the hashtable, handling collisions by changing the initial state of the buckets. Instead of starting them all as null we can initialize a LinkedList in each one! Now if two keys resolve to the same index in the array then their key/value pairs can be stored as a node in a linked list.

### The BigO
- add method -> time O(1) / space O(1)
- find method -> time O(n) / space O(1)
- contains method -> time O(n) / space O(1)


## Solution
![Code challenge 30 Whiteboard](../../assets/ch30.png)
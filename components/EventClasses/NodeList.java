/**
 * @author Adeline Roberts
 * CS-450
 * NodeList
 */

public class NodeList<T>{
   
    /**
     * Variable Instantiation
     */
    private Node<T> head;
    private Node<T> tail;
    
    /**
     * Variable constructor
     */
   public NodeList(){
    head = null;
    tail = head;
   }

    /** Adds a new entry to this list
       @param newEntry  An object to be added. */
   public void add(T newEntry){
    Node<T> newNode = new Node<T>(newEntry);
    if (isEmpty() ) {
        head = newNode;
        tail=head;
        return;
    }
    tail.nextNode = newNode;
    tail = tail.nextNode;
    tail.nextNode = null;
   }

   /** Removes a node from the list, and returns it 
       @return  An object from the list, from a specified 
                location within the list. */
   public Node<T> remove(T key){
        Node<T> seek = head;
        Node<T> back = new Node<T>();
        while(seek.getData() != key && seek.getData() != null){
            back = seek;
            seek = seek.nextNode;
        }
        if(seek != null){
            back.nextNode = seek.nextNode;
            seek.nextNode = null;
        }
        return seek; 
   }

   /**
	 * Removes a node from the front of the list
	 * @return Node output
	 */
	public Node<T> removeHead(){
		Node<T> output = head;
		
		if(head == tail) {
			head = null;
		}
		else{
			head = head.getNext();
		}
		return output;
	}

   /** 
    * Retrieves the head, and displays it's data
    * @return  the head of the list*/
   public T peekHead(){
        return head.getData();
   }

   /**
    * Searches the List for a specific entry
    * @return true, if the entry is present in the list; false, if the entry isn't present
    */
   public boolean findEntry(T entry){
        Node<T> seek = head;
        Node<T> key = new Node<T>(entry);

        while (seek != null && seek != key) {
            seek = seek.nextNode; 
        }
    
        if (seek != null){
            return true;
        }
        else{
            return false;
        }
   }
   /** 
    * Detects whether this list is empty.
    * @return  True if the list is empty, or false otherwise. */
   public boolean isEmpty(){
        if (head == null) {
            return true;
        }//if
        else{
            return false;
        }//else
   }
   /**
    * Converts data into a printable string - a visual list
    */
   public String toString(){
        String print = "";
        int count = 1;
        Node<T> seek = head; 

        while (seek != null){
            print += "\n" + count + ". " + seek.getData();
            count++;
            seek = seek.nextNode;
        }

        if (isEmpty() == true) {
            print += "\nThis List is Currently Empty";
        }

        return print;
   }

}

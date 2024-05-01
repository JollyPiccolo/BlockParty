/**
 * @author Adeline Roberts
 * CS-450
 * Node.js
 */

public class Node<T>{
    
    /** Variable Instantiation 
    */
    private T data;
    public Node<T> nextNode;
    
    /**
     * Blank Constructor
     */
    public Node(){
        data = null;
        nextNode = null;
    }

    /**
     * Constructor with Data
     */
    public Node(T info){
        data = info;
        nextNode = null;
    }

    /**
     * Adds data to the node
     * @param T info
     */
    public void addData (T info){
        data = info;
    }
    /**
     * Adds a new node for the node to point towards
     * @param Node<T> next
     */
    public void setNextNode (Node<T> next){
        nextNode = next;
    }

    /**
     * Retrieves the data from within the node
     * @return T data
     */
    public T getData(){
        return data;
    }

    /**
     * Retreives information from within the next node
     * @return Node<T> nextNode
     */
    public Node<T> getNext(){
        return nextNode;
    }

    /**
     * Formats the data into a String for printing
     * @return String out
     */
    public String toString(){
        String out = "";
        out += data;
        return out;
    }



}//class

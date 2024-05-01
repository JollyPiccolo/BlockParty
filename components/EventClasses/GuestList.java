/**
 * @author Adeline Roberts
 * CS-450
 * GuestList
 */


public class GuestList {
   /**
    * Variable Instantiation
    */
    private NodeList<String> Guests = new NodeList<String>();
    private NodeList<String> Requests = new NodeList<String>();
    private boolean Private; 

    /**
     * Constructor - Establishes Privacy Status
     * @param Status - Determines whether the guest list is for a public 
     *                 or private event 
     */
    GuestList(boolean Status){
        Private = Status;
    }
    /**
     * Adds a guest to the guest list, or to the request list
     * @param Name - name of the new guest (TEMP - WILL CHANGE LATER)
     */
    public void newGuest (String Name){
        if(Private == false){
            Guests.add(Name);
        }

        if(Private == true){
            Requests.add(Name);
        }
    }
    /**
     * Removes a guest from the list 
     * @param Name - Name of the guest to be removed 
     * @return - the name/info of the guest being removed
     */
    public String removeGuest (String Name){
        return (Guests.remove(Name)).getData();
    }
    /**
     * Views the oldest request on the request list
     * @return Either the head of the request list, or null if the list is
     *         empty
     */
    public String nextRequest (){
        if(Private == true)
            return Requests.peekHead();
        else
            return null;    
    }
    /**
     * Approves the oldest request on the Request list, and adds it to 
     * the guest list
     */
    public void approve (){
        if(Private == true)
            Guests.add((Requests.removeHead()).getData());
    }
    /**
     * Denies the oldest request on the Request list, and throws it out
     */
    public void deny (){
        if(Private == true)
            Requests.removeHead();
    }
    /**
     * Searches the list to see if a certain guest is present
     * @param Name - name of guest being searched in the list
     * @return - true, if the guest is in the list; false, if not
     */
    public Boolean guestPresent (String Name){
        return Guests.findEntry(Name);
    }

    public String toString(){
        String print = "";
        print += "\nGuest List: ";
        print += Guests.toString();

        if (Private == true) {
            print += "\n";
            print += "\nPending Requests: ";
            print += Requests.toString();
        }
        return print;
    }


}

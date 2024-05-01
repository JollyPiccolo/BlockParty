/**
 * Adeline Roberts
 * CS-450
 * GuestTest Test Program
 */

public class GuestTest {
    public static void main (String args[]){
        /**
         * Variable Instantiation - public event and private event 
         */
        GuestList pubEvent = new GuestList(false);
        GuestList privEvent = new GuestList(true);

        /**
         * Test 1 - Add some names to the lists
         */
         System.out.println("\nTest 1");

         pubEvent.newGuest("Alex");
         pubEvent.newGuest("Beth");
         pubEvent.newGuest("Charles");

         System.out.println(pubEvent);

         privEvent.newGuest("Dan");
         privEvent.newGuest("Ella");
         privEvent.newGuest("Fred");

         System.out.println(privEvent);

        /**
         * Test 2 - Remove a name from the public list
         */

         System.out.println("\nTest 2");
         pubEvent.removeGuest("Beth");

         System.out.println(pubEvent);

        /**
         * Test 3 - Check the next request on the private list
        */
        
         System.out.println("\nTest 3");
         System.out.println("Next Request: " + privEvent.nextRequest());

        /**
         * Test 4 - Approve the next request on the private list
        */
        
         System.out.println("\nTest 4");
         privEvent.approve();
         System.out.println(privEvent);

        /**
         * Test 5 - Deny the Next Request on the private list 
        */ 
         System.out.println("\nTest 5");   
         privEvent.deny();
         System.out.println(privEvent);
        
        /**
         * Test 6 - check the list for a certain name
        */
          System.out.println("\nTest 6"); 
          System.out.println("Charles is in the public list: " + pubEvent.guestPresent("Charles"));
          System.out.println("Beth is in the public list: " + pubEvent.guestPresent("Beth"));

    }
}

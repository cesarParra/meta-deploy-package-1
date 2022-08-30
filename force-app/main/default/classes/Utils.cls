/**
 * Created by cesar on 8/30/2022.
 */

global with sharing class Utils {
  global static void logSomething(String myLogString) {
    System.debug(myLogString);
  }
}

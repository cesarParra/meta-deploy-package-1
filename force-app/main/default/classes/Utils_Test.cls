/**
 * Created by cesar on 8/30/2022.
 */

@IsTest
private class Utils_Test {
  @IsTest
  static void utilsCanGetCalledWithoutErrors() {
    Test.startTest();
    Utils.logSomething('My log');
    Test.stopTest();

    System.assert(true);
  }
}

function Logger(logString: string) {
    return function(constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }

  @Logger('LOGGING - CONTROLLER')
class Controller {
  public id = 1;
}


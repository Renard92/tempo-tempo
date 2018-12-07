/**
 * @param milliseconds
 */
export function DelayMethod (milliseconds: number = 0) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`${target.constructor.name}.${propertyKey}(${args}) is delayed by %c${milliseconds}ms.`, 'color: #2965c6');
      setTimeout(() => {
        method.apply(this, args);
      }, milliseconds);
    };

    return descriptor;
  }

}

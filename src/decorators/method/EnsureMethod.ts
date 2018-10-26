/**
 * @usage
 *
 *  @EnsureMethod(x => (x >= 0))
 *  withTotal(total: number) {
 *    this.total = total;
 *    return this;
 *  }
 *
 * @param condition
 * @return {(target:any, propertyKey:string, descriptor:PropertyDescriptor)=>PropertyDescriptor}
 * @constructor
 */
export function EnsureMethod (condition: any) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function (...args) {

      /* Executes the function to check out the condition with arguments OR verifies if every arguments match the condition */
      if ((condition instanceof Function && !condition.apply(condition, arguments)) || args.some(arg => condition != arg)) {
        console.error(`${target.constructor.name}.${propertyKey}(${args}): arguments do not match the condition (${condition}).`);
      }

      return method.apply(this, args);
    };

    return descriptor;
  }

}

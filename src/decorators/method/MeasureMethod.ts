/**
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function MeasureMethod (target?: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
  const method = descriptor.value;

  descriptor.value = function (...args) {
    const start  = performance.now(),
          result = method.apply(this, args);
    if (result instanceof Promise) {
      result.then(() => {
        const end = performance.now();
        console.log(`${target.constructor.name}.${propertyKey}(${args}) took %c${(end - start).toFixed(2)}ms.`, 'color: #2965c6');
      });
    } else {
      const end = performance.now();
      console.log(`${target.constructor.name}.${propertyKey}(${args}) took %c${(end - start).toFixed(2)}ms.`, 'color: #2965c6');
    }
    return result;
  };

  return descriptor;
}

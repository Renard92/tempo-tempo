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
        console.log(`${target.constructor.name}.${propertyKey}(${args}) took ${(end - start).toFixed(2)} ms.`);
      });
    } else {
      const end = performance.now();
      console.log(`${target.constructor.name}.${propertyKey}(${args}) took ${(end - start).toFixed(2)} ms.`);
    }
    return result;
  };

  return descriptor;
}

/**
 * @param target
 * @param propertyKey
 * @param descriptor
 * @return {TypedPropertyDescriptor<any>}
 * @constructor
 */
export function LogMethod (target?: Object, propertyKey?: string, descriptor?: TypedPropertyDescriptor<any>) {
  const method = descriptor.value;

  descriptor.value = function (...args) {
    console.group(`${target.constructor.name}.${propertyKey}(${args}).`);

    const result = method.apply(this, args);
    if (result)
      console.log('%c returns', 'color: #cc540a', result);
    console.groupEnd();

    return result;
  };

  return descriptor;
}

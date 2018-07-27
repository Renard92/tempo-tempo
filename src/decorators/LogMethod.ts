export function LogMethod () {
  return function (target?: any, name?: string, descriptor?: any) {
    console.log(`${target.constructor.name} : call to ${name}`);
    return descriptor;
  };
}

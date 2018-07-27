const Log = function (): MethodDecorator {
  return (target: any, name: string, descriptor: any) => {
    console.log(`Call to ${name}`);
    return descriptor;
  }
};

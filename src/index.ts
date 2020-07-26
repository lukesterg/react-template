const templates: { [key: string]: any } = {};

export function useTemplate<T = any>(name: string, component: T) {
  templates[name] = component;
  return (((...args: any) => templates[name](...args)) as any) as T;
}

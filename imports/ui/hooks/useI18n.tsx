import { useMemo } from 'react';
import i18n from 'meteor/universe:i18n';

//from https://www.javascript.christmas/2020/11
function flattenTemplateLiteral(strings: TemplateStringsArray, values: string[]) {
  return strings.map((str, i) => str + (values[i] ?? "")).join();
}

export default function useI18n(namespace: string = '') {
  return useMemo(() => {
    return {
      t: (strings: TemplateStringsArray, ...values: string[]) => {
        return i18n.__(namespace, flattenTemplateLiteral(strings, values))
      },
      __: (key: string, ...params: any) => i18n.__(namespace, key, ...params),
      i18n,
    };
  }, [namespace]);
}

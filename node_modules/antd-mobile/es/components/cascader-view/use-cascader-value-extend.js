import { useMemo } from 'react';
import memoize from 'lodash/memoize';
export function useCascaderValueExtend(options) {
  const generateItems = useMemo(() => {
    return memoize(val => {
      const ret = [];
      let currentOptions = options;

      for (const v of val) {
        const target = currentOptions.find(option => option.value === v);

        if (!target) {
          break;
        }

        ret.push(target);
        if (!target.children) break;
        currentOptions = target.children;
      }

      return ret;
    }, val => JSON.stringify(val));
  }, [options]);

  function generateValueExtend(val) {
    return {
      get items() {
        return generateItems(val);
      }

    };
  }

  return generateValueExtend;
}
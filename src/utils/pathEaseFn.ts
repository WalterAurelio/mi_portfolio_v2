import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';

type PathEaseConfig = {
  axis?: 'x' | 'y';
  precision?: number;
  smooth?: boolean | number;
};

export function pathEase(path: string | Element | Element[], config: PathEaseConfig = {}): (p: number) => number {
  const axis = config.axis ?? 'y';
  const precision = config.precision ?? 1;

  const rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0] as SVGPathElement), Math.round(precision * 12));

  const useX = axis === 'x';
  const start = rawPath[0][useX ? 0 : 1];
  const end = rawPath[rawPath.length - 1][rawPath[rawPath.length - 1].length - (useX ? 2 : 1)];
  const range = end - start;

  let l = Math.round(precision * 200);
  const inc = 1 / l;
  const positions: number[] = [0];
  const a: number[] = [0];
  let minIndex = 0;
  const smooth: number[] = [0];
  const minChange = (1 / l) * 0.6;
  const smoothRange = config.smooth === true ? 7 : Math.round(config.smooth as number) || 0;
  const fullSmoothRange = smoothRange * 2;

  const getClosest = (p: number) => {
    while (positions[minIndex] <= p && minIndex++ < l) {
      // Bloque vacío intencional; de lo contrario cambia el resultado de la función pathEase
    }
    a.push(((p - positions[minIndex - 1]) / (positions[minIndex] - positions[minIndex - 1])) * inc + minIndex * inc);
    if (smoothRange && a.length > smoothRange && a[a.length - 1] - a[a.length - 2] < minChange) {
      smooth.push(a.length - smoothRange);
    }
  };

  for (let i = 1; i < l; i++) {
    positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
  }
  positions[l] = 1;

  for (let i = 0; i < l; i++) {
    getClosest(i / l);
  }
  a.push(1);

  if (smoothRange) {
    smooth.push(l - fullSmoothRange + 1);
    smooth.forEach(i => {
      const start = a[i];
      const j = Math.min(i + fullSmoothRange, l);
      const inc = (a[j] - start) / (j - i);
      let c = 1;
      i++;
      for (; i < j; i++) {
        a[i] = start + inc * c++;
      }
    });
  }

  l = a.length - 1;
  return (p: number) => {
    const i = p * l;
    const s = a[i | 0];
    return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
  };
}

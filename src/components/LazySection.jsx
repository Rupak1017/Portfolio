// src/components/LazySection.jsx
import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

/**
 * @param {() => Promise<{ default: React.ComponentType }>} importFn
 *    dynamic import() of your section
 */
export default function LazySection({ importFn, rootMargin = "200px 0px" }) {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin });
  const Component = lazy(importFn);

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}

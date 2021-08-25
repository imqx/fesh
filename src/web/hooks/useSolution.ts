import { IMagDecPack, ISolutionPack } from '@siloqian/fesh-typings';
import { useEffect, useState } from 'react';
import { fetchMagneticDeclination } from '../../index';

export function useSolution(): ISolutionPack {
  const [rslPos, setRslPos] = useState<IWithLngLat>();
  const [xuePos, setXuePos] = useState<IWithLngLat>();
  const [shasPos, setShasPos] = useState<IWithLngLatRecord>();
  const [rskPos, setRskPos] = useState<IWithLngLat>();
  const [cskPos, setCskPos] = useState<IWithLngLat>();

  const [magDec, setMagDec] = useState<IMagDecPack>({
    value: 999,
    status: 'UNSET',
  });

  useEffect(() => {
    if (xuePos) {
      setMagDec((md) => ({ ...md, status: 'LOADING' }));
      try {
        (async () => {
          const value = await fetchMagneticDeclination(
            xuePos.lnglat.lng,
            xuePos.lnglat.lat,
          );
          setMagDec({ value, status: 'DONE' });
        })();
      } catch (err) {
        setMagDec((md) => ({ ...md, status: 'ERROR' }));
      }
    }
  }, [xuePos]);

  return {
    positions: {
      rskPos,
      rslPos,
      cskPos,
      shasPos,
      xuePos,
    },
    positionActions: {
      setRslPos,
      setCskPos,
      setRskPos,
      setShasPos,
      setXuePos,
    },
    magDec,
  };
}

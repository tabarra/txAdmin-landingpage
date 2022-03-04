import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export enum StatsPageEnum {
  Overview,
  Players,
  Servers,
  Resources,
  Others,
}

const currentPageAtom = atom<StatsPageEnum>({
  key: 'currentPage',
  default: StatsPageEnum.Overview,
});

export const useCurStatPageVal = () => useRecoilValue(currentPageAtom);
export const useSetCurStatPage = () => useSetRecoilState(currentPageAtom);

export const useCurStatPage = () => useRecoilState(currentPageAtom);

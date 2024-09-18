import { atom } from 'recoil';
interface ITodo {
  name: string;
  checked: boolean;
}

export const todoListState = atom<ITodo[]>({
  key: 'todoListState',
  default: [
    {
      name: 'Milk',
      checked: false,
    },

    {
      name: 'Eggs',
      checked: false,
    },
  ],
});

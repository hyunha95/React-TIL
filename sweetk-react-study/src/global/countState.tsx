import { atom } from "recoil";

type Count = number;

const countState = atom<Count>({
    key: "countState",
    default: 0,
});

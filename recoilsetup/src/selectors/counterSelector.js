import { selector } from "recoil";
import { counter } from "../atoms/counter";
export let counterSelector=selector({
    key:'counterSelector',
    get:({get})=>{
        let value=get(counter);
        return value*2;
    }
})
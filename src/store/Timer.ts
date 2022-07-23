import { atom } from "recoil";

interface TimerState {
    minutes: number,
    seconds: number
}

const timerState = atom<TimerState>({
    key: 'TimerState',
    default: {
        minutes: 0,
        seconds: 0
    }
})

export default timerState;
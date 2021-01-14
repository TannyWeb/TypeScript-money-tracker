interface IsPerson {
    name: string;
    age: number;
    speak(a?: string): void;
    spend(a: number): number | string;
}

interface Athlete extends IsPerson {
    skills: string[]
}

export const n = 'Tanny';

export const me: IsPerson = {
    name: n,
    age: 25,
    speak(say) {
        if (!say) {
            console.log('ma homie come speak something')
        }
        console.log(`say it: ${say}`)
    },
    spend(hm) {
        return `this is how much i spend - ${hm}`
    },

}

export const bolt: Athlete = {
    name: n,
    age: 25,
    speak(say) {
        if (!say) {
            console.log('ma homie come speak something')
        }
        console.log(`say it: ${say}`)
    },
    spend(hm) {
        return `this is how much i spend - ${hm}`
    },
    skills: ['mu god he has so manyu skills', 'yeah baby', 'oh honey honey']
}
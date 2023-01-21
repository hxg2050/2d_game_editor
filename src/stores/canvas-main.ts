import { defineStore } from 'pinia';

class nodeCmp {
    type = '';
    children: nodeCmp[] = [];
}

export const useCounterStore = defineStore('canvas-main', {
    state: () => ({
        /** @type {any[]} */
        active: new Array<any>(),
        root: new nodeCmp()
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2,
    },
    actions: {
        createSprite() {
            const node = new nodeCmp();
            this.root.children.push(node);
        },
        setActive(node: any) {
            this.active.push(node);
        }
    }
});

import { reactive } from 'vue'

export const store = reactive({
    menuItems: [
        {
            name: 'homepage',
            label: 'Home'
        },
        {
            name: 'portfolio',
            label: 'Portfolio'
        },
    ]
});
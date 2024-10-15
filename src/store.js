import { reactive } from 'vue'

export const store = reactive({
    menuItems: [
        {
            name: 'homepage',
            label: 'Home'
        },
        {
            name: 'projects',
            label: 'Projects'
        },
    ]
});
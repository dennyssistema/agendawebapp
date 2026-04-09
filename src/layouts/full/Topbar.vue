<script setup lang="ts">
import { Icon } from '@iconify/vue';

import icon1 from '@/assets/images/technology/vue-cat-icon.svg';
import icon2 from '@/assets/images/technology/angular-cat-icon.svg';
import icon3 from '@/assets/images/technology/next-cat-icon.svg';
import icon4 from '@/assets/images/technology/react-cat-icon.svg';
import icon5 from '@/assets/images/technology/nuxt-cat-icon.svg';
import icon6 from '@/assets/images/technology/bt-cat-icon.svg';

const items = [
    { text: 'Templates', icon: 'window-frame-linear', url: 'https://adminmart.com/templates/vuejs/' },
    { text: 'Help', icon: 'question-circle-linear', url: 'https://adminmart.com/support/' },
    { text: 'Hire Us', icon: 'case-round-linear', url: 'https://adminmart.com/hire-us/' }
];

const preview_link = [
    { title: 'VueJs Version', img: icon1, url: 'https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-demo-section' },
    { title: 'Angular Preview', img: icon2, url: 'https://adminmart.com/product/modernize-angular-material-dashboard/?ref=56#product-demo-section' },
    { title: 'Nextjs Preview', img: icon3, url: 'https://adminmart.com/product/modernize-tailwind-nextjs-dashboard-template/?ref=56#product-demo-section' },
    {
        title: 'Reactjs Preview',
        img: icon4,
        url: 'https://adminmart.com/product/modernize-react-mui-dashboard-theme/?ref=56#product-demo-section'
    },
    {
        title: 'Nuxtjs Preview',
        img: icon5,
        url: 'https://adminmart.com/product/modernize-nuxt-js-admin-dashboard/?ref=56#product-demo-section'
    },
    { title: 'Bootstrap Preview', img: icon6, url: 'https://adminmart.com/product/modernize-bootstrap-5-admin-template/?ref=56#product-demo-section' }
];
</script>

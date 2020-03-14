Vue.config.devtools = true;
const app = new Vue({
    el: '#app',
    data: {
        config,
        pageLeft: 0,
        pageRight: 1,
        pages: []
    },
    computed: {
        showLeftPage() {
            return this.pageLeft >= 1 && this.pageLeft <= this.config.pages;
        },
        showRightPage() {
            return this.pageRight >= 1 && this.pageRight <= this.config.pages;
        },
        showNavNext() {
            return this.pageRight < this.config.pages;
        },
        showNavPrev() {
            return this.pageLeft > 1;
        }
    },
    methods: {
        next() {
            this.pageLeft += 2;
            this.pageRight += 2;
        },
        prev() {
            this.pageLeft -= 2;
            this.pageRight -= 2;
        },
        first() {
            this.pageLeft = 0;
            this.pageRight = 1;
        },
        last() {
            if (this.config.pages % 2 == 0) {
                this.pageLeft = this.config.pages;
                this.pageRight = this.config.pages + 1;
            } else {
                this.pageLeft = this.config.pages - 1;
                this.pageRight = this.config.pages;
            }
        }
    }
});
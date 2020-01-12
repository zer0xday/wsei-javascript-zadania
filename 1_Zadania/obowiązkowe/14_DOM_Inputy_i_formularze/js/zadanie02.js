document.addEventListener('DOMContentLoaded', () => {
    class SelectManager {
        constructor() {
            this.form = document.querySelector('form');
            this.select = document.querySelector('select');
            this.submit = document.querySelector('button.btn-primary');
            this.images = {
                apple: document.querySelector('img[alt="Apple"]'),
                ubuntu: document.querySelector('img[alt="Ubuntu"]'),
                windows: document.querySelector('img[alt="Windows"]')
            };
        }

        getSelectedOption(select) {
            return select.value;
        }

        getFirstImage() {
            const { select, images } = this;
            const imageName = this.getImageName(select.value);

            this.showProperImage(imageName);
        }

        showProperImage(imageName) {
            const { images } = this;

            for (let img in images) {
                if (img === imageName) {
                    images[img].style.display = 'block';
                } else {
                    images[img].style.display = 'none';
                }
            }
        }

        getImageName(option) {
            switch(option) {
                case 'Os X':
                    return 'apple';

                case 'Ubuntu':
                    return 'ubuntu';

                case 'Windows':
                    return 'windows';

                default: return;
            };
        }

        selectObserver() {
            const { select } = this;

            select.addEventListener('change', () => {
                const selectedOption = this.getSelectedOption(select);
                const imageName = this.getImageName(selectedOption);
                
                this.showProperImage(imageName);
            });
        }

        init() {
            this.getFirstImage();
            this.selectObserver();
        }
    }

    const selectManager = new SelectManager;
    selectManager.init();
});
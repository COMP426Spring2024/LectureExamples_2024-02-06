window.addEventListener('load', function () {
    document.querySelectorAll('div').forEach((d) => {
        d.borderFlag = false;
        d.addEventListener('click', function (e) {
            if (!this.borderFlag) {
                this.style.borderStyle = 'solid';
                this.style.borderWidth = '5px';
                this.style.borderColor = 'black';
                this.borderFlag = true;
            } else {
                this.style.borderStyle = '';
                this.style.borderWidth = '';
                this.style.borderColor = '';
                this.borderFlag = false;
            }
            e.stopPropagation();
        });
    });
});

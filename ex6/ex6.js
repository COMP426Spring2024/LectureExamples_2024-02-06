window.addEventListener('load', function () {
    document.querySelector("#d1").borderFlag = false;
    document.querySelector("#d2").borderFlag = false;
    document.querySelector("#d3").borderFlag = false;
    document.querySelector("#d4").borderFlag = false;

    document.querySelectorAll('div').forEach((d) => {
        d.addEventListener('click', function (e) {
            alert('target.id: ' + e.target.id + "\n" +
                'currentTarget.id: ' + e.currentTarget.id);
            if (!this.borderFlag) {
                this.style.borderStyle = 'solid';
                this.style.borderWidth = '5px';
                this.style.borderColor = 'black';
                this.borderFlag = true;
            } else {
                this.style.borderStyle = null;
                this.style.borderWidth = null;
                this.style.borderColor = null;
                this.borderFlag = false;
            }
        });
    });
});


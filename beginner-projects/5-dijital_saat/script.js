setInterval(
    function zaman()
    {
        let hour = document.getElementById('hour');
        let minute = document.getElementById('minute');
        let second = document.getElementById('second');

        let h = new Date().getHours(); /* parantezleri unutma */
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s; 
    },1000
)

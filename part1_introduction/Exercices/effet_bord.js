
const log = {
    count : 100,
    save: function () {
        'use strict';
        console.log(this.count);
    }
}

// bonne réponse
setTimeout(() => log.save(), 500);

// texter son code dans un autre scope
(function() {
    const log = {
        count : 100,
        save:  () => {
            'use strict';
            console.log(this.count);
        }
    }
    
    setTimeout(log.save, 500);
})();

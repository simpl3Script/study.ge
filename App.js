import main from './js/math.js';
import funcs from './js/main.js';

fetch('../data/math.json')
.then(res => res.json())
.then(data => {
    main(data);
    funcs();
})
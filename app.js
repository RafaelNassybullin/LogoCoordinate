const animeBlock = document.querySelector('.anime-block'),
    forhere = document.querySelector('.for-here'),
    up = document.querySelector('.up');

let tl = new TimelineMax({onComplete: completeAnim});

let c = MotionPathPlugin.getRelativePosition(animeBlock,
    forhere, [0.5, 0.5], [0.5, 0.5])

tl.from(up, {duration: 0.4, y: '100%', delay: 0.4})
    .from(animeBlock, {duration: 0.9, scale: '3', delay: 0.2})
    .to(animeBlock, {x: '+=' + c.x, y: '+=' + c.y, duration: 1.5, delay: 0.2})
    .to(animeBlock, {duration: 0.3, delay: 0, border: '3px solid #ffffff', color: 'white', background: 'darkred'})
    .to(forhere, 0.5, {style: {position: 'unset'}})
    .to(animeBlock, 0, {style: {transform: 'translate(0,0)'}})

function completeAnim() {
    animeBlock.classList.add('_done')
}


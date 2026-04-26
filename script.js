/* ─────────────────────────────────────────────────────────
   CURSEUR
───────────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
}, { passive: true });

/* ─────────────────────────────────────────────────────────
   DÉTECTION MOBILE
───────────────────────────────────────────────────────── */
const isMobile = window.innerWidth <= 600;

/* ─────────────────────────────────────────────────────────
   DONNÉES PORTFOLIO
───────────────────────────────────────────────────────── */
const portfolioProjects = [

    {
        year: '2026',
        title: 'Heure.Fatale exhibition',
        location: 'Graphic design',
        desc: "Rooted in mail art and independent publishing, the visual identity for Heure.Fatale draws from the Écart collective's stamp archive, blending administrative codes with a playful spirit. In dialogue with MAMCO Geneva and HEAD.",
        imgs: ['images/image2.jpg', 'images/tampon2.jpg', 'images/OpenCall.jpg'],
    },

    {
        year: '2026',
        title: 'Hybrid Imagery Research',
        location: 'Creative coding',
        desc: ' Built on an open-source p5.js framework, this programmable poster tool lets you paint with the mouse across swappable images, generating an endless variety of graphic compositions',
        noGap: true,
        imgGroups: [
            ['images/poster20.jpg'],
            ['images/re.jpg'],
            ['images/Programe4.gif'],
        ],
    },

    {
        year: '2025',
        title: 'UN-KRISTMAS',
        location: 'Graphic design',
        desc: 'Event poster for the UN-KRISTMAS party for Kluster collective. <a href="https://www.instagram.com/p/DCmj7qyAj4M/?img_index=1" target="_blank" rel="noopener" style="color: #ff00ff; font-weight: bold;">@kluster_collectif</a>',
        imgs: ['images/image1.jpg', 'images/image3.jpg'],
    },

    {
        year: '2025',
        title: 'Marateuf Festival, Second Edition',
        location: 'Graphic design',
        desc: 'Logo for Marateuf Festival, produced as an ephemeral tattoo printed in the format of a Malabar bubble gum transfer.',
        imgs: ['images/image10.jpg'],
    },

    {
        year: '2025',
        title: 'Deviant Agency',
        location: 'Graphic design',
        desc: "Recruitment teaser designed for Deviant Agency's RP scouting campaign.",
        imgs: ['images/RP.jpg'],
    },


    {
        year: '2025',
        title: 'Slow Down Baby, You Doing Fine',
        location: 'Graphic design',
        desc: 'New Year poster printed in limited edition for the festival P-A-G-E-S, Contemporary Print & Art Book Fair, Geneva.',
        imgs: ['images/Posteriso1.jpg', 'images/Posteriso2.jpg', 'images/Posteriso3.jpg'],
    },

    {
        year: '2025',
        title: 'Once Upon a Title',
        location: 'Web Design & Development',
        desc: 'Once Upon a Title is a fun and interactive journey through the history of cinema titles. Explore a selection of 315 film title designs, across time and color similarity. <a href="https://onceuponatitle.com/" target="_blank" rel="noopener" style="color: #ff00ff; font-weight: bold;">onceuponatitle.com ↗</a>',
        noGap: true,
        imgGroups: [
            ['images/Cd.gif'],
            ['images/clip.gif'],
        ],
    },

    {
        year: '2024',
        title: 'Marateuf Festival, First Edition',
        location: 'Graphic Design',
        desc: 'Full visual identity for the first edition of Marateuf Festival — logo, stickers, posters, flyers, and social media assets.',
        noGap: true,
        imgGroups: [
            ['images/Marateuf2.png', 'images/Marateuf.png'],
            ['images/mara2.gif'],
        ],
    },

    {
        year: '2023',
        title: 'Long Distance Fanzine (1–4)',
        location: 'Publication, Graphic Design',
        desc: 'A self-initiated series of four fanzines made during the Covid pandemic, exploring long-distance relationships through image, text, and found material. In collaboration with several artists.',
        noGap: true,
        imgGroups: [
            ['images/poster12.jpg'],
            ['images/fanzine2.jpg'],
            ['images/poster15.jpg'],
        ],
    },

    {
        year: '2022',
        title: 'Programming Posters',
        location: 'Creative Coding',
        desc: 'A custom-built generative tool for composing unique printable posters from a corpus of exhibition images. Built in Processing, an open-source environment, each output is assembled and scaled algorithmically, turning the poster into a data-driven graphic object.',
        imgs: ['images/poster19.jpg'],
    },


];

/* ─────────────────────────────────────────────────────────
   NAVIGATION VERTICALE — 3 pages
───────────────────────────────────────────────────────── */
const wrapper   = document.getElementById('wrapper');
const arrowDown = document.getElementById('arrow-down');
const arrowUp   = document.getElementById('arrow-up');
const p2Scroll  = document.getElementById('p2-scroll');
const labelDown = arrowDown.querySelector('.arrow-label');
const labelUp   = arrowUp.querySelector('.arrow-label');

let currentPage = 1;
document.body.classList.add('on-page1');

const labelsDown = {
    1: 'p<br>o<br>r<br>t<br>f<br>o<br>l<br>i<br>o',
    2: 'g<br>a<br>l<br>l<br>e<br>r<br>y',
};
const labelsUp = {
    2: 'b<br>a<br>c<br>k',
    3: 'h<br>o<br>m<br>e',
};

function goToPage(page) {
    const previousPage = currentPage;
    wrapper.classList.remove('page-2', 'page-3');
    document.body.classList.remove('on-page1', 'on-page2', 'on-page3');

    currentPage = page;
    document.body.classList.add('on-page' + page);

    if (page === 2) {
        wrapper.classList.add('page-2');
        if (previousPage === 1) p2Scroll.scrollTop = 0;
    } else if (page === 3) {
        wrapper.classList.add('page-3');
    }

    labelDown.innerHTML = labelsDown[page] || '';
    labelUp.innerHTML   = labelsUp[page]   || '';
}

const maxPage = isMobile ? 2 : 3;

arrowDown.addEventListener('click', () => { if (currentPage < maxPage) goToPage(currentPage + 1); });
arrowUp.addEventListener('click',   () => { if (currentPage > 1) goToPage(currentPage - 1); });
document.getElementById('selected-works-btn').addEventListener('click', () => goToPage(2));

/* ─────────────────────────────────────────────────────────
   SCROLL MOLETTE
───────────────────────────────────────────────────────── */
let isTransitioning = false;

document.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isTransitioning) return;

    if (currentPage === 1 && e.deltaY > 0) {
        isTransitioning = true;
        goToPage(2);
        setTimeout(() => {
            p2Scroll.scrollTop = 0;
            isTransitioning = false;
        }, 1100);
        return;
    }

    if (currentPage === 2) {
        if (e.deltaY < 0 && p2Scroll.scrollTop === 0) {
            isTransitioning = true;
            goToPage(1);
            setTimeout(() => { isTransitioning = false; }, 1100);
            return;
        }
        if (!isMobile && e.deltaY > 0 && p2Scroll.scrollTop + p2Scroll.clientHeight >= p2Scroll.scrollHeight - 2) {
            isTransitioning = true;
            goToPage(3);
            setTimeout(() => { isTransitioning = false; }, 1100);
            return;
        }
        p2Scroll.scrollTop += e.deltaY;
        return;
    }

    if (currentPage === 3 && e.deltaY < 0) {
        isTransitioning = true;
        goToPage(2);
        setTimeout(() => { isTransitioning = false; }, 1100);
        return;
    }
}, { passive: false });

/* ─────────────────────────────────────────────────────────
   TOUCH — blocage page 1
───────────────────────────────────────────────────────── */
document.addEventListener('touchmove', (e) => {
    if (currentPage === 1) {
        if (!e.target.closest('#bio-overlay') && !e.target.closest('.arrow-btn')) {
            e.preventDefault();
        }
    }
}, { passive: false });

/* ─────────────────────────────────────────────────────────
   PAGE 1 — CANVAS TRAIL
───────────────────────────────────────────────────────── */
const canvas = document.getElementById('drawer');
const ctx    = canvas.getContext('2d');

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = window.innerWidth  + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
}
resizeCanvas();

let aimX = window.innerWidth / 2, aimY = window.innerHeight / 2;
let posX = window.innerWidth / 2, posY = window.innerHeight / 2;
let imgIndex = 0;
let lastDrawX = null, lastDrawY = null;

const imgH = isMobile ? 160 : 300;

const imagesData = Array.from({ length: 30 }, (_, i) => {
    const image = new Image();
    image.src = `images/poster${i + 1}.jpg`;
    const obj = { image, width: imgH / Math.sqrt(2), height: imgH };
    image.addEventListener('load', () => {
        const ratio = image.naturalWidth / image.naturalHeight;
        obj.height = imgH;
        obj.width  = imgH * ratio;
        if (ratio > 1) { obj.width *= 0.72; obj.height *= 0.72; }
    });
    return obj;
}).sort(() => Math.random() - 0.5);

const p15 = imagesData.findIndex(o => o.image.src.includes('poster15'));
if (p15 > 0) imagesData.unshift(imagesData.splice(p15, 1)[0]);

const STAMP_LIFETIME = 5000;
const drawnStamps    = [];

function clearCanvas() {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function redrawAll() {
    clearCanvas();
    for (const s of drawnStamps) ctx.drawImage(s.image, s.x, s.y, s.w, s.h);
}

function reshuffleWithP15() {
    imagesData.sort(() => Math.random() - 0.5);
    const idx = imagesData.findIndex(o => o.image.src.includes('poster15'));
    if (idx > 0) imagesData.unshift(imagesData.splice(idx, 1)[0]);
}

document.addEventListener('mousemove', (e) => {
    if (currentPage !== 1) return;
    aimX = e.clientX; aimY = e.clientY;
}, { passive: true });

window.addEventListener('click', (e) => {
    if (e.target.closest('.arrow-btn'))     return;
    if (e.target.closest('.infos-trigger')) return;
    if (currentPage !== 1)                  return;
    if (bioOpen) {
        closeBio();
        imgIndex = (imgIndex + 1) % imagesData.length;
        lastDrawX = null; lastDrawY = null;
        return;
    }
    if (e.target.closest('#bio-overlay')) return;
    imgIndex = (imgIndex + 1) % imagesData.length;
    if (imgIndex === 0) reshuffleWithP15();
    lastDrawX = null; lastDrawY = null;
});

document.addEventListener('touchstart', (e) => {
    if (e.target.closest('.arrow-btn')) return;
    if (e.target.closest('.infos-trigger')) return;
    if (e.target.closest('#bio-overlay')) return;
    if (currentPage !== 1) return;
    const t = e.touches[0];
    aimX = t.clientX; aimY = t.clientY;
    posX = t.clientX; posY = t.clientY;
    touchMoved = false;
    if (bioOpen) { closeBio(); lastDrawX = null; lastDrawY = null; }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (currentPage !== 1) return;
    const t = e.touches[0];
    aimX = t.clientX; aimY = t.clientY;
    touchMoved = true;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    if (e.target.closest('.arrow-btn')) return;
    if (e.target.closest('.infos-trigger')) return;
    if (e.target.closest('#bio-overlay')) return;
    if (currentPage !== 1) return;
    if (bioOpen) return;
    if (touchMoved) {
        imgIndex = (imgIndex + 1) % imagesData.length;
        if (imgIndex === 0) reshuffleWithP15();
        lastDrawX = null; lastDrawY = null;
    }
    touchMoved = false;
}, { passive: true });

(function drawLoop() {
    requestAnimationFrame(drawLoop);
    if (currentPage !== 1) return;

    const now = Date.now();
    let changed = false;
    while (drawnStamps.length > 0 && now - drawnStamps[0].timestamp > STAMP_LIFETIME) {
        drawnStamps.shift(); changed = true;
    }
    if (changed) redrawAll();

    posX += (aimX - posX) * 0.18;
    posY += (aimY - posY) * 0.18;

    const dx = lastDrawX === null ? 1 : posX - lastDrawX;
    const dy = lastDrawY === null ? 1 : posY - lastDrawY;

    if (dx * dx + dy * dy > 0.5) {
        const obj = imagesData[imgIndex];
        if (obj.image.complete && obj.image.naturalWidth > 0) {
            const x = posX - obj.width  / 2;
            const y = posY - obj.height / 2;
            ctx.drawImage(obj.image, x, y, obj.width, obj.height);
            drawnStamps.push({ image: obj.image, x, y, w: obj.width, h: obj.height, timestamp: now });
        }
        lastDrawX = posX; lastDrawY = posY;
    }
})();
/* ─────────────────────────────────────────────────────────
   BIO
───────────────────────────────────────────────────────── */
const bioContentDesktop = `Graphic & interactive designer.
Paris × Geneva, HEAD.
Print-trained. Drawn to edges.
Branding, editorial, identities, creative coding.
Typography and images that stick.
Available everywhere. Open to work.

★ Click anywhere to continue ★`;

const bioContentMobile = `Graphic & interactive designer.
Paris × Geneva, HEAD.
Print-trained. Drawn to edges.
Branding, editorial, identities, creative coding.
Typography and images that stick.
Available everywhere. Open to work.

★ Click anywhere to continue ★`;

const bioContent   = isMobile ? bioContentMobile : bioContentDesktop;
const bioOverlay   = document.getElementById('bio-overlay');
const bioEl        = document.getElementById('bio-text');
const infosBtnDesk = document.querySelector('#infos-btn .infos-trigger');
const infosBtnMob  = document.querySelector('#infos-btn-mobile .infos-trigger');

let bioOpen = false, bioTimer = null, bioIndex = 0, bioFadeOut = null;

function typeBio(onDone) {
    if (bioIndex < bioContent.length) {
        bioEl.textContent += bioContent[bioIndex++];
        bioTimer = setTimeout(() => typeBio(onDone), 16);
    } else if (onDone) onDone();
}

function openBio(autoClose) {
    bioOpen = true; bioIndex = 0; bioEl.textContent = '';
    clearTimeout(bioTimer); clearTimeout(bioFadeOut);
    clearCanvas(); drawnStamps.length = 0;
    bioOverlay.classList.add('visible');
    typeBio(() => { if (autoClose) bioFadeOut = setTimeout(closeBio, 6000); });
}

function closeBio() {
    bioOpen = false;
    clearTimeout(bioTimer); clearTimeout(bioFadeOut);
    bioOverlay.classList.remove('visible');
}

function toggleBio() { bioOpen ? closeBio() : openBio(false); }

infosBtnDesk.addEventListener('click', (e) => { e.stopPropagation(); toggleBio(); });
infosBtnMob.addEventListener('click',  (e) => { e.stopPropagation(); toggleBio(); });

bioOverlay.addEventListener('click', () => {
    closeBio();
    imgIndex = (imgIndex + 1) % imagesData.length;
    lastDrawX = null; lastDrawY = null;
});

bioOverlay.addEventListener('touchend', (e) => {
    e.preventDefault();
    closeBio();
    imgIndex = (imgIndex + 1) % imagesData.length;
    lastDrawX = null; lastDrawY = null;
}, { passive: false });

document.addEventListener('DOMContentLoaded', () => openBio(false));

/* ─────────────────────────────────────────────────────────
   PAGE 2 — RENDU PORTFOLIO
───────────────────────────────────────────────────────── */
let scrollTimer = null;

p2Scroll.addEventListener('scroll', () => {
    arrowDown.style.opacity = arrowUp.style.opacity = '0';
    arrowDown.style.pointerEvents = arrowUp.style.pointerEvents = 'none';
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        arrowDown.style.opacity = arrowUp.style.opacity = '';
        arrowDown.style.pointerEvents = arrowUp.style.pointerEvents = '';
    }, 600);
}, { passive: true });

/* ── Construit un bloc vidéo YouTube ── */
function buildVideoBlock(youtubeUrl) {
    const match = youtubeUrl.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
    const videoId = match ? match[1] : '';

    const container = document.createElement('div');
    container.className = 'p2-entry-img';
    Object.assign(container.style, {
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
        paddingBottom: '56.25%',
    });

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    Object.assign(iframe.style, {
        position: 'absolute',
        top: '0', left: '0',
        width: '100%', height: '100%',
        border: 'none',
    });

    container.appendChild(iframe);
    return container;
}

/* ── Construit un bloc image (carrousel) ── */
function buildImgBlock(imgs, title, autoSlide = false, slideMode = 'clip') {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'p2-entry-img';
    Object.assign(imgContainer.style, {
        position: 'relative', overflow: 'hidden', background: '#fff',
        cursor: imgs.length > 1 ? 'pointer' : 'default',
    });

    const spacer = document.createElement('div');
    Object.assign(spacer.style, { width: '100%', paddingBottom: '140%', display: 'block' });
    imgContainer.appendChild(spacer);

    const imgEls = [];
    imgs.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src; img.alt = title; img.loading = 'lazy';
        Object.assign(img.style, {
            position: 'absolute', top: '0', left: '0',
            width: '100%', height: '100%',
            objectFit: 'contain', objectPosition: 'top center',
            background: '#fff', zIndex: i === 0 ? '2' : '1',
            clipPath: 'inset(0% 0% 0% 0%)',
            transform: 'translateX(0%)',
        });
        imgContainer.appendChild(img);
        imgEls.push(img);

        if (i === 0) {
            img.addEventListener('load', () => {
                const ratio = img.naturalWidth / img.naturalHeight;
                spacer.style.paddingBottom = (100 / ratio) + '%';
            });
        }
    });

    let slideNum = null;
    if (imgs.length > 1) {
        slideNum = document.createElement('span');
        slideNum.className = 'p2-slide-num';
        slideNum.textContent = '01/' + String(imgs.length).padStart(2, '0');
        imgContainer.appendChild(slideNum);
    }

    let counter = 0, turning = false;

    function doHorizontalSlide() {
        if (turning) return;
        turning = true;
        const prev = imgEls[counter];
        counter = (counter + 1) % imgEls.length;
        const curr = imgEls[counter];
        curr.style.transition = '';
        curr.style.transform = 'translateX(100%)';
        curr.style.zIndex = '3';
        prev.style.zIndex = '2';
        requestAnimationFrame(() => {
            curr.style.transition = 'transform 1050ms cubic-bezier(0.77, 0, 0.175, 1)';
            prev.style.transition = 'transform 1050ms cubic-bezier(0.77, 0, 0.175, 1)';
            curr.style.transform = 'translateX(0%)';
            prev.style.transform = 'translateX(-100%)';
        });
        if (slideNum) slideNum.textContent = String(counter + 1).padStart(2, '0') + '/' + String(imgEls.length).padStart(2, '0');
        setTimeout(() => {
            prev.style.transition = '';
            prev.style.transform = 'translateX(0%)';
            prev.style.zIndex = '1';
            turning = false;
        }, 1050);
    }

    function doClipSlide() {
        if (turning) return;
        turning = true;
        const prev = imgEls[counter];
        prev.style.transition = 'clip-path linear 1800ms';
        prev.style.clipPath   = 'inset(0% 100% 0% 0%)';
        prev.style.zIndex     = '3';
        counter = (counter + 1) % imgEls.length;
        const curr = imgEls[counter];
        curr.style.transition = '';
        curr.style.clipPath   = 'inset(0% 0% 0% 0%)';
        curr.style.zIndex     = '2';
        if (slideNum) slideNum.textContent = String(counter + 1).padStart(2, '0') + '/' + String(imgEls.length).padStart(2, '0');
        setTimeout(() => {
            prev.style.transition = '';
            prev.style.clipPath   = 'inset(0% 0% 0% 0%)';
            prev.style.zIndex     = '1';
            turning = false;
        }, 1800);
    }

    imgContainer.addEventListener('click', () => {
        if (imgs.length <= 1) return;
        if (slideMode === 'horizontal') doHorizontalSlide();
        else doClipSlide();
    });

    if (slideMode === 'horizontal' && imgs.length > 1) {
        let autoTimer = null;
        const slideDuration = isMobile ? 700 : 1050;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    autoTimer = setTimeout(function slide() {
                        if (turning) { autoTimer = setTimeout(slide, 3500); return; }
                        turning = true;
                        const prev = imgEls[counter];
                        counter = (counter + 1) % imgEls.length;
                        const curr = imgEls[counter];
                        curr.style.transition = '';
                        curr.style.transform = 'translateX(100%)';
                        curr.style.zIndex = '3';
                        prev.style.zIndex = '2';
                        requestAnimationFrame(() => {
                            curr.style.transition = `transform ${slideDuration}ms cubic-bezier(0.77, 0, 0.175, 1)`;
                            prev.style.transition = `transform ${slideDuration}ms cubic-bezier(0.77, 0, 0.175, 1)`;
                            curr.style.transform = 'translateX(0%)';
                            prev.style.transform = 'translateX(-100%)';
                        });
                        if (slideNum) slideNum.textContent = String(counter + 1).padStart(2, '0') + '/' + String(imgEls.length).padStart(2, '0');
                        setTimeout(() => {
                            prev.style.transition = '';
                            prev.style.transform = 'translateX(0%)';
                            prev.style.zIndex = '1';
                            turning = false;
                        }, slideDuration);
                        autoTimer = setTimeout(slide, 3500);
                    }, isMobile ? 2000 : 0);
                } else {
                    clearTimeout(autoTimer);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(imgContainer);
    }

    if (autoSlide && imgs.length > 1) {
        let autoTimer = null;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    autoTimer = setTimeout(function slide() {
                        doClipSlide();
                        autoTimer = setTimeout(slide, 3500);
                    }, 1500);
                } else {
                    clearTimeout(autoTimer);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(imgContainer);
    }

    return imgContainer;
}

/* ── Génère les entrées portfolio ── */
portfolioProjects.forEach((p, index) => {
    const entry = document.createElement('div');
    entry.className = 'p2-entry';

    const imgsWrapper = document.createElement('div');
    imgsWrapper.style.display       = 'flex';
    imgsWrapper.style.flexDirection = 'column';
    imgsWrapper.style.gap = p.noGap ? '0' : '12px';

    if (p.video) {
        imgsWrapper.appendChild(buildVideoBlock(p.video));
    }

    if (p.iframe) {
        const iframeWrapper = document.createElement('div');
        iframeWrapper.className = 'p2-entry-img';
        Object.assign(iframeWrapper.style, {
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            background: '#000',
        });

        const iframe = document.createElement('iframe');
        iframe.src = p.iframe;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('loading', 'lazy');
        Object.assign(iframe.style, {
            position: 'absolute',
            top: '0', left: '0',
            width: '1280px',
            height: '720px',
            border: 'none',
            pointerEvents: 'auto',
            transform: 'scale(var(--iframe-scale))',
            transformOrigin: 'top left',
        });

        const updateScale = () => {
            const wrapperW = iframeWrapper.offsetWidth;
            const scale = wrapperW / 1280;
            iframeWrapper.style.setProperty('--iframe-scale', scale);
            iframeWrapper.style.paddingBottom = (720 * scale) + 'px';
            iframeWrapper.style.height = (720 * scale) + 'px';
        };

        const ro = new ResizeObserver(updateScale);
        ro.observe(iframeWrapper);

        iframeWrapper.appendChild(iframe);
        imgsWrapper.appendChild(iframeWrapper);
    }

    const groups = p.imgGroups ?? (p.imgs ? [p.imgs] : []);
    groups.forEach(imgs => {
        const block = buildImgBlock(imgs, p.title, index === 2, index === 0 ? 'horizontal' : 'clip');
        if (p.noGap) {
            block.style.cssText += 'padding: 4px 0 !important;';
        }
        imgsWrapper.appendChild(block);
    });

    entry.innerHTML = `
        <div class="p2-entry-text">
            <div class="p2-entry-header">
                <span class="p2-entry-symbol star">★</span>
                <span class="p2-entry-title">${p.title}</span>
                <span class="p2-entry-year">${p.year}</span>
            </div>
            <p class="p2-entry-desc">${p.desc}</p>
            <p class="p2-entry-location">${p.location}</p>
        </div>
    `;
    entry.appendChild(imgsWrapper);
    p2Scroll.appendChild(entry);
});

/* ─────────────────────────────────────────────────────────
   PAGE 3 — SALLE EN PERSPECTIVE
───────────────────────────────────────────────────────── */
const framesG = document.getElementById('frames-container');
const svgDefs = document.getElementById('svgDefs');

const GALLERY_POSTERS = [2, 1, 4,];
const POSTER_COUNT    = GALLERY_POSTERS.length;
const RATIO_A2        = Math.sqrt(2);
let W, H, wallW, wallH;
const roomElements = [];

const lineEls = {
    tl: document.getElementById('line-tl'),
    tr: document.getElementById('line-tr'),
    bl: document.getElementById('line-bl'),
    br: document.getElementById('line-br'),
};
const backWall = document.getElementById('back-wall');

function posterSrc(i) { return `images/image${GALLERY_POSTERS[i]}.jpg`; }

function buildRoom() {
    for (let i = 0; i < POSTER_COUNT; i++) {
        const centerImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        centerImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', posterSrc(i));
        centerImg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        framesG.appendChild(centerImg);

        const sides = ['left', 'right'].map(side => {
            const clipId = `clip-${side}-${i}`;
            const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clip.setAttribute('id', clipId);
            const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            clip.appendChild(poly); svgDefs.appendChild(clip);
            const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', posterSrc(i));
            img.setAttribute('preserveAspectRatio', 'none');
            img.setAttribute('clip-path', `url(#${clipId})`);
            framesG.appendChild(img);
            return { img, poly, side };
        });
        roomElements.push({ center: centerImg, sides });
    }
    if (window.innerWidth > 600) attachPreviewListeners();
}

function updateSize() {
    W = window.innerWidth; H = window.innerHeight;
    wallW = W <= 600 ? W * 0.82 : W * 0.45;
    wallH = W <= 600 ? H * 0.28 : H * 0.55;
}

function lerp(a, b, t) { return a + (b - a) * t; }
function pointOnLine(x1, y1, x2, y2, t) { return { x: lerp(x1, x2, t), y: lerp(y1, y2, t) }; }

function renderRoom(offsetX = 0, offsetY = 0) {
    const cx = W / 2 + offsetX, cy = H / 2 + offsetY;
    const L = cx - wallW / 2, R = cx + wallW / 2;
    const T = cy - wallH / 2, B = cy + wallH / 2;

    backWall.setAttribute('x', L); backWall.setAttribute('y', T);
    backWall.setAttribute('width', wallW); backWall.setAttribute('height', wallH);

    const coords = { tl:[0,0,L,T], tr:[W,0,R,T], bl:[0,H,L,B], br:[W,H,R,B] };
    for (const k in coords) {
        const [x1,y1,x2,y2] = coords[k];
        lineEls[k].setAttribute('x1',x1); lineEls[k].setAttribute('y1',y1);
        lineEls[k].setAttribute('x2',x2); lineEls[k].setAttribute('y2',y2);
    }

    const fW = wallW * 0.25, fH = fW * RATIO_A2;
    const gap = (wallW - fW * POSTER_COUNT) / (POSTER_COUNT + 1);

    roomElements.forEach(({ center, sides }, i) => {
        center.setAttribute('x', L + gap + (fW + gap) * i);
        center.setAttribute('y', cy - fH / 2);
        center.setAttribute('width', fW); center.setAttribute('height', fH);

        sides.forEach(({ img, poly, side }) => {
            const tW = W <= 600 ? 0.28 : 0.22, tG = W <= 600 ? 0.04 : 0.08;
            const t1 = 1 - (tG + (tW + tG) * i + tW), t2 = 1 - (tG + (tW + tG) * i);
            const tM = (t1 + t2) / 2;
            const wallHatT = wallH + (H - wallH) * (1 - tM);
            const pH = fW * RATIO_A2 * (wallHatT / wallH);
            const vM = (1 - pH / wallHatT) / 2;
            const xE = side === 'left' ? 0 : W, xW = side === 'left' ? L : R;
            const b1 = pointOnLine(xE,H,xW,B,t1), b2 = pointOnLine(xE,H,xW,B,t2);
            const h1 = pointOnLine(xE,0,xW,T,t1), h2 = pointOnLine(xE,0,xW,T,t2);
            const p1 = pointOnLine(h1.x,h1.y,b1.x,b1.y,vM);
            const p2 = pointOnLine(h2.x,h2.y,b2.x,b2.y,vM);
            const p3 = pointOnLine(h2.x,h2.y,b2.x,b2.y,1-vM);
            const p4 = pointOnLine(h1.x,h1.y,b1.x,b1.y,1-vM);
            poly.setAttribute('points',`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`);
            const minX=Math.min(p1.x,p2.x,p3.x,p4.x), minY=Math.min(p1.y,p2.y,p3.y,p4.y);
            const maxX=Math.max(p1.x,p2.x,p3.x,p4.x), maxY=Math.max(p1.y,p2.y,p3.y,p4.y);
            img.setAttribute('x',minX); img.setAttribute('y',minY);
            img.setAttribute('width',maxX-minX); img.setAttribute('height',maxY-minY);
        });
    });
}

let roomRafPending = false;
let roomOffX = 0, roomOffY = 0;

document.addEventListener('mousemove', (e) => {
    if (currentPage !== 3) return;
    roomOffX = -(e.clientX / W - 0.5) * 200;
    roomOffY = -(e.clientY / H - 0.5) * 200;
    if (!roomRafPending) {
        roomRafPending = true;
        requestAnimationFrame(() => { renderRoom(roomOffX, roomOffY); roomRafPending = false; });
    }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (currentPage !== 3) return;
    const t = e.touches[0];
    roomOffX = -(t.clientX / W - 0.5) * 500;
    roomOffY = -(t.clientY / H - 0.5) * 500;
    if (!roomRafPending) {
        roomRafPending = true;
        requestAnimationFrame(() => { renderRoom(roomOffX, roomOffY); roomRafPending = false; });
    }
}, { passive: true });

window.addEventListener('resize', () => { resizeCanvas(); updateSize(); renderRoom(); }, { passive: true });

buildRoom(); updateSize(); renderRoom();



/* ─────────────────────────────────────────────────────────
   PAGE 3 — PREVIEW POSTER
───────────────────────────────────────────────────────── */
function attachPreviewListeners() {
    const preview    = document.getElementById('poster-preview');
    const previewImg = document.getElementById('poster-preview-img');
    let posterOpen   = false;

    const openPoster  = (src) => { posterOpen=true; previewImg.src=src; preview.classList.add('open'); document.body.classList.add('poster-open'); };
    const closePoster = ()    => { posterOpen=false; preview.classList.remove('open'); document.body.classList.remove('poster-open'); };

    preview.addEventListener('click', () => { if (posterOpen) closePoster(); });
    document.addEventListener('keydown', (e) => { if (e.key==='Escape' && posterOpen) closePoster(); });

    roomElements.forEach(({ center, sides }) => {
        const src = center.getAttributeNS('http://www.w3.org/1999/xlink','href') || center.getAttribute('href');
        [center, ...sides.map(s => s.img)].forEach(img => {
            img.addEventListener('click', (e) => {
                if (currentPage !== 3) return;
                e.stopPropagation();
                posterOpen ? closePoster() : openPoster(src);
            });
        });
    });
}
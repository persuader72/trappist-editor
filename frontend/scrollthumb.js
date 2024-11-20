/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

This file incorporates work covered by the following copyright and permission notice:
Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
*/

const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const imageName = document.querySelector('#imageNameLabel');
const slideCount = slides.length;
const slideHeight = 640;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  const scrolltop = (slideHeight + marginTop) * index;
  slideGallery.scrollTo(0, scrolltop);
  const url = new URL(el.src)
  imageName.value = url.pathname.substring(7);

};

document.querySelector('.thumbnails').innerHTML += 
    [...slides].map((slide, i) => `<div><img src="${slide.querySelector('img').src}" data-id="${i}"></div>`).join('');

document.querySelectorAll('.thumbnails img').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => scrollThumb());


const delImageModal = document.getElementById('delImageModal');
delImageModal.addEventListener('show.bs.modal', event => {
  //const button = event.relatedTarget
  //const recipient = button.getAttribute('data-bs-whatever')
  //const modalTitle = exampleModal.querySelector('.modal-title')
  //modalTitle.textContent = `New message to ${recipient}`
  const delImageModelName = delImageModal.querySelector('#delImageModelName');
  delImageModelName.innerHTML = imageName.value;
})

const delImageModalConfirm = delImageModal.querySelector('#delImageModalConfirm');
delImageModalConfirm.addEventListener('click', () => {
  bootstrap.Modal.getInstance(delImageModal).hide();
  location.href = 'api/v1/image/del?filename=' + imageName.value;
});

scrollThumb();

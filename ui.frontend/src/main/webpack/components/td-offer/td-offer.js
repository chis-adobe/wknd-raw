if (document.readyState !== 'loading') {
  showPanel();
} else {
  document.addEventListener('DOMContentLoaded', function() {
    showPanel();
  });
}

function showPanel() {
  const panel = document.querySelector(".td-offer .cmp-contentfragment");

  if(!panel) {
    return;
  }

  const elements = panel.querySelector(".cmp-contentfragment__elements");
  const headlineEl = elements.querySelector(".cmp-contentfragment__element--headline");
  const detailEl = elements.querySelector(".cmp-contentfragment__element--detail");
  const thumbnailEl = elements.querySelector(".cmp-contentfragment__element--heroImage .cmp-contentfragment__element-value");
  const linkLabelEl = elements.querySelector(".cmp-contentfragment__element--callToAction .cmp-contentfragment__element-value");
  const linkEl = elements.querySelector(".cmp-contentfragment__element--ctaUrl .cmp-contentfragment__element-value");

  const thumbnail = thumbnailEl.innerHTML.trim();
  const linkLabel = linkLabelEl.innerHTML.trim();
  const link = linkEl.innerHTML.trim() + ".html";

  const image = document.createElement("img");
  const cta = document.createElement("a");

  headlineEl.appendChild(detailEl);
  image.src = thumbnail;
  cta.href = link;
  cta.innerHTML = linkLabel;

  elements.append(image);
  elements.append(cta);

  thumbnailEl.remove();
  linkLabelEl.remove();
  linkEl.remove();
}
if (document.readyState !== 'loading') {
  showPanel();
} else {
  document.addEventListener('DOMContentLoaded', function() {
    showPanel();
  });
}

function showPanel() {
  const panel = document.querySelector(".delta-offer .cmp-contentfragment");

  if(!panel) {
    return;
  }

  const elements = panel.querySelector(".cmp-contentfragment__elements")
  const thumbnailEl = elements.querySelector(".cmp-contentfragment__element--cityimage .cmp-contentfragment__element-value");
  const linkLabelEl = elements.querySelector(".cmp-contentfragment__element--linkLabel .cmp-contentfragment__element-value");
  const linkEl = elements.querySelector(".cmp-contentfragment__element--link .cmp-contentfragment__element-value");

  const thumbnail = thumbnailEl.innerHTML.trim();
  const linkLabel = linkLabelEl.innerHTML.trim();
  const link = linkEl.innerHTML.trim() + ".html";

  const image = document.createElement("img");
  const cta = document.createElement("a");

  image.src = thumbnail;
  cta.href = link;
  cta.innerHTML = linkLabel;

  panel.append(image);
  elements.append(cta);

  thumbnailEl.remove();
  linkLabelEl.remove();
  linkEl.remove();
}
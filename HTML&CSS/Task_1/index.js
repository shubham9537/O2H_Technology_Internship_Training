// const defaults = {
//   html: `<!-- Welcome to CodePlayground -->\n<div style="padding:20px; text-align:center">\n  <h2>Hello, world!</h2>\n  <p>Edit the HTML, CSS and JS panels and click Run.</p>\n</div>`,
//   css: `body{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;margin:0} h2{color:#2563eb}`,
//   js: `console.log('Hello from preview');`
// };

// function qs(id) 
// { 
//   return document.getElementById(id) 

// }

// const htmlCode = qs('htmlCode');
// const cssCode = qs('cssCode');
// const jsCode = qs('jsCode');
// const runBtn = qs('runBtn');
// const resetBtn = qs('resetBtn');
// const saveBtn = qs('saveBtn');
// const loadBtn = qs('loadBtn');
// const darkToggle = qs('darkToggle');
// const preview = qs('preview');
// const resizer = qs('resizer');
// const workspace = document.querySelector('.workspace');
// const editors = document.querySelector('.editors');

// function buildSrcDoc() {
//   const html = htmlCode.value;
//   const css = `<style>${cssCode.value}</style>`;
//   const js = `<script>${jsCode.value}\n//# sourceURL=preview.js<\/script>`;
//   return `<!doctype html><html><head><meta charset="utf-8">${css}</head><body>${html}${js}</body></html>`;
// }


// function updatePreview() {
//   preview.srcdoc = buildSrcDoc();
// }

// function debounce(fn, ms) {
//   let t;
//   return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms) }
// }

// function saveToStorage() {
//   const payload = { html: htmlCode.value, css: cssCode.value, js: jsCode.value };
//   localStorage.setItem('codeplayground', JSON.stringify(payload));
//   saveBtn.textContent = 'Saved';
//   setTimeout(() => saveBtn.textContent = 'Save', 900);
// }

// function loadFromStorage() {
//   const raw = localStorage.getItem('codeplayground');
//   if (!raw) return;
//   try {
//     const obj = JSON.parse(raw);
//     htmlCode.value = obj.html || defaults.html;
//     cssCode.value = obj.css || defaults.css;
//     jsCode.value = obj.js || defaults.js;
//     updatePreview();
//   } catch (e) { console.warn('Failed to load', e) }
// }

// function resetAll() {
//   htmlCode.value = defaults.html;
//   cssCode.value = defaults.css;
//   jsCode.value = defaults.js;
//   updatePreview();
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const saved = localStorage.getItem('codeplayground');
//   if (saved) loadFromStorage(); else resetAll();

//   const darkPref = localStorage.getItem('codeplayground-dark') === '1';
//   darkToggle.checked = darkPref;
//   document.body.classList.toggle('dark', darkPref);

//   runBtn.addEventListener('click', updatePreview);
//   resetBtn.addEventListener('click', () => { resetAll(); localStorage.removeItem('codeplayground'); });
//   saveBtn.addEventListener('click', saveToStorage);
//   loadBtn.addEventListener('click', loadFromStorage);

//   darkToggle.addEventListener('change', (e) => {
//     document.body.classList.toggle('dark', e.target.checked);
//     localStorage.setItem('codeplayground-dark', e.target.checked ? '1' : '0');
//   });

 
//   const handler = debounce(updatePreview, 600);
//   [htmlCode, cssCode, jsCode].forEach(el => el.addEventListener('input', handler));

  
//   let dragging = false;
//   resizer.addEventListener('mousedown', (e) => {
//     dragging = true; document.body.style.userSelect = 'none';
//   });
//   document.addEventListener('mousemove', (e) => {
//     if (!dragging) return;
//     const rect = workspace.getBoundingClientRect();
//     const min = 260; 
//     const max = rect.width - 200;
//     let newWidth = e.clientX - rect.left;
//     if (newWidth < min) newWidth = min;
//     if (newWidth > max) newWidth = max;
//     editors.style.flexBasis = newWidth + 'px';
//   });
//   document.addEventListener('mouseup', () => { if (dragging) { dragging = false; document.body.style.userSelect = 'auto' } });

// });



/*
CodePlayground: Build Your Own Interactive HTML, CSS, & JS Editor

Objective
Create a simple web-based code editor and live previewer for HTML, CSS, and JavaScript, allowing users to write, edit, and see the output of their code instantly. This project will help beginners understand the basics of DOM manipulation, iframe usage, and the interaction between HTML, CSS, and JavaScript.

Features
Code Editor Panels:
Separate text areas for HTML, CSS, and JavaScript code inputs.
Live Preview:
An embedded iframe to display the output of the written code in real-time.
Run Button:
A button to execute and update the preview output.
Reset Button:
Clear all code areas to their default templates.
Basic Styling:
A simple and attractive layout using CSS.

Technologies Required
HTML: For the basic structure of the project.
CSS: To style the editor layout and make it visually appealing.
JavaScript: To handle the dynamic functionality of the editor.

Bonus Enhancements
Save Code:
Add functionality to save and reload code snippets using local storage.
Dark Mode:
Implement a toggle for light and dark themes.
Resizable Panels:
Allow users to resize the editor and preview sections.

Final Output:
A working, beginner-friendly, and visually appealing code editor where users can write and preview their HTML, CSS, and JavaScript code instantly.

*/


const defaultData = {
  html: `<!-- Welcome to CodePlayground -->
<div style="padding:20px; text-align:center">
  <h2>Hello, world!</h2>
  <p>Edit the HTML, CSS and JS panels and click Run.</p>
</div>`,

  css: `body{
  font-family: Inter, system-ui, sans-serif;
  margin:0;
}
h2{color:#2563eb}`,

  js: `console.log("Hello from preview");`
};

function get(id) {
  return document.getElementById(id);
}

const htmlBox = get("htmlCode");
const cssBox = get("cssCode");
const jsBox = get("jsCode");
const runBtn = get("runBtn");
const resetBtn = get("resetBtn");
const saveBtn = get("saveBtn");
const loadBtn = get("loadBtn");
const darkToggle = get("darkToggle");
const previewFrame = get("preview");
const resizer = get("resizer");

const workspace = document.querySelector(".workspace");
const editors = document.querySelector(".editors");


function getPreviewContent() {
  const html = htmlBox.value;
  const css = "<style>" + cssBox.value + "</style>";
  const js = "<script>" + jsBox.value + "<\/script>";

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
  </html>
  `;
}

function runCode() {
  previewFrame.srcdoc = getPreviewContent();
}


function debounce(fn, time) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, time);
  };
}


function saveCode() {
  const data = {
    html: htmlBox.value,
    css: cssBox.value,
    js: jsBox.value
  };

  localStorage.setItem("codeplayground", JSON.stringify(data));

  saveBtn.innerText = "Saved";
  setTimeout(() => saveBtn.innerText = "Save", 800);
}



function loadCode() {
  const saved = localStorage.getItem("codeplayground");
  if (!saved) return;

  try {
    const data = JSON.parse(saved);
    htmlBox.value = data.html || defaultData.html;
    cssBox.value = data.css || defaultData.css;
    jsBox.value = data.js || defaultData.js;
    runCode();
  } catch (err) {
    console.log("Load failed");
  }
}



function resetEditor() {
  htmlBox.value = defaultData.html;
  cssBox.value = defaultData.css;
  jsBox.value = defaultData.js;
  runCode();
}



document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("codeplayground")) {
    loadCode();
  } else {
    resetEditor();
  }

  const dark = localStorage.getItem("darkMode") === "1";
  darkToggle.checked = dark;
  document.body.classList.toggle("dark", dark);

  runBtn.addEventListener("click", runCode);
  resetBtn.addEventListener("click", () => {
    resetEditor();
    localStorage.removeItem("codeplayground");
  });

  saveBtn.addEventListener("click", saveCode);
  loadBtn.addEventListener("click", loadCode);

  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", darkToggle.checked);
    localStorage.setItem("darkMode", darkToggle.checked ? "1" : "0");
  });

  const delayedRun = debounce(runCode, 500);
  htmlBox.addEventListener("input", delayedRun);
  cssBox.addEventListener("input", delayedRun);
  jsBox.addEventListener("input", delayedRun);


 
  let isDragging = false;

  resizer.addEventListener("mousedown", () => {
    isDragging = true;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const box = workspace.getBoundingClientRect();
    let newWidth = e.clientX - box.left;

    if (newWidth < 250) newWidth = 250;
    if (newWidth > box.width - 200) newWidth = box.width - 200;

    editors.style.flexBasis = newWidth + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });

});

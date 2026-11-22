/* ===== Lesson data (one set per tutorial page) ===== */
const DATA = {

/* ---------- HTML tutorial ---------- */
html: [
{id:"html-home",t:"HTML home",h:"HTML tutorial",i:["HTML is the standard markup language for web pages.","With HTML you can create your own website.","HTML is easy to learn. You’ll enjoy it!"],et:"Easy learning with “Try it yourself”",s:"Edit the HTML code in the editor and see the result right away:",c:`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>

  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`,x:["Fill in the missing closing tag for the heading:","<h1>Welcome to HowtoCode","","</h1>"]},
{id:"html-elements",t:"HTML elements",h:"HTML elements",i:["An HTML element is a start tag, some content, and an end tag.","The element is everything from the start tag to the end tag."],et:"Nested HTML elements",s:"Elements can be nested, which means elements can contain other elements.",c:`<!DOCTYPE html>
<html>
<body>

  <h2>Nested Elements Example</h2>
  <p>This paragraph contains <strong>bold text</strong> and <em>italic text</em>.</p>

</body>
</html>`,x:["Complete the paragraph tag:","<p>Hello World!","","</p>"]},
{id:"html-attributes",t:"HTML attributes",h:"HTML attributes",i:["Attributes give elements extra information.","They always go in the start tag, as name=“value” pairs."],et:"The style attribute",s:"The style attribute sets color, size and more:",c:`<!DOCTYPE html>
<html>
<body>

  <h2 style="color:#8a63e8">A purple heading</h2>
  <p style="background:#fff1e8;padding:8px">A peach paragraph.</p>

</body>
</html>`,x:["Which attribute adds inline CSS to an element?","<p ",'="color:red">Red text</p>',"style"]},
{id:"html-links",t:"HTML links",h:"HTML links",i:["Links are found in nearly all web pages.","Links let users click their way from page to page."],et:"HTML links: syntax",s:"The <a> tag defines a hyperlink. The href attribute holds the destination.",c:`<!DOCTYPE html>
<html>
<body>

  <h2>HTML Links</h2>
  <p>Click the link below:</p>
  <a href="https://example.com" target="_blank">Visit Example.com</a>

</body>
</html>`,x:["Add the attribute name for the link destination:","<a ",'="https://example.com">Visit</a>',"href"]},
{id:"html-headings",t:"HTML headings",h:"HTML headings",i:["Headings run from <h1> (most important) to <h6> (least important).","Use them to outline your page, not just to make text big."],et:"Six heading levels",s:"Compare all six levels:",c:`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`,x:["Which tag is the second-level heading?","<",">Section</h2>","h2"]},
{id:"html-images",t:"HTML images",h:"HTML images",i:["The <img> tag embeds an image.","It needs src for the file and alt for a text description."],et:"Add an image",s:"This one uses an inline SVG, so it works anywhere:",c:`<img alt="A purple circle" width="120" height="120"
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Ccircle cx='5' cy='5' r='5' fill='%238a63e8'/%3E%3C/svg%3E">`,x:["Which attribute describes an image for screen readers?",'<img src="cat.jpg" ','="A sleeping cat">',"alt"]},
{id:"html-lists",t:"HTML lists",h:"HTML lists",i:["Lists group related items together.","Use <ul> for bullets and <ol> for numbers."],et:"Unordered and ordered lists",s:"Each item goes inside an <li> tag:",c:`<h3>Shopping list</h3>
<ul>
  <li>Milk</li>
  <li>Bread</li>
</ul>
<h3>Steps</h3>
<ol>
  <li>Write code</li>
  <li>Run it</li>
</ol>`,x:["Which tag marks a single list item?","<",">Milk</li>","li"]},
{id:"html-forms",t:"HTML forms",h:"HTML forms",i:["Forms collect input from visitors.","The <input> tag creates text boxes, checkboxes and more."],et:"A simple form",s:"The type attribute decides what kind of input you get:",c:`<form>
  <label>Name: <input type="text" placeholder="Your name"></label>
  <br><br>
  <label><input type="checkbox"> I love code</label>
  <br><br>
  <button type="button">Send</button>
</form>`,x:["Which tag creates a text box or checkbox?","<",' type="text">',"input"]}
],

/* ---------- CSS tutorial ---------- */
css: [
{id:"css-home",t:"CSS home",h:"CSS tutorial",i:["CSS is the language we use to style a web page.","It controls colors, fonts, spacing and layout."],et:"Your first style",s:"Change the colors and press Run to see them update:",c:`<style>
  body { font-family: sans-serif; padding: 20px; }
  h1 { color: #8a63e8; }
  p { color: gray; }
</style>

<h1>Hello, CSS!</h1>
<p>CSS makes pages beautiful.</p>`,x:["Fill in the property that sets text color:","h1 { ",": purple; }","color"]},
{id:"css-selectors",t:"CSS selectors",h:"CSS selectors",i:["A selector chooses which elements to style.","You can pick by tag, by class, or by id."],et:"Tag and class selectors",s:"A class selector starts with a dot, and you add it with the class attribute:",c:`<style>
  p { color: #444; }
  .big { font-size: 24px; color: tomato; }
</style>

<p>A normal paragraph.</p>
<p class="big">A big paragraph.</p>`,x:["Which symbol starts a class selector?","","card { color: red; }","."]},
{id:"css-colors",t:"CSS colors",h:"CSS colors",i:["Colors can be names, hex codes, rgb() or hsl().","Backgrounds and text each have their own property."],et:"Different color formats",s:"All three boxes below use different formats:",c:`<style>
  div { padding: 14px; margin: 8px 0; border-radius: 8px; }
  .a { background: tomato; }
  .b { background: #8a63e8; color: white; }
  .c { background: rgb(242, 162, 114); }
</style>

<div class="a">A color name</div>
<div class="b">A hex code</div>
<div class="c">An rgb value</div>`,x:["Complete the property that sets a background color:","p { background-",": #fff1e8; }","color"]},
{id:"css-boxmodel",t:"CSS box model",h:"CSS box model",i:["Every element is a box: content, padding, border and margin.","Padding is inside the border. Margin is outside."],et:"Padding, border and margin",s:"Change the numbers to see the box grow and shrink:",c:`<style>
  .box {
    background: #efe9ff;
    padding: 20px;
    border: 4px solid #8a63e8;
    margin: 30px;
  }
</style>

<div class="box">I am a box.</div>`,x:["Which property adds space inside an element’s border?","div { ",": 20px; }","padding"]},
{id:"css-fonts",t:"CSS fonts",h:"CSS fonts",i:["Fonts set the voice of your page.","Use font-family, font-size and font-weight."],et:"Text styling",s:"Try changing the size and weight:",c:`<style>
  h2 { font-family: Georgia, serif; font-size: 32px; }
  p { font-family: sans-serif; font-size: 18px; font-weight: bold; }
</style>

<h2>A serif heading</h2>
<p>A bold sans-serif paragraph.</p>`,x:["Complete the property that sets text size:","p { font-",": 18px; }","size"]},

{
  id:"css-flexbox",
  t:"CSS flexbox",
  h:"CSS flexbox",
  i:[
    "Flexbox is a CSS layout system used to arrange elements in rows or columns.",
    "display: flex activates Flexbox on a parent container.",
    "justify-content aligns items along the main axis.",
    "align-items aligns items along the cross axis.",
    "flex-direction controls whether items are arranged in a row or column."
  ],
  et:"Understanding Flexbox Alignment",
  s:"Explore the different Flexbox properties used to position and arrange elements:",
  c:`<style>
  .demo {
    display: flex;
    gap: 8px;
    height: 65px;
    margin: 8px 0;
    padding: 8px;
    background: #eee8ff;
    border-radius: 8px;
  }

  .demo div {
    background: #8a63e8;
    color: white;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
  }

  .right {
    justify-content: flex-end;
  }

  .center {
    justify-content: center;
  }

  .around {
    justify-content: space-around;
  }

  .bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .column {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 140px;
  }

  .reverse {
    flex-direction: row-reverse;
  }
</style>

<h3>1. justify-content: flex-end</h3>
<div class="demo right">
  <div>1</div>
  <div>2</div>
</div>

<h3>2. justify-content: center</h3>
<div class="demo center">
  <div>1</div>
  <div>2</div>
</div>

<h3>3. justify-content: space-around</h3>
<div class="demo around">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<h3>4. align-items: flex-end</h3>
<div class="demo bottom">
  <div>1</div>
</div>

<h3>5. flex-direction: column</h3>
<div class="demo column">
  <div>1</div>
  <div>2</div>
</div>

<h3>6. flex-direction: row-reverse</h3>
<div class="demo reverse">
  <div>1</div>
  <div>2</div>
</div>`,
  x:[
    "Which CSS property changes the direction of Flexbox items?",
    "div { ",
    ": column; }",
    "flex-direction"
  ]
},

{id:"css-grid",t:"CSS grid",h:"CSS grid",i:["Grid lays out items in rows and columns.","You decide how many columns and how wide."],et:"A two-column grid",s:"Change 1fr 1fr to 2fr 1fr:",c:`<style>
  .g { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .g div { background: #f2a272; padding: 20px; border-radius: 10px; }
</style>

<div class="g">
  <div>A</div><div>B</div>
  <div>C</div><div>D</div>
</div>`,x:["Which value turns on grid layout?","div { display: ","; grid-template-columns: 1fr 1fr; }","grid"]},
{id:"css-responsive",t:"CSS responsive",h:"CSS responsive design",i:["Responsive pages look good on every screen size.","Media queries apply styles only when a condition is true."],et:"A media query",s:"Make the preview narrow (Mobile view) and the background changes:",c:`<style>
  body { background: #efe9ff; padding: 20px; font-family: sans-serif; }
  @media (max-width: 600px) {
    body { background: #fff1e8; }
  }
</style>

<h2>Resize me</h2>
<p>I turn peach on small screens.</p>`,x:["Which keyword starts a media query?","",") { body { background: pink; } }","@media"]}
],

/* ---------- JavaScript tutorial ---------- */
js: [
{id:"js-home",t:"JS home",h:"JavaScript tutorial",i:["JavaScript makes web pages interactive.","It runs right in the browser, no setup needed."],et:"Your first script",s:"Click the button, then change the message in the code:",c:`<button id="btn">Click me</button>
<p id="out"></p>

<script>
  document.getElementById("btn").onclick = function () {
    document.getElementById("out").textContent = "Hello, JavaScript!";
  };
</script>`,x:["Fill in the event attribute that runs code on click:","<button ","=\"alert('Hi')\">Click</button>","onclick"]},
{id:"js-variables",t:"JS variables",h:"JavaScript variables",i:["Variables store values so you can use them later.","Use let for values that change and const for values that don’t."],et:"let and const",s:"Change the numbers and press Run:",c:`<p id="out"></p>
<script>
  let score = 10;
  const bonus = 5;
  score = score + bonus;
  document.getElementById("out").textContent = "Score: " + score;
</script>`,x:["Which keyword declares a changeable variable?",""," score = 10;","let"]},
{id:"js-functions",t:"JS functions",h:"JavaScript functions",i:["A function is a reusable block of code.","You define it once and call it as often as you like."],et:"Define and call",s:"The function runs each time it is called:",c:`<p id="out"></p>
<script>
  function greet(name) {
    return "Hi, " + name + "!";
  }
  document.getElementById("out").textContent = greet("Sam") + " " + greet("Alex");
</script>`,x:["Which keyword defines a function?",""," greet() { return 'Hi'; }","function"]},
{id:"js-conditions",t:"JS conditions",h:"JavaScript conditions",i:["Conditions let your code make decisions.","Use if, else if and else."],et:"if and else",s:"Change age to 12 and see the result flip:",c:`<p id="out"></p>
<script>
  let age = 20;
  let msg;
  if (age >= 18) {
    msg = "Adult";
  } else {
    msg = "Minor";
  }
  document.getElementById("out").textContent = msg;
</script>`,x:["Which keyword starts a condition?",""," (age >= 18) { go(); }","if"]},
{id:"js-loops",t:"JS loops",h:"JavaScript loops",i:["Loops repeat code without copy and paste.","A for loop counts from a start to an end."],et:"A for loop",s:"Change 5 to 10 to count higher:",c:`<p id="out"></p>
<script>
  let text = "";
  for (let i = 1; i <= 5; i++) {
    text += i + " ";
  }
  document.getElementById("out").textContent = text;
</script>`,x:["Which symbol means “less than”?","for (let i = 0; i "," 5; i++) { }","<"]},
{id:"js-arrays",t:"JS arrays",h:"JavaScript arrays",i:["An array holds a list of values.","Items are numbered from 0."],et:"Working with arrays",s:"push adds an item to the end:",c:`<p id="out"></p>
<script>
  const fruits = ["apple", "banana"];
  fruits.push("kiwi");
  document.getElementById("out").textContent =
    fruits.length + " fruits: " + fruits.join(", ");
</script>`,x:["Which method adds an item to the end of an array?","fruits.","('kiwi');","push"]},
{id:"js-dom",t:"JS DOM",h:"JavaScript DOM",i:["The DOM is the page, seen as objects your code can change.","You can find an element and update its text, style or class."],et:"Change the page",s:"Find an element by id, then change it:",c:`<h2 id="title">Old title</h2>
<script>
  const t = document.getElementById("title");
  t.textContent = "New title!";
  t.style.color = "#8a63e8";
</script>`,x:["Which method finds an element by its id?","document.","('title').textContent = 'Hi';","getElementById"]},
{id:"js-events",t:"JS events",h:"JavaScript events",i:["Events are things that happen: clicks, keys, scrolls.","You listen for them and run code in response."],et:"Listen for a click",s:"Each click adds one to the counter:",c:`<button id="btn">Clicked 0 times</button>
<script>
  let n = 0;
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    n++;
    btn.textContent = "Clicked " + n + " times";
  });
</script>`,x:["Which method attaches an event listener?","btn.","('click', sayHi);","addEventListener"]}
]
};

/* ===== App logic ===== */
let key = "html", L = DATA.html;
const locate = id => { for (const k in DATA) { const i = DATA[k].findIndex(l => l.id === id); if (i > -1) return [k, i] } return null };
const $ = s => document.querySelector(s), mc = $("#mc"), ll = $("#ll"), sb = $("#sb"), ov = $("#ov");
let done = {}, cur = 0, full = false;
try { done = JSON.parse(localStorage.getItem("htc-done") || "{}") } catch (e) {}
const store = (k, v) => { try { localStorage.setItem(k, v) } catch (e) {} };
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fmt = s => esc(s).replace(/&lt;(\/?[a-z0-9]+)&gt;/g, "<code>&lt;$1&gt;</code>");

function hl(c) {
  let s = esc(c);
  s = s.replace(/(&lt;!DOCTYPE[^&]*?&gt;)/gi, '<span class="tk-doc">$1</span>');
  return s.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)([^&]*?)(\/?&gt;)/g, (m, o, n, a, e) =>
    '<span class="tk-punc">' + o + '</span><span class="tk-tag">' + n + '</span>' +
    a.replace(/([\w-]+)(=)("[^"]*")/g, '<span class="tk-attr">$1</span><span class="tk-punc">$2</span><span class="tk-str">$3</span>') +
    '<span class="tk-punc">' + e + '</span>');
}

function side() {
  ll.innerHTML = L.map((l, i) => `<button class="lk ${i == cur ? "on" : ""} ${done[l.id] ? "done" : ""}" data-i="${i}"><span class="nd">${done[l.id] ? "&#10003;" : i + 1}</span>${l.t}</button>`).join("");
  const n = L.filter(l => done[l.id]).length;
  $("#pt").textContent = n + " of " + L.length + " lessons done";
  $("#pf").style.width = n / L.length * 100 + "%";
  $("#ch").style.setProperty("--p", n / L.length * 100);
  $("#chn").textContent = n + "/" + L.length;
}

function show(i, push) {
  cur = i;
  document.querySelectorAll(".tabs a").forEach(a => a.classList.toggle("on", a.dataset.k === key));
  const l = L[i], x = l.x, ok = !!done[l.id];
  if (push) location.hash = l.id;
  mc.innerHTML = `<div class="hd"><div class="k">Lesson ${i + 1} of ${L.length}</div><h1>${l.h}</h1>
<div class="nav"><button class="btn g" id="pv" ${i ? "" : "disabled"}>&#10094; Previous</button><button class="btn" id="nx" ${i < L.length - 1 ? "" : "disabled"}>Next &#10095;</button></div></div>
<div class="steps"><div class="rail" id="rl"></div>
<section class="st ok"><span class="nd">1</span><h2>Learn</h2><div class="intro">${l.i.map(t => `<p>${fmt(t)}</p>`).join("")}</div></section>
<section class="st ok"><span class="nd">2</span><h2>${l.et}</h2><p>${fmt(l.s)}</p>
<div class="ex"><div class="cw"><div class="cb"><i></i><i></i><i></i><span>${l.id}.html</span></div><div class="cp">${hl(l.c)}</div></div><button class="btn" id="try">Try it yourself &raquo;</button></div></section>
<section class="st ${ok ? "ok" : ""}" id="s3"><span class="nd">${ok ? "&#10003;" : "3"}</span><h2>Test yourself</h2>
<div class="xb"><p style="margin:0;color:#e8e3fa">${esc(x[0])}</p><div class="in"><div class="xc">${esc(x[1])}<input id="ai" style="width:${Math.max(9, x[3].length + 2)}ch" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer">${esc(x[2])}</div><button class="btn" id="ck">Submit answer</button><div class="fb" id="fb" role="status"></div></div></div></section>

<section class="st ok">
  <span class="nd">4</span>
  <h2>Practice</h2>
  <p>Ready to apply what you learned? Play a game related to this lesson!</p>
  <a class="btn" href="games.html?lesson=${encodeURIComponent(l.id)}">
    Practice This Lesson &raquo;
  </a>
</section>
</div>`;
  $("#rl").style.height = ok ? "calc(100% - 16px)" : "58%";
  $("#pv").onclick = () => show(i - 1, 1);
  $("#nx").onclick = () => show(i + 1, 1);
  $("#try").onclick = () => openM(l.c);
  const chk = () => {
    const a = $("#ai"), f = $("#fb"), v = a.value.trim(), good = v.toLowerCase() === x[3].toLowerCase();
    a.className = good ? "ok" : "no";
    if (good) {
      f.style.color = "var(--ok)";
      f.textContent = "Correct! Lesson complete.";
      done[l.id] = 1;
      store("htc-done", JSON.stringify(done));
      side();
      $("#s3").classList.add("ok");
      $("#s3 .nd").innerHTML = "&#10003;";
      $("#rl").style.height = "calc(100% - 16px)";
    } else {
      f.style.color = "var(--bad)";
      f.textContent = "Not quite. Try again!";
    }
  };
  $("#ck").onclick = chk;
  $("#ai").onkeydown = e => { if (e.key === "Enter") chk() };
  side(); closeS(); scrollTo(0, 0);
  document.title = l.h + " | HowtoCode";
}

function closeS() {
  sb.classList.remove("open");
  ov.classList.remove("open");
  document.body.classList.remove("ns");
}

/* "Try it yourself" popup */
function openM(code) {
  $("#ci").value = code;
  $("#lo").srcdoc = code;
  $("#md").classList.add("open");
  document.body.classList.add("ns");
}

$("#ci").onkeydown = e => {
  const t = e.target;
  if (e.key === "Tab") { e.preventDefault(); t.setRangeText("  ", t.selectionStart, t.selectionEnd, "end") }
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") $("#run").click();
};
$("#run").onclick = () => { $("#lo").srcdoc = $("#ci").value };
$("#cl").onclick = () => { $("#md").classList.remove("open"); document.body.classList.remove("ns") };
$("#vd").onclick = () => { $("#lo").classList.remove("mob"); $("#vd").classList.add("on"); $("#vm").classList.remove("on") };
$("#vm").onclick = () => { $("#lo").classList.add("mob"); $("#vm").classList.add("on"); $("#vd").classList.remove("on") };
$("#vf").onclick = () => {
  full = !full;
  $("#ep").style.display = full ? "none" : "flex";
  $("#vf").classList.toggle("on", full);
  $("#vf").innerHTML = full ? "&#10529; Split" : "&#10530; Full";
};

ll.onclick = e => { const b = e.target.closest(".lk"); if (b) show(+b.dataset.i, 1) };
$("#mtg").onclick = () => {
  if (innerWidth <= 820) { sb.classList.toggle("open"); ov.classList.toggle("open"); document.body.classList.toggle("ns") }
  else sb.classList.toggle("hide");
};
ov.onclick = closeS;
$("#th").onclick = () => {
  const r = document.documentElement;
  r.dataset.theme = getComputedStyle(r).colorScheme === "dark" ? "light" : "dark";
};
addEventListener("hashchange", () => {
  const f = locate(location.hash.slice(1));
  if (f && (f[0] !== key || f[1] !== cur)) { key = f[0]; L = DATA[key]; show(f[1]) }
});
addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#pg").style.width = scrollY / (h.scrollHeight - innerHeight || 1) * 100 + "%";
}, { passive: true });

const f0 = locate(location.hash.slice(1));
if (f0) { key = f0[0]; L = DATA[key] }
show(f0 ? f0[1] : 0);

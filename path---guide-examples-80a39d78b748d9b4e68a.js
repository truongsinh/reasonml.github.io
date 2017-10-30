webpackJsonp([49],{"./node_modules/json-loader/index.js!./.cache/json/guide-examples.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}}]},file:{relativePath:"guide/examples.md",childMarkdownRemark:{html:'<p>An example is worth a thousand words.</p>\n<p>This section is dedicated to newcomers trying to figure out general idioms &#x26; conventions in Reason and BuckleScript. If you\'re a beginner who\'s got a good idea for an example, please suggest an edit!</p>\n<h3 id="using-the-option-type"><a href="#using-the-option-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using the <code>option</code> type</h3>\n<p><code>option</code> is a <a href="/guide/language/variant">variant</a> that comes with the <a href="/api/index.html">standard library</a>. It obviates the need for null values in other languages.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> possiblyNullValue1 = <span class="hljs-type">None</span>;\n<span class="hljs-keyword">let</span> possiblyNullValue2: option(string) = <span class="hljs-type">Some</span>(<span class="hljs-string">"Hello@"</span>);\n\n<span class="hljs-keyword">switch</span> possiblyNullValue2 {\n| <span class="hljs-type">None</span> =&gt; print_endline(<span class="hljs-string">"Nothing to see here."</span>)\n| <span class="hljs-type">Some</span>(message) =&gt; print_endline(message)\n};</code></pre>\n      </div>\n<h3 id="creating-a-parametrized-type"><a href="#creating-a-parametrized-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a parametrized type</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> universityStudent = {gpa: float};\n\n<span class="hljs-keyword">type</span> response(\'studentType) = {\n  status: int,\n  student: \'studentType\n};\n\n<span class="hljs-keyword">let</span> result: response(universityStudent) = fetchDataFromServer();</code></pre>\n      </div>\n<h3 id="creating-a-js-object"><a href="#creating-a-js-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a JS Object</h3>\n<p>Assuming you\'re <a href="/guide/javascript">compiling to JS</a>, of course.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> obj1 = {\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"John"</span>,\n  <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>\n};\n<span class="hljs-comment">/* Compiles to a JS object that looks exactly like what you\'re seeing */</span></code></pre>\n      </div>\n<p>Note that the above isn\'t a record; the keys are quoted in string. That\'s Reason syntax sugar for <a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">bs.obj</a>. The type is inferred. Next example explicitly types it.</p>\n<h3 id="typing-a-js-object"><a href="#typing-a-js-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Typing a JS Object</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload = {.\n  <span class="hljs-string">"name"</span>: string,\n  <span class="hljs-string">"age"</span>: int\n};\n\n<span class="hljs-keyword">let</span> obj1: payload = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"John"</span>, <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>};</code></pre>\n      </div>\n<p>Note that <code>{. name: string, age: int}</code> is the syntax for a Reason/OCaml object type declaration (not a record!). It\'s lifted into <code>Js.t</code> so that BuckleScript sees the whole type and compiles it correctly to a regular JavaScript object. Ordinary, non-lifted OCaml objects are compiled into something else (rarely needed currently).</p>\n<h3 id="binding-to-a-js-module-with-default-export"><a href="#binding-to-a-js-module-with-default-export" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Binding to a JS Module with Default Export</h3>\n<p>Assuming the module\'s called <code>store.js</code>, and has a default export, plus a method called <code>getDate</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> store = {. <span class="hljs-string">"getDate"</span>: [@bs.meth] (unit =&gt; float)};\n[@bs.<span class="hljs-keyword">module</span>] external store : store = <span class="hljs-string">"./store"</span>;\n\n<span class="hljs-type">Js</span>.log(store);\n<span class="hljs-type">Js</span>.log(store##getDate());</code></pre>\n      </div>\n<h3 id="checking-for-js-nullable-types-using-the-option-type"><a href="#checking-for-js-nullable-types-using-the-option-type" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Checking for JS nullable types using the <code>option</code> type</h3>\n<p>For a function whose argument is passed a JavaScript value that\'s potentially <code>null</code> or <code>undefined</code>, it\'s idiomatic to convert it to a Reason <code>option</code>. The conversion is done through the helper functions in Bucklescript\'s <a href="http://bucklescript.github.io/bucklescript/api/Js.html#TYPEnullable"><code>Js.Nullable</code></a> module. In this case, <code>to_opt</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetByName = (possiblyNullName) =&gt; {\n  <span class="hljs-keyword">let</span> optionName = <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt(possiblyNullName);\n  <span class="hljs-keyword">switch</span> optionName {\n  | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">"Hi"</span>\n  | <span class="hljs-type">Some</span>(name) =&gt; <span class="hljs-string">"Hello "</span> ++ name\n  }\n};</code></pre>\n      </div>\n<p>This check compiles to <code>possiblyNullName == null</code> in JS, so checks for the presence of <code>null</code> or <code>undefined</code>.</p>',frontmatter:{title:"Examples"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/examples.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-examples-80a39d78b748d9b4e68a.js.map
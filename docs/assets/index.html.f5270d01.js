import{c as n}from"./app.87b1cd2a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u5728\u6211\u4EEC\u7684web\u5E94\u7528\u5F00\u53D1\u4E2D\uFF0CHTML\u6807\u7B7E\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u57FA\u7840\u7684\u5E94\u7528\u548C\u4EA4\u4E92\uFF0C\u6211\u4EEC\u4F7F\u7528HTML\u6807\u7B7E\u6784\u5EFA\u4E86\u5404\u79CD\u5404\u6837\u4E30\u5BCC\u7684web\u5E94\u7528\u3002</p><p>\u7136\u800C\u5728\u6211\u4EEC\u5F00\u53D1web\u5E94\u7528\u7684\u8FC7\u7A0B\u4E2D\uFF0Chtml\u6807\u7B7E\u63D0\u4F9B\u7684\u8BED\u4E49\u5316\u5E76\u4E0D\u80FD\u5B8C\u5168\u6EE1\u8DB3\u6211\u4EEC\u7684\u573A\u666F\u3002\u867D\u7136\u5728HTML5\u6807\u51C6\u4E2D\uFF0C\u4E5F\u589E\u52A0\u4E86\u4E0D\u5C11\u5305\u62EC<code>&lt;header&gt;</code>\u3001<code>&lt;section&gt;</code>\u3001<code>&lt;article&gt;</code>\u3001<code>&lt;nav&gt;</code>\u3001<code>&lt;container&gt;</code>\u3001<code>&lt;footer&gt;</code>\u7B49\u8BED\u4E49\u5316\u6807\u7B7E\uFF0C\u4F46\u5B83\u4EEC\u4E3B\u8981\u662F\u4E3A\u5185\u5BB9\u6216\u5E03\u5C40\u6DFB\u52A0\u7684\u901A\u7528\u8BED\u4E49\u5316\u6807\u7B7E\uFF0C\u5728\u5B9E\u9645\u7684\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4F7F\u7528 <code>class</code> \u7B49\u4E00\u4E9B\u5C5E\u6027\u6216\u8005\u8F85\u52A9\u8BF4\u660E\uFF0C\u58F0\u660E\u8BE5\u6807\u7B7E\u7684\u5177\u4F53\u8BED\u4E49\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u53EF\u4EE5\u8FD9\u4E48\u505A\u5462\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>login</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>login</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u66F4\u52A0\u8BED\u4E49\u5316\u7684\u6807\u7B7E\uFF0C\u6EE1\u8DB3\u6211\u4EEC\u5404\u79CD\u573A\u666F\uFF0C\u751A\u81F3\u662F\u6269\u5C55\u5DF2\u6709\u6807\u7B7E\u7684\u7279\u6027\u3002\u90A3\u4E48\u6211\u4EEC\u8BE5\u600E\u4E48\u505A\u5462\uFF1F</p><p>\u63A5\u4E0B\u6765\u662F\u6211\u4EEC\u7684\u4E3B\u89D2\uFF1A <strong><a href="http://w3c.github.io/webcomponents/spec/custom/" target="_blank" rel="noopener noreferrer">\u81EA\u5B9A\u4E49\u5143\u7D20\uFF08custom Elements\uFF09</a></strong></p><h3 id="\u81EA\u5B9A\u4E49\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5143\u7D20" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5143\u7D20</h3><blockquote><p>\u81EA\u5B9A\u4E49\u5143\u7D20\u80FD\u591F\u5E2E\u52A9web\u5F00\u53D1\u8005\u521B\u5EFA\u62E5\u6709\u81EA\u8EAB\u7279\u6027\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E\u3002</p></blockquote><h3 id="\u521B\u5EFA\u81EA\u5B9A\u4E49\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u81EA\u5B9A\u4E49\u5143\u7D20" aria-hidden="true">#</a> \u521B\u5EFA\u81EA\u5B9A\u4E49\u5143\u7D20</h3><p><em>\u521B\u5EFA\u81EA\u5B9A\u4E49\u5143\u7D20\u6709\u4E24\u79CD\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u53EA\u8BA8\u8BBA <strong>DOM LEVEL 3</strong> \u63D0\u4F9B\u7684 <code>customElements</code>\uFF0C\u5728 <strong>DOM LEVEL 2</strong> \u4E2D\u7684 <code>document.registerElement</code> \u5C06\u4F5C\u4E3A\u8865\u5145\u5185\u5BB9\u5728\u672C\u6587\u6700\u540E\u8865\u5145\u3002</em></p><p><a href="http://w3c.github.io/webcomponents/spec/custom/" target="_blank" rel="noopener noreferrer">Custom Element API \u89C4\u8303</a> \u5B9A\u4E49\u4E86<code>customElements</code>\u4F5C\u4E3A\u7EDF\u4E00\u7684\u5BF9\u8C61\u7BA1\u7406\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u5E76\u5BF9ES6 class\u63D0\u4F9B\u4E86\u66F4\u5B8C\u5584\u7684\u652F\u6301\u3002</p><blockquote><p>\u89C4\u8303\u8FD8\u5B9A\u4E49\u4E86 <code>CustomElementRegistry</code>, \u5E76\u4E14 <code>customElements instanceof CustomElementRegistry</code>\u3002</p></blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>customElements.define()</code> \u65B9\u6CD5\u6765\u6CE8\u518C\u4E00\u4E2Acustom element\uFF0C\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4EE5\u4E0B\u53C2\u6570\uFF1A <code>customElements.define(tarName, class[, option])</code></p><ul><li><code>tarName</code>: <code>DOMString</code>\uFF0C\u7528\u4E8E\u8868\u793A\u6240\u521B\u5EFA\u7684\u5143\u7D20\u540D\u79F0\u3002\u540D\u79F0\u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\uFF0C\u4E14\u5FC5\u987B\u5305\u542B\u81F3\u5C11\u4E00\u4E2A<code>-</code>\uFF0C\u4EFB\u4F55\u4E0D\u542B<code>-</code>\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E\u90FD\u4F1A\u5BFC\u81F4\u9519\u8BEF\u3002\u4F8B\u5982<code>my-tag</code>,<code>my-list-item</code>\u4E3A\u5408\u6CD5\u6807\u7B7E\uFF0C<code>my_tag</code>,<code>myTag</code>\u90FD\u662F\u975E\u6CD5\u7684\u81EA\u5B9A\u4E49\u6807\u7B7E\u540D\u79F0\uFF1B</li><li><code>class</code>: \u7C7B\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B9A\u4E49\u5143\u7D20\u884C\u4E3A.</li><li><code>option</code>: \u5305\u542B <code>extends</code> \u5C5E\u6027\u7684\u914D\u7F6E\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6240\u521B\u5EFA\u7684\u5143\u7D20\u7EE7\u627F\u81EA\u90A3\u4E2A\u5185\u7F6E\u5143\u7D20\uFF0C\u53EF\u4EE5\u7EE7\u627F\u4EFB\u4F55\u5185\u7F6E\u5143\u7D20\uFF1B</li></ul><p><code>customElements</code>\u7684\u7C7B\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7 ES 2015\u7684\u7C7B\u8BED\u6CD5\u5B9A\u4E49\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyTag</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&quot;my-tag&quot;</span><span class="token punctuation">,</span> MyTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\u7684\u751F\u547D\u5468\u671F\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\u7684\u751F\u547D\u5468\u671F\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> \u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\u7684\u751F\u547D\u5468\u671F\u56DE\u8C03\u51FD\u6570</h3><p>\u5728<code>customElements</code>\u7684\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u4E0D\u540C\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4ED6\u4EEC\u4F1A\u5728\u4E0D\u540C\u7684\u58F0\u660E\u5468\u671F\u88AB\u89E6\u53D1\u3002</p><ul><li><code>connectedCallback</code>: \u5143\u7D20\u9996\u6B21\u63D2\u5165\u5230\u6587\u6863DOM\u65F6\u56DE\u8C03\uFF1B</li><li><code>discannectedCallback</code>: \u5143\u7D20\u4ECE\u6587\u6863DOM\u4E2D\u5220\u9664\u65F6\u56DE\u8C03\uFF1B</li><li><code>attributeChangedCallback</code>\uFF1A \u5143\u7D20\u589E\u52A0\u3001\u5220\u9664\u3001\u4FEE\u6539\u81EA\u8EAB\u5C5E\u6027\u65F6\u56DE\u8C03\uFF1B</li><li><code>adoptedCallback</code>\uFF1A\u5143\u7D20\u88AB\u79FB\u52A8\u5230\u65B0\u7684\u6587\u6863\u65F6\u56DE\u8C03\uFF1B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyCustom</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u5143\u7D20\u5F00\u59CB\u63D0\u5347\u65F6\u8C03\u7528</span>
    <span class="token comment">// \u5143\u7D20\u63D0\u5347\u5E76\u4E0D\u8BF4\u660E\u5143\u7D20\u5DF2\u63D2\u5165\u5230\u6587\u6863\u4E2D</span>
    <span class="token comment">// \u5728\u6B64\u9636\u6BB5\u5C3D\u91CF\u907F\u514D\u8FDB\u884CDOM\u64CD\u4F5C</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5143\u7D20\u63D2\u5165\u5230\u6587\u6863\u65F6\u56DE\u8C03</span>
    <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5143\u7D20\u4ECE\u6587\u6863\u4E2D\u5220\u9664\u65F6\u56DE\u8C03</span>
    <span class="token function">discannectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
     * \u5143\u7D20\u5C5E\u6027\u53D8\u5316\u56DE\u8C03
     * @param name {string} \u53D8\u5316\u7684\u5C5E\u6027\u540D
     * @param oldValue {any} \u53D8\u5316\u524D\u7684\u503C
     * @param newVlalue {any} \u53D8\u5316\u540E\u7684\u503C
     */</span>
    <span class="token function">attributeChangedCallback</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5143\u7D20\u88AB\u79FB\u52A8\u5230\u65B0\u7684\u6587\u6863\u4E2D\u65F6\u8C03\u7528</span>
    <span class="token comment">// \uFF08When it is adopted into a new document, its adoptedCallback is run.\uFF09</span>
    <span class="token comment">// \u5177\u4F53\u573A\u666F\u793A\u4F8B\uFF1A\u901A\u8FC7document.adoptNode\u65B9\u6CD5\u4FEE\u6539\u5143\u7D20ownerDocument\u5C5E\u6027\u65F6\b\u53EF\u4EE5\u89E6\u53D1</span>
    <span class="token function">adoptedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u5982\u679C\u9700\u8981\u5728\u5143\u7D20\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u540E\u89E6\u53D1 <code>attributeChangedCallback</code>\uFF0C\u5C31\u5FC5\u987B\u76D1\u542C\u8FD9\u4E9B\u5C5E\u6027\u3002 \u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49\u9759\u6001\u5C5E\u6027<code>observedAttributed</code>\u7684 get\u51FD\u6570\u6765\u6DFB\u52A0\u9700\u8981\u76D1\u542C\u7684\u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">observedAttributed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20" aria-hidden="true">#</a> \u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20</h3><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u6587\u6863\u7684\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528<code>customElements.define</code>\u6CE8\u518C\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u5373\u4F7F\u662F\u5728\u81EA\u5B9A\u4E49\u5143\u7D20\u6CE8\u518C\u4E4B\u524D\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-tag</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-tag</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6216\u8005\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyTag</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&quot;my-tag&quot;</span><span class="token punctuation">,</span> MyTag<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E00\uFF1A</span>
<span class="token keyword">var</span> tag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;my-tag&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1A</span>
<span class="token keyword">var</span> tag <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u5143\u7D20\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u5143\u7D20\u63D0\u5347" aria-hidden="true">#</a> \u5143\u7D20\u63D0\u5347</h3><p>\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u89E3\u6790\u975E\u6807\u51C6\u7684\u6807\u7B7E\u7684\uFF1F\u4E3A\u4EC0\u4E48\u5BF9\u975E\u6807\u51C6\u7684\u6807\u7B7E\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u62A5\u9519\uFF1F</p><blockquote><p>HTML\u89C4\u8303\uFF1A<br> \u975E\u89C4\u8303\u5B9A\u4E49\u7684\u5143\u7D20\u5FC5\u987B\u4F7F\u7528 <em>HTMLUnknownElement</em> \u63A5\u53E3\u3002</p></blockquote><p>\u6211\u4EEC\u5728\u9875\u9762\u4E2D\u58F0\u660E\u4E00\u4E2A <code>&lt;myTag&gt;</code>\u6807\u7B7E\uFF0C\u7531\u4E8E\u5B83\u662F\u975E\u6807\u51C6\u6807\u7B7E\uFF0C\u6240\u4EE5\u4F1A\u7EE7\u627F <code>HTMLUnknownElement</code>\u3002</p><p>\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u60C5\u51B5\u6709\u6240\u4E0D\u540C\u3002 \u62E5\u6709\u5408\u6CD5\u5143\u7D20\u540D\u79F0\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u7EE7\u627F\u81EA<code>HTMLElement</code>\u3002<br> \u5BF9\u4E8E\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u5143\u7D20\u7684\u6D4F\u89C8\u5668\uFF0C\u62E5\u6709\u5408\u6CD5\u5143\u7D20\u540D\u79F0\u7684\u6807\u7B7E\uFF0C\u4ECD\u7136\u7EE7\u627F<code>HTMLUnknownElement</code>\u3002</p><h3 id="\u6269\u5C55\u5185\u7F6E\u5143\u7D20\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u5185\u7F6E\u5143\u7D20\u7279\u6027" aria-hidden="true">#</a> \u6269\u5C55\u5185\u7F6E\u5143\u7D20\u7279\u6027</h3><p>\u5728\u521B\u5EFA\u81EA\u5B9A\u4E49\u5143\u7D20\u65F6\uFF0C\u7F6E\u9876\u6240\u9700\u7684\u6269\u5C55\u7684\u5143\u7D20\uFF0C\u4F7F\u7528\u65F6\uFF0C\u5728\u5185\u7F6E\u5143\u7D20\u4E0A\u58F0\u660E<code>is</code>\u5C5E\u6027\u6307\u5B9A\u81EA\u5B9A\u4E49\u5143\u7D20\u540D\u79F0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CustomButton</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLButtonElement</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&quot;custom-button&quot;</span><span class="token punctuation">,</span> CustomButton<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49\u5143\u7D20\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5143\u7D20\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5143\u7D20\u6837\u5F0F</h3><p>\u81EA\u5B9A\u4E49\u5143\u7D20\u548C\u5185\u7F6E\u5143\u7D20\u4E00\u6837\uFF0C\u53EF\u4EE5\u4F7F\u7528CSS\u5404\u7C7B\u9009\u62E9\u5668\u5B9A\u4E49\u6837\u5F0F\u3002</p><p>\u81EA\u5B9A\u4E49\u5143\u7D20\u89C4\u8303\u8FD8\u63D0\u51FA\u4E86\u4E00\u4E2A\u65B0\u7684CSS\u4F2A\u7C7B<code>:unresolved</code>\u3002\u5728\u6D4F\u89C8\u5668\u8C03\u7528\u4F60\u7684<code>createdCallback()</code> \u4E4B\u524D\uFF0C\u8FD9\u4E2A\u4F2A\u7C7B\u53EF\u4EE5\u5339\u914D\u5230\u672A\u5B8C\u6210\u5143\u7D20\u63D0\u5347\u7684\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">custom-button</span><span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 300ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">custom-button:unresolved</span><span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>:unresolved \u4E0D\u80FD\u7528\u4E8E\u7EE7\u627F\u81EAHTMLUnkownElement\u7684\u5143\u7D20\u3002</p></blockquote><h3 id="\u6D4F\u89C8\u5668\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u652F\u6301" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u652F\u6301</h3><p><code>Chrome</code>\u548C<code>Opera</code>\u9ED8\u8BA4\u652F\u6301custom elements\u3002<code>Firefox</code>\u8BA1\u5212\u572860/61\u7684\u7248\u672C\u4E2D\u9ED8\u8BA4\u652F\u6301\u81EA\u5B9A\u4E49\u5143\u7D20\u3002<code>Safair</code>\u76EE\u524D\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u5143\u7D20\u5BF9\u5185\u7F6E\u5143\u7D20\u7684\u6269\u5C55\u3002<code>Edge</code>\u5728\u5B9E\u73B0\u4E2D\u3002</p><h3 id="\u8865\u5145\u5185\u5BB9-document-registerelement" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145\u5185\u5BB9-document-registerelement" aria-hidden="true">#</a> \u8865\u5145\u5185\u5BB9\uFF1A<code>document.registerElement</code></h3><p>\u4F7F\u7528<code>document.registerElement()</code> \u521B\u5EFA\u81EA\u5B9A\u4E49\u5143\u7D20</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> MyTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">&#39;my-tag&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5143\u7D20\u7279\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
proto<span class="token punctuation">.</span>hello <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
proto<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> MyTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">&#39;my-tag&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prototype</span><span class="token operator">:</span> proto
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6269\u5C55\u539F\u751F\u5143\u7D20\u7279\u6027</p><p><code>document.registerElement()</code> \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8FD8\u5141\u8BB8\u6211\u4EEC\u4E3A\u6269\u5C55\u539F\u751F\u7D20\u7684\u7279\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> MyButton <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">&#39;my-button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prototpye</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLButtonElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u751F\u547D\u5468\u671F\u4EE5\u53CA\u56DE\u8C03\u65B9\u6CD5</p><ol><li>createdCallback(): \u5143\u7D20\u521B\u5EFA\u540E\u56DE\u8C03\u3002</li><li>attachCallback(): \u5143\u7D20\u9644\u52A0\u5230\u6587\u6863\u540E\u8C03\u7528\u3002</li><li>detachCallback(): \u5143\u7D20\u4ECE\u6587\u6863\u79FB\u9664\u540E\u8C03\u7528\u3002</li><li>attributeChangedCallback(): \u5143\u7D20\u4EFB\u610F\u5C5E\u6027\u53D8\u5316\u540E\u8C03\u7528\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myTagProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">HTMLElement</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

myTagProto<span class="token punctuation">.</span><span class="token function-variable function">createdCallback</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5143\u7D20\u521B\u5EFA\u540E\u56DE\u8C03\u3002</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">&#39;\u6211\u88AB\u521B\u5EFA\u4E86&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> MyTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">registerElement</span><span class="token punctuation">(</span><span class="token string">&#39;my-tag&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prototype</span><span class="token operator">:</span> myTagProto
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a> \u7ED3\u8BED</h3><p>\u81EA\u5B9A\u4E49\u5143\u7D20\u4F5C\u4E3A <code>webComponent</code> \u89C4\u8303\u4E2D\u7684\u4E00\u90E8\u5206\uFF0C\u4E3Aweb\u5E94\u7528\u5F00\u53D1\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u53EF\u80FD\u6027\uFF0C\u914D\u5408<code>webComponent</code> \u89C4\u8303\u7684\u5176\u4ED6\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4E3Aweb\u5F00\u53D1\u8005\u63D0\u4F9B\u66F4\u5F3A\u5927\u7684\u80FD\u529B\u3002</p>`,58);function t(p,c){return e}var u=s(a,[["render",t]]);export{u as default};

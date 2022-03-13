import{c as n}from"./app.87b1cd2a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/images/jenkins_globalconfig.png";const e={},i=n(`<p><a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer">Jenkins</a> \u662F\u4E00\u6B3E\u529F\u80FD\u5F3A\u5927\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5141\u8BB8\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u4EA4\u4ED8\u9879\u76EE\u3002\u8FD9\u91CC\u8BB0\u5F55\u4E00\u4E9B Jenkins \u4F7F\u7528\u7684\u65B9\u6CD5\u3002</p><p><em>\u4EE5\u4E0B\u57FA\u4E8E <code>CentOS</code> \u7CFB\u7EDF\u3002</em></p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><p>\u5B89\u88C5\u8BE6\u89C1 \u5B98\u7F51 <a href="https://jenkins.io/download/" target="_blank" rel="noopener noreferrer">Jenkins \u5B89\u88C5</a> \u6D41\u7A0B\uFF0C\u5404\u4E2A\u7CFB\u7EDF\u5982\u4F55\u5B89\u88C5\u5747\u6709\u8BF4\u660E\u3002</p><p>\u73AF\u5883\u4F9D\u8D56\uFF1A <code>java</code></p><p>CentOS \u4E0B\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
<span class="token function">sudo</span> <span class="token function">rpm</span> --import https://pkg.jenkins.io/redhat/jenkins.io.key
yum <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>\u9ED8\u8BA4\u5B89\u88C5\u76EE\u5F55</strong> : <code>/var/lib/jenkins</code></li><li><strong>\u9ED8\u8BA4\u65E5\u5FD7\u76EE\u5F55</strong> \uFF1A<code>/var/log/jenkins</code></li><li><strong>\u9ED8\u8BA4\u7F13\u5B58\u76EE\u5F55</strong> : <code>/var/cache/jenkins</code></li><li><strong>\u9ED8\u8BA4admin\u5BC6\u7801\u6587\u4EF6</strong> : <code>/var/lib/jenkins/secrets/initialAdminPassword</code></li><li><strong>\u914D\u7F6E\u6587\u4EF6</strong> : <code>/etc/sysconfig/jenkins</code></li></ul><h3 id="\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a> \u8FD0\u884C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8 Jenkins</span>
<span class="token function">service</span> jenkins start
<span class="token comment"># \u91CD\u542F Jenkins</span>
<span class="token function">service</span> jenkins restart
<span class="token comment"># \u505C\u6B62 Jenkins</span>
<span class="token function">service</span> jenkins stop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9ED8\u8BA4\u8FD0\u884C\u5728 <code>8080</code> \u7AEF\u53E3\uFF0C \u672C\u673A\u53EF\u901A\u8FC7 <code>localhost:8080</code> \u8BBF\u95EE\u3002</p><h3 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> jenkiins stop
yum clean all
yum remove jenkins
<span class="token function">rm</span> -rf /var/lib/jenkins
<span class="token function">rm</span> -rf /var/cache/jenkins
<span class="token function">rm</span> -rf /var/log/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u4FEE\u6539\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7AEF\u53E3" aria-hidden="true">#</a> \u4FEE\u6539\u7AEF\u53E3</h3><ol><li>\u6253\u5F00<code>Jenkins</code> \u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u4FEE\u6539 <code>$HTTP_PORT</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$HTTP_PORT</span><span class="token operator">=</span><span class="token string">&quot;8080&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u83B7\u53D6root\u7528\u6237\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6root\u7528\u6237\u6743\u9650" aria-hidden="true">#</a> \u83B7\u53D6root\u7528\u6237\u6743\u9650</h3><ol><li>\u6253\u5F00<code>Jenkins</code> \u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u4FEE\u6539 <code>HTTP_PORT</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">$JENKINS_USER</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u4FEE\u6539<code>Jenkins</code> \u76F8\u5173\u76EE\u5F55\u6743\u9650</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chown</span> -R root:root /var/lib/jenkins
<span class="token function">chown</span> -R root:root /var/log/jenkins
<span class="token function">chown</span> -R root:root /var/cache/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>\u91CD\u542F<code>Jenkins</code>\u5E76\u9A8C\u8BC1</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> jenkins restart
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> jenkins
<span class="token comment"># \u82E5\u663E\u793A\u4E3Aroot\u7528\u6237\uFF0C\u5219\u8868\u793A\u4FEE\u6539\u5B8C\u6210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> \u5F00\u673A\u81EA\u542F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chkconfig</span> jenkins on
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5168\u5C40\u5DE5\u5177\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u5DE5\u5177\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u5DE5\u5177\u914D\u7F6E</h3><p>\u5168\u5C40\u5DE5\u5177\u914D\u7F6E\u53EF\u4EE5 \u914D\u7F6E\u76F8\u5173\u5DE5\u5177\u5982<code>Maven</code>\u3001<code>GIT</code>\u7B49\u5DE5\u5177\u7684\u8DEF\u5F84\u3001\u6216\u8005\u5B89\u88C5\u65B0\u7684\u4E0D\u540C\u7248\u672C\u7684\u5DE5\u5177\u3002</p><p>\u914D\u7F6E\u8BE5\u8BBE\u7F6E\u9700\u8981\u83B7\u53D6 <code>admin</code>\u6743\u9650\uFF0C\u8FDB\u5165<code>\u7CFB\u7EDF\u7BA1\u7406 &gt; \u5168\u5C40\u5DE5\u5177\u914D\u7F6E</code>\u3002</p><p>\u5982\uFF1A\u914D\u7F6E\u5168\u5C40 GIT\uFF1A</p><img src="`+a+`" class="zoom-custom-imgs" alt="\u5168\u5C40\u914D\u7F6Egit"><h3 id="\u7528\u6237\u7BA1\u7406\u4EE5\u53CA\u7528\u6237\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7BA1\u7406\u4EE5\u53CA\u7528\u6237\u6743\u9650" aria-hidden="true">#</a> \u7528\u6237\u7BA1\u7406\u4EE5\u53CA\u7528\u6237\u6743\u9650</h3><ul><li>\u4F7F\u7528<code>admin</code>\u6743\u9650\u7684\u8D26\u53F7\uFF0C\u8FDB\u5165<code>\u7CFB\u7EDF\u7BA1\u7406 &gt; \u7528\u6237\u7BA1\u7406</code>, \u53EF\u4EE5\u6DFB\u52A0/\u4FEE\u6539/\u5220\u9664 \u7528\u6237\u3002</li><li>\u8FDB\u5165<code>\u7CFB\u7EDF\u7BA1\u7406 &gt; \u5168\u5C40\u5B89\u5168\u914D\u7F6E</code> \u4E2D\uFF0C\u52FE\u9009 <strong>\u542F\u7528\u5B89\u5168</strong>\u3002\u8BBF\u95EE\u63A7\u5236\u9009\u62E9 <strong>Jenkins\u4E13\u6709\u7528\u6237\u6570\u636E\u5E93</strong>\uFF0C\u4F7F\u7528 <strong>\u9879\u76EE\u77E9\u9635\u6388\u6743\u7B56\u7565</strong>, \u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u7528\u6237\u5206\u914D\u5168\u5C40\u6743\u9650\u3002</li><li>\u8FDB\u5165\u9879\u76EE\u914D\u7F6E\u4E2D\uFF0C\u6743\u9650 <strong>\u542F\u7528\u9879\u76EE\u5B89\u5168</strong> \u53EF\u4EE5\u5355\u72EC\u4E3A\u8BE5\u9879\u76EE\u5206\u914D\u7528\u6237\u6743\u9650\u3002 \u4ECE\u800C\u786E\u4FDD\u6BCF\u4E2A\u9879\u76EE\u7684\u5B89\u5168\u6027\u3002</li></ul><h3 id="git-parameter" tabindex="-1"><a class="header-anchor" href="#git-parameter" aria-hidden="true">#</a> Git Parameter</h3><p>\u4E3A\u9879\u76EE\u6DFB\u52A0 <code>git</code>\u5206\u652F/\u6807\u7B7E\u9009\u62E9\u53C2\u6570\u6784\u5EFA\u914D\u7F6E\uFF0C\u4ECE\u800C\u65B9\u4FBF\u901A\u8FC7\u4E0D\u540C\u5206\u652F\u6784\u5EFA\u9879\u76EE\u3002</p><p>\u9879\u76EE\u914D\u7F6E\uFF1A <img class="zoom-custom-imgs" src="https://wiki.jenkins-ci.org/download/attachments/58917601/image2018-9-20_22-0-7.png?version=1&amp;modificationDate=1537473611000&amp;api=v2" alt="Git Parameter"></p><p>\u53C2\u6570\u5316\u6784\u5EFA\uFF1A <img class="zoom-custom-imgs" src="https://wiki.jenkins-ci.org/download/attachments/58917601/image2018-9-20_22-2-47.png?version=1&amp;modificationDate=1537473769000&amp;api=v2" alt="build width paramters form"></p><p>\u57FA\u7840<code>pipeline</code>\u914D\u7F6E\uFF1A</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token comment">// Using git without checkout </span>
pipeline <span class="token punctuation">{</span>
  agent any
  parameters <span class="token punctuation">{</span>
    gitParameter branchFilter<span class="token punctuation">:</span> <span class="token string">&#39;origin/(.*)&#39;</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token string">&#39;BRANCH&#39;</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">&#39;PT_BRANCH&#39;</span>
  <span class="token punctuation">}</span>
  stages <span class="token punctuation">{</span>
    <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">&#39;Example&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        git branch<span class="token punctuation">:</span> <span class="token string gstring">&quot;<span class="token expression"><span class="token punctuation">$</span><span class="token punctuation">{</span>params<span class="token punctuation">.</span>BRANCH<span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/jenkinsci/git-parameter-plugin.git&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><a href="https://plugins.jenkins.io/git-parameter" target="_blank" rel="noopener noreferrer">\u9605\u8BFB\u63D2\u4EF6\u539F\u6587\uFF08git-parameter\uFF09</a></p><h3 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h3><p>\u76F8\u5173\u5DE5\u5177\u4EE5\u53CA\u9879\u76EE\u914D\u7F6E\uFF0C\u90FD\u53EA\u662F\u5C0F\u95EE\u9898\u800C\u5DF2...</p>`,45);function o(r,t){return i}var l=s(e,[["render",o]]);export{l as default};

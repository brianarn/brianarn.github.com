---
layout: post
title: "jsFiddle plugin for Octopress"
date: 2011-08-04 21:41
comments: true
categories: code
---

In my post about [moving into Octopress][prevpost], I mused about how
difficult it might be to make a jsFiddle plugin. Turns out, it wasn't that
hard.

I've created a simple [jsFiddle][] plugin for [Octopress][]. It allows one to
easily embed a jsFiddle into their page. The syntax is pretty simple. For all
of these examples, I'll be using a fiddle of mine that demonstrates the
properties of Dojo promises.

Fiddle URL: [http://jsfiddle.net/brianarn/ccWP7/][fiddle]

Fortunately, the username isn't actually required in the URL when using the
jsFiddle iframe embed code. I'm referring to the portion identified as `ccWP7`
in my URL as the fiddle shortcode. There may be a better name for that, but if
there is, I have no idea what it is.

Anyhow, let's talk about how it works.

<!-- more -->

## General syntax:

The general syntax for usage is pretty straightforward.
{% codeblock %}
  &#123;% jsfiddle shorttag [tabs] [skin] [height] [width] %}
{% endcodeblock %}

In the case of any of the latter options, the word 'default' will ensure that
the plugin fills in the default values as defined by jsFiddle at the time of
this plugin's authoring. The defaults are as follows:

* tabs: `js,resources,html,css,result`
* skin: `light`
* height: `300px`
* width: `100%`

## Examples

### Basic Example

As the most basic use case, an example of a simple embed.

#### Syntax:
{% codeblock %}
  &#123;% jsfiddle ccWP7 %}
{% endcodeblock %}

#### Result:
{% jsfiddle ccWP7 %}


### Adjusting Tabs

It's possible to easily adjust the display order of the tabs. In this case,
I'm moving the result to be the first item shown.

#### Syntax:
{% codeblock %}
  &#123;% jsfiddle ccWP7 result,js,html,css %}
{% endcodeblock %}

#### Result
{% jsfiddle ccWP7 result,js,html,css %}

### Presentation: Skin

We can easily adjust the skin. Right now, it looks like `light` and
`presentation` are really the only supported options, but if jsFiddle
announces new options, you can start using them immediately.

#### Syntax:
{% codeblock %}
  &#123;% jsfiddle ccWP7 default presentation %}
{% endcodeblock %}

#### Result:
{% jsfiddle ccWP7 default presentation %}

### Presentation: Height/width

We can also fairly easily adjust the height and width. In this case, I'll make
it a notably taller fiddle, so that everything can be read more easily (given
that my fiddle has some write-up in the HTML with some notable output).

#### Syntax:
{% codeblock %}
  &#123;% jsfiddle ccWP7 default default 600px %}
{% endcodeblock %}

#### Result:
{% jsfiddle ccWP7 default default 600px %}

### Multiple Options at once

For each prior example, I've been changing just one piece, but nothing
prevents me from adjusting multiple at once. For example, perhaps I want
something really large for a presentation I'm giving, and I want my Results
tab first.

#### Syntax:
{% codeblock %}
  &#123;% jsfiddle ccWP7 result,js,html,css presentation 800px %}
{% endcodeblock %}

#### Result:
{% jsfiddle ccWP7 result,js,html,css presentation 800px %}

## Summary

If you haven't been using it, [jsFiddle][] really is a pretty fantastic
service. I've been trying to use it when I want to put up something simple and
quick. I love [GitHub][] as well, and gists are neat and all, but there's
something special about jsFiddle. This plugin should make it a lot easier to
simply embed a fiddle (not that copy/pasting the iframe was hard).

I've submitted a pull request to the main Octopress repo, but if you want to
grab a copy before it gets accepted (if it gets accepted), you can find it in
my GitHub fork of it
[here](https://github.com/brianarn/octopress/blob/master/plugins/jsfiddle.rb).
Here's hoping you find some use for it!

[prevpost]: http://brianarn.github.com/meta/2011/07/moving-into-octopress/
[jsFiddle]: http://jsfiddle.net
[Octopress]: http://octopress.org
[fiddle]: http://jsfiddle.net/brianarn/ccWP7/
[GitHub]: http://github.com

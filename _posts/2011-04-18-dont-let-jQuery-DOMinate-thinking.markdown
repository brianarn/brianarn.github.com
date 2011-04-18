---
layout: post
title: "Don't let jQuery DOMinate your thinking"
category: thoughts
---

For the past few years, I've been working on a side project at the [University
of New Mexico][UNM]. There's not a public-facing aspect to it that's worth
highlighting, but the administrative side is a very heavy JavaScript
application, and it didn't start that way.

There are several pages to the application, each of which is dedicated to a
major piece of functionality. As our registered user base has grown, the
amount of information that needs to be managed has grown quite a bit, and some
of my earlier pages were really starting to slow down.

When we first started building the application, we went with [jQuery][]. I'd
been writing <acronym title="JavaScript">JS</acronym> since before the
libraries and toolkits were really on the scene, and remember playing with
things like [YUI][] 1.0 and [Prototype][] in prior websites, but my
coworker/team lead was really keen on trying out this tool that was starting
to get some traction.

From a <acronym title="Computer Science">CS</acronym> perspective, at first,
jQuery's interface really bothered me. I liked that Prototype made JS feel a
lot more like C++ to me. It felt like I could build some interaction, using an
approach that felt natural and proper to me, like it was somehow "fixing" JS.
Also, let's be honest: chaining is ugly.

However, jQuery made working with the DOM *so* much easier, and Ajax work was
just dead simple (especially when cranking out JSON on the backend), so I
stuck with it.

After working in jQuery for a while, *I stopped thinking about JavaScript*. I
let jQuery kind of take over my brain. For a while, I fell really heavily in
love with it. It felt just magical. Things just worked. Working with IE wasn't
as awful (though still not great, of course).

I was quite the fan of jQuery -- and in many ways, I still am. jQuery is
really a fantastic tool for doing DOM manipulation and simple Ajax work. The
problem is, my application outgrew simple Ajax work and DOM manipulation.

As the application grew in functionality and codebase, performance really
started to sink. It was quite awful. However, I was fortunate enough to have
stumbled upon a relatively new podcast named [yayQuery][]. Listening to the yQ
crew talk about anti-patterns and hiddenhancements and such, I really grew
interested in optimization. When jQuery 1.4 came out, I was ready to take
advantage of it, and managed to take one particular page from a load time of
~12 seconds to ~3.

Over the past year, I've gone through and created a couple of new pages to
replace some of the worst offenders, and tried cleaning up here and there where
possible, but on the whole, I realized the major problem I'd run into was that
I stopped thinking about my data as data, and started thinking about it more
as DOM.

If there is one takeaway from my entire ramble here, it is this: Don't let
jQuery DOMinate your thinking. When all you have is a DOM hammer, everything
is a DOM node.

I had been creating ridiculously complex markup with a lot of hidden elements
in order to preserve data, rather than using things like `jQuery.data` to
store JS objects. I was also doing things like not saving my resulting jQuery
objects, running code like `$("#foo")` repeatedly, not thinking about the
impact of creating several new jQuery collections. It's almost embarassing to
admit that I was generating a bunch of `<li>` tags and actively adding them to
the DOM one at a time, for literally hundreds of list items, but I was.

You'll note that **not** all of the things I was doing above are jQuery's
fault.  It's just that with jQuery, I stopped thinking about JavaScript --
and, in retrospect, that was a really bad thing.

These days, I'm doing a lot with [Dojo][] and while it's not the JS panacea,
it's the first of all of the toolkits and libraries that's felt like I'm
really writing JavaScript, and not just writing something else that doesn't
feel like JS. I've grown to love JavaScript as a language for its own merits.

So, whether you're coming to this post and you're a huge jQuery fan who hasn't
tried other tools, or you're a seasoned vet with the DHTML scars to prove it
-- I encourage you, reach out and try something else. It doesn't matter what
you go for, so much as you're trying something different.

### Resources

Larger libraries/toolkits (typically cross-browser, all with rich DOM/Ajax support,
often including UI frameworks, etc):

* [Dojo][]
* [YUI][]
* [MooTools][]
* [Prototype][]

Smaller libraries (focused on specific pieces of functionality):

* [Underscore][]
* [Backbone][]
* [Zepto][]

Other reading:

* [On jQuery & Large Application][large] (the original impetus for this post)
* [jQuery's Best Friends][jqbff]
* [When you're build a non-trivial JS application...][nontriv]

[UNM]: http://www.unm.edu/
[jQuery]: http://jquery.com/
[YUI]: http://developer.yahoo.com/yui/
[Prototype]: http://prototypejs.org/
[yayQuery]: http://yayquery.com/
[Dojo]: http://www.dojotoolkit.org/
[MooTools]: http://mootools.net/
[Underscore]: http://documentcloud.github.com/underscore/
[Backbone]: http://documentcloud.github.com/backbone/
[Zepto]: http://zeptojs.com/
[large]: http://blog.rebeccamurphey.com/on-jquery-large-applications
[jqbff]: http://jquerysbestfriends.com/#slide1
[nontriv]: http://blog.rebeccamurphey.com/when-youre-building-a-non-trivial-js-applicat
